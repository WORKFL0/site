# HubSpot Form Integration Fix

## Summary of Changes

Based on the client's provided script references from their old working site, I've updated the HubSpot form integration with the correct configuration.

### Key Updates Made:

1. **Portal ID Updated**: Changed from `143658118` to `26510736` (extracted from client's script: `https://js-eu1.hsforms.net/forms/embed/26510736.js`)

2. **Region Confirmed**: `eu1` (correct based on client's scripts)

3. **Script Loading**: Updated to use `defer` attribute as in the client's working implementation

4. **Form ID**: Currently using placeholder `acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0` - **THIS NEEDS TO BE UPDATED**

## Action Required from Client

### Finding the Correct Form ID:

The share link `https://share-eu1.hsforms.com/1rP7I-sWWT-CqFO1L9Ctvcwfs7tc` contains an encoded reference, not the actual form ID. To get the correct form ID:

1. **Log into HubSpot** (Portal ID: 26510736)
2. Navigate to **Marketing → Forms**
3. Find your contact form
4. Click on the form to open it
5. Look for the form ID in one of these places:
   - The URL in your browser's address bar
   - The "Share" or "Embed" section
   - Form settings or properties
6. The form ID should be in UUID format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

### Testing Tools Available:

1. **Diagnostic Page**: `/hubspot-diagnostic`
   - Use this to test different form IDs
   - Shows system status and debug information
   - Provides real-time testing capability

2. **Test Page**: `/test-hubspot`
   - Shows the form with current configuration
   - Displays status indicators and console logs

3. **Contact Page**: `/contact`
   - The actual production page where the form appears
   - Press `Ctrl/Cmd + Shift + D` to toggle debug panel

## Files Modified:

- `/components/forms/HubSpotForm.tsx` - Main form component
- `/app/contact/page.tsx` - Contact page implementation
- `/app/test-hubspot/page.tsx` - Test page
- `/app/hubspot-diagnostic/page.tsx` - New diagnostic tool

## Current Configuration:

```javascript
{
  region: "eu1",
  portalId: "26510736",
  formId: "acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0" // NEEDS UPDATE
}
```

## Next Steps:

1. Client provides the correct form ID from their HubSpot account
2. Update the `formId` in all three locations:
   - `/app/contact/page.tsx`
   - `/app/test-hubspot/page.tsx`
   - `/components/forms/HubSpotForm.tsx` (if hardcoded anywhere)

3. Test the form at `/test-hubspot` or `/hubspot-diagnostic`
4. Once confirmed working, the form will work on the production `/contact` page

## Troubleshooting:

If the form still doesn't load after updating the form ID:

1. Check browser console for errors (F12 → Console)
2. Disable ad blockers temporarily
3. Verify the portal ID is correct (26510736)
4. Ensure you're using the EU1 region
5. Use the diagnostic tool at `/hubspot-diagnostic` to check system status

## Reference Scripts from Client's Old Site:

- Main embed: `https://js-eu1.hsforms.net/forms/embed/v2.js?ver=11.3.6`
- Portal script: `https://js-eu1.hsforms.net/forms/embed/26510736.js?ver=11.3.6`
- Share link: `https://share-eu1.hsforms.com/1rP7I-sWWT-CqFO1L9Ctvcwfs7tc`