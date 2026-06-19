import { CinematicHero } from "@/components/sections/cinematic-hero";
import { PremiumSolutionGallery } from "@/components/sections/premium-solution-gallery";
import { UnitSizeSelector } from "@/components/sections/unit-size-selector";
import { DeliveryTimeline } from "@/components/sections/delivery-timeline";
import { ClutterCompare } from "@/components/sections/clutter-compare";
import { PremiumQuotePanel } from "@/components/sections/premium-quote-panel";
import { EditorialIntro } from "@/components/sections/editorial-intro";

const marqueeItems = ["Self Storage", "Business", "Moving", "Climate-Controlled", "Student", "Apartment", "Antique", "Art & Film"];

export default function HomePage() {
  return <>
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
