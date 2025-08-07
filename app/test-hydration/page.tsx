'use client'

import { useHydration } from '@/components/HydrationProvider'
import { useLanguage } from '@/context/LanguageContext'

export default function TestHydrationPage() {
  const { isHydrated, isStageComplete } = useHydration()
  const { t, language } = useLanguage()

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h1>Hydration Test Page</h1>
      <p>This page tests the hydration provider and language context integration.</p>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h2>Hydration Status</h2>
        <p>Is Hydrated: {isHydrated ? '✅ Yes' : '❌ No'}</p>
        <p>Context Stage: {isStageComplete('context') ? '✅ Complete' : '❌ Pending'}</p>
        <p>Analytics Stage: {isStageComplete('analytics') ? '✅ Complete' : '❌ Pending'}</p>
        <p>Animations Stage: {isStageComplete('animations') ? '✅ Complete' : '❌ Pending'}</p>
        <p>External Stage: {isStageComplete('external') ? '✅ Complete' : '❌ Pending'}</p>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e8f4f8', borderRadius: '8px' }}>
        <h2>Language Context</h2>
        <p>Current Language: {language}</p>
        <p>Translation Test: {t('nav.services')}</p>
        <p>Time: {new Date().toISOString()}</p>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff2e8', borderRadius: '8px' }}>
        <h2>Expected Behavior</h2>
        <p>1. Hydration should complete within 100ms</p>
        <p>2. Context stage should complete within 150ms</p>
        <p>3. Analytics stage should complete within 600ms</p>
        <p>4. Animations stage should complete within 1100ms</p>
        <p>5. External stage should complete within 2100ms</p>
        <p>6. No crashes should occur during this process</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p><strong>If you can see this text without crashes, the hydration fix is working!</strong></p>
      </div>
    </div>
  )
}