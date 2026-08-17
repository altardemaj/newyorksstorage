import { PageHero } from "@/components/sections/page-hero";
import { SizeGrid } from "@/components/sections/size-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import { createPageMetadata } from "@/data/site";

export const metadata = createPageMetadata("Storage Unit Size Guide", "Compare storage units from 5' × 5' to 20' × 20' and find a practical fit for your belongings in NYC.", "/storage-unit-size-guide");
export default function SizeGuidePage() {
  return <>
    <JsonLd data={[
      webPageSchema({ path: "/storage-unit-size-guide", name: "Storage Unit Size Guide | New York S. Storage", description: "Compare storage units from 5' × 5' to 20' × 20' and find a practical fit for your belongings in NYC." }),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Size Guide", path: "/storage-unit-size-guide" }]),
    ]} />
    <PageHero eyebrow="Storage unit size guide" title="Picture your space before you rent it" description="Compare our most common unit sizes and the belongings they can typically hold. Still unsure? We are happy to help." />
    <section className="section size-preview"><div className="shell"><SectionHeading eyebrow="Eight common sizes" title="From a few boxes to a full move" description="These examples are a guide. The shape and size of your individual items will affect the final fit." /><SizeGrid /></div></section>
    <CtaSection title="Still deciding between sizes?" description="Tell an advisor what you have. We will help estimate the space so you do not have to solve the storage puzzle alone." />
  </>;
}
