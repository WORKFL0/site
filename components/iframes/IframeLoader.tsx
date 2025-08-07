'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface IframeLoaderProps {
  src: string
  title: string
  height?: string
  className?: string
  fallbackUrl?: string
  loadingText?: string
  errorText?: string
  maxLoadTime?: number // in milliseconds
}

export default function IframeLoader({
  src,
  title,
  height = '800px',
  className = '',
  fallbackUrl,
  loadingText,
  errorText,
  maxLoadTime = 10000 // 10 seconds default
}: IframeLoaderProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [timedOut, setTimedOut] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    // Set a timeout for loading
    const timeoutId = setTimeout(() => {
      if (loading) {
        setTimedOut(true)
        setLoading(false)
        setError(true)
      }
    }, maxLoadTime)

    return () => clearTimeout(timeoutId)
  }, [loading, maxLoadTime])

  const handleLoad = () => {
    setLoading(false)
    setError(false)
    setTimedOut(false)
  }

  const handleError = () => {
    setLoading(false)
    setError(true)
  }

  const handleOpenExternal = () => {
    window.open(fallbackUrl || src, '_blank', 'noopener,noreferrer')
  }

  const defaultLoadingText = language === 'en' 
    ? 'Loading external content...' 
    : 'Externe inhoud wordt geladen...'
  
  const defaultErrorText = language === 'en'
    ? 'Failed to load external content'
    : 'Kan externe inhoud niet laden'

  return (
    <div className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {/* Loading State */}
      {loading && (
        <div 
          className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center z-10"
          style={{ minHeight: height }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">{loadingText || defaultLoadingText}</p>
            <p className="text-sm text-gray-500 mt-2">
              {language === 'en' ? 'This may take a moment...' : 'Dit kan even duren...'}
            </p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div 
          className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center z-10"
          style={{ minHeight: height }}
        >
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {errorText || defaultErrorText}
            </h3>
            <p className="text-gray-600 mb-6">
              {timedOut 
                ? (language === 'en' 
                    ? 'The content is taking too long to load. You can try opening it in a new window instead.'
                    : 'De inhoud duurt te lang om te laden. U kunt proberen het in een nieuw venster te openen.')
                : (language === 'en'
                    ? 'The external service might be temporarily unavailable. Please try again later or open in a new window.'
                    : 'De externe service is mogelijk tijdelijk niet beschikbaar. Probeer het later opnieuw of open in een nieuw venster.')}
            </p>
            <div className="space-y-3">
              <button
                onClick={handleOpenExternal}
                className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
              >
                {language === 'en' ? 'Open in New Window' : 'Open in Nieuw Venster'} →
              </button>
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                {language === 'en' ? 'Refresh Page' : 'Pagina Vernieuwen'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Iframe */}
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        className={`border-0 ${loading || error ? 'invisible' : 'visible'}`}
        onLoad={handleLoad}
        onError={handleError}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* External Link Option (always visible) */}
      {!loading && !error && (
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={handleOpenExternal}
            className="bg-black/70 hover:bg-black text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
            title={language === 'en' ? 'Open in new window' : 'Open in nieuw venster'}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="hidden sm:inline">
              {language === 'en' ? 'Expand' : 'Uitvouwen'}
            </span>
          </button>
        </div>
      )}
    </div>
  )
}