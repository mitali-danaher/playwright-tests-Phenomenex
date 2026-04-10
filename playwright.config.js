// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',                 // root folder for tests
  fullyParallel: true,                // run tests in files in parallel
  forbidOnly: !!process.env.CI,       // fail build if test.only is left
  retries: process.env.CI ? 2 : 0,   // retries only on CI
  workers: process.env.CI ? 3 : 4,   // parallel workers
  outputDir: process.env.PREVIEW_DIR || 'test-results', // test artifacts

  use: {
    baseURL: 'https://stage-shop.phenomenex.com',
    headless: true,
    viewport: { width: 1920, height: 1080 },
    slowMo: process.env.CI ? 0 : 200,
    trace: 'retain-on-failure',   // keep trace only on failure
    screenshot: 'on',             // take screenshots on failure
    video: 'retain-on-failure',   // keep video only on failure
    actionTimeout: process.env.CI ? 120_000 : 60_000,
    navigationTimeout: process.env.CI ? 180_000 : 90_000,
  },

  reporter: [
    ['html', { outputFolder: 'regression-report', open: 'never' }],
    ['list'],
    ['json', { outputFile: 'test-results.json' }]
  ],

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment if needed:
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});