'use client'

import { useEffect } from 'react'

export default function GlobalErrorHandler() {
  useEffect(() => {
    // CRITICAL FIX: Global error handler to catch uncaught errors during hydration
    
    const handleError = (event: ErrorEvent) => {
      console.error('🚨 UNCAUGHT ERROR:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
        stack: event.error?.stack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      })

      // Prevent default error handling that might cause crashes
      event.preventDefault()
      return false
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('🚨 UNHANDLED PROMISE REJECTION:', {
        reason: event.reason,
        promise: event.promise,
        timestamp: new Date().toISOString(),
        url: window.location.href
      })

      // Prevent default handling
      event.preventDefault()
      return false
    }

    const handleReactError = (event: CustomEvent) => {
      console.error('🚨 REACT ERROR:', {
        error: event.detail,
        timestamp: new Date().toISOString(),
        url: window.location.href
      })
    }

    // Add error event listeners
    window.addEventListener('error', handleError, true)
    window.addEventListener('unhandledrejection', handleUnhandledRejection, true)
    
    // Listen for React errors
    window.addEventListener('react-error' as any, handleReactError, true)

    // Cleanup
    return () => {
      window.removeEventListener('error', handleError, true)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection, true)
      window.removeEventListener('react-error' as any, handleReactError, true)
    }
  }, [])

  return null // This component renders nothing
}