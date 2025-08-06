import { useState, useEffect } from 'react'

export interface UptimeStatus {
  isUp: boolean
  isLoading: boolean
  error?: string
}

export const useUptimeStatus = (): UptimeStatus => {
  const [status, setStatus] = useState<UptimeStatus>({
    isUp: true, // Default to up
    isLoading: true,
  })

  useEffect(() => {
    const checkStatus = async () => {
      try {
        // Use a simple ping to check if the main workflo.nl site is accessible
        const response = await fetch('/api/uptime-check', {
          method: 'GET',
          cache: 'no-cache',
        })
        
        if (response.ok) {
          const data = await response.json()
          setStatus({
            isUp: data.isUp,
            isLoading: false,
          })
        } else {
          // Fallback: assume services are up if we can't check
          setStatus({
            isUp: true,
            isLoading: false,
            error: 'Unable to fetch status',
          })
        }
      } catch (error) {
        // Network error or other issue - assume services are up
        setStatus({
          isUp: true,
          isLoading: false,
          error: 'Network error',
        })
      }
    }

    checkStatus()
    
    // Check status every 5 minutes
    const interval = setInterval(checkStatus, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  return status
}