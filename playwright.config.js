// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'html', // ✅ generate HTML report

  use: {
    browserName: 'chromium',
    channel: 'chrome', // run in Google Chrome
    headless: false,
    baseURL: 'https://debug.workozy.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure', // capture on fail
    video: 'on-first-retry',       // 🎥 optional: record video on retry
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
});
