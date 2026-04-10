const { test, expect } = require('@playwright/test');

test('WE-29 Verify Resources Menu Link for New Lab Program', async ({ page }) => {

  await page.goto('https://stage.lifesciences.danaher.com/');

  // Accept cookies
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();

  // Search
  await page.getByRole('textbox', { name: 'Search field with suggestions' })
    .fill('anatel-pat700-toc-analyzers');

  await page.getByRole('button', { name: 'Search' }).click();

  // Wait for results (REAL UI, not atomic component)
  const productLink = page.getByRole('link', {
    name: 'ANATEL PAT700 TOC Analyzers'
  });

  await expect(productLink).toBeVisible({ timeout: 15000 });

  // Validate result text
  await expect(productLink).toContainText('ANATEL PAT700');

  // Click result
  await productLink.scrollIntoViewIfNeeded();
  await productLink.click();

  // Validate navigation
  await expect(page).toHaveURL(/anatel|pat700/i);

  // Validate product page
  await expect(page.getByRole('heading', { level: 1 }))
    .toHaveText('ANATEL PAT700 TOC Analyzers');

});