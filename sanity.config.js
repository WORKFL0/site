const { defineConfig } = require('sanity')
const { deskTool } = require('sanity/desk')
const { visionTool } = require('@sanity/vision')
const { schemaTypes } = require('./sanity/schemas')

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-project'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

module.exports = defineConfig({
  name: 'default',
  title: 'Workflo Website',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})