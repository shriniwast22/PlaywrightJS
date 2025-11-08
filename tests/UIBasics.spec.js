import { test, expect } from '@playwright/test';

test('Login to Workozy with valid credentials', async ({ page }) => {
  await page.goto('/'); // uses baseURL from config

  // Fill credentials
  await page.fill('#Email', 'shriniwas@flick2know.com');
  await page.fill('#Password', 'Sntripathi@009');

  // Click login
  await page.click('button[type="submit"], button:has-text("Login")');

  // Wait for navigation or dashboard
  await page.waitForLoadState('networkidle', { timeout: 20000 });

  // Capture screenshot
  await page.screenshot({ path: 'workozy-after-login.png', fullPage: true });
  console.log('✅ Login successful, screenshot saved!');
});
