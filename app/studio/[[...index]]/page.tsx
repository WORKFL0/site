'use client'

import { NextStudio } from 'next-sanity/studio'
const config = require('../../../sanity.config')

export default function StudioPage() {
  return <NextStudio config={config} />
}