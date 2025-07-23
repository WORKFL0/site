// Example Custom API Server for Traditional Media Data
// This can be implemented in Node.js/Express to serve TV, Radio, and Guerrilla campaign data

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Example data structure for traditional media campaigns
const campaignData = {
  tv: [
    {
      campaignId: "TV-2024-001",
      campaignName: "Brand Awareness Q1",
      platform: "TV",
      channel: "ABC Network",
      timeSlot: "Prime Time",
      date: "2024-01-15",
      impressions: 2500000,
      grp: 12.5,
      reach: 1800000,
      frequency: 1.4,
      spend: 50000,
      market: "National"
    }
  ],
  radio: [
    {
      campaignId: "RADIO-2024-001",
      campaignName: "Drive Time Campaign",
      platform: "Radio",
      station: "FM 101.5",
      timeSlot: "Morning Drive",
      date: "2024-01-15",
      impressions: 500000,
      reach: 350000,
      frequency: 1.43,
      spend: 15000,
      market: "New York Metro"
    }
  ],
  guerrilla: [
    {
      campaignId: "GUERR-2024-001",
      campaignName: "Street Art Campaign",
      platform: "Guerrilla",
      type: "Street Marketing",
      location: "Times Square",
      date: "2024-01-15",
      estimatedImpressions: 100000,
      engagements: 5000,
      socialMentions: 1200,
      spend: 25000,
      market: "New York City"
    }
  ]
};

// API Routes

// Get all campaign data
app.get('/api/campaigns', (req, res) => {
  const { platform, startDate, endDate } = req.query;
  
  let results = [];
  
  // Filter by platform if specified
  if (platform) {
    results = campaignData[platform.toLowerCase()] || [];
  } else {
    // Return all platforms
    results = [
      ...campaignData.tv,
      ...campaignData.radio,
      ...campaignData.guerrilla
    ];
  }
  
  // Standardize the response format
  const standardizedResults = results.map(campaign => ({
    campaignId: campaign.campaignId,
    campaignName: campaign.campaignName,
    platform: campaign.platform,
    impressions: campaign.impressions || campaign.estimatedImpressions || 0,
    clicks: campaign.engagements || 0, // Traditional media doesn't have clicks
    conversions: 0, // Would need separate tracking
    spend: campaign.spend || 0,
    revenue: 0, // Would need to be calculated separately
    metadata: {
      ...campaign
    }
  }));
  
  res.json({
    success: true,
    data: standardizedResults,
    count: standardizedResults.length
  });
});

// Get specific campaign
app.get('/api/campaigns/:campaignId', (req, res) => {
  const { campaignId } = req.params;
  
  // Search across all platforms
  let campaign = null;
  for (const platform of Object.keys(campaignData)) {
    campaign = campaignData[platform].find(c => c.campaignId === campaignId);
    if (campaign) break;
  }
  
  if (!campaign) {
    return res.status(404).json({
      success: false,
      error: 'Campaign not found'
    });
  }
  
  res.json({
    success: true,
    data: campaign
  });
});

// Add new campaign data (for testing)
app.post('/api/campaigns', (req, res) => {
  const { platform, ...campaignInfo } = req.body;
  
  if (!campaignData[platform]) {
    campaignData[platform] = [];
  }
  
  const newCampaign = {
    campaignId: `${platform.toUpperCase()}-${Date.now()}`,
    platform: platform,
    ...campaignInfo,
    createdAt: new Date().toISOString()
  };
  
  campaignData[platform].push(newCampaign);
  
  res.status(201).json({
    success: true,
    data: newCampaign
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Custom Media API running on http://localhost:${PORT}`);
});

// Example usage in n8n:
// 1. Deploy this API on your server
// 2. In n8n HTTP Request node, set URL to: http://your-server:3000/api/campaigns
// 3. Add authentication headers if needed
// 4. Process the response data in your workflow