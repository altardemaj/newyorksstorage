import type { Metadata } from "next";

export const site = {
  name: "New York S. Storage",
  url: "https://www.newyorksstorage.com",
  phoneDisplay: "(212) 410-7300",
  phoneHref: "tel:+12124107300",
  email: "info@newyorksstorage.com",
  address: { street: "234 East 121st Street", city: "New York", region: "NY", postalCode: "10035" },
  hours: "Monday–Saturday, 8:00 a.m.–5:30 p.m.",
  customerPortalUrl: "https://ecom3.quikstor.com/new_york_s_storage/login",
} as const;

export const navigation = [
  { label: "Storage Solutions", href: "/storage-types" },
  { label: "Size Guide", href: "/storage-unit-size-guide" },
  { label: "Packing Supplies", href: "/packing-moving-supplies" },
  { label: "Storage 101", href: "/storage-101" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
] as const;

const socialImage = {
  url: "/nyc-storage-hero.jpg",
  width: 1200,
  height: 800,
  alt: "Organized storage boxes in a New York apartment",
} as const;

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  const isHome = path === "/" || path === "";
  // Homepage canonical must be https://www.newyorksstorage.com/ (trailing slash)
  // to match sitemap + schema. Next metadata resolution strips root "/" when
  // trailingSlash:false, so homepage canonical is emitted via <link> in page.tsx.
  const canonical = isHome ? `${site.url}/` : path.replace(/\/+$/, "");

  return {
    title,
    description,
    ...(isHome ? {} : { alternates: { canonical } }),
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      url: canonical,
      images: [socialImage],
    },
  };
}

/** Absolute homepage canonical — keep trailing slash (sitemap/schema parity). */
export const homepageCanonical = `${site.url}/` as const;
