const { test, expect } = require('@playwright/test');

test('WE-09 Verify Solutions Menu Links', async ({ page }) => {
  await page.goto('https://stage.lifesciences.danaher.com/');

  // Close cookie banner if present
  const cookieBtn = page.locator('button:has-text("Accept")');
  if (await cookieBtn.isVisible().catch(() => false)) {
    await cookieBtn.click();
    console.log('✅ Cookie banner closed');
  }

  // Hover the main "Solutions" link to trigger submenu
  const solutionsLink = page.getByRole('link', { name: 'Solutions', exact: true });
  await solutionsLink.hover();
  console.log('✅ Hovered over Solutions');

  // Wait for submenu animation/rendering
  await page.waitForTimeout(700); // adjust if animation is slower

  // Select the specific submenu <a>
  const mabLink = page.locator('li[data-content*="Monoclonal Antibody"] a');

  // **Force the submenu visible using evaluate** (overcomes CSS hiding)
  await mabLink.evaluate((el) => el.style.display = 'block');

  // Click the submenu
  await mabLink.click();
  console.log('✅ Clicked Monoclonal Antibody (MAbs)');

  // Verify navigation by checking unique header on the page
  const header = page.getByRole('heading', { name: /Monoclonal Antibody/i });
  await expect(header).toBeVisible({ timeout: 10000 });
  console.log('✅ Navigation verified');
});