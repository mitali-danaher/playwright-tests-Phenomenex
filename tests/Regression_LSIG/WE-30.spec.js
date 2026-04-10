const { test, expect } = require('@playwright/test');

test('WE-30 Verify Products Description Tab and details', async ({ page }) => {

  await page.goto('https://stage.lifesciences.danaher.com/us/en/products/family/axon-digidata-1550b-low-noise-data-acquisition-system-plus-humsilencer.html');

  // Wait for page load
  await expect(
    page.getByRole('heading', { name: /Axon.*Digidata.*1550B/i })
  ).toBeVisible();

  // ✅ Scope inside MAIN to avoid header duplicate
  const main = page.getByRole('main');

  await expect(
    main.getByRole('link', { name: 'Molecular Devices', exact: true })
  ).toBeVisible();

  // Verify product title
  await expect(main.locator('h1'))
    .toContainText('Axon™ Digidata® 1550B');

  // Verify description text
  await expect(
    main.getByText(/low-noise digitizer/i)
  ).toBeVisible();

  // Verify CTA button
  await expect(
    main.getByRole('button', { name: 'Request a Quote' })
  ).toBeVisible();

  // Verify Features section
  await expect(
    main.getByRole('heading', { name: 'Features' })
  ).toBeVisible();

  // Verify feature content
  await expect(
    main.getByText(/noise cancellation/i)
  ).toBeVisible();

  // Verify Description section
  await expect(
    main.getByRole('heading', { name: /digitizer that enables/i })
  ).toBeVisible();

});