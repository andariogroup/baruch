import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = [
  '/es',
  '/es/alojamiento',
  '/es/alojamiento/privada-2-personas',
  '/es/contacto',
];

test.describe('accessibility', () => {
  for (const route of routes) {
    test(`${route} has no serious axe violations`, async ({ page }) => {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
        .analyze();

      const serious = results.violations.filter(
        (violation) =>
          violation.impact === 'serious' || violation.impact === 'critical',
      );

      expect(serious, JSON.stringify(serious, null, 2)).toEqual([]);
    });
  }
});

test('home remains usable on a tablet viewport', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('/es');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Abrir menú' })).toBeVisible();
  await page.getByRole('button', { name: 'Abrir menú' }).click();
  const menu = page.getByRole('dialog', { name: 'Menú' });
  await expect(menu).toBeVisible();
  await menu.getByRole('link', { name: 'Alojamiento', exact: true }).click();
  await expect(page).toHaveURL(/\/es\/alojamiento/);
});

test('opens the navigation drawer on a phone', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/es');
  await expect(page.getByRole('button', { name: 'Abrir menú' })).toBeVisible();
  await page.getByRole('button', { name: 'Abrir menú' }).click();
  const menu = page.getByRole('dialog', { name: 'Menú' });
  await expect(menu).toBeVisible();
  await expect(menu.getByRole('link', { name: 'Contacto', exact: true })).toBeVisible();
  await menu.getByRole('button', { name: 'Cerrar menú' }).click();
  await expect(menu).toBeHidden();
});

test('keeps a drawer on a 1024px tablet where the desktop nav does not fit', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.goto('/es');
  await expect(page.getByRole('button', { name: 'Abrir menú' })).toBeVisible();
  await page.getByRole('button', { name: 'Abrir menú' }).click();
  await expect(page.getByRole('dialog', { name: 'Menú' })).toBeVisible();
});
