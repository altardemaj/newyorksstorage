# SEO Migration Recovery Report — New York S. Storage

**Date:** 2026-08-17  
**Production:** https://www.newyorksstorage.com  
**Repo:** Next.js 15.5 App Router (`src/app`)  
**Status:** High-confidence fixes implemented locally — **not committed / not pushed**

---

## 1. Architecture audit (Phase 1)

| Item | Finding |
|---|---|
| Framework | Next.js `^15.5.19`, React 19, App Router |
| Router | App Router only (`src/app/**`) — no Pages Router |
| `trailingSlash` | `false` in `next.config.ts` |
| Middleware | **None** — hostname canonicalization owned by Vercel Domains only |
| Path redirects | `next.config.ts` only (`trailingSlash: false`, `/sitemap_index.xml` → `/sitemap.xml`) |
| Sitemap | `src/app/sitemap.ts` → `/sitemap.xml` |
| Robots | `src/app/robots.ts` → allow `/`, sitemap + host = www |
| Canonical host | `site.url = https://www.newyorksstorage.com` |
| Schema | Was `SelfStorage` `@id …/#business` → now `#organization` + page schemas |
| GA4 / GTM | **Not present** in repo or production HTML |
| Forms | Quote: Web3Forms (`4689b137-…`). Contact/supplies: `mailto:` |
| Thank-you | Inline quote success state (no `/thank-you` route) |

### Current routes (inventory)

| Path | Role |
|---|---|
| `/` | Home |
| `/storage-types` | Solutions hub |
| `/storage-types/[slug]` | 9 service landings (all historical slugs) |
| `/storage-unit-size-guide` | Size guide |
| `/packing-moving-supplies` | Supplies |
| `/storage-101` | Resource hub |
| `/get-a-quote` | Quote / Web3Forms |
| `/contact-us` | Contact |
| `/about-us` | About |
| `/terms-conditions` | Legal |
| `/accessibility-statement` | Accessibility |
| `/sitemap.xml` | Sitemap |
| `/robots.txt` | Robots |

Service slugs present: `self-storage-nyc`, `business-storage-nyc`, `moving-storage-nyc`, `climate-controlled-storage-nyc`, `student-storage-nyc`, `apartment-storage-nyc`, `antique-storage-nyc`, `art-film-storage-nyc`, `pharmaceutical-storage-nyc`.

---

## 2. Historical GSC inventory & decisions

All high-impression historical paths **already exist** on the redesigned site at the same slug (WordPress trailing slash → non-slash www canonical).

| Historical URL | Clicks | Impressions | Action | Final canonical |
|---|---:|---:|---|---|
| `/` | 737 | 509,266 | KEEP | `https://www.newyorksstorage.com/` |
| `/storage-types/climate-controlled-storage-nyc/` | — | 48,869 | KEEP (+ slash REDIRECT) | `…/storage-types/climate-controlled-storage-nyc` |
| `/storage-unit-size-guide/` | — | 35,051 | KEEP (+ slash REDIRECT) | `…/storage-unit-size-guide` |
| `/contact-us/` | 30 | 21,336 | KEEP (+ slash REDIRECT) | `…/contact-us` |
| `/storage-types/student-storage-nyc/` | — | 18,729 | KEEP (+ slash REDIRECT) | `…/storage-types/student-storage-nyc` |
| `/about-us/` | — | 17,697 | KEEP (+ slash REDIRECT) | `…/about-us` |
| `/storage-types/` | — | 17,277 | KEEP (+ slash REDIRECT) | `…/storage-types` |
| `/storage-types/business-storage-nyc/` | — | 14,453 | KEEP (+ slash REDIRECT) | `…/storage-types/business-storage-nyc` |
| `/storage-types/apartment-storage-nyc/` | — | 3,923 | KEEP (+ slash REDIRECT) | `…/storage-types/apartment-storage-nyc` |
| `/storage-types/self-storage-nyc/` | — | 3,224 | KEEP (+ slash REDIRECT) | `…/storage-types/self-storage-nyc` |
| `/storage-types/moving-storage-nyc/` | — | 2,528 | KEEP (+ slash REDIRECT) | `…/storage-types/moving-storage-nyc` |
| `/storage-types/antique-storage-nyc/` | — | 862 | KEEP (+ slash REDIRECT) | `…/storage-types/antique-storage-nyc` |
| `/storage-types/art-film-storage-nyc/` | — | 690 | KEEP (+ slash REDIRECT) | `…/storage-types/art-film-storage-nyc` |
| `/packing-moving-supplies/` | — | 621 | KEEP (+ slash REDIRECT) | `…/packing-moving-supplies` |
| `/storage-types/pharmaceutical-storage-nyc/` | — | 615 | KEEP (+ slash REDIRECT) | `…/storage-types/pharmaceutical-storage-nyc` |
| `/get-a-quote/` | — | 433 | KEEP (+ slash REDIRECT) | `…/get-a-quote` |
| `/storage-101/` | — | (historical) | KEEP (+ slash REDIRECT) | `…/storage-101` |
| `/sitemap_index.xml` | — | — | REDIRECT | `…/sitemap.xml` |

**Pages restored:** none required — all historical SEO URLs already had live equivalents.  
**CONTENT-REQUIRED:** none for URL recovery (content already rewritten in redesign; facts verified against current hours / no 24/7 access claims).  
**INTENTIONAL-404:** old WordPress admin/login, attachment, taxonomy, and staging hosts (not inventing redirects to homepage).

### Content recovery notes (Wayback)

- Old Business Storage claimed **24/7 access** — **not restored** (current site: Mon–Sat 8:00 a.m.–5:30 p.m.).
- Old Student Storage / Storage 101 had PHP warnings — **not reproduced**.
- Old Art & Film placeholder/lorem — **not restored**; current legitimate copy retained.

---

## 3. Production status before fixes (live probe)

| URL pattern | Result |
|---|---|
| `https://www…/path` | **200**, self-canonical www, no slash |
| `https://www…/path/` | **308** → `/path` (relative) |
| `https://newyorksstorage.com/path` | **308** (Vercel Domains) → `https://www…/path` (**1 hop**) |
| `https://newyorksstorage.com/path/` | **308** (Vercel Domains) → www/slash → **308** (Next slash) → www/no-slash (**2 hops, accepted**) |
| `http://newyorksstorage.com/path/` | http→https (platform) → www → slash strip (multi-hop; hostname still Vercel-owned) |
| `/sitemap.xml` | 200, 19 www URLs |
| `/sitemap_index.xml` | www **404** (apex redirects to www then 404) |
| `/robots.txt` | Allow `/`, Host + Sitemap = www |

---

## 4. Fixes implemented (high confidence)

1. **Hostname canonicalization** — left entirely to **Vercel Domains** (`newyorksstorage.com` → 308 → `www.newyorksstorage.com`). No app middleware owns apex→www.
2. **`next.config.ts`** — `trailingSlash: false` (slash normalization) + `308` `/sitemap_index.xml` → `/sitemap.xml`. No duplicate `vercel.json` redirects.
3. **Canonical hygiene** — removed layout-wide homepage canonical; per-page `createPageMetadata` + `robots: index,follow`; homepage self-canonical `/`.
4. **Schema** — stable `@id` `…/#organization`; WebSite + WebPage on home; Service + BreadcrumbList on services; CollectionPage + ItemList on `/storage-types`; AboutPage / ContactPage where applicable.
5. **Internal linking** — footer now lists **all 9** storage solutions (was `slice(0,6)`).
6. **Reports** — this file + `seo-migration-map.csv`.

### Redirect ownership (final)

| Layer | Responsibility |
|---|---|
| **Vercel Domains** | `newyorksstorage.com` → 308 → `www.newyorksstorage.com` (path preserved). Single source of truth for hostname. |
| **middleware** | None |
| **next.config.ts** | `trailingSlash: false`; `/sitemap_index.xml` → `/sitemap.xml` (308) |
| **vercel.json** | None (removed to avoid duplicate path redirects) |

### Apex + trailing-slash behavior (accepted)

With the correct Vercel domain setup, slash URLs do a **two-hop** sequence:

1. `https://newyorksstorage.com/path/` → Vercel Domains 308 → `https://www.newyorksstorage.com/path/`
2. `https://www.newyorksstorage.com/path/` → Next `trailingSlash: false` 308 → `https://www.newyorksstorage.com/path`

This is accepted. We do **not** replace the Vercel domain redirect to collapse that rare case. Non-slash apex URLs remain one hop.

---

## 5. Sitemap

| Metric | Count |
|---|---:|
| Before | 19 |
| After | **19** (same set; already complete) |

Includes only www, no-slash, indexable app routes + all 9 services. Excludes thank-you (none), staging, WP taxonomies, redirect-only URLs.

---

## 6. Robots

No `Disallow: /`. Sitemap + Host already pointed at www. No staging host references found.

---

## 7. Forms / GA4

| Item | Status |
|---|---|
| Quote Web3Forms | Intact — not modified |
| Quote success UX | Inline thank-you — not modified |
| Contact / supplies | `mailto:` forms — not modified |
| GA4 / GTM / `generate_lead` | **Missing on production and in repo** — not invented (no Measurement ID available). Recommend adding GA4 in a follow-up with client ID. |

---

## 8. Files changed

- `src/data/schema.ts` *(new)*
- `src/components/seo/json-ld.tsx` *(new)*
- `next.config.ts`
- ~~`src/middleware.ts`~~ removed (hostname ownership belongs to Vercel Domains)
- ~~`vercel.json`~~ removed (avoid duplicate `/sitemap_index.xml` redirect)
- `src/data/site.ts`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/storage-types/page.tsx`
- `src/app/storage-types/[slug]/page.tsx`
- `src/app/about-us/page.tsx`
- `src/app/contact-us/page.tsx`
- `src/app/storage-unit-size-guide/page.tsx`
- `src/app/packing-moving-supplies/page.tsx`
- `src/app/storage-101/page.tsx`
- `src/app/get-a-quote/page.tsx`
- `src/components/layout/footer.tsx`
- `seo-migration-report.md` *(new)*
- `seo-migration-map.csv` *(new)*

---

## 9. Production URLs to re-test after deploy

```
https://www.newyorksstorage.com/
https://newyorksstorage.com/
https://newyorksstorage.com/storage-types/self-storage-nyc/
https://www.newyorksstorage.com/storage-types/self-storage-nyc/
https://www.newyorksstorage.com/storage-types/climate-controlled-storage-nyc
https://www.newyorksstorage.com/storage-unit-size-guide
https://www.newyorksstorage.com/storage-types
https://www.newyorksstorage.com/contact-us
https://www.newyorksstorage.com/about-us
https://www.newyorksstorage.com/storage-101
https://www.newyorksstorage.com/get-a-quote
https://www.newyorksstorage.com/sitemap.xml
https://www.newyorksstorage.com/sitemap_index.xml
https://www.newyorksstorage.com/robots.txt
```

Expect:
- apex no-slash → **one** Vercel 308 → www 200
- apex+slash → Vercel 308 to www/slash → Next 308 to www/no-slash (accepted two-hop)
- sitemap_index → 308 → sitemap.xml
- each page self-canonical www
