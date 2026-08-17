import { site } from "@/data/site";
import type { StorageService } from "@/data/services";

export const organizationId = `${site.url}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SelfStorage",
    "@id": organizationId,
    name: site.name,
    url: `${site.url}/`,
    telephone: "+12124107300",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "17:30",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: `${site.url}/`,
    publisher: { "@id": organizationId },
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  const type = opts.type ?? "WebPage";
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${site.url}${opts.path === "/" ? "/" : opts.path}#webpage`,
    url: `${site.url}${opts.path === "/" ? "/" : opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": organizationId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}

export function serviceSchema(service: StorageService) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${service.href}#service`,
    name: service.title,
    description: service.description,
    provider: { "@id": organizationId },
    areaServed: {
      "@type": "City",
      name: "New York",
    },
    url: `${site.url}${service.href}`,
  };
}

export function itemListSchema(services: StorageService[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${site.url}${service.href}`,
    })),
  };
}
