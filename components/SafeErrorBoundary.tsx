'use client'

import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  componentName?: string
}

interface State {
  hasError: boolean
  error?: Error
}

class SafeErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`SafeErrorBoundary caught an error in ${this.props.componentName || 'component'}:`, error, errorInfo)
    
    // CRITICAL: Log detailed error info for debugging crashes
    console.error('🚨 CRITICAL ERROR DETAILS:', {
      componentName: this.props.componentName,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack,
      },
      errorInfo: {
        componentStack: errorInfo.componentStack,
      },
      url: typeof window !== 'undefined' ? window.location.href : 'server',
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'server',
      timestamp: new Date().toISOString()
    })
    
    // Additional safety: Try to prevent cascade failures
    if (typeof window !== 'undefined') {
      try {
        // Clear any problematic localStorage entries
        const problematicKeys = ['workflo-language', 'workflo-error-logs']
        problematicKeys.forEach(key => {
          try {
            localStorage.removeItem(key)
          } catch (e) {
            // Ignore cleanup errors
          }
        })
      } catch (cleanupError) {
        console.warn('Error during cleanup:', cleanupError)
      }
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-red-800 font-semibold mb-2">
            Component Error ({this.props.componentName || 'Unknown'})
          </h3>
          <p className="text-red-600 text-sm">
            Something went wrong in this component. Please refresh the page or contact support if the problem persists.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-2">
              <summary className="text-red-700 text-sm cursor-pointer">Error Details</summary>
              <pre className="text-xs text-red-600 mt-1 whitespace-pre-wrap">
                {this.state.error?.message || 'Unknown error'}
              </pre>
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}

export default SafeErrorBoundary