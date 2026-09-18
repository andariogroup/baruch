import { expect, test } from '@playwright/test';

test.describe('localized site', () => {
  test('sends the visitor into a locale from the root', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/(es|en)\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('renders the Spanish home with the primary booking action', async ({
    page,
  }) => {
    await page.goto('/es');
    await expect(page).toHaveTitle(/BARUCH Hostal/);
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'Disfruta Buritaca. Regresa a descansar.',
      }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'BARUCH Hostal' }),
    ).toBeVisible();
    await expect(page.locator('header img[src*="baruch-logo"]').first()).toBeVisible();
    await expect(
      page.getByRole('link', { name: /Reservas en configuración|Reservar/ }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: /Escríbenos|Escribir por WhatsApp/ }).first(),
    ).toBeVisible();
  });

  test('lists six accommodation categories and distinguishes bed sales', async ({
    page,
  }) => {
    await page.goto('/es/alojamiento');
    await expect(
      page.getByRole('heading', { name: 'Privada para 2 personas' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Compartida para 6 personas' }),
    ).toBeVisible();

    await page.goto('/es/alojamiento/compartida-6-personas');
    await expect(page.getByText('Venta por cama').first()).toBeVisible();
    await expect(
      page.getByText(/reserva una cama|una sola cama|cama individual/i).first(),
    ).toBeVisible();
  });

  test('switches language while staying on the equivalent page', async ({
    page,
  }) => {
    await page.goto('/es/alojamiento');
    await page.getByRole('link', { name: /Ver esta página en inglés/i }).click();
    await expect(page).toHaveURL(/\/en\/accommodation\/?$/);
    await expect(
      page.getByRole('heading', { level: 1, name: /Accommodation|Stay/ }),
    ).toBeVisible();
  });

  test('keeps restaurant, experiences, location, contact and discover reachable', async ({
    page,
  }) => {
    for (const path of [
      '/es/restaurante',
      '/es/experiencias',
      '/es/ubicacion',
      '/es/contacto',
      '/es/descubre-buritaca',
      '/es/privacidad',
    ]) {
      const response = await page.goto(path);
      expect(response?.ok()).toBeTruthy();
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    }
  });

  test('contact form validates before sending', async ({ page }) => {
    await page.goto('/es/contacto');
    await page.getByRole('button', { name: 'Enviar mensaje' }).click();
    await expect(page.getByText('Este campo es obligatorio.').first()).toBeVisible();
  });

  test('unknown routes render a useful 404', async ({ page }) => {
    const response = await page.goto('/es/no-existe');
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole('heading', { name: 'Esta página no existe' }),
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Alojamiento' })).toBeVisible();
  });

  test('exposes sitemap, robots and hreflang', async ({ page, request }) => {
    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.ok()).toBeTruthy();
    const sitemapBody = await sitemap.text();
    expect(sitemapBody).toContain('/es/alojamiento');
    expect(sitemapBody).toContain('/en/accommodation');
    expect(sitemapBody).not.toContain('/privacidad');

    const robots = await request.get('/robots.txt');
    expect(robots.ok()).toBeTruthy();

    await page.goto('/es');
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', /\/es\/?$/);
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(
      1,
    );
  });
});
