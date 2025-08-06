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
      <div className={`w-2 h-2 rounded-full transition-colors ${
        isLoading 
          ? 'bg-gray-400 animate-pulse' 
          : isUp 
            ? 'bg-green-500' 
            : 'bg-red-500'
      }`} />
      <span>Uptime Status</span>
    </a>
  )
}

export default UptimeStatus