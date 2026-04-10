const { test: base } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const test = base.extend({
  page: async ({ page }, use, testInfo) => {
    const actions = ['click', 'fill', 'goto', 'press', 'selectOption', 'hover', 'check', 'uncheck'];
    actions.forEach(actionName => {
      if (typeof page[actionName] === 'function') {
        const original = page[actionName].bind(page);
        page[actionName] = async (...args) => {
          const result = await original(...args);
          await captureStepScreenshot(page, testInfo, actionName);
          return result;
        };
      }
    });
    await use(page);
  },
});

async function captureStepScreenshot(page, testInfo, action) {
  const safeName = testInfo.title.replace(/[^a-z0-9]/gi, '_');
  const folder = path.join(__dirname, '..', 'visual-snapshots');
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
  const fileName = `${safeName}_${action}_${Date.now()}.png`;
  await page.screenshot({ path: path.join(folder, fileName), fullPage: true });
}

module.exports = { test, expect: base.expect };