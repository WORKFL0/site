import { NextRequest, NextResponse } from 'next/server'

const HUBSPOT_PORTAL_ID = '26510736'
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY // Add this to your .env.local if you have one

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formId, fields, context } = body

    if (!formId || !fields) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Prepare the submission data
    const submissionData = {
      fields: Object.entries(fields).map(([name, value]) => ({
        objectTypeId: '0-1',
        name,
        value
      })),
      context: {
        pageUri: context?.pageUri || request.headers.get('referer') || 'https://workflo.it',
        pageName: context?.pageName || 'WorkFlo Website',
        ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
        hutk: context?.hutk || '', // HubSpot tracking cookie
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: 'I agree to allow WorkFlo to store and process my personal data.',
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: 'I agree to receive marketing communications from WorkFlo.'
            }
          ]
        }
      }
    }

    // Submit to HubSpot Forms API
    const hubspotResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(HUBSPOT_API_KEY && { 'Authorization': `Bearer ${HUBSPOT_API_KEY}` })
        },
        body: JSON.stringify(submissionData)
      }
    )

    if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.text()
      console.error('HubSpot submission error:', errorData)
      
      return NextResponse.json(
        { 
          error: 'Failed to submit form',
          details: errorData
        },
        { status: hubspotResponse.status }
      )
    }

    const responseData = await hubspotResponse.json()

    return NextResponse.json({
      success: true,
      data: responseData
    })

  } catch (error) {
    console.error('HubSpot API error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// GET endpoint to verify HubSpot configuration
export async function GET(request: NextRequest) {
  try {
    // Return configuration status (without exposing sensitive data)
    return NextResponse.json({
      configured: true,
      portalId: HUBSPOT_PORTAL_ID,
      forms: {
        contact: 'acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0',
        newsletter: 'e92de02c-71b0-4a68-aedd-3b6acb0f5f67'
      },
      region: 'eu1',
      scriptUrl: 'https://js-eu1.hsforms.net/forms/embed/v2.js'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Configuration error' },
      { status: 500 }
    )
  }
}