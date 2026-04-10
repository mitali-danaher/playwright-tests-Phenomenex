const { test, expect } = require('@playwright/test');

test('WE-05 Verify Scroll to Top Button', async ({ page }) => {

  await page.goto('https://stage.lifesciences.danaher.com/');

  // Accept cookies
  await page.getByRole('button', { name: /accept all cookies/i })
    .click({ timeout: 5000 })
    .catch(() => {});

  // ✅ REMOVE overlay completely (important)
  await page.evaluate(() => {
    const overlay = document.querySelector('.onetrust-pc-dark-filter');
    if (overlay) overlay.remove();
  });

  // Scroll down
  await page.mouse.wheel(0, 4000);

  const topButton = page.locator('[aria-label*="top" i]');

  await expect(topButton).toBeVisible();

  // ✅ Normal click (NO force)
  await topButton.click();

  // ✅ Verify scroll worked
  await expect.poll(async () => {
    return await page.evaluate(() => window.scrollY);
  }, {
    timeout: 10000
  }).toBeLessThan(10);

});