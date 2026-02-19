const { test, expect } = require('@playwright/test');

test('playwright.dev has expected title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
});
