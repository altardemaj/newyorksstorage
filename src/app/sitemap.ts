import type { MetadataRoute } from "next";
import { storageServices } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/storage-types/", "/storage-unit-size-guide/", "/packing-moving-supplies/", "/storage-101/", "/get-a-quote/", "/contact-us/", "/about-us/", "/terms-conditions/", "/accessibility-statement/"];
  return [...paths.map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: path === "/" ? "weekly" as const : "monthly" as const, priority: path === "/" ? 1 : .7 })), ...storageServices.map((service) => ({ url: `${site.url}${service.href}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 }))];
}

