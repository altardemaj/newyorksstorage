import { CinematicHero } from "@/components/sections/cinematic-hero";
import { PremiumSolutionGallery } from "@/components/sections/premium-solution-gallery";
import { UnitSizeSelector } from "@/components/sections/unit-size-selector";
import { DeliveryTimeline } from "@/components/sections/delivery-timeline";
import { ClutterCompare } from "@/components/sections/clutter-compare";
import { PremiumQuotePanel } from "@/components/sections/premium-quote-panel";
import { EditorialIntro } from "@/components/sections/editorial-intro";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata, homepageCanonical } from "@/data/site";
import { webPageSchema, websiteSchema } from "@/data/schema";

export const metadata = createPageMetadata(
  "Self Storage in NYC & Harlem",
  "Flexible self storage in Harlem with unit sizes for apartments, moves, students, businesses, and specialty belongings. Get a free quote from New York S. Storage.",
  "/",
);

const marqueeItems = ["Self Storage", "Business", "Moving", "Climate-Controlled", "Student", "Apartment", "Antique", "Art & Film"];

export default function HomePage() {
  return <>
    {/* Emitted outside Metadata API so Next trailingSlash:false cannot strip the root slash. */}
    <link rel="canonical" href={homepageCanonical} />
    <JsonLd data={[
      websiteSchema(),
      webPageSchema({
        path: "/",
        name: "Self Storage in NYC & Harlem | New York S. Storage",
        description: "Flexible self storage in Harlem with unit sizes for apartments, moves, students, businesses, and specialty belongings.",
      }),
    ]} />
    <CinematicHero />
    <div className="premium-marquee" aria-label="Storage solution categories"><div>{[...marqueeItems, ...marqueeItems].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}</div></div>
    <EditorialIntro />
    <PremiumSolutionGallery />
    <UnitSizeSelector />
    <DeliveryTimeline />
    <ClutterCompare />
    <PremiumQuotePanel />
  </>;
}
