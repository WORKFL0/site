// Safe client-side operation utilities

/**
 * Safely access localStorage
 */
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (typeof window === 'undefined' || !window.localStorage) {
      return null
    }
    try {
      return localStorage.getItem(key)
    } catch (error) {
      console.warn('localStorage.getItem failed:', error)
      return null
    }
  },
  
  setItem: (key: string, value: string): boolean => {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false
    }
    try {
      localStorage.setItem(key, value)
      return true
    } catch (error) {
      console.warn('localStorage.setItem failed:', error)
      return false
    }
  },
  
  removeItem: (key: string): boolean => {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false
    }
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.warn('localStorage.removeItem failed:', error)
      return false
    }
  }
}

/**
 * Safely access sessionStorage
 */
export const safeSessionStorage = {
  getItem: (key: string): string | null => {
    if (typeof window === 'undefined' || !window.sessionStorage) {
      return null
    }
    try {
      return sessionStorage.getItem(key)
    } catch (error) {
      console.warn('sessionStorage.getItem failed:', error)
      return null
    }
  },
  
  setItem: (key: string, value: string): boolean => {
    if (typeof window === 'undefined' || !window.sessionStorage) {
      return false
    }
    try {
      sessionStorage.setItem(key, value)
      return true
    } catch (error) {
      console.warn('sessionStorage.setItem failed:', error)
      return false
    }
  }
}

/**
 * Check if we're in a browser environment
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

/**
 * Check if a feature is available
 */
export const isFeatureAvailable = (feature: string): boolean => {
  if (!isBrowser()) return false
  
  switch (feature) {
    case 'localStorage':
      return !!window.localStorage
    case 'sessionStorage':
      return !!window.sessionStorage
    case 'geolocation':
      return !!navigator.geolocation
    case 'notifications':
      return 'Notification' in window
    case 'share':
      return !!navigator.share
    case 'clipboard':
      return !!navigator.clipboard
    default:
      return false
  }
}

/**
 * Safe window event listener
 */
export const safeAddEventListener = (
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions
): (() => void) => {
  if (!isBrowser()) {
    return () => {} // No-op cleanup function
  }
  
  try {
    window.addEventListener(event, handler, options)
    return () => window.removeEventListener(event, handler, options)
  } catch (error) {
    console.warn(`Failed to add event listener for ${event}:`, error)
    return () => {}
  }
}

/**
 * Safe document query selector
 */
export const safeQuerySelector = <T extends Element>(
  selector: string
): T | null => {
  if (!isBrowser()) return null
  
  try {
    return document.querySelector<T>(selector)
  } catch (error) {
    console.warn(`Failed to query selector ${selector}:`, error)
    return null
  }
}

/**
 * Safe fetch with timeout and error handling
 */
export const safeFetch = async (
  url: string,
  options?: RequestInit & { timeout?: number }
): Promise<Response | null> => {
  try {
    const { timeout = 30000, ...fetchOptions } = options || {}
    
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)
    
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal
    })
    
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error(`Fetch timeout for ${url}`)
      } else {
        console.error(`Fetch failed for ${url}:`, error.message)
      }
    }
    return null
  }
}

/**
 * Debounce function for performance
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Throttle function for performance
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}