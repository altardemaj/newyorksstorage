import { PageHero } from "@/components/sections/page-hero";
import { ServiceExplorer } from "@/components/sections/service-explorer";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { JsonLd } from "@/components/seo/json-ld";
import { storageServices } from "@/data/services";
import { breadcrumbSchema, itemListSchema, webPageSchema } from "@/data/schema";
import { createPageMetadata } from "@/data/site";

export const metadata = createPageMetadata("Storage Solutions in NYC", "Explore personal, moving, business, climate-controlled, student, apartment, antique, art, film, and pharmaceutical storage options in Harlem, NYC.", "/storage-types");

export default function StorageTypesPage() {
  return <>
    <JsonLd data={[
      webPageSchema({
        path: "/storage-types",
        name: "Storage Solutions in NYC | New York S. Storage",
        description: "Explore personal, moving, business, climate-controlled, student, apartment, antique, art, film, and pharmaceutical storage options in Harlem, NYC.",
        type: "CollectionPage",
      }),
      itemListSchema(storageServices),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Storage Solutions", path: "/storage-types" },
      ]),
    ]} />
    <PageHero eyebrow="Find a unit" title="Storage solutions for real New York life" description="Search and filter flexible storage for apartments, moves, businesses, students, valuable collections, and specialty equipment." />
    <section className="section explorer-section"><div className="shell"><SectionHeading eyebrow="Explore all solutions" title="What do you need space for?" description="Every card opens a dedicated guide with relevant benefits, sizing help, and a direct path to a quote." /><ServiceExplorer /></div></section>
    <section className="section content-section"><div className="shell service-overview"><div><p className="eyebrow">Pickup & delivery</p><h2>Storage that can meet you at the curb.</h2><p>Ask our team about packing supplies, curbside pickup, transfer to our Harlem facility, and return delivery when you need your belongings again.</p></div><div className="service-visual"><Icon name="truck" /><div className="service-visual-badge"><span>Available by arrangement</span>Pickup · Store · Return</div></div></div></section><CtaSection />
  </>;
}
