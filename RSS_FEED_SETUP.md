# RSS Feed Setup Guide

## Current Status
The RSS feed component is fully functional but the configured WorkFlo RSS URL is currently returning a 404 error.

## RSS Feed URL Issue
The primary RSS feed URL is not accessible:
- URL: `https://rss.workflo.it/i/?a=rss&get=c_4&rid=6893c5809212b&hours=168`
- Status: Returns 404 Not Found

## How to Fix

### Option 1: Update RSS Feed URL
If you have the correct RSS feed URL from WorkFlo:

1. Edit `.env.local` file
2. Update or add the RSS feed URL:
   ```
   RSS_FEED_URL=https://your-correct-rss-url.com/feed
   ```
3. Restart the development server

### Option 2: Enable Fallback Feeds (For Testing)
To test with working tech news feeds:

1. Edit `.env.local` file
2. Uncomment and set:
   ```
   RSS_USE_FALLBACK=true
   ```
3. Restart the development server

This will use Hacker News, TechCrunch, or Wired RSS feeds as fallback.

### Option 3: Test Mode
Without changing configuration, append `?test=true` to see it working:
- Visit: `http://localhost:3000/api/rss-feed?test=true`

### Option 4: Custom Feed URL via Query Parameter
Test any RSS feed directly:
- Example: `http://localhost:3000/api/rss-feed?feed=https://example.com/rss`

## Implementation Details

### Files Modified
1. `/app/api/rss-feed/route.ts` - RSS feed API endpoint with:
   - Multiple URL fallback support
   - Environment variable configuration
   - Detailed error logging
   - CORS handling
   - Support for both RSS and Atom formats

2. `/components/NewsFeed.tsx` - RSS feed display component with:
   - Enhanced error handling
   - Support for RSS and Atom formats
   - HTML entity decoding
   - Filtering of non-article content
   - Better debugging output

3. `/.env.local` - Configuration file for RSS feeds

### Features Implemented
- ✅ Server-side RSS fetching (no CORS issues)
- ✅ Multiple RSS URL fallback system
- ✅ Environment variable configuration
- ✅ Test mode with working feeds
- ✅ Detailed error messages and logging
- ✅ Support for both RSS 2.0 and Atom feeds
- ✅ Automatic HTML entity decoding
- ✅ Filtering to show only RSS articles
- ✅ Graceful error handling with informative messages

### Debugging
Check the browser console and server logs for detailed information:
- Server logs show which URLs were tried and their responses
- Browser console shows parsing details and item counts
- Look for "X-RSS-Source" header in network tab to see which feed was used

## Possible Issues with WorkFlo RSS

The RSS feed might be:
1. **Behind authentication** - May need API key or authentication headers
2. **IP restricted** - May only work from specific IP addresses
3. **Temporarily down** - Server maintenance or issues
4. **Wrong URL format** - The parameters might have changed

## Contact WorkFlo Support
If the RSS feed continues to fail, contact WorkFlo support to:
1. Verify the correct RSS feed URL
2. Check if authentication is required
3. Confirm if there are IP restrictions
4. Get updated documentation for their RSS service