import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Point to the folder where your test files are located
  testDir: './tests',

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use (list, html, etc.)
  reporter: 'html',

  // Shared settings for all the projects
  use: {
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
    launchOptions: {
      args: ['--disable-http2'],   // 👈 Force HTTP/1.1 instead of HTTP/2
    },
  },

  // Configure projects for different browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Uncomment if you need to run a local dev server before tests
  /*
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
  */
});
