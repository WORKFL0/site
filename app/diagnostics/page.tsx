'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { errorLogger, checkEnvironmentVariables } from '@/lib/error-logger'
import { isBrowser, isFeatureAvailable } from '@/lib/safe-client'

export default function DiagnosticsPage() {
  const [diagnostics, setDiagnostics] = useState<any>({})
  const [logs, setLogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    runDiagnostics()
  }, [])

  const runDiagnostics = async () => {
    const results: any = {
      browser: {
        isBrowser: isBrowser(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'N/A',
        language: typeof navigator !== 'undefined' ? navigator.language : 'N/A',
        platform: typeof navigator !== 'undefined' ? navigator.platform : 'N/A',
        cookiesEnabled: typeof navigator !== 'undefined' ? navigator.cookieEnabled : false,
        onLine: typeof navigator !== 'undefined' ? navigator.onLine : false,
        screenResolution: typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'N/A'
      },
      features: {
        localStorage: isFeatureAvailable('localStorage'),
        sessionStorage: isFeatureAvailable('sessionStorage'),
        geolocation: isFeatureAvailable('geolocation'),
        notifications: isFeatureAvailable('notifications'),
        share: isFeatureAvailable('share'),
        clipboard: isFeatureAvailable('clipboard')
      },
      environment: {
        nodeEnv: process.env.NODE_ENV,
        nextPublicUrl: process.env.NEXT_PUBLIC_URL || 'Not set',
        ...checkEnvironmentVariables()
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
        } : 'N/A'
      }
    }

    // Test RSS endpoint
    try {
      const rssResponse = await fetch('/api/rss-feed')
      results.apis.rssEndpoint = rssResponse.ok
    } catch (e) {
      results.apis.rssEndpoint = false
    }

    // Check HubSpot
    results.apis.hubspotScript = !!(window as any).hbspt

    // Get error logs
    const errorLogs = errorLogger.getStoredLogs()
    setLogs(errorLogs)

    setDiagnostics(results)
    setLoading(false)
  }

  const clearLogs = () => {
    errorLogger.clearLogs()
    setLogs([])
  }

  const StatusIndicator = ({ status }: { status: boolean | string }) => {
    if (typeof status === 'boolean') {
      return status ? (
        <span className="text-green-600 font-semibold">✓ OK</span>
      ) : (
        <span className="text-red-600 font-semibold">✗ Failed</span>
      )
    }
    return <span className="text-gray-600">{status}</span>
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">System Diagnostics</h1>
            
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Running diagnostics...</p>
              </div>
            ) : (
              <>
                {/* Browser Information */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Browser Information</h2>
                  <div className="space-y-2">
                    {Object.entries(diagnostics.browser || {}).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">{key}:</span>
                        <StatusIndicator status={value as boolean | string} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature Availability */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Feature Availability</h2>
                  <div className="space-y-2">
                    {Object.entries(diagnostics.features || {}).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">{key}:</span>
                        <StatusIndicator status={value as boolean} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* API Status */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">API Status</h2>
                  <div className="space-y-2">
                    {Object.entries(diagnostics.apis || {}).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">{key}:</span>
                        <StatusIndicator status={value as boolean} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Environment Variables */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Environment Configuration</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Environment:</span>
                      <span className="font-semibold">{diagnostics.environment?.nodeEnv}</span>
                    </div>
                    {diagnostics.environment?.missing?.length > 0 && (
                      <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                        <p className="text-yellow-800 font-semibold mb-2">Missing Environment Variables:</p>
                        <ul className="list-disc list-inside text-sm text-yellow-700">
                          {diagnostics.environment.missing.map((varName: string) => (
                            <li key={varName}>{varName}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Error Logs */}
                {logs.length > 0 && (
                  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold text-gray-900">Error Logs ({logs.length})</h2>
                      <button
                        onClick={clearLogs}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                      >
                        Clear Logs
                      </button>
                    </div>
                    <div className="space-y-3 max-h-96 overflow-auto">
                      {logs.slice(-10).reverse().map((log, idx) => (
                        <div key={idx} className={`p-3 rounded border ${
                          log.type === 'error' ? 'bg-red-50 border-red-200' :
                          log.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                          'bg-blue-50 border-blue-200'
                        }`}>
                          <div className="flex justify-between items-start mb-1">
                            <span className={`font-semibold text-sm ${
                              log.type === 'error' ? 'text-red-800' :
                              log.type === 'warning' ? 'text-yellow-800' :
                              'text-blue-800'
                            }`}>
                              {log.type.toUpperCase()}
                            </span>
                            <span className="text-xs text-gray-500">
                              {new Date(log.timestamp).toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700">{log.message}</p>
                          {log.component && (
                            <p className="text-xs text-gray-500 mt-1">Component: {log.component}</p>
                          )}
                          {log.url && (
                            <p className="text-xs text-gray-500">URL: {log.url}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Performance */}
                {diagnostics.performance?.memoryUsage !== 'N/A' && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Metrics</h2>
                    <div className="space-y-2">
                      {Object.entries(diagnostics.performance.memoryUsage).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-semibold">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}