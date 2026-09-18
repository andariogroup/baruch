# BARUCH HOSTAL — MASTER SPECIFICATION FOR CURSOR AI

**Project:** BARUCH Hostal — Official Digital Platform  
**Location:** Buritaca, Magdalena, Colombia  
**Document:** Master implementation specification for Cursor AI  
**Version:** 1.0  
**Status:** Baseline for implementation  
**Primary objective:** Execute a professional digital transformation of the BARUCH Hostal website.

---

## 0. CURSOR — INSTRUCCIÓN MAESTRA

You are implementing the new official website of **BARUCH Hostal**.

Do not treat this as a generic hotel/hostel template.

The product must be designed and implemented as a **digital acquisition, destination-discovery, SEO, trust and conversion platform** for BARUCH Hostal.

The website must communicate a distinctive proposition:

> **Disfruta Buritaca y sus alrededores. Regresa a un lugar tranquilo para descansar.**

Conceptually:

> **BARUCH = UBICACIÓN + EXPERIENCIA + DESCANSO**

And the creative direction is:

> **EXPLORA AFUERA. DESCANSA AQUÍ.**

The strategic ambition is to build the digital presence necessary for BARUCH to compete for visibility among the **three most visible hostels in Buritaca in digital channels**. This is an objective to pursue through SEO, content, local presence, UX, conversion, performance and continuous measurement — never an assumption that the position has already been achieved.

---

# 1. NON-NEGOTIABLE RULES

## 1.1 Do not invent business information

Never invent:

- room characteristics;
- number of beds in a specific category;
- air conditioning;
- fans;
- TV;
- views;
- pool;
- breakfast;
- restaurant hours;
- prices;
- distances;
- travel times;
- policies;
- reviews;
- testimonials;
- wellness services;
- tour operators;
- payment methods;
- contact information;
- address;
- booking-engine capabilities.

If information is not confirmed, use `TBD`, a controlled placeholder, or leave the field unpublished.

## 1.2 Temporary images are not real BARUCH photography

During development, images may come from:

1. permitted image repositories for generic destination scenes;
2. AI-generated assets for temporary visual composition;
3. real BARUCH photography when available.

Temporary images must NEVER be presented as real photographs of BARUCH.

When real photography arrives, replace temporary assets progressively.

Do not infer that an installation exists merely because an image contains it.

## 1.3 Do not invent booking-engine capabilities

The booking architecture is definitive:

```text
BARUCH Next.js
      |
      | click RESERVAR
      v
External Booking Engine
      |
      | opens in a new tab
      v
Reservation handled externally
```

The BARUCH website does NOT:

- manage inventory;
- calculate availability;
- create reservations;
- manage PMS data;
- process card data;
- implement booking APIs;
- implement an iframe;
- implement an SDK;
- invent endpoints;
- assume authentication;
- assume webhooks;
- assume booking-completion tracking.

The real booking-engine URL will be supplied later.

Use a configuration value such as:

```env
NEXT_PUBLIC_BOOKING_ENGINE_URL=
```

Reservation links must use:

```html
target="_blank"
rel="noopener noreferrer"
```

Do not create a fake internal booking flow.

## 1.4 Preserve separation of concerns

Content, configuration, components and business presentation must be separated.

Do not hard-code BARUCH-specific content throughout reusable components.

## 1.5 Do not over-engineer

Do NOT introduce:

- unnecessary backend services;
- microservices;
- unnecessary database;
- Redux unless a demonstrated need appears;
- Bootstrap;
- MUI;
- multiple UI libraries;
- an Express backend only for the sake of having one;
- unnecessary CMS;
- unnecessary authentication;
- unnecessary API layers.

Prefer the simplest professional architecture that solves the actual BARUCH requirements.

---

# 2. PRODUCT VISION

The new BARUCH platform must accomplish five things:

1. **Attract** people searching for Buritaca and accommodation.
2. **Differentiate** BARUCH from generic hostels.
3. **Build trust** through accurate information and real evidence.
4. **Convert** interest into reservation-engine clicks or WhatsApp conversations.
5. **Learn** from analytics and improve continuously.

The site is not merely:

> “a website showing rooms.”

It is:

> **A digital acquisition, destination-discovery, marketing, SEO and conversion platform for BARUCH Hostal.**

---

# 3. BRAND POSITIONING

## 3.1 Core proposition

BARUCH offers accommodation in Buritaca for travelers who want to explore beaches, nature, attractions, activities and the social life of the area, while having a comfortable and calm place to return to and rest.

## 3.2 Six commercial pillars

### 1. LOCATION
Strategic point for moving toward attractions in the region.

### 2. REST
A calm place to return to after exploring.

### 3. COMFORT
Private and shared accommodation alternatives.

### 4. GASTRONOMY
Restaurant in a natural environment.

### 5. NATURE & WELLNESS
Natural resting spaces, hammocks and validated wellness experiences.

### 6. EXPERIENCES
Tours and activities through BARUCH or partners, clearly identified.

---

# 4. TARGET USERS

The UX should support at least these profiles:

## 4.1 Couples / private travelers

Needs:

- privacy;
- comfort;
- clarity;
- easy reservation;
- confidence.

## 4.2 Families / small groups

Needs:

- capacity;
- accommodation comparison;
- clear facilities;
- direct communication.

## 4.3 Backpackers / solo travelers

Needs:

- shared beds;
- locker;
- price clarity;
- experiences;
- easy WhatsApp communication.

## 4.4 Gastronomy visitors

The restaurant can become an acquisition channel:

```text
Search restaurant
      ↓
Discover BARUCH
      ↓
Discover accommodation
```

## 4.5 Experience travelers

Interested in:

- nature;
- beaches;
- Tayrona;
- Palomino;
- Buritaca;
- tours;
- wellness;
- local activities.

---

# 5. EXPERIENCE STRATEGY

The primary UX journey is:

```text
DISCOVER
   ↓
UNDERSTAND
   ↓
TRUST
   ↓
COMPARE
   ↓
BOOK
```

The emotional journey is:

```text
EXPLORE
   ↓
ENJOY
   ↓
RETURN
   ↓
REST
   ↓
RECHARGE
   ↓
EXPLORE AGAIN
```

Every important page should move the user toward one of these states.

---

# 6. VISUAL DIRECTION

## 6.1 Master concept

> **ECO-BOUTIQUE CARIBEÑO CONTEMPORÁNEO**

The site should feel:

- natural;
- calm;
- warm;
- authentic;
- contemporary;
- accessible;
- professionally designed.

It should sit visually between:

```text
HOSTAL TRADICIONAL
        ↓
BARUCH ECO-BOUTIQUE
        ↓
HOTEL BOUTIQUE
```

Do not turn BARUCH into a luxury hotel.

Do not turn BARUCH into a generic backpacker hostel.

---

# 7. VISUAL FILTER

The visual identity should communicate:

- NATURALEZA
- DESCANSO
- CARIBE
- AVENTURA
- BIENESTAR
- CONEXIÓN

If a visual decision does not support one of these ideas, question whether it is necessary.

---

# 8. COLOR SYSTEM

The colors originate from the BARUCH logo.

Approximate values:

```text
Turquoise BARUCH   #159AA0
Natural Green      #6B8F45
Solar Yellow       #F4B800
Orange             #F47C20
Charcoal           #1F2929
Warm White         #FAF8F2
Sand               #F3EFE5
```

These are approximate because the available logo is a compressed JPG.

Before locking final design tokens, use the original vector logo if available.

Suggested visual ratio:

```text
60% warm whites / neutrals
20% sand
10–15% green / BARUCH turquoise
5–10% warm accents
```

Do not use all saturated colors at equal intensity.

Turquoise should be strongly associated with BARUCH actions and identity.

Yellow/orange should remain controlled accents.

---

# 9. TYPOGRAPHY

Recommended direction:

### Headings

**DM Serif Display**

Use for:

- hero;
- section titles;
- editorial moments;
- high-value statements.

### Body/UI

**Inter**

Use for:

- paragraphs;
- navigation;
- buttons;
- room information;
- forms;
- functional information.

The combination should communicate:

> Emotion + functionality.

Use `next/font`.

---

# 10. UI PRINCIPLES

- Mobile-first.
- Generous whitespace.
- Editorial composition.
- Moderate border radius.
- Subtle shadows.
- Strong contrast.
- Clear hierarchy.
- Minimal visual noise.
- Lucide icons.
- No emoji as UI icons.
- Motion must be subtle.
- Respect `prefers-reduced-motion`.
- No dark mode in v1 unless a real requirement emerges.

Suggested radius:

```text
Controls:       12–16px
Cards:           18–24px
Galleries:       20–28px
Large containers:24–32px
```

---

# 11. PRIMARY CTA SYSTEM

Primary CTA:

> **RESERVAR**

Secondary actions may include:

> **VER ALOJAMIENTOS**

> **HABLAR POR WHATSAPP**

The booking CTA must be available at appropriate points:

- header;
- hero;
- accommodation;
- accommodation detail;
- final CTA;
- mobile navigation / sticky mobile action where appropriate.

Do not make WhatsApp visually compete excessively with the primary booking CTA.

---

# 12. INFORMATION ARCHITECTURE

Primary navigation:

```text
Inicio
Alojamiento
Restaurante
Experiencias
Ubicación / Contacto
Reservar
```

Mobile navigation must be:

- keyboard accessible;
- screen-reader accessible;
- visually clear;
- easy to close;
- focus-managed.

---

# 13. ROUTING

Use indexable language routes.

Spanish:

```text
/es
/es/alojamiento
/es/alojamiento/privada-2-personas
/es/alojamiento/privada-3-personas
/es/alojamiento/privada-4-personas
/es/alojamiento/privada-5-personas
/es/alojamiento/compartida-6-personas
/es/alojamiento/compartida-7-personas
/es/restaurante
/es/experiencias
/es/ubicacion
/es/contacto
/es/descubre-buritaca
/es/descubre-buritaca/[slug]
/es/privacidad
/es/cookies
/es/terminos
```

English equivalent:

```text
/en
/en/accommodation
/en/accommodation/private-2-persons
/en/accommodation/private-3-persons
/en/accommodation/private-4-persons
/en/accommodation/private-5-persons
/en/accommodation/shared-6-persons
/en/accommodation/shared-7-persons
/en/restaurant
/en/experiences
/en/location
/en/contact
/en/discover-buritaca
/en/discover-buritaca/[slug]
```

Do not create room routes for individual physical rooms.

---

# 14. HOME PAGE

Recommended structure:

```text
HERO
 ↓
BARUCH EXPERIENCE
 ↓
DISCOVER BURITACA
 ↓
ACCOMMODATION
 ↓
RESTAURANT
 ↓
NATURE / WELLNESS
 ↓
EXPERIENCES
 ↓
LOCATION
 ↓
TRUST / REAL REVIEWS
 ↓
FINAL CTA
```

## Hero

Conceptual direction:

Eyebrow:

> BURITACA · MAGDALENA

Headline:

> Tu refugio para descansar y descubrir el Caribe

Supporting text:

> Explora la naturaleza, descubre Buritaca y regresa a un lugar tranquilo para descansar.

Primary:

> RESERVAR AHORA

Secondary:

> VER ALOJAMIENTOS

Copy can be refined after real photography arrives.

---

# 15. ACCOMMODATION ARCHITECTURE

The public catalog groups accommodation by:

> **type + capacity**

NOT by physical room.

The site communicates categories.

The external booking engine handles actual availability and assignment.

## Categories

| Category | Capacity | Bathroom | Commercial model |
|---|---:|---|---|
| Private for 2 | 2 | Private | Room |
| Private for 3 | 3 | Private | Room |
| Private for 4 | 4 | Private | Room |
| Private for 5 | 5 | Private | Room |
| Shared for 6 | 6 | Shared | Per bed |
| Shared for 7 | 7 | Shared | Per bed |

## Base descriptions

Private 2:

> Cómoda habitación privada para parejas o 2 personas.

Private 3:

> Opción para grupos pequeños.

Private 4:

> Ideal para familias o grupos.

Private 5:

> Espacio para grupos de hasta 5.

Shared 6:

> Cama individual en habitación compartida.

Shared 7:

> Cama individual en habitación compartida.

---

# 16. CONFIRMED AMENITIES

Only these are confirmed at this baseline:

## Private

- Private bathroom.

## Shared

- Shared bathroom.
- Individual locker.

## General

- Wi-Fi.
- Power outlets.

Do not publish other amenities until confirmed per category.

For example, do not automatically claim:

- air conditioning;
- fan;
- TV;
- hot water;
- balcony;
- view;
- kitchen;
- breakfast.

---

# 17. ACCOMMODATION CARD

Each card should support:

- image;
- category name;
- capacity;
- bathroom;
- commercial model where relevant;
- confirmed amenities;
- starting price only if validated;
- short description;
- CTA.

Example structure:

```text
[IMAGE]

PRIVADA PARA 2

2 PERSONAS
BAÑO PRIVADO

Cómoda habitación privada para parejas o 2 personas.

[ VER DETALLES ]
[ RESERVAR ]
```

Do not invent price values.

---

# 18. ACCOMMODATION DETAIL

Recommended structure:

```text
Breadcrumb
 ↓
Hero / primary image
 ↓
Name + capacity + key facts
 ↓
Gallery
 ↓
Description
 ↓
Amenities
 ↓
Policies
 ↓
Reservation CTA
 ↓
WhatsApp CTA
 ↓
Other accommodation
```

Use real evidence when available.

Do not make rooms appear larger than they are through deceptive image manipulation.

---

# 19. RESTAURANT

The restaurant is both:

1. a guest service;
2. an acquisition channel.

Desired positioning:

> Nature + tranquility + gastronomy.

Information mentioned in project material includes:

- vegetarian options;
- pasta;
- burgers;
- smoothies.

These must be validated before being presented as final menu facts.

Potential funnel:

```text
Restaurant discovery
       ↓
BARUCH discovery
       ↓
Accommodation discovery
```

---

# 20. EXPERIENCES

Experiences may include:

- tourism;
- nature;
- local attractions;
- tours;
- activities.

If a service is provided by an external partner:

> Clearly identify it as a partner service.

Never imply BARUCH operates a tour if it does not.

---

# 21. WELLNESS

Wellness can reinforce:

> DESCANSO + NATURALEZA + BIENESTAR

But before publishing a specific service, validate:

- exact name;
- provider;
- own vs partner;
- price;
- duration;
- reservation method;
- conditions.

Until validated, use controlled placeholders or do not publish the service.

---

# 22. LOCATION

The location page should help users answer:

- Where is BARUCH?
- How do I get there?
- What is nearby?
- How can I move from BARUCH to attractions?

Potential destinations include:

- Palomino;
- Quebrada Valencia;
- Tayrona;
- beaches;
- natural attractions;
- nearby entertainment;
- supermarket;
- public transportation.

The project material states Tayrona is approximately 20 minutes away, but this must be verified before publication.

Do not publish unverified distances.

Use a lightweight map strategy:

- static/preview location information first;
- external map link;
- interactive map only when useful;
- do not load heavy map infrastructure unnecessarily.

---

# 23. WHATSAPP

WhatsApp is a secondary conversion channel.

Messages should be contextual.

Examples:

### Home

> Hola, estoy visitando la página web de BARUCH Hostal y quisiera recibir información.

### Accommodation

> Hola, estoy viendo los alojamientos de BARUCH Hostal y quisiera consultar disponibilidad y tarifas.

### Experiences

> Hola, estoy viendo las experiencias de BARUCH Hostal y quisiera recibir más información.

### Restaurant

> Hola, quisiera recibir información sobre el restaurante de BARUCH Hostal.

### Contact

> Hola, estoy visitando la página de contacto de BARUCH Hostal y quisiera recibir información.

Do not collect unnecessary personal information.

---

# 24. BOOKING ENGINE

Create one configuration source.

Example:

```ts
export const siteConfig = {
  bookingEngineUrl: process.env.NEXT_PUBLIC_BOOKING_ENGINE_URL ?? "",
};
```

Create one reusable booking CTA.

Conceptual implementation:

```tsx
<a
  href={siteConfig.bookingEngineUrl}
  target="_blank"
  rel="noopener noreferrer"
>
  Reservar
</a>
```

If URL is missing in development:

- do not create a fake URL;
- make the configuration state visible to developers;
- avoid broken production links;
- optionally disable CTA in development with a clear development-only state.

When the real URL is supplied, validate the complete user journey.

---

# 25. SEO STRATEGY

The website must target multiple search-intent layers.

## Transactional

Examples:

- hostal en Buritaca;
- alojamiento en Buritaca;
- hostal Buritaca;
- hospedaje en Buritaca;
- habitaciones en Buritaca.

## Destination

Examples:

- qué hacer en Buritaca;
- cómo llegar a Buritaca;
- río Buritaca;
- playas de Buritaca;
- qué visitar cerca de Buritaca.

## Experience

Examples:

- tours en Buritaca;
- naturaleza;
- experiencias;
- bienestar.

Do not keyword-stuff.

Every page must have a real purpose.

---

# 26. LOCAL SEO

Implement a local-search ecosystem around:

- official website;
- Google Business Profile;
- consistent business information;
- real reviews;
- real photography;
- location page;
- relevant local content.

Ensure consistency of:

```text
Business name
Address
Phone
Website
Opening hours
Location
Social profiles
```

Do not publish any of these until validated.

---

# 27. "DESCUBRE BURITACA"

Create a destination content hub.

Possible content:

- Qué hacer en Buritaca.
- Cómo llegar a Buritaca.
- Río Buritaca.
- Playas y naturaleza.
- Guías de viaje.
- Qué visitar cerca.
- Experiences and planning guides.

Content must:

- answer real questions;
- provide useful information;
- link to relevant BARUCH pages;
- avoid generic AI filler;
- be factually verified.

The objective is to make BARUCH relevant not only for:

> “hotel/hostel search”

but also for:

> “destination planning”.

---

# 28. INTERNAL LINKING

Build intentional links between:

```text
Home
 ↓
Accommodation
 ↓
Accommodation detail
 ↓
Reserve

Home
 ↓
Discover Buritaca
 ↓
Destination article
 ↓
Accommodation / Experiences / Location
```

Restaurant and experiences should also link naturally back to accommodation.

Every important page should have clear next actions.

---

# 29. METADATA

Use Next.js metadata APIs.

Every indexable page needs:

- unique title;
- unique description;
- canonical;
- Open Graph;
- language alternates;
- relevant image.

Avoid duplicate metadata.

---

# 30. HREFLANG

Spanish and English pages must be indexable separately.

Implement:

```text
/es/...
/en/...
```

with correct language alternates and canonical relationships.

Do not implement language only through client-side state.

---

# 31. STRUCTURED DATA

Use structured data only when factual and appropriate.

Potential types:

- LodgingBusiness / appropriate lodging subtype;
- Organization;
- WebSite;
- BreadcrumbList;
- Article;
- ImageObject;
- Restaurant where applicable;
- FAQ structured data only when appropriate and supported.

Never use structured data to claim facts that are not visible or verified.

---

# 32. TECHNICAL SEO

Implement:

- `sitemap.ts`;
- `robots.ts`;
- canonical URLs;
- hreflang;
- breadcrumbs;
- semantic HTML;
- correct headings;
- descriptive URLs;
- optimized images;
- Open Graph;
- 404 page;
- staging/preview protection;
- redirect strategy for old indexed routes.

If an old production site contains indexed routes such as:

```text
/rooms
/rooms/{slug}
```

create an explicit migration/301 strategy after verifying existing URLs.

Do not blindly delete SEO equity.

---

# 33. ANALYTICS

Recommended events:

```text
page_view
view_accommodation
view_accommodation_detail
booking_click
outbound_booking_click
whatsapp_click
contact_submit
language_change
```

Do not implement:

```text
search_availability
booking_complete
```

unless an actual external integration makes those events observable.

The website cannot assume that a reservation completed on another domain is known.

Do not send unnecessary PII.

---

# 34. CRO

Measure:

- hero CTA clicks;
- accommodation CTA clicks;
- booking-engine outbound clicks;
- WhatsApp clicks;
- contact submissions;
- destination article engagement;
- device;
- language.

Future optimization can test:

- CTA copy;
- CTA position;
- section order;
- accommodation presentation;
- trust placement;
- content.

Do not make optimization decisions from assumptions; use data.

---

# 35. PERFORMANCE

Targets:

```text
LCP ≤ 2.5s
CLS ≤ 0.1
INP ≤ 200ms
```

Use:

- `next/image`;
- modern image formats;
- responsive sizes;
- lazy loading;
- correct dimensions;
- optimized fonts;
- minimal client JavaScript;
- Server Components by default;
- selective Client Components.

Do not load heavy third-party services unnecessarily.

---

# 36. ACCESSIBILITY

Target:

> WCAG 2.2 AA

Requirements:

- keyboard navigation;
- visible focus;
- semantic HTML;
- accessible labels;
- sufficient contrast;
- correct heading hierarchy;
- meaningful alt text;
- accessible mobile navigation;
- reduced-motion support;
- accessible forms;
- accessible external booking CTA.

---

# 37. SECURITY

Implement:

- HTTPS;
- secure headers;
- CSP;
- no secrets in Git;
- environment variables;
- dependency auditing;
- input validation;
- output sanitization where applicable;
- OWASP principles;
- safe third-party integration boundaries.

Never handle card data directly.

The external booking engine remains a separate trust boundary.

---

# 38. DEVELOPMENT ENVIRONMENT

Recommended stack:

```text
Next.js
React
TypeScript
Tailwind CSS v4
shadcn/ui
Lucide React
Motion
React Hook Form
Zod
next/image
i18n with /es and /en
GA4
Google Search Console
Vitest
Playwright
GitHub
Vercel
```

Use current stable versions compatible with the project environment.

Do not add packages without a concrete reason.

---

# 39. ARCHITECTURE

Recommended conceptual structure:

```text
app/
  [locale]/
    page.tsx
    alojamiento/
    restaurante/
    experiencias/
    ubicacion/
    contacto/
    descubre-buritaca/

components/
  layout/
  navigation/
  ui/
  accommodation/
  experiences/
  restaurant/
  location/
  content/
  conversion/

content/
  es/
  en/

data/
  accommodation/
  site/
  destination/

lib/
  seo/
  analytics/
  booking/
  i18n/
  utils/

public/
  images/
    generated/
    repository/
    real/
```

Use route groups/layouts where they improve clarity.

---

# 40. COMPONENT RULES

Build reusable components such as:

```text
Header
Navigation
LanguageSwitcher
BookingCTA
WhatsAppCTA
Hero
SectionHeader
AccommodationCard
AccommodationGrid
AccommodationDetail
AmenityList
Gallery
ExperienceCard
RestaurantSection
LocationSection
ArticleCard
Breadcrumbs
Footer
```

Avoid:

- giant components;
- duplicated markup;
- repeated business data;
- unnecessary abstractions.

---

# 41. DATA MODEL

Accommodation should be data-driven.

Conceptual example:

```ts
type AccommodationCategory = {
  slug: string;
  name: string;
  type: "PRIVATE" | "SHARED";
  capacity: number;
  bookingMode: "ROOM" | "BED";
  bathroom: "PRIVATE" | "SHARED";
  description: string;
  amenities: string[];
  images: ImageAsset[];
  published: boolean;
};
```

Do not encode physical room numbers in public content.

---

# 42. IMAGE DATA

Conceptual:

```ts
type ImageAsset = {
  src: string;
  alt: string;
  status: "AI_GENERATED" | "REPOSITORY" | "REAL";
  source?: string;
};
```

The UI should not expose technical status to normal visitors.

The status exists for content governance.

---

# 43. CONTENT GOVERNANCE

Create a clear separation:

```text
Business truth
      ↓
Content data
      ↓
UI components
      ↓
Pages
```

If a business fact changes, update content/configuration rather than rewriting multiple components.

---

# 44. REAL-PHOTO MIGRATION

When real BARUCH photos arrive:

1. classify them;
2. optimize them;
3. write accurate alt text;
4. replace temporary assets;
5. update metadata;
6. update Open Graph assets if relevant;
7. remove misleading temporary visuals;
8. re-test layout;
9. re-test performance.

Do not preserve AI images merely because they look attractive if real images are available and more truthful.

---

# 45. TRUST

Never invent:

- reviews;
- star ratings;
- testimonials;
- awards;
- certifications;
- press mentions.

When real reviews are available, use a verifiable source where appropriate.

Trust should come from evidence.

---

# 46. CONTENT TONE

Communication should be:

- warm;
- human;
- clear;
- contemporary;
- calm;
- confident;
- not exaggerated.

Avoid:

- generic luxury language;
- excessive superlatives;
- clichés;
- “paradise” repetition;
- artificial urgency;
- unsupported promises.

---

# 47. MOBILE EXPERIENCE

Mobile is a primary channel, not a reduced desktop.

Prioritize:

- readable typography;
- fast loading;
- large touch targets;
- clear CTA;
- simple navigation;
- compact accommodation cards;
- accessible gallery;
- WhatsApp access;
- booking-engine access.

A mobile visitor should understand BARUCH within seconds.

---

# 48. HEADER BEHAVIOR

Desktop:

- transparent over hero when appropriate;
- transition to readable solid/blurred state on scroll.

Mobile:

- compact;
- accessible;
- clear booking action;
- hamburger navigation.

Avoid excessive sticky UI that consumes viewport space.

---

# 49. FOOTER

Footer should contain:

- BARUCH identity;
- Buritaca location;
- primary navigation;
- accommodation;
- experiences;
- restaurant;
- location/contact;
- reservation CTA;
- WhatsApp;
- social links when verified;
- legal links.

Example positioning:

> Un lugar tranquilo para descansar y descubrir el Caribe colombiano.

Only use verified contact information.

---

# 50. SEO CONTENT MATRIX

Each important page should define:

```text
URL
Search intent
Primary keyword family
Secondary keyword family
Title
Meta description
H1
Main content
Primary CTA
Secondary CTA
Internal links
Structured data
```

Do not build pages without knowing their purpose.

---

# 51. PAGE PURPOSES

## Home

Intent:

> Understand BARUCH and decide whether to continue.

Primary CTA:

> Reservar.

Secondary:

> Ver alojamientos.

## Accommodation

Intent:

> Compare lodging options.

Primary CTA:

> Ver detalles / Reservar.

## Accommodation detail

Intent:

> Validate whether this category fits the traveler.

Primary CTA:

> Reservar.

## Restaurant

Intent:

> Discover gastronomy.

CTA:

> WhatsApp / Visit / Accommodation depending on validated operation.

## Experiences

Intent:

> Discover activities.

CTA:

> WhatsApp / information.

## Location

Intent:

> Understand where BARUCH is and how to arrive.

CTA:

> How to get there / WhatsApp.

## Discover Buritaca

Intent:

> Plan the destination.

CTA:

> Explore BARUCH / accommodation / experiences.

---

# 52. RESERVATION CONVERSION MODEL

The conversion architecture is:

```text
                     ┌──→ BOOKING ENGINE
                     │
USER → BARUCH SITE ──┤
                     │
                     └──→ WHATSAPP
```

The website does not compete with the booking engine.

It creates the motivation and confidence necessary for the user to leave the site and complete the reservation externally.

---

# 53. GRACEFUL DEGRADATION

If:

- analytics fails;
- map fails;
- third-party service fails;
- booking URL is unavailable;
- image service fails;

the informational website must remain functional whenever possible.

If the booking engine is unavailable:

> Keep accommodation, contact and WhatsApp pathways available.

Never show a fake successful booking.

---

# 54. TESTING

Use:

### Unit/component

Vitest.

### End-to-end

Playwright.

Test at least:

- navigation;
- language switching;
- accommodation routes;
- CTAs;
- external booking link;
- WhatsApp;
- forms;
- accessibility basics;
- SEO metadata;
- sitemap;
- robots;
- responsive behavior;
- error states.

---

# 55. DEFINITION OF DONE

A feature is not complete until:

- implementation is finished;
- responsive behavior is verified;
- accessibility is checked;
- SEO is checked;
- security is checked;
- tests pass;
- no critical errors remain;
- content is verified;
- analytics events are verified where applicable;
- external links work;
- documentation is updated.

---

# 56. CI/CD

Preferred lifecycle:

```text
PLAN
 ↓
CODE
 ↓
BUILD
 ↓
TEST
 ↓
SECURITY
 ↓
PREVIEW
 ↓
APPROVE
 ↓
DEPLOY
 ↓
MONITOR
 ↓
OPERATE
 ↓
IMPROVE
```

Use:

- Git;
- pull requests;
- previews;
- automated checks;
- production deployment;
- rollback capability.

---

# 57. VERCEL

Vercel is the preferred deployment direction for the Next.js website.

Production should have:

- HTTPS;
- environment variables;
- preview deployments;
- production deployment;
- rollback strategy;
- monitoring.

Do not expose secrets in client bundles.

---

# 58. DEVELOPMENT LAN RULE

When running locally over HTTP on a LAN, do not configure CSP with:

```text
upgrade-insecure-requests
```

if it causes the browser to rewrite local HTTP resources as HTTPS.

This can produce:

```text
ERR_SSL_PROTOCOL_ERROR
```

for local LAN testing.

Production security configuration must still be handled correctly.

---

# 59. SEO + MARKETING FLYWHEEL

Build this long-term loop:

```text
DESTINATION SEARCH
       ↓
DISCOVER BURITACA CONTENT
       ↓
BARUCH DISCOVERY
       ↓
ACCOMMODATION
       ↓
TRUST
       ↓
RESERVE / WHATSAPP
       ↓
REAL GUEST EXPERIENCE
       ↓
REAL REVIEW
       ↓
MORE AUTHORITY
       ↓
MORE VISIBILITY
```

This is the digital growth engine.

---

# 60. THREE-VISIBILITY OBJECTIVE

The goal is not to claim:

> “BARUCH is already number 1/2/3.”

Instead, build a measurement framework.

Track periodically:

- organic visibility;
- rankings for target search families;
- local-pack visibility;
- Google Business Profile interactions;
- organic traffic;
- accommodation-page traffic;
- booking-engine clicks;
- WhatsApp clicks;
- conversion rates;
- branded searches;
- destination-content traffic;
- review volume and quality;
- Core Web Vitals.

The ranking position of competitors should be measured externally and at defined intervals.

---

# 61. CONTENT ROADMAP

Prioritize:

### Commercial

- Hostal en Buritaca.
- Alojamiento en Buritaca.
- Habitaciones BARUCH.
- Restaurante BARUCH.
- Experiencias.

### Destination

- Qué hacer en Buritaca.
- Cómo llegar.
- Río Buritaca.
- Playas.
- Tayrona.
- Palomino.
- Quebrada Valencia.
- Practical travel guides.

Each article should have a real information purpose.

---

# 62. FUTURE CAMPAIGN LANDING PAGES

Possible future landing pages:

```text
/es/hostal-en-buritaca
/es/alojamiento-en-buritaca
/es/experiencias-buritaca
```

Only create them if they contain unique, useful content.

Do not create doorway pages.

---

# 63. SOCIAL / OPEN GRAPH

Every important page should have an appropriate social image.

Do not use generic random imagery if a better page-specific asset exists.

When real photography becomes available, prioritize it.

---

# 64. ERROR / 404

404 page must be useful.

Include:

- BARUCH branding;
- short explanation;
- Home;
- Accommodation;
- Discover Buritaca;
- Contact;
- Reserve.

Do not leave users at a dead end.

---

# 65. CONTENT VALIDATION CHECKLIST

Before publishing a factual claim, ask:

```text
Is it confirmed?
Is it current?
Can BARUCH prove it?
Is it consistent with other pages?
Is it safe to expose publicly?
```

If not:

> TBD / do not publish.

---

# 66. CURRENT VALIDATION BACKLOG

The following must be confirmed before final production:

- External booking-engine URL.
- Exact WhatsApp number.
- Exact address.
- Coordinates.
- Restaurant hours.
- Final menu.
- Wellness services.
- Wellness providers.
- Partner tours.
- Distances.
- Travel times.
- Accommodation amenities per category.
- Air conditioning by category.
- Fan/ventilation by category.
- Policies.
- Prices.
- Currency presentation.
- Real photography.
- Real reviews.
- Social profiles.
- Google Business Profile.
- Final domain.
- Vector BARUCH logo.

---

# 67. IMPLEMENTATION ORDER

Cursor should work in controlled phases.

## Phase 1 — Foundation

- initialize Next.js;
- TypeScript;
- Tailwind;
- shadcn/ui;
- fonts;
- design tokens;
- folder structure;
- linting;
- formatting;
- test setup.

## Phase 2 — Core layout

- Header;
- navigation;
- footer;
- language switcher;
- global CTA;
- responsive shell.

## Phase 3 — Home

Implement complete Home according to the approved narrative.

## Phase 4 — Accommodation

Implement:

- catalog;
- six categories;
- detail pages;
- data-driven model;
- galleries;
- amenity presentation.

## Phase 5 — Restaurant

Implement validated content.

## Phase 6 — Experiences / Wellness

Implement only validated information.

## Phase 7 — Location / Contact

Implement validated location data and contact.

## Phase 8 — Booking

Connect the external URL only when provided.

## Phase 9 — SEO

Implement:

- metadata;
- canonical;
- hreflang;
- sitemap;
- robots;
- JSON-LD;
- breadcrumbs;
- Open Graph.

## Phase 10 — Analytics

Implement approved events.

## Phase 11 — QA

Run:

- unit tests;
- E2E;
- accessibility;
- Lighthouse;
- SEO;
- responsive tests;
- security review.

## Phase 12 — Production

Deploy preview → review → production.

---

# 68. CURSOR EXECUTION RULE

Before changing architecture or introducing a dependency:

1. Check whether the requirement already exists here.
2. Check whether an existing component solves it.
3. Prefer reuse.
4. Explain architectural changes.
5. Do not invent functionality.
6. Do not silently replace approved decisions.

If an external capability is unknown:

> mark it TBD.

---

# 69. FINAL QUALITY BAR

The final website must feel:

> **BARUCH, not a template.**

It must communicate:

> **Caribbean + nature + exploration + calm + comfort + hospitality.**

It must be:

- visually distinctive;
- fast;
- accessible;
- secure;
- SEO-ready;
- bilingual;
- conversion-oriented;
- maintainable;
- measurable;
- truthful;
- scalable.

Most importantly:

> **Every design and technical decision must help BARUCH become more discoverable, more understandable, more trustworthy and easier to book.**

---

# 70. SOURCE OF TRUTH

This document consolidates the project decisions established through analysis of the BARUCH project documentation, including business requirements, value proposition, UX/UI direction, functional requirements, architecture, security, deployment, QA and existing content.

If another document conflicts with this specification, do not silently choose one.

Flag the conflict and request a decision.

### Critical current decision

The previous PMS-oriented architecture is superseded by the current decision:

> **BARUCH website → external booking engine client → reservation in a new browser tab.**

No PMS or booking API should be implemented unless a future explicit decision changes this architecture.

---

# 71. END STATE

The completed BARUCH digital platform should provide this experience:

```text
Google / Social / Referral
          ↓
   Discover BARUCH
          ↓
   Understand the place
          ↓
 Discover Buritaca + BARUCH
          ↓
 Compare accommodation
          ↓
 Build trust
          ↓
 ┌───────────────┐
 │               │
 ▼               ▼
RESERVAR      WHATSAPP
 │               │
 ▼               ▼
External       Human
Booking        assistance
Engine
```

The website is the digital front door.

The destination content creates discovery.

The visual identity creates recognition.

The UX creates confidence.

SEO creates long-term visibility.

Analytics creates learning.

The external booking engine completes the reservation.

**Build BARUCH as a digital brand and acquisition platform — not merely as a website.**
