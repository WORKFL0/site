'use client'

import { useUptimeStatus } from '@/hooks/useUptimeStatus'

const UptimeStatus = () => {
  const { isUp, isLoading, error } = useUptimeStatus()

  return (
    <a 
      href="https://uptime.workflo.it/status/workflo" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-warning-yellow transition-colors"
      title={isLoading ? 'Checking status...' : isUp ? 'All services operational' : 'Service issues detected'}
    >
      <div className="flex items-center gap-1">
        <div className={`w-2 h-2 rounded-full transition-colors ${
          isLoading 
            ? 'bg-gray-400 animate-pulse' 
            : isUp 
              ? 'bg-green-500' 
              : 'bg-red-500'
        }`} />
        <svg 
          className="w-3 h-3" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
          />
        </svg>
      </div>
      <span>Uptime Status</span>
    </a>
  )
}

export default UptimeStatus