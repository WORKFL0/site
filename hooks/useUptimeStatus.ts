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
    let isCancelled = false
    let timeoutId: NodeJS.Timeout | null = null
    let intervalId: NodeJS.Timeout | null = null

    const checkStatus = async () => {
      // Skip if component is unmounted or we're not in browser environment
      if (isCancelled || typeof window === 'undefined') {
        return
      }

      try {
        // Set a reasonable timeout for the entire operation
        timeoutId = setTimeout(() => {
          if (!isCancelled) {
            console.warn('useUptimeStatus: Status check timed out after 30 seconds')
            setStatus({
              isUp: true, // Assume up on timeout
              isLoading: false,
              error: 'Status check timed out',
            })
          }
        }, 30000)

        // Use AbortController for better request management
        const abortController = new AbortController()
        
        // Auto-abort after 15 seconds
        const abortTimeout = setTimeout(() => {
          abortController.abort()
        }, 15000)

        try {
          const response = await fetch('/api/uptime-check', {
            method: 'GET',
            cache: 'no-cache',
            signal: abortController.signal,
          })
          
          clearTimeout(abortTimeout)
          if (timeoutId) {
            clearTimeout(timeoutId)
            timeoutId = null
          }
          
          if (isCancelled) {
            return
          }
          
          if (!response) {
            throw new Error('No response received from uptime check API')
          }
          
          if (response.ok) {
            try {
              const data = await response.json()
              
              if (isCancelled) {
                return
              }
              
              // Validate response data
              const isUp = typeof data.isUp === 'boolean' ? data.isUp : true
              
              setStatus({
                isUp,
                isLoading: false,
                error: undefined,
              })
            } catch (jsonError) {
              console.warn('useUptimeStatus: Failed to parse response JSON:', jsonError)
              if (!isCancelled) {
                setStatus({
                  isUp: true, // Assume up if we can't parse response
                  isLoading: false,
                  error: 'Invalid response format',
                })
              }
            }
          } else {
            console.warn(`useUptimeStatus: API returned ${response.status}: ${response.statusText}`)
            if (!isCancelled) {
              setStatus({
                isUp: true, // Assume up if API returns error
                isLoading: false,
                error: `API error: ${response.status}`,
              })
            }
          }
        } catch (fetchError) {
          clearTimeout(abortTimeout)
          if (timeoutId) {
            clearTimeout(timeoutId)
            timeoutId = null
          }
          
          if (isCancelled) {
            return
          }
          
          // Handle specific error types
          let errorMessage = 'Network error'
          
          if (fetchError instanceof Error) {
            if (fetchError.name === 'AbortError') {
              errorMessage = 'Request timed out'
              console.warn('useUptimeStatus: Request was aborted due to timeout')
            } else {
              errorMessage = fetchError.message
              console.warn('useUptimeStatus: Fetch error:', fetchError.message)
            }
          } else {
            console.warn('useUptimeStatus: Unknown fetch error:', fetchError)
          }
          
          setStatus({
            isUp: true, // Assume up on network errors
            isLoading: false,
            error: errorMessage,
          })
        }
      } catch (error) {
        if (timeoutId) {
          clearTimeout(timeoutId)
          timeoutId = null
        }
        
        if (isCancelled) {
          return
        }
        
        console.error('useUptimeStatus: Unexpected error in status check:', error)
        setStatus({
          isUp: true, // Assume up on unexpected errors
          isLoading: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        })
      }
    }

    // Initial status check with error handling
    try {
      checkStatus()
    } catch (initError) {
      console.error('useUptimeStatus: Error in initial status check:', initError)
      setStatus({
        isUp: true,
        isLoading: false,
        error: 'Failed to initialize status check',
      })
    }
    
    // Check status every 5 minutes
    intervalId = setInterval(() => {
      if (!isCancelled) {
        try {
          checkStatus()
        } catch (intervalError) {
          console.error('useUptimeStatus: Error in interval status check:', intervalError)
        }
      }
    }, 5 * 60 * 1000)
    
    return () => {
      isCancelled = true
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [])

  return status
}