'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function DiagnosticsPage() {
  const [diagnostics, setDiagnostics] = useState<any>({})
  const [logs, setLogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    runDiagnostics()
  }, [])

  const runDiagnostics = async () => {
    const results: any = {
      browser: {
        isBrowser: typeof window !== 'undefined',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'N/A',
        language: typeof navigator !== 'undefined' ? navigator.language : 'N/A',
        platform: typeof navigator !== 'undefined' ? navigator.platform : 'N/A',
        cookiesEnabled: typeof navigator !== 'undefined' ? navigator.cookieEnabled : false,
        onLine: typeof navigator !== 'undefined' ? navigator.onLine : false,
        screenResolution: typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'N/A'
      },
      features: {
        localStorage: typeof window !== 'undefined' && 'localStorage' in window,
        sessionStorage: typeof window !== 'undefined' && 'sessionStorage' in window,
        geolocation: typeof navigator !== 'undefined' && 'geolocation' in navigator,
        notifications: typeof window !== 'undefined' && 'Notification' in window,
        share: typeof navigator !== 'undefined' && 'share' in navigator,
        clipboard: typeof navigator !== 'undefined' && 'clipboard' in navigator
      },
      environment: {
        nodeEnv: process.env.NODE_ENV,
        nextPublicUrl: process.env.NEXT_PUBLIC_URL || 'Not set',
      },
      apis: {
        rssEndpoint: false,
        notionApi: false,
        hubspotScript: false
      },
      performance: {
        memoryUsage: typeof performance !== 'undefined' && (performance as any).memory ? {
          usedJSHeapSize: Math.round((performance as any).memory.usedJSHeapSize / 1048576) + ' MB',
          totalJSHeapSize: Math.round((performance as any).memory.totalJSHeapSize / 1048576) + ' MB',
          jsHeapSizeLimit: Math.round((performance as any).memory.jsHeapSizeLimit / 1048576) + ' MB'
        } : 'Not available',
        timing: typeof performance !== 'undefined' && performance.timing ? {
          loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart + ' ms',
          domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart + ' ms'
        } : 'Not available'
      },
      errors: []
    }

    // Test API endpoints
    try {
      const rssResponse = await fetch('/api/rss-feed')
      results.apis.rssEndpoint = rssResponse.ok
    } catch (error) {
      results.apis.rssEndpoint = false
      results.errors.push({ type: 'RSS API', message: (error as Error).message })
    }

    try {
      const notionResponse = await fetch('/api/notion')
      results.apis.notionApi = notionResponse.ok
    } catch (error) {
      results.apis.notionApi = false
      results.errors.push({ type: 'Notion API', message: (error as Error).message })
    }

    // Check HubSpot script
    results.apis.hubspotScript = typeof (window as any).hbspt !== 'undefined'

    // Collect any console logs
    const consoleLogs: any[] = []
    if (typeof window !== 'undefined') {
      const originalLog = console.log
      const originalError = console.error
      const originalWarn = console.warn
      
      console.log = (...args) => {
        consoleLogs.push({ type: 'log', message: args.join(' '), timestamp: new Date().toISOString() })
        originalLog.apply(console, args)
      }
      console.error = (...args) => {
        consoleLogs.push({ type: 'error', message: args.join(' '), timestamp: new Date().toISOString() })
        originalError.apply(console, args)
      }
      console.warn = (...args) => {
        consoleLogs.push({ type: 'warn', message: args.join(' '), timestamp: new Date().toISOString() })
        originalWarn.apply(console, args)
      }
    }

    setDiagnostics(results)
    setLogs(consoleLogs)
    setLoading(false)
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading diagnostics...</p>
        </div>
      </div>
    )
  }

  const StatusIndicator = ({ status }: { status: boolean | string }) => {
    if (typeof status === 'string') return <span className="text-gray-600">{status}</span>
    return status ? (
      <span className="text-green-600">✅ OK</span>
    ) : (
      <span className="text-red-600">❌ Failed</span>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-warning-yellow via-warning-black to-warning-yellow h-2"></div>
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logos/workflo-logo-yellow.png"
                alt="Workflo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold text-gray-900">Workflo</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
                Home
              </Link>
              <Link href="/diensten" className="text-gray-700 hover:text-primary-600 font-medium">
                Diensten
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">System Diagnostics</h1>
          
          {loading ? (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600">Running diagnostics...</p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Browser Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(diagnostics.browser || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Detection */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Feature Detection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(diagnostics.features || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <StatusIndicator status={value as boolean} />
                    </div>
                  ))}
                </div>
              </div>

              {/* API Status */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">API Status</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(diagnostics.apis || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <StatusIndicator status={value as boolean} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Environment */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Environment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(diagnostics.environment || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Performance</h2>
                <div className="space-y-4">
                  {diagnostics.performance?.memoryUsage && typeof diagnostics.performance.memoryUsage === 'object' && (
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Memory Usage</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.entries(diagnostics.performance.memoryUsage).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600">{key}:</span>
                            <span className="font-medium">{String(value)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Errors */}
              {diagnostics.errors && diagnostics.errors.length > 0 && (
                <div className="bg-red-50 rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-red-900 mb-4">Errors Detected</h2>
                  <div className="space-y-2">
                    {diagnostics.errors.map((error: any, index: number) => (
                      <div key={index} className="bg-red-100 rounded p-3">
                        <span className="font-semibold text-red-800">{error.type}:</span>
                        <span className="text-red-700 ml-2">{error.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Console Logs */}
              {logs.length > 0 && (
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Console Logs</h2>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {logs.map((log, index) => (
                      <div key={index} className={`p-2 rounded ${
                        log.type === 'error' ? 'bg-red-100 text-red-800' :
                        log.type === 'warn' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-white text-gray-700'
                      }`}>
                        <span className="font-mono text-xs">[{log.timestamp}]</span>
                        <span className={`ml-2 font-semibold ${
                          log.type === 'error' ? 'text-red-600' :
                          log.type === 'warn' ? 'text-yellow-600' :
                          'text-gray-600'
                        }`}>{log.type.toUpperCase()}:</span>
                        <span className="ml-2">{log.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Workflo B.V. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}