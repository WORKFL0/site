import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('HubSpot Form Integration', () => {
  test('HubSpot Contact Form submission works', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`);

    // Locate HubSpot form 
    const form = await page.$('form[data-hubspot-form="true"]');
    expect(form).not.toBeNull();

    // Fill out form fields (adjust selectors based on actual form)
    await page.fill('input[name="email"]', 'test@workflo.it');
    await page.fill('input[name="firstname"]', 'Test');
    await page.fill('input[name="lastname"]', 'User');
    await page.fill('textarea[name="message"]', 'Automated test submission');

    // Submit form and wait for network response
    const [response] = await Promise.all([
      page.waitForResponse(
        (response) => 
          response.url().includes('hubspot') && 
          response.status() === 200
      ),
      page.click('button[type="submit"]')
    ]);

    expect(response.status()).toBe(200);
  });

  test('Newsletter Form submission works', async ({ page }) => {
    await page.goto(BASE_URL);

    // Locate Newsletter form
    const newsletterForm = await page.$('form[data-newsletter-form="true"]');
    expect(newsletterForm).not.toBeNull();

    // Fill out newsletter form
    await page.fill('input[name="email"]', 'newsletter-test@workflo.it');

    // Submit form and wait for network response
    const [response] = await Promise.all([
      page.waitForResponse(
        (response) => 
          response.url().includes('hubspot') && 
          response.status() === 200
      ),
      page.click('button[type="submit"]')
    ]);

    expect(response.status()).toBe(200);
  });
});