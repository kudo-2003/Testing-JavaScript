const { test, expect } = require('@playwright/test');

test('trang web có tiêu đề chính xác', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});


