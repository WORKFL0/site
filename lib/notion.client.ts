import { Client } from '@notionhq/client'

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

// Extract database ID from the full URL if needed
const DATABASE_ID = (process.env.NOTION_DB_ID || '')
  .split('?')[0] // Remove query parameters
  .replace(/-/g, '') // Remove hyphens if any

export async function queryDatabase(filter?: any) {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: filter,
    })
    return response.results
  } catch (error) {
    console.error('Notion query error:', error)
    return []
  }
}

export async function getPage(pageId: string) {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId })
    return response
  } catch (error) {
    console.error('Notion page error:', error)
    return null
  }
}

export async function getBlocks(blockId: string) {
  try {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
    })
    return response.results
  } catch (error) {
    console.error('Notion blocks error:', error)
    return []
  }
}

// Helper to extract plain text from Notion rich text
export function getPlainText(richText: any[]): string {
  if (!richText || !Array.isArray(richText)) return ''
  return richText.map(text => text.plain_text || '').join('')
}

// Helper to extract URL from Notion file object
export function getFileUrl(file: any): string {
  if (!file) return ''
  if (file.type === 'external') {
    return file.external?.url || ''
  }
  if (file.type === 'file') {
    return file.file?.url || ''
  }
  return ''
}

export { notion }