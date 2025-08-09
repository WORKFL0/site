'use client'

import { useState } from 'react'

interface SafeVideoEmbedProps {
  videoId: string
  title: string
  platform?: 'youtube' | 'vimeo'
  aspectRatio?: '16:9' | '4:3' | '1:1'
}

export default function SafeVideoEmbed({ 
  videoId, 
  title,
  platform = 'youtube',
  aspectRatio = '16:9'
}: SafeVideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const aspectClasses = {
    '16:9': 'pb-[56.25%]',
    '4:3': 'pb-[75%]',
    '1:1': 'pb-[100%]'
  }

  const embedUrls = {
    youtube: `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`,
    vimeo: `https://player.vimeo.com/video/${videoId}?color=f2f400&title=0&byline=0&portrait=0`
  }

  const thumbnails = {
    youtube: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    vimeo: `https://vumbnail.com/${videoId}.jpg`
  }

  const handleLoadVideo = () => {
    setIsLoaded(true)
  }

  if (!isLoaded) {
    return (
      <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div className={`relative ${aspectClasses[aspectRatio]}`}>
          <img
            src={thumbnails[platform]}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              // Hide image on error and show gradient background
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          {/* Fallback gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <button
              onClick={handleLoadVideo}
              className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full p-4 transition-all transform hover:scale-110"
              aria-label={`Play video: ${title}`}
            >
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded inline-block">
              {title}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <div className={`relative ${aspectClasses[aspectRatio]}`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedUrls[platform]}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}