'use client'

import { useEffect } from 'react'
import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon } from '@heroicons/react/24/outline'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Simple console logging without any external dependencies
    console.error('Application error:', {
      message: error.message,
      digest: error.digest,
      stack: error.stack
    })
  }, [error])

  const handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  const goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <ExclamationTriangleIcon className="mx-auto h-12 w-12 text-red-500 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              We're sorry, but an unexpected error occurred. Our team has been notified and is working to fix this issue.
            </p>
            
            {/* Error Details - Only in development */}
            {process.env.NODE_ENV === 'development' && (
              <details className="text-left mb-6 p-4 bg-red-50 rounded border border-red-200">
                <summary className="cursor-pointer text-sm font-medium text-red-800 mb-2">
                  Error Details (Development Only)
                </summary>
                <div className="text-xs text-red-700 font-mono">
                  <p className="mb-2"><strong>Message:</strong> {error.message}</p>
                  {error.digest && (
                    <p className="mb-2"><strong>Error ID:</strong> {error.digest}</p>
                  )}
                  {error.stack && (
                    <div>
                      <strong>Stack Trace:</strong>
                      <pre className="whitespace-pre-wrap mt-1 text-xs overflow-auto max-h-32">
                        {error.stack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
            
            <div className="space-y-3">
              <button
                onClick={reset}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
              >
                <ArrowPathIcon className="w-4 h-4 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={handleReload}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
              >
                Reload Page
              </button>
              
              <button
                onClick={goHome}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
              >
                <HomeIcon className="w-4 h-4 mr-2" />
                Go Home
              </button>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Still having issues?</p>
                <a
                  href="/contact"
                  className="text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                >
                  Contact our support team →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}