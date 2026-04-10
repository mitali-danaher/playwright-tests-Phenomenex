const { test, expect } = require('@playwright/test');

test('WE-01 Promotions JoinToday', async ({ page }) => {

  // ✅ Step 1: Open base page
  await page.goto('https://stage.lifesciences.danaher.com/us/en/new-lab.html');

  // ✅ Step 2: Handle cookie popup (non-blocking)
  await page.getByRole('button', { name: 'Accept All Cookies' })
    .click({ timeout: 5000 })
    .catch(() => {});

  // ✅ Step 3: Navigate to Join Today page
  await page.getByRole('link', { name: 'Join Today' }).first().click();

  // ✅ Step 4: Ensure navigation completed
  await expect(page).toHaveURL(/join-today/);

  // ✅ Step 5: Wait for form heading (robust)
  await expect(
    page.getByRole('heading', { name: /Ready to get started/i })
  ).toBeVisible();

  // ✅ Step 6: Fill form fields (correct locators)
  await page.locator('input[name="First_Name"]').fill('John');
  await page.locator('input[name="Last_Name"]').fill('Doe');
  await page.locator('input[name="Company_Name"]').fill('Test Company');
  await page.locator('input[name="Phone_Number"]').fill('1234567890');
  await page.locator('input[name="Postal_Code"]').fill('12345');

});