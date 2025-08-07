import { NextRequest, NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const action = searchParams.get('action')
    const databaseId = process.env.NOTION_BLOG_DATABASE_ID

    if (!databaseId) {
      return NextResponse.json(
        { error: 'Notion database ID not configured' },
        { status: 500 }
      )
    }

    switch (action) {
      case 'pages':
        // Fetch all pages from the database
        const response = await notion.databases.query({
          database_id: databaseId,
          sorts: [
            {
              property: 'Created',
              direction: 'descending',
            },
          ],
        })

        return NextResponse.json({
          success: true,
          data: response.results,
        })

      case 'page':
        // Fetch a specific page
        const pageId = searchParams.get('id')
        if (!pageId) {
          return NextResponse.json(
            { error: 'Page ID required' },
            { status: 400 }
          )
        }

        const page = await notion.pages.retrieve({ page_id: pageId })
        const blocks = await notion.blocks.children.list({
          block_id: pageId,
        })

        return NextResponse.json({
          success: true,
          data: {
            page,
            blocks: blocks.results,
          },
        })

      default:
        // Database info
        const database = await notion.databases.retrieve({
          database_id: databaseId,
        })

        return NextResponse.json({
          success: true,
          data: database,
        })
    }
  } catch (error) {
    console.error('Notion API error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch from Notion',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content, type = 'blog' } = body
    const databaseId = process.env.NOTION_BLOG_DATABASE_ID

    if (!databaseId) {
      return NextResponse.json(
        { error: 'Notion database ID not configured' },
        { status: 500 }
      )
    }

    // Create a new page in Notion
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: title || 'Untitled',
              },
            },
          ],
        },
        Type: {
          select: {
            name: type,
          },
        },
        Status: {
          select: {
            name: 'Draft',
          },
        },
        Created: {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
      children: content ? [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: content,
                },
              },
            ],
          },
        },
      ] : [],
    })

    return NextResponse.json({
      success: true,
      data: response,
    })
  } catch (error) {
    console.error('Notion API error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to create in Notion',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { pageId, properties } = body

    if (!pageId) {
      return NextResponse.json(
        { error: 'Page ID required' },
        { status: 400 }
      )
    }

    // Update page properties
    const response = await notion.pages.update({
      page_id: pageId,
      properties,
    })

    return NextResponse.json({
      success: true,
      data: response,
    })
  } catch (error) {
    console.error('Notion API error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to update in Notion',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const pageId = searchParams.get('id')

    if (!pageId) {
      return NextResponse.json(
        { error: 'Page ID required' },
        { status: 400 }
      )
    }

    // Archive the page (Notion doesn't support hard delete via API)
    const response = await notion.pages.update({
      page_id: pageId,
      archived: true,
    })

    return NextResponse.json({
      success: true,
      data: response,
    })
  } catch (error) {
    console.error('Notion API error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to delete in Notion',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}