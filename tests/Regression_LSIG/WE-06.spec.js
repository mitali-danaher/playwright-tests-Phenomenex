const { test, expect } = require('@playwright/test');

test('WE-06 Verify Scroll to Top of the Page Button', async ({ page }) => {
  await page.goto('https://stage.lifesciences.danaher.com/');

  await page.getByRole('button', { name: 'Accept All Cookies' }).click();

  // Scroll to make "Top" visible
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  await page.waitForTimeout(2000);

  // Click visible parent
  await page.locator('a, button').filter({ hasText: 'Top' }).click();
});