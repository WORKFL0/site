'use client'

import dynamic from 'next/dynamic'
import type { NextStudioProps } from 'next-sanity/studio'

const Studio = dynamic<NextStudioProps>(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)
import config from '../../../sanity.config'

export default function StudioPage() {
  return <Studio config={config} />
}