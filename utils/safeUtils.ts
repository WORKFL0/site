/**
 * Utility functions for safe data access and error prevention
 */

/**
 * Safely access nested object properties with optional default value
 */
export function safeGet<T>(
  obj: any,
  path: string | string[],
  defaultValue?: T
): T | undefined {
  try {
    if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
      return defaultValue
    }

    const keys = Array.isArray(path) ? path : path.split('.')
    let current = obj

    for (const key of keys) {
      if (current == null || typeof current !== 'object') {
        return defaultValue
      }
      current = current[key]
    }

    return current !== undefined ? current : defaultValue
  } catch (error) {
    console.warn('safeGet: Error accessing path', path, ':', error)
    return defaultValue
  }
}

/**
 * Safely parse JSON with fallback value
 */
export function safeJsonParse<T>(
  json: string,
  fallback: T
): T {
  try {
    if (typeof json !== 'string' || json.trim().length === 0) {
      return fallback
    }
    
    const parsed = JSON.parse(json)
    return parsed !== undefined ? parsed : fallback
  } catch (error) {
    console.warn('safeJsonParse: Failed to parse JSON:', error)
    return fallback
  }
}

/**
 * Safely stringify JSON with fallback
 */
export function safeJsonStringify(
  value: any,
  fallback: string = '{}'
): string {
  try {
    return JSON.stringify(value)
  } catch (error) {
    console.warn('safeJsonStringify: Failed to stringify value:', error)
    return fallback
  }
}

/**
 * Safe number conversion with validation
 */
export function safeNumber(
  value: any,
  defaultValue: number = 0,
  options?: {
    min?: number
    max?: number
    integer?: boolean
  }
): number {
  try {
    let num: number

    if (typeof value === 'number') {
      num = value
    } else if (typeof value === 'string') {
      num = parseFloat(value)
    } else {
      return defaultValue
    }

    if (isNaN(num) || !isFinite(num)) {
      return defaultValue
    }

    if (options?.integer) {
      num = Math.round(num)
    }

    if (options?.min !== undefined && num < options.min) {
      num = options.min
    }

    if (options?.max !== undefined && num > options.max) {
      num = options.max
    }

    return num
  } catch (error) {
    console.warn('safeNumber: Error converting value:', value, error)
    return defaultValue
  }
}

/**
 * Safe string conversion with validation
 */
export function safeString(
  value: any,
  defaultValue: string = '',
  options?: {
    maxLength?: number
    trim?: boolean
  }
): string {
  try {
    let str: string

    if (value === null || value === undefined) {
      return defaultValue
    }

    if (typeof value === 'string') {
      str = value
    } else {
      str = String(value)
    }

    if (options?.trim) {
      str = str.trim()
    }

    if (options?.maxLength && str.length > options.maxLength) {
      str = str.substring(0, options.maxLength)
    }

    return str
  } catch (error) {
    console.warn('safeString: Error converting value:', value, error)
    return defaultValue
  }
}

/**
 * Safe array access with bounds checking
 */
export function safeArrayAccess<T>(
  array: T[],
  index: number,
  defaultValue?: T
): T | undefined {
  try {
    if (!Array.isArray(array)) {
      return defaultValue
    }

    if (index < 0 || index >= array.length) {
      return defaultValue
    }

    const value = array[index]
    return value !== undefined ? value : defaultValue
  } catch (error) {
    console.warn('safeArrayAccess: Error accessing array index:', index, error)
    return defaultValue
  }
}

/**
 * Safe function execution with error handling
 */
export function safeExecute<T>(
  fn: () => T,
  fallback?: T,
  context?: string
): T | undefined {
  try {
    if (typeof fn !== 'function') {
      console.warn('safeExecute: Provided argument is not a function')
      return fallback
    }

    return fn()
  } catch (error) {
    console.error(`safeExecute${context ? ` (${context})` : ''}: Function execution failed:`, error)
    return fallback
  }
}

/**
 * Safe async function execution with error handling
 */
export async function safeExecuteAsync<T>(
  fn: () => Promise<T>,
  fallback?: T,
  context?: string
): Promise<T | undefined> {
  try {
    if (typeof fn !== 'function') {
      console.warn('safeExecuteAsync: Provided argument is not a function')
      return fallback
    }

    return await fn()
  } catch (error) {
    console.error(`safeExecuteAsync${context ? ` (${context})` : ''}: Async function execution failed:`, error)
    return fallback
  }
}

/**
 * Safe localStorage operations
 */
export const safeLocalStorage = {
  getItem: (key: string, defaultValue?: string): string | null => {
    try {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return defaultValue || null
      }
      
      return localStorage.getItem(key) || defaultValue || null
    } catch (error) {
      console.warn('safeLocalStorage.getItem: Error accessing localStorage:', error)
      return defaultValue || null
    }
  },

  setItem: (key: string, value: string): boolean => {
    try {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return false
      }
      
      localStorage.setItem(key, value)
      return true
    } catch (error) {
      console.warn('safeLocalStorage.setItem: Error setting localStorage:', error)
      return false
    }
  },

  removeItem: (key: string): boolean => {
    try {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return false
      }
      
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.warn('safeLocalStorage.removeItem: Error removing from localStorage:', error)
      return false
    }
  }
}

/**
 * Safe DOM operations
 */
export const safeDom = {
  getElementById: (id: string): HTMLElement | null => {
    try {
      if (typeof document === 'undefined') {
        return null
      }
      
      return document.getElementById(id)
    } catch (error) {
      console.warn('safeDom.getElementById: Error accessing DOM:', error)
      return null
    }
  },

  querySelector: (selector: string): Element | null => {
    try {
      if (typeof document === 'undefined') {
        return null
      }
      
      return document.querySelector(selector)
    } catch (error) {
      console.warn('safeDom.querySelector: Error querying DOM:', error)
      return null
    }
  },

  addEventListener: (
    element: Element | Window | Document,
    event: string,
    handler: EventListener,
    options?: boolean | AddEventListenerOptions
  ): boolean => {
    try {
      if (!element || typeof element.addEventListener !== 'function') {
        return false
      }
      
      element.addEventListener(event, handler, options)
      return true
    } catch (error) {
      console.warn('safeDom.addEventListener: Error adding event listener:', error)
      return false
    }
  },

  removeEventListener: (
    element: Element | Window | Document,
    event: string,
    handler: EventListener,
    options?: boolean | EventListenerOptions
  ): boolean => {
    try {
      if (!element || typeof element.removeEventListener !== 'function') {
        return false
      }
      
      element.removeEventListener(event, handler, options)
      return true
    } catch (error) {
      console.warn('safeDom.removeEventListener: Error removing event listener:', error)
      return false
    }
  }
}

/**
 * Validate and sanitize URL
 */
export function safeUrl(url: string, fallback?: string): string | null {
  try {
    if (typeof url !== 'string' || url.trim().length === 0) {
      return fallback || null
    }

    // Basic URL validation
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i
    
    if (!urlPattern.test(url)) {
      console.warn('safeUrl: Invalid URL format:', url)
      return fallback || null
    }

    // Ensure protocol is present
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url
    }

    // Validate with URL constructor
    new URL(url)
    
    return url
  } catch (error) {
    console.warn('safeUrl: Error validating URL:', url, error)
    return fallback || null
  }
}