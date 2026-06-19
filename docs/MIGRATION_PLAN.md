# New York S. Storage — Content & SEO Migration Plan

Audit date: June 18, 2026  
Source: live WordPress site, XML sitemaps, rendered page HTML, and WordPress REST API.

## Migration objective

Rebuild the existing New York S. Storage business in Next.js without changing its identity, core claims, contact details, customer journeys, or indexed URLs. The new interface can modernize presentation and interaction, but content changes must improve clarity and quality rather than invent new services, locations, policies, or guarantees.

## Business information to preserve

- Business name: New York S. Storage
- Phone: `(212) 410-7300` / `tel:+12124107300`
- Email: `info@newyorksstorage.com`
- Address: 234 East 121st Street, New York, NY 10035
- Hours shown on the current site: Monday–Saturday, 8:00 a.m.–5:30 p.m.
- Facility positioning: Harlem/Manhattan storage facility, founded in 1975
- External customer portal: `https://ecom3.quikstor.com/new_york_s_storage/login`
- Primary CTAs: Get a Quote, Call Our Storage Experts, Find a Unit, Log In / Pay Online, Request a Callback

Claims such as access hours, 24/7 security, free curbside move-in, licensing/insurance, climate control, pricing guarantees, and delivery availability must be verified with the business before launch because the current site uses them inconsistently.

## Existing URL inventory and disposition

All indexed paths remain at the same canonical URL. No redirect is needed when the path is preserved.

| Existing path | New page role | Content action |
|---|---|---|
| `/` | Conversion-focused home page | Preserve positioning, How It Works, trust points, services, size preview, reviews, and CTAs; tighten duplicated copy. |
| `/storage-types/` | Searchable/filterable solution gallery | Preserve all current service links; add category/search UI without changing crawlable links. |
| `/storage-types/self-storage-nyc/` | Self Storage landing page | Preserve core copy, benefits, quote flow, callback CTA. |
| `/storage-types/business-storage-nyc/` | Business Storage landing page | Preserve office, inventory, archive, furniture, size, and support themes. |
| `/storage-types/moving-storage-nyc/` | Moving Storage landing page | Preserve temporary storage, shuttle/pickup, and return delivery themes. |
| `/storage-types/climate-controlled-storage-nyc/` | Climate-Controlled Storage landing page | Preserve temperature protection and location/support themes; verify operating claims. |
| `/storage-types/student-storage-nyc/` | Student Storage landing page | Preserve URL and service. Current body is effectively empty, so expand only from verified business details. |
| `/storage-types/apartment-storage-nyc/` | Apartment Storage landing page | Preserve long/short-term, pickup, delivery, unit-size, and climate-control themes. |
| `/storage-types/antique-storage-nyc/` | Antique Storage landing page | Preserve wrapping/preservation, climate control, access, and pricing themes; fix typos. |
| `/storage-types/art-film-storage-nyc/` | Art & Film Storage landing page | Preserve URL and service, but replace exposed template placeholder copy after business review. |
| `/storage-types/pharmaceutical-storage-nyc/` | Pharmaceutical Storage landing page | Preserve URL and existing equipment/storage positioning; do not add compliance claims without evidence. |
| `/storage-unit-size-guide/` | Storage Size Guide | Preserve 5×5, 5×7, 8×8, 5×10, 10×10, 10×18, 17×20, and 20×20 unit guidance and quote CTAs. |
| `/packing-moving-supplies/` | Packing Supplies / order inquiry | Preserve boxes/supplies and delivery inquiry; retain form. |
| `/storage-101/` | Storage resources hub | Preserve URL. Current page is broken/thin and exposes a server warning; rebuild as a useful verified resource hub. |
| `/get-a-quote/` | Quote Request | Preserve the multi-step lead flow and conversion tracking hooks. |
| `/contact-us/` | Contact | Preserve contact form, NAP, hours, phone, and email. |
| `/about-us/` | About | Preserve 1975 founding, Manhattan positioning, facility description, and advisor support. |
| `/terms-conditions/` | Legal | Migrate verbatim, then have the business/legal owner review. |
| `/accessibility-statement/` | Accessibility | Migrate and update only after an accessibility review. |

`Pickup & Delivery` is an important service but has no dedicated indexed URL in the current sitemap. In phase one it should be a prominent filter/category and reusable section linked from moving, apartment, self-storage, and packing pages. A dedicated URL should only be introduced after keyword and business validation.

## Forms and conversion paths

### Quote form

Preserve the current multi-step information architecture:

1. Current address
2. Desired move-in date
3. Unit size: Not Too Sure, Small, Medium, Large, Commercial
4. Storage type: Personal or Commercial
5. Items: Furniture/Household, Personal Effects, Documents/Boxes, Heavy Equipment, Other
6. Duration: a couple of months, 3–6, 6–12, 12+, or indefinite
7. Referral source
8. Additional requirements
9. First name, last name, email, and phone

Retain a short callback form with full name, phone, and best time to call. Preserve the separate contact/supplies form fields: first name, last name, email, phone, and message. Implementation must include server-side validation, spam protection, accessible errors, consent/privacy copy, success states, and analytics events. The final delivery destination for submissions must be confirmed before wiring production forms.

### Persistent CTAs

- Desktop header: phone, Get a Quote, Login / Pay Online
- Mobile: sticky Call and Get Quote actions with safe-area spacing
- Service cards and detail pages: Learn More plus contextual Get a Quote
- Never route customer portal traffic through an internal imitation login page

## SEO migration strategy

### Preserve

- Exact public slugs and trailing-slash behavior
- One descriptive H1 per page
- Current service hierarchy under `/storage-types/`
- Canonical URLs on `https://newyorksstorage.com`
- Organization/location facts and phone number
- Indexability of core pages and image relevance
- XML sitemap coverage, including legal pages

### Improve

- Replace generic titles such as `Page - Self Storage NYC - New York S. Storage` with unique intent-led titles while retaining the target service and NYC/Harlem context.
- Add unique meta descriptions; the crawled pages currently expose no standard meta description.
- Add `LocalBusiness`/`SelfStorage`-appropriate organization schema, postal address, phone, opening hours, and same canonical entity across pages. Validate the exact schema type and facts before launch.
- Add `Service` schema to verified service pages and breadcrumb schema to nested routes.
- Use visible, crawlable HTML links for filters; client-side search must enhance rather than replace navigation.
- Add descriptive image alt text, optimized local images, Open Graph images, `robots.txt`, and generated `sitemap.xml`.
- Strengthen internal links between service pages, size guide, supplies, quote, contact, and related solutions.
- Remove duplicate blocks and template debris. The Art & Film page contains placeholder text; Student Storage is nearly empty; Storage 101 exposes a PHP warning.
- Keep NAP formatting consistent everywhere and preserve the external QuikStor portal URL.

### Proposed metadata pattern

- Home: `Self Storage in NYC & Harlem | New York S. Storage`
- Services: `{Service} in NYC | New York S. Storage`
- Size guide: `Storage Unit Size Guide | New York S. Storage`
- Quote: `Request a Storage Quote | New York S. Storage`

Final titles and descriptions should be reviewed against real keyword/search-console data before launch rather than treated as automatic keyword replacements.

## Information architecture and design mapping

- Global shell: announcement/phone bar, primary navigation, quote CTA, external portal link, footer NAP and legal links
- Solutions gallery: search input, horizontal mobile filters, desktop sidebar or horizontal category rail, animated rounded cards, and crawlable detail links
- Suggested filter groups: Personal, Moving, Business & Professional, Specialty, Climate-Controlled, Pickup & Delivery
- Reusable service template: service summary, verified benefits, process, related solutions, quote CTA, callback option, and local contact block
- Resource routes: Size Guide, Packing Supplies, Storage 101
- Motion: small entrance/hover transitions with `prefers-reduced-motion` support; no animation should delay content or block navigation
- Rendering: statically generated App Router pages for speed and crawlability; isolate only filters, forms, and motion wrappers as client components

## Content governance before launch

Obtain business confirmation for:

- Pickup/delivery coverage, charges, and lead times
- Exact access hours versus office hours
- Security and monitoring language
- Climate-control ranges and availability
- Free move-in/curbside offer terms
- Unit sizes currently available
- Pricing/guarantee language
- Pharmaceutical storage limitations and any compliance restrictions
- Form delivery endpoint, recipients, privacy retention, and consent language
- Testimonials and permission to reuse existing photography

## Launch and redirect checklist

1. Export a final pre-launch crawl of all URLs, titles, canonicals, headings, images, status codes, and internal links.
2. Implement the same paths first; add explicit 301s only for any approved consolidation.
3. Verify every legacy URL returns 200 or an intentional single-hop 301.
4. Compare old/new content and metadata page by page.
5. Validate structured data, forms, phone/email links, QuikStor login, analytics, and conversion events.
6. Run accessibility, Core Web Vitals, mobile, and cross-browser checks.
7. Submit the new sitemap and monitor Search Console coverage, rankings, 404s, form leads, and calls for at least 30 days.

## Delivery phases

1. **Foundation (complete):** Next.js 15, TypeScript, Tailwind CSS, Framer Motion, App Router, Git remote, content constants, and migration documentation.
2. **Content model:** approve facts, copy, metadata, images, form integration, and service taxonomy.
3. **Design system:** green/white tokens, typography, cards, filters, buttons, form controls, responsive shell, and motion rules.
4. **Build:** global shell, home, solution gallery, service template/pages, resources, quote/contact flows, legal pages.
5. **QA and launch:** SEO parity crawl, accessibility, performance, analytics, redirects, production forms, and post-launch monitoring.

