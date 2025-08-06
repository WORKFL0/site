'use client'

import { ReactNode } from 'react'
import { ErrorBoundary } from './ErrorBoundary'

interface SafeComponentProps {
  children: ReactNode
  fallback?: ReactNode
  componentName?: string
  onError?: (error: Error, errorInfo: any) => void
}

/**
 * A wrapper component that provides error boundary protection for individual components
 * This ensures that if one component fails, it doesn't crash the entire application
 */
export default function SafeComponent({ 
  children, 
  fallback,
  componentName = 'Component',
  onError 
}: SafeComponentProps) {
  const defaultFallback = (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
      <div className="text-gray-600">
        <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <p className="text-sm font-medium text-gray-700 mb-1">
          {componentName} Temporarily Unavailable
        </p>
        <p className="text-xs text-gray-500">
          We're working to fix this issue. Please refresh the page or try again later.
        </p>
      </div>
    </div>
  )

  const handleError = (error: Error, errorInfo: any) => {
    console.error(`SafeComponent: Error in ${componentName}:`, error, errorInfo)
    
    // Call custom error handler if provided
    if (typeof onError === 'function') {
      try {
        onError(error, errorInfo)
      } catch (handlerError) {
        console.error('SafeComponent: Error in custom error handler:', handlerError)
      }
    }
  }

  return (
    <ErrorBoundary 
      fallback={fallback || defaultFallback}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  )
}

// HOC version for easier wrapping
export function withSafeComponent<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options?: {
    componentName?: string
    fallback?: ReactNode
    onError?: (error: Error, errorInfo: any) => void
  }
) {
  const SafeWrappedComponent = (props: P) => (
    <SafeComponent
      componentName={options?.componentName || WrappedComponent.displayName || WrappedComponent.name || 'Component'}
      fallback={options?.fallback}
      onError={options?.onError}
    >
      <WrappedComponent {...props} />
    </SafeComponent>
  )
  
  SafeWrappedComponent.displayName = `SafeComponent(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
  
  return SafeWrappedComponent
}