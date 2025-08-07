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