// Error logging utility for debugging production issues
interface ErrorLog {
  message: string
  stack?: string
  url?: string
  userAgent?: string
  timestamp: string
  type: 'error' | 'warning' | 'info'
  component?: string
  additionalData?: any
}

class ErrorLogger {
  private logs: ErrorLog[] = []
  private maxLogs = 50

  logError(error: Error, component?: string, additionalData?: any) {
    const errorLog: ErrorLog = {
      message: error.message,
      stack: error.stack,
      url: typeof window !== 'undefined' ? window.location.href : 'server',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
      timestamp: new Date().toISOString(),
      type: 'error',
      component,
      additionalData
    }

    this.addLog(errorLog)
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error(`[${component || 'Unknown'}] Error:`, error, additionalData)
    }

    // Send to monitoring service in production (if configured)
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      this.sendToMonitoring(errorLog)
    }
  }

  logWarning(message: string, component?: string, additionalData?: any) {
    const log: ErrorLog = {
      message,
      url: typeof window !== 'undefined' ? window.location.href : 'server',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
      timestamp: new Date().toISOString(),
      type: 'warning',
      component,
      additionalData
    }

    this.addLog(log)
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[${component || 'Unknown'}] Warning:`, message, additionalData)
    }
  }

  logInfo(message: string, component?: string, additionalData?: any) {
    const log: ErrorLog = {
      message,
      url: typeof window !== 'undefined' ? window.location.href : 'server',
      timestamp: new Date().toISOString(),
      type: 'info',
      component,
      additionalData
    }

    this.addLog(log)
    
    if (process.env.NODE_ENV === 'development') {
      console.info(`[${component || 'Unknown'}] Info:`, message, additionalData)
    }
  }

  private addLog(log: ErrorLog) {
    this.logs.push(log)
    
    // Keep only the last maxLogs entries
    if (this.logs.length > this.maxLogs) {
      this.logs.shift()
    }

    // Store in localStorage for debugging (if available)
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem('workflo-error-logs', JSON.stringify(this.logs))
      } catch (e) {
        // Ignore localStorage errors
      }
    }
  }

  private sendToMonitoring(log: ErrorLog) {
    // This could be integrated with services like Sentry, LogRocket, etc.
    // For now, we'll just store it locally
    try {
      // Could send to an API endpoint
      // fetch('/api/log-error', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(log)
      // })
    } catch (e) {
      // Silently fail to avoid recursive errors
    }
  }

  getLogs(): ErrorLog[] {
    return this.logs
  }

  clearLogs() {
    this.logs = []
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.removeItem('workflo-error-logs')
      } catch (e) {
        // Ignore localStorage errors
      }
    }
  }

  // Get logs from localStorage (useful for debugging)
  getStoredLogs(): ErrorLog[] {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const stored = localStorage.getItem('workflo-error-logs')
        return stored ? JSON.parse(stored) : []
      } catch (e) {
        return []
      }
    }
    return []
  }
}

// Singleton instance
export const errorLogger = new ErrorLogger()

// Helper function for safe execution
export function safeExecute<T>(
  fn: () => T,
  fallback: T,
  component?: string,
  context?: string
): T {
  try {
    return fn()
  } catch (error) {
    errorLogger.logError(
      error as Error,
      component,
      { context, fallback }
    )
    return fallback
  }
}

// Helper for async operations
export async function safeAsyncExecute<T>(
  fn: () => Promise<T>,
  fallback: T,
  component?: string,
  context?: string
): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    errorLogger.logError(
      error as Error,
      component,
      { context, fallback }
    )
    return fallback
  }
}

// Environment variable checker
export function checkEnvironmentVariables() {
  const required = [
    'NEXT_PUBLIC_GA_MEASUREMENT_ID',
    'NEXT_PUBLIC_GTM_ID',
    'NEXT_PUBLIC_CLARITY_ID',
    'NEXT_PUBLIC_HOTJAR_ID',
    'NEXT_PUBLIC_LINKEDIN_PARTNER_ID',
    'NEXT_PUBLIC_FB_PIXEL_ID'
  ]

  const missing: string[] = []
  const configured: Record<string, boolean> = {}

  required.forEach(key => {
    const value = process.env[key]
    configured[key] = !!value
    if (!value) {
      missing.push(key)
    }
  })

  if (missing.length > 0) {
    errorLogger.logWarning(
      'Missing environment variables',
      'Environment',
      { missing, configured }
    )
  }

  return { missing, configured }
}

export default errorLogger