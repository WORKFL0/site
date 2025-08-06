// HubSpot Form Debugging Utility

export interface HubSpotDebugInfo {
  scriptLoaded: boolean
  apiAvailable: boolean
  formsApiAvailable: boolean
  activeFormCount: number
  errors: string[]
  warnings: string[]
  networkStatus: 'online' | 'offline'
  blockedByAdBlocker: boolean
  timestamp: string
}

export function debugHubSpot(): HubSpotDebugInfo {
  const info: HubSpotDebugInfo = {
    scriptLoaded: false,
    apiAvailable: false,
    formsApiAvailable: false,
    activeFormCount: 0,
    errors: [],
    warnings: [],
    networkStatus: navigator.onLine ? 'online' : 'offline',
    blockedByAdBlocker: false,
    timestamp: new Date().toISOString()
  }

  // Check if script is loaded
  const scripts = document.querySelectorAll('script[src*="hsforms.net"]')
  info.scriptLoaded = scripts.length > 0

  if (scripts.length > 1) {
    info.warnings.push(`Multiple HubSpot scripts found (${scripts.length}). This may cause conflicts.`)
  }

  // Check if HubSpot API is available
  if (typeof window !== 'undefined' && window.hbspt) {
    info.apiAvailable = true
    
    if (window.hbspt.forms) {
      info.formsApiAvailable = true
    } else {
      info.errors.push('HubSpot API loaded but forms module not available')
    }
  } else if (info.scriptLoaded) {
    info.errors.push('Script loaded but HubSpot API not available (may still be initializing)')
  }

  // Check for forms in DOM
  const hubspotForms = document.querySelectorAll('.hs-form')
  info.activeFormCount = hubspotForms.length

  // Check for common ad blocker signs
  const checkAdBlocker = () => {
    // Check if common ad-related elements are blocked
    const testElement = document.createElement('div')
    testElement.className = 'adsbox ad-banner'
    testElement.style.position = 'absolute'
    testElement.style.top = '-9999px'
    document.body.appendChild(testElement)
    
    const blocked = testElement.offsetHeight === 0
    document.body.removeChild(testElement)
    
    return blocked
  }

  info.blockedByAdBlocker = checkAdBlocker()

  if (info.blockedByAdBlocker) {
    info.warnings.push('Ad blocker detected. This may prevent HubSpot forms from loading.')
  }

  // Check network status
  if (!navigator.onLine) {
    info.errors.push('Browser is offline. Cannot load external scripts.')
  }

  // Log debug info to console
  console.group('🔍 HubSpot Debug Info')
  console.log('Timestamp:', info.timestamp)
  console.log('Script Loaded:', info.scriptLoaded)
  console.log('API Available:', info.apiAvailable)
  console.log('Forms API Available:', info.formsApiAvailable)
  console.log('Active Forms:', info.activeFormCount)
  console.log('Network Status:', info.networkStatus)
  console.log('Ad Blocker:', info.blockedByAdBlocker)
  
  if (info.errors.length > 0) {
    console.error('Errors:', info.errors)
  }
  
  if (info.warnings.length > 0) {
    console.warn('Warnings:', info.warnings)
  }
  
  console.groupEnd()

  return info
}

// Auto-retry mechanism for form creation
export function createHubSpotFormWithRetry(
  config: {
    region: string
    portalId: string
    formId: string
    target: string
  },
  maxRetries: number = 3,
  retryDelay: number = 1000
): Promise<boolean> {
  return new Promise((resolve) => {
    let retryCount = 0

    const attemptCreate = () => {
      // Check if target exists
      const targetElement = document.querySelector(config.target)
      if (!targetElement) {
        console.error(`Target element ${config.target} not found`)
        resolve(false)
        return
      }

      // Check if API is available
      if (!window.hbspt || !window.hbspt.forms) {
        if (retryCount < maxRetries) {
          retryCount++
          console.log(`HubSpot API not ready, retrying... (${retryCount}/${maxRetries})`)
          setTimeout(attemptCreate, retryDelay)
        } else {
          console.error('HubSpot API not available after maximum retries')
          resolve(false)
        }
        return
      }

      try {
        window.hbspt.forms.create({
          ...config,
          onFormReady: () => {
            console.log(`✅ HubSpot form ${config.formId} created successfully`)
            resolve(true)
          }
        })
      } catch (error) {
        console.error('Error creating HubSpot form:', error)
        if (retryCount < maxRetries) {
          retryCount++
          console.log(`Retrying form creation... (${retryCount}/${maxRetries})`)
          setTimeout(attemptCreate, retryDelay)
        } else {
          resolve(false)
        }
      }
    }

    attemptCreate()
  })
}

// Monitor HubSpot form loading
export function monitorHubSpotLoading(
  callback: (status: 'loading' | 'loaded' | 'error', details?: any) => void
) {
  let checkCount = 0
  const maxChecks = 50 // 5 seconds max
  
  callback('loading', { message: 'Starting HubSpot monitoring...' })

  const interval = setInterval(() => {
    checkCount++
    
    const debugInfo = debugHubSpot()
    
    if (debugInfo.formsApiAvailable) {
      clearInterval(interval)
      callback('loaded', debugInfo)
    } else if (checkCount >= maxChecks) {
      clearInterval(interval)
      callback('error', { 
        message: 'Timeout waiting for HubSpot',
        debugInfo 
      })
    } else if (debugInfo.errors.length > 0) {
      // Continue checking but report errors
      callback('loading', { 
        message: `Check ${checkCount}/${maxChecks}`,
        errors: debugInfo.errors 
      })
    }
  }, 100)

  return () => clearInterval(interval)
}

// Declare global window type
declare global {
  interface Window {
    hbspt: any
  }
}