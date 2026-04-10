const { test, expect } = require('@playwright/test');

test('WE-26 Verify search product filter using utm parameter', async ({ page }) => {

  await page.goto('https://stage.lifesciences.danaher.com/us/en/search.html#q=ANATEL%20PAT700%20TOC%20Analyzers');

  // Accept cookies
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();

  // Wait for page + search to settle
  await page.waitForLoadState('networkidle');

  // Wait for actual product link (NOT atomic component)
  const productLink = page.getByRole('link', {
    name: 'ANATEL PAT700 TOC Analyzers'
  });

  await expect(productLink).toBeVisible({ timeout: 15000 });

  // Scroll to avoid header overlap
  await productLink.scrollIntoViewIfNeeded();

  // Click safely
  await productLink.click();

  // Validate navigation
  await expect(page).toHaveURL(/anatel|pat700/i);

  // Validate page content
  await expect(page.getByRole('heading', { level: 1 }))
    .toHaveText('ANATEL PAT700 TOC Analyzers');

});