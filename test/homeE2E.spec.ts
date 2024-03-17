import { test, expect } from '@playwright/test';

test('Validate the website title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle(/Moray/);
});

test('Validate opening the modal', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const selectingNeighborhood =  page.locator('.leaflet-interactive').nth(0);
  await selectingNeighborhood.click();

  const modal = page.locator('[data-test="modal"]');

  await expect(modal).toBeVisible();
  await expect(modal.locator('h2')).toHaveText('Censo Populacional');
});

test('Validate the population information', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const selectingNeighborhood =  page.locator('.leaflet-interactive').nth(0);
  await selectingNeighborhood.click();

  const chart = await page.locator('.recharts-layer .recharts-bar-rectangle').nth(0).locator('.recharts-rectangle')
  
  await chart.hover()
  await page.waitForSelector('.recharts-tooltip-wrapper');

  const tooltipDescription = await page.innerText('.recharts-tooltip-wrapper ul li');
  const tooltipTitle = await page.innerText('.recharts-tooltip-wrapper p');

  await expect(tooltipDescription).toContain('População : 11567');
  await expect(tooltipTitle).toContain('Ano 2000');
});
