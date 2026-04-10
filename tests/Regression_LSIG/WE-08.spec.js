const { test, expect } = require('@playwright/test');

test('WE-06 Verify Scroll to Top of the Page Button', async ({ page }) => {

  await page.goto('https://stage.lifesciences.danaher.com/');

  // Accept cookies
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();

  // Go to login
  await page.getByRole('link', { name: 'Login Register' }).click();

  // Fill email
  await page.getByRole('textbox', { name: 'Work email address' }).fill('mithali.himane@dhlscontractors.com');
  await page.getByRole('button', { name: 'Continue' }).click();

  // ✅ Fill password correctly (only input field)
  await page.locator('input[type="password"]').fill('Mitali@123');

  // Continue login
  await page.getByRole('button', { name: 'Continue' }).click();

  // Wait for login to complete
  await page.waitForLoadState('networkidle');

  // Go to cart page
  await page.goto('https://stage.lifesciences.danaher.com/us/en/cart.html');

  // Verify empty cart
  await expect(page.locator('#danaher')).toContainText('Your cart is empty');

});