
import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  const user = {
    name: 'Test User',
    email: `test-${Date.now()}@example.com`,
    password: 'password123',
  };

  test('should allow a user to sign up and then sign in', async ({ page }) => {
    // Sign Up
    await page.goto('/signup');
    await page.waitForLoadState('networkidle'); // Wait for the page to be fully loaded
    await page.fill('input[id="name"]', user.name);
    await page.fill('input[id="email"]', user.email);
    await page.fill('input[id="password"]', user.password);
    await page.click('button[type="submit"]');
    await page.waitForURL('/dashboard');
    expect(page.url()).toContain('/dashboard');

    const welcomeMessage = await page.textContent('h1');
    expect(welcomeMessage).toContain('Breakdown per Platform');

    // Manually clear cookies to simulate a sign out
    await page.context().clearCookies();

    // Verify that the user is redirected to the sign-in page when trying to access the dashboard
    await page.goto('/dashboard');
    await page.waitForURL('/signin');
    expect(page.url()).toContain('/signin');

    // Sign In
    await page.waitForLoadState('networkidle');
    await page.fill('input[id="email"]', user.email);
    await page.fill('input[id="password"]', user.password);
    await page.click('button[type="submit"]');
    await page.waitForURL('/dashboard');
    expect(page.url()).toContain('/dashboard');
  });
});
