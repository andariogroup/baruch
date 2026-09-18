# BARUCH Hostal — sitio oficial

Plataforma digital de descubrimiento, confianza y conversión para **BARUCH Hostal** en Buritaca, Magdalena, Colombia.

El sitio no es una vitrina genérica ni un motor de reservas. Explica el hostal, posiciona el destino y entrega al visitante al motor externo o a WhatsApp.

> Disfruta Buritaca y sus alrededores. Regresa a un lugar tranquilo para descansar.

## Qué incluye este MVP

- Sitio bilingüe indexable: `/es` y `/en`
- Home, catálogo y detalle de seis categorías de alojamiento
- Restaurante, experiencias, ubicación, contacto y hub editorial Descubre Buritaca
- Páginas legales esenciales (privacidad, cookies, términos)
- CTA `Reservar` hacia un motor externo en una pestaña nueva
- WhatsApp contextual, oculto hasta que exista un número verificado
- SEO técnico: metadata, canonical, hreflang, sitemap, robots, Open Graph y JSON-LD verificable
- Eventos observables: `page_view`, vistas de alojamiento, clics de reserva, WhatsApp, contacto e idioma

## Lo que este sitio no hace

- No consulta disponibilidad
- No crea reservas
- No implementa PMS, API, iframe, SDK ni checkout interno
- No publica precios, distancias, reseñas, NAP completo ni amenidades no confirmadas

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Vitest · Playwright · Vercel

## Desarrollo local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La raíz redirige a `/es` o `/en` según `Accept-Language`.

### Scripts

| Script | Uso |
|--------|-----|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servir el build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm run test` | Vitest |
| `npm run e2e` | Playwright |
| `npm run format` | Prettier (check) |

## Variables de entorno

Ver `.env.example`. Ningún valor secreto debe ir a Git ni a `NEXT_PUBLIC_*`.

| Variable | Dónde | Notas |
|----------|-------|-------|
| `NEXT_PUBLIC_SITE_URL` | Cliente | Origen canónico, sin barra final |
| `NEXT_PUBLIC_BOOKING_ENGINE_URL` | Cliente | URL completa del motor. Vacía = CTA deshabilitado |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Cliente | Dígitos internacionales. Vacío = CTA visible pero deshabilitado |
| `NEXT_PUBLIC_PHONE` | Cliente | Teléfono de recepción, si es distinto |
| `NEXT_PUBLIC_EMAIL` | Cliente | Correo público |
| `NEXT_PUBLIC_STREET_ADDRESS` | Cliente | Dirección exacta |
| `NEXT_PUBLIC_POSTAL_CODE` | Cliente | Código postal, si aplica |
| `NEXT_PUBLIC_LATITUDE` / `NEXT_PUBLIC_LONGITUDE` | Cliente | Pin del mapa. Hay que llenar ambas |
| `NEXT_PUBLIC_GOOGLE_MAPS_URL` | Cliente | Ficha oficial de Maps, opcional |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Cliente | Perfil oficial |
| `NEXT_PUBLIC_FACEBOOK_URL` | Cliente | Perfil oficial |
| `NEXT_PUBLIC_TIKTOK_URL` | Cliente | Perfil oficial |
| `NEXT_PUBLIC_YOUTUBE_URL` | Cliente | Canal oficial |
| `NEXT_PUBLIC_GOOGLE_BUSINESS_URL` | Cliente | Perfil de Google |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Cliente | GA4. Vacío = sin script de terceros |
| `CONTACT_WEBHOOK_URL` | Servidor | Webhook del formulario. Vacío = estado `unavailable` |

## Arquitectura breve

```
app/[locale]     rutas y metadata
components/      UI reutilizable
content/         diccionarios ES/EN
data/            catálogo, imágenes, destino
config/          configuración del establecimiento
lib/             i18n, SEO, booking, analytics, contacto
public/images/   generated | repository | real
```

La UI no conoce el proveedor de reservas. `BookingCTA` es el único puente y abre la URL configurada con `rel="noopener noreferrer"`.

## Imágenes

Los assets actuales son compositivos y temporales. Están en `public/images/generated/` y etiquetados como `AI_GENERATED` en `src/data/images.ts`. El pie de página lo declara. No se presentan como fotografías reales de BARUCH.

Cuando llegue fotografía propia:

1. Optimizar con `node scripts/convert-assets.mjs <carpeta> real`
2. Actualizar `src/data/images.ts` (`status: 'REAL'`, dimensiones, alt)
3. Quitar el asset temporal

## Despliegue en Vercel

El framework es Next.js: Vercel lo detecta solo. Node 22 (`engines` y `.nvmrc`). Los preview no se indexan (`robots.ts` mira `VERCEL_ENV`).

### 1. Sube el repo y conéctalo

1. Crea el repositorio en GitHub (si aún no existe) y súbelo.
2. En [vercel.com](https://vercel.com) → **Add New** → **Project** → importa `baruch-hostal-web`.
3. Deja **Framework Preset: Next.js**. Root Directory: la raíz del repo. Build Command / Output: los deja Vercel.
4. **Production Branch:** `main` (o la rama que acuerden). Cada PR genera un preview.

### 2. Variables de entorno

En el proyecto de Vercel → **Settings → Environment Variables**. Copia desde `.env.example`. Vacío es válido: el sitio sale al aire y oculta o deshabilita lo no confirmado.

| Variable | Production | Preview | Notas |
|----------|------------|---------|-------|
| `NEXT_PUBLIC_SITE_URL` | **Obligatoria** | Opcional | Origen canónico `https://…`, sin barra final. Nunca `localhost`. Si falta, el build usa el host de Vercel. |
| `NEXT_PUBLIC_BOOKING_ENGINE_URL` | Cuando exista | Igual | Vacía = Reservar deshabilitado |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Cuando exista | Igual | Dígitos internacionales |
| `NEXT_PUBLIC_PHONE` / `EMAIL` / `STREET_ADDRESS` / `POSTAL_CODE` | Si están verificados | Igual | |
| `NEXT_PUBLIC_LATITUDE` + `LONGITUDE` | Las dos o ninguna | Igual | |
| `NEXT_PUBLIC_GOOGLE_MAPS_URL` | Opcional | Igual | |
| `NEXT_PUBLIC_*_URL` de redes | Por perfil oficial | Igual | Vacía = no se muestra esa red |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Cuando GA4 esté listo | Suele omitirse en preview | |
| `CONTACT_WEBHOOK_URL` | Servidor | Solo si quieren probar el form | **No** uses `NEXT_PUBLIC_`. Vacía = formulario en “no disponible” |

Después de crear o cambiar `NEXT_PUBLIC_*`, hay que **redeploy** (Vercel las inyecta en el build).

### 3. Dominio

Settings → **Domains**. Apunta el dominio del hostal cuando esté autorizado. Alinea `NEXT_PUBLIC_SITE_URL` con ese dominio y vuelve a desplegar.

### 4. Comprobar el deploy

- `/es` y `/en` responden 200
- Preview: `robots.txt` tiene `Disallow: /`
- Production: `robots.txt` permite indexar y apunta al sitemap
- Reservar / WhatsApp / redes solo aparecen si sus variables están llenas

El pipeline de CI (lint, typecheck, tests, build, Playwright) sigue corriendo en GitHub; Vercel solo construye y publica.

No se publica un dominio de producción desde este repositorio hasta contar con autorización, dominio y URL real del motor.

## Documentación de producto

- `docs/BARUCH_MASTER_SPEC_CURSOR_AI_v1.0.md`
- `docs/TBD.md`
