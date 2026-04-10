const { test, expect } = require('@playwright/test');

test('WE-07 Promotions_JoinToday', async ({ page }) => {

  await page.goto('https://stage.lifesciences.danaher.com/us/en/new-lab/promotions.html');

  // Accept cookies
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();

  // Click Join Today
  await page.getByRole('link', { name: 'Join Today' }).click();

  // Fill form
  await page.getByRole('textbox', { name: 'First_Name' }).fill('Mitali');
  await page.getByRole('textbox', { name: 'Last_Name' }).fill('Himane');
  await page.getByRole('textbox', { name: 'Email_Address' }).fill('mithali.himane@dhlscontractors.com');
  await page.getByRole('textbox', { name: 'Phone_Number' }).fill('791324');
  await page.getByRole('textbox', { name: 'Company_Name' }).fill('Test_Company');

  // ✅ Country dropdown (FIXED)
  await page.locator('label:has-text("Select")').first().click();
  await page.waitForSelector('text=United States');
  await page.getByText('United States', { exact: true }).click();

  // Other fields
  await page.getByRole('textbox', { name: 'Postal_Code' }).fill('15454');
  await page.getByRole('textbox', { name: 'Department' }).fill('BioMedical');

  // Checkboxes (minimal stable selection)
  await page.getByRole('checkbox', { name: 'Areas_of_Interest' }).first().check();
  await page.getByRole('checkbox', { name: 'OpCo_Interest' }).first().check();

  // Comments
  await page.getByRole('textbox', { name: 'OpCo_Comments' }).fill('Test');

  // Opt-in
  await page.getByRole('checkbox', { name: 'Email_Opt_In' }).check();

  // Submit form
  await page.getByRole('button', { name: 'Submit' }).click();

  // ✅ Assertions (important)
  await expect(page.getByRole('heading', { name: 'Thank You' })).toBeVisible();
  await expect(page.getByText('Your details have been')).toBeVisible();

  // Navigate back
  await page.getByRole('link', { name: 'Previous Page' }).click();

  // ✅ FIXED: specific locator instead of 'New-lab'
  await page.locator('a[href="/us/en/new-lab.html"]').click();

  // Final validations
  await expect(page.getByRole('heading', { name: 'Guiding Your Lab from' })).toBeVisible();

  await page.getByTitle('Home').click();

  await expect(page.getByRole('heading', { name: 'Unifying Insight, Speed, and' })).toBeVisible();
});