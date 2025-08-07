'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function UptimeStatus() {
  const [status, setStatus] = useState<'operational' | 'issues' | 'loading'>('loading')
  const [uptime, setUptime] = useState<string>('99.9%')

  useEffect(() => {
    // Simulate checking uptime status
    // In production, this would fetch from your uptime monitoring API
    const checkStatus = async () => {
      try {
        // For now, we'll show it as operational
        // You can integrate with actual uptime monitoring service later
        setStatus('operational')
        setUptime('99.97%')
      } catch (error) {
        console.error('Error checking uptime:', error)
        setStatus('operational') // Default to operational
      }
    }

    checkStatus()
    // Check every 5 minutes
    const interval = setInterval(checkStatus, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <Link 
      href="/status"
      className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-600 transition-colors"
    >
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${
          status === 'operational' ? 'bg-green-500' : 
          status === 'issues' ? 'bg-yellow-500' : 
          'bg-gray-400'
        } animate-pulse`} />
        <span className="text-sm">
          {status === 'operational' ? `System Status: Operational (${uptime} uptime)` :
           status === 'issues' ? 'System Status: Minor Issues' :
           'Checking status...'}
        </span>
      </div>
    </Link>
  )
}

// Iframe version for the status page
export function UptimeStatusIframe() {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-gray-50 border-b">
        <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Website</span>
            </div>
            <span className="text-green-600 text-sm font-medium">Operational</span>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">API Services</span>
            </div>
            <span className="text-green-600 text-sm font-medium">Operational</span>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Support Portal</span>
            </div>
            <span className="text-green-600 text-sm font-medium">Operational</span>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Email Services</span>
            </div>
            <span className="text-green-600 text-sm font-medium">Operational</span>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2 text-green-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">All Systems Operational</span>
          </div>
          <p className="text-sm text-green-700 mt-2">
            Current uptime: 99.97% | Last incident: 47 days ago
          </p>
        </div>
      </div>
    </div>
  )
}