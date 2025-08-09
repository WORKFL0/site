import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('RSS Feed and Logos Validation', () => {
  test('RSS Feed is available and functional', async ({ page }) => {
    // Locate and fetch RSS feed link
    await page.goto(`${BASE_URL}/blog`);
    const rssFeedLink = await page.$('a[rel="alternate"][type="application/rss+xml"]');
    expect(rssFeedLink).not.toBeNull();

    // Get RSS feed URL
    const rssFeedUrl = await rssFeedLink?.getAttribute('href');
    expect(rssFeedUrl).toBeTruthy();

    // Fetch RSS feed
    const response = await page.request.get(rssFeedUrl || '');
    expect(response.status()).toBe(200);

    // Optional: Basic RSS feed content validation
    const responseBody = await response.text();
    expect(responseBody).toContain('<rss');
    expect(responseBody).toContain('<channel>');
  });

  test('Company Logos display in Sector Ervaring section', async ({ page }) => {
    await page.goto(`${BASE_URL}/diensten`);

    // Select logos container
    const logosContainer = await page.$('.logos-container');
    expect(logosContainer).not.toBeNull();

    // Check for logos
    const logos = await page.$$('.logos-container img');
    expect(logos.length).toBeGreaterThan(0);

    // Check each logo loads successfully
    for (const logo of logos) {
      const src = await logo.getAttribute('src');
      expect(src).toBeTruthy();

      // Optional: Check image is loaded and visible
      const naturalWidth = await logo.evaluate((img: HTMLImageElement) => img.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    }
  });
});