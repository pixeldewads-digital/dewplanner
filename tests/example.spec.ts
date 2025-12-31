import { test, expect } from '@playwright/test';

test('take screenshots', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: '/home/jules/verification/landing_page.png' });

  await page.goto('http://localhost:3000/dashboard');
  await page.screenshot({ path: '/home/jules/verification/dashboard_page.png' });
});
