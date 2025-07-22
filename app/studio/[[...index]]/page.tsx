'use client'

import dynamic from 'next/dynamic'

const Studio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)
const config = require('../../../sanity.config').default

export default function StudioPage() {
  return <Studio config={config} />
}