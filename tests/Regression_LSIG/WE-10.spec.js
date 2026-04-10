const { test, expect } = require('@playwright/test');

test('WE-10 Verify Scroll to Top of the Page Button', async ({ page }) => {

  await page.goto('https://stage.lifesciences.danaher.com/');

});