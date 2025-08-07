'use client'

import React, { useState, useEffect, createContext, useContext } from 'react'

interface HydrationContextType {
  isHydrated: boolean
  isStageComplete: (stage: string) => boolean
  completeStage: (stage: string) => void
}

const HydrationContext = createContext<HydrationContextType>({
  isHydrated: false,
  isStageComplete: () => false,
  completeStage: () => {}
})

export function useHydration() {
  return useContext(HydrationContext)
}

interface HydrationProviderProps {
  children: React.ReactNode
}

export default function HydrationProvider({ children }: HydrationProviderProps) {
  const [isHydrated, setIsHydrated] = useState(false)
  const [completedStages, setCompletedStages] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Mark as hydrated after React has finished hydrating
    const timer = setTimeout(() => {
      setIsHydrated(true)
      console.log('🔄 Hydration complete - safe to load client-side features')
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const isStageComplete = (stage: string): boolean => {
    return completedStages.has(stage)
  }

  const completeStage = (stage: string): void => {
    setCompletedStages(prev => new Set(prev).add(stage))
    console.log(`✅ Stage completed: ${stage}`)
  }

  // Progressive loading stages
  useEffect(() => {
    if (!isHydrated) return

    // Stage 1: Context and basic functionality (immediate)
    setTimeout(() => completeStage('context'), 50)
    
    // Stage 2: Analytics and tracking (after 500ms)
    setTimeout(() => completeStage('analytics'), 500)
    
    // Stage 3: Advanced animations (after 1000ms)  
    setTimeout(() => completeStage('animations'), 1000)
    
    // Stage 4: External scripts and heavy features (after 2000ms)
    setTimeout(() => completeStage('external'), 2000)
  }, [isHydrated])

  return (
    <HydrationContext.Provider value={{ isHydrated, isStageComplete, completeStage }}>
      {children}
    </HydrationContext.Provider>
  )
}