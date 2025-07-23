import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error(
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local. ' +
    'Get your project ID from https://sanity.io/manage or by running `npx sanity manage`'
  )
}

export default defineConfig({
  name: 'default',
  title: 'Workflo Website CMS',
  
  projectId,
  dataset,
  
  plugins: [
    deskTool(),
    visionTool({
      // Enable Vision tool only in development or for admin users
      defaultApiVersion: '2023-05-03',
    }),
  ],
  
  schema: {
    types: [
      // Add your schema types here
      // Example:
      // {
      //   name: 'page',
      //   title: 'Page',
      //   type: 'document',
      //   fields: [
      //     {
      //       name: 'title',
      //       title: 'Title',
      //       type: 'string'
      //     }
      //   ]
      // }
    ],
  },
  
  basePath: '/studio',
})