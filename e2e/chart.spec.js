import { test, expect } from '@playwright/test';

test.describe('Chart Page E2E', () => {
  test('Chart page loads correctly', async ({ page }) => {
    // Go to homepage
    await page.goto('/');

    // Check heading is visible
    await expect(page.getByRole('heading', { name: /Calories & Steps Trend/i })).toBeVisible();

    // Check chart exists (find first svg)
    await expect(page.locator('svg').first()).toBeVisible();

    // Check note under the chart
    await expect(page.getByText('Steps = durationMinutes × 100')).toBeVisible();

    // Check table headers (use first() to avoid strict mode error)
    await expect(page.getByText('Date').first()).toBeVisible();
    await expect(page.getByText('Calories').first()).toBeVisible();
    await expect(page.getByText('Duration (min)').first()).toBeVisible();
    await expect(page.getByText('Steps').first()).toBeVisible();

    // Check one row of data (sample values you mentioned)
    await expect(page.getByText('2025-08-01').first()).toBeVisible();
    await expect(page.getByText('450').first()).toBeVisible();
    await expect(page.getByText('40').first()).toBeVisible();
    await expect(page.getByText('4,000').first()).toBeVisible();
  });
});