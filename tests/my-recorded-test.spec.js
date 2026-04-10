import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stage.lifesciences.danaher.com/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).dblclick();
  await page.locator('div').filter({ hasText: 'Analytical Solutions Enabling' }).nth(3).dblclick();
});