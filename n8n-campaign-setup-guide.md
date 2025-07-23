# n8n Media Campaign Monitoring Setup Guide

## Overview
This n8n workflow helps media agencies monitor advertising campaigns across multiple platforms and consolidate data for Power BI dashboards.

## Supported Platforms
- **Social Media**: Facebook, Instagram, LinkedIn, YouTube
- **Search**: Google Ads
- **Traditional**: TV, Radio (via custom APIs)
- **Other**: Guerrilla advertising (via custom APIs)

## Prerequisites

### 1. n8n Installation
- Self-hosted n8n instance or n8n.cloud account
- n8n version 1.0+ recommended

### 2. Platform Credentials
You'll need API credentials for each platform:

#### Facebook/Instagram (Meta)
- Facebook App ID
- Facebook App Secret
- Ad Account ID
- Access Token with `ads_read` permission

#### LinkedIn
- Client ID
- Client Secret
- Organization ID
- Access Token

#### YouTube
- Google Cloud Project
- YouTube Data API v3 enabled
- OAuth 2.0 credentials
- Channel ID

#### Google Ads
- Google Ads Customer ID
- Developer Token
- OAuth 2.0 credentials

#### Power BI
- Azure AD App Registration
- Power BI Workspace ID
- Dataset ID
- OAuth 2.0 credentials

## Setup Instructions

### Step 1: Import the Workflow
1. Open n8n
2. Click "Import from File"
3. Select `n8n-media-campaign-workflow.json`
4. Click "Import"

### Step 2: Configure Credentials
For each platform node:
1. Click on the node
2. Click "Create New" under Credentials
3. Enter your API credentials
4. Test the connection
5. Save

### Step 3: Update Configuration Node
Edit the "Configuration" node with your specific IDs:
- `adAccountId`: Your Facebook Ad Account ID
- `organizationId`: Your LinkedIn Organization ID
- `channelId`: Your YouTube Channel ID
- `customerId`: Your Google Ads Customer ID
- `apiEndpoint`: Your custom API endpoint for TV/Radio data
- `datasetId`: Your Power BI Dataset ID

### Step 4: Set Up Data Storage (Optional)
If using a database:
1. Create a PostgreSQL database
2. Run the schema creation script (see `database-schema.sql`)
3. Configure the "Store in Database" node with connection details

### Step 5: Configure Power BI Integration
1. Create a streaming dataset in Power BI
2. Note the Push URL and Dataset ID
3. Update the "Send to Power BI" node with these details

### Step 6: Test the Workflow
1. Disable the schedule trigger temporarily
2. Click "Execute Workflow" to test manually
3. Check each node for errors
4. Verify data appears in Power BI

### Step 7: Enable Automation
1. Enable the schedule trigger
2. Adjust the interval as needed (default: every 6 hours)
3. Save and activate the workflow

## Data Standardization

The workflow standardizes data from all platforms into this format:
- `timestamp`: When data was collected
- `platform`: Source platform name
- `campaignId`: Unique campaign identifier
- `campaignName`: Campaign name
- `impressions`: Number of times ad was shown
- `clicks`: Number of clicks
- `conversions`: Number of conversions
- `spend`: Amount spent
- `revenue`: Revenue generated
- `ctr`: Click-through rate (calculated)
- `cpc`: Cost per click (calculated)
- `roas`: Return on ad spend (calculated)

## Troubleshooting

### Common Issues

1. **Authentication Errors**
   - Verify API credentials are correct
   - Check if tokens have expired
   - Ensure proper permissions/scopes

2. **Rate Limiting**
   - Adjust schedule interval
   - Implement pagination for large datasets
   - Add delay between API calls

3. **Data Transformation Errors**
   - Check field mappings
   - Verify data types
   - Add error handling in code nodes

### Error Handling
The workflow includes basic error handling:
- Failed nodes won't stop the entire workflow
- Errors are logged for debugging
- Partial data can still be processed

## Next Steps

1. **Add More Platforms**: Extend with TikTok, Snapchat, etc.
2. **Enhanced Analytics**: Add more calculated metrics
3. **Alerting**: Set up notifications for anomalies
4. **Data Validation**: Add quality checks
5. **Historical Data**: Implement backfilling mechanism

## Support
For n8n-specific issues: https://community.n8n.io/
For platform API docs:
- Meta: https://developers.facebook.com/docs/marketing-apis
- LinkedIn: https://docs.microsoft.com/en-us/linkedin/marketing/
- YouTube: https://developers.google.com/youtube/analytics
- Google Ads: https://developers.google.com/google-ads/api
- Power BI: https://docs.microsoft.com/en-us/rest/api/power-bi/