import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

// Import the shared schema types (already defined in ./sanity/schemas)
import { schemaTypes } from './sanity/schemas'

// Use environment variables when available, otherwise fall back to the hard-coded defaults that were in the previous JS config
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET       || 'production'

export default defineConfig({
  name: 'default',
  title: 'Workflo Website',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})