import { test, expect } from '@playwright/test';

// Configure base URL from environment or default
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// Define routes to test
const ROUTES = [
  '/',
  '/services',
  '/diensten',
  '/privacy',
  '/terms',
  '/tevredenheidscheck'
];

// Breakpoints for responsive testing
const BREAKPOINTS = [
  { width: 375, height: 667 },   // iPhone 8
  { width: 768, height: 1024 },  // iPad
  { width: 1280, height: 800 },  // Typical laptop
  { width: 1920, height: 1080 }  // Desktop
];

test.describe('Comprehensive Workflo Website QA', () => {
  // Configure test timeout
  test.setTimeout(60000);

  // Test all routes for basic functionality
  ROUTES.forEach(route => {
    test(`Page ${route} loads successfully`, async ({ page }) => {
      try {
        const response = await page.goto(`${BASE_URL}${route}`, { 
          waitUntil: 'networkidle',
          timeout: 30000 
        });
        expect(response?.status()).toBeLessThan(400);
        
        // Additional checks
        const title = await page.title();
        expect(title).toBeTruthy();
      } catch (error) {
        console.error(`Error loading route ${route}:`, error);
        throw error;
      }
    });
  });

  // Responsive Design Tests
  ROUTES.forEach(route => {
    BREAKPOINTS.forEach(breakpoint => {
      test(`Responsive layout for ${route} at ${breakpoint.width}x${breakpoint.height}`, async ({ page }) => {
        await page.setViewportSize(breakpoint);
        
        try {
          await page.goto(`${BASE_URL}${route}`, { 
            waitUntil: 'networkidle',
            timeout: 30000 
          });
          
          // Check for visible main content
          const mainContent = await page.$('main');
          expect(mainContent).not.toBeNull();

          // Basic layout checks
          const bodyWidth = await page.evaluate(() => document.body.clientWidth);
          expect(bodyWidth).toBeGreaterThan(0);
        } catch (error) {
          console.error(`Error testing responsive layout for ${route} at ${breakpoint.width}x${breakpoint.height}:`, error);
          throw error;
        }
      });
    });
  });

  // Interactive Elements Test
  test('Interactive elements are functional', async ({ page }) => {
    await page.goto(BASE_URL);

    // Test buttons
    const buttons = await page.$$('button');
    for (const button of buttons) {
      expect(await button.isEnabled()).toBeTruthy();
    }

    // Test form interactions (if forms exist)
    const forms = await page.$$('form');
    for (const form of forms) {
      const inputs = await form.$$('input');
      for (const input of inputs) {
        expect(await input.isEditable()).toBeTruthy();
      }
    }
  });

  // SEO and Metadata Test
  test('Pages have proper SEO metadata', async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(`${BASE_URL}${route}`);
      
      // Check title exists and has reasonable length
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(10);
      expect(title.length).toBeLessThan(70);

      // Check meta description
      const metaDescription = await page.$('meta[name="description"]');
      expect(metaDescription).not.toBeNull();
    }
  });

  // Performance Metrics (Basic Check)
  test('Page load performance', async ({ page }) => {
    const performanceMetrics = [];

    for (const route of ROUTES) {
      const startTime = Date.now();
      const response = await page.goto(`${BASE_URL}${route}`, { 
        waitUntil: 'networkidle',
        timeout: 30000 
      });
      const loadTime = Date.now() - startTime;

      performanceMetrics.push({
        route,
        loadTime,
        status: response?.status()
      });
    }

    // Log performance metrics (you can adjust thresholds)
    performanceMetrics.forEach(metric => {
      expect(metric.loadTime).toBeLessThan(5000); // Max 5 seconds
    });
  });

  // Accessibility Basic Check
  test('Basic accessibility checks', async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(`${BASE_URL}${route}`);
      
      // Check for semantic HTML
      const semanticElements = await page.$$('header, nav, main, footer, section, article');
      expect(semanticElements.length).toBeGreaterThan(0);

      // Check for alt text on images
      const images = await page.$$('img');
      for (const img of images) {
        const altText = await img.getAttribute('alt');
        expect(altText).toBeTruthy();
      }
    }
  });

  // Iframe Integration Test
  test('Iframe integrations work', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const iframes = await page.$$('iframe');
    for (const iframe of iframes) {
      // Check iframe src exists
      const src = await iframe.getAttribute('src');
      expect(src).toBeTruthy();
    }
  });

  // Footer and Navigation Links Test
  test('Footer and navigation links are valid', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Test Footer Links
    const footerLinks = await page.$$('footer a');
    for (const link of footerLinks) {
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
    }

    // Test Navigation Links
    const navLinks = await page.$$('nav a');
    for (const link of navLinks) {
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
    }
  });
});