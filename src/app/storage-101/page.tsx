import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = { title: "Storage 101", description: "Plan a smoother storage move with practical guidance on unit sizes, packing, climate control, pickup, and access.", alternates: { canonical: "/storage-101/" } };
const resources = [
  { n:"01", title:"Choose the right size", text:"Start with your largest furniture, then account for boxes, shelving, and a little room to move.", href:"/storage-unit-size-guide/" },
  { n:"02", title:"Pack for protection", text:"Use sturdy boxes, label every side, avoid overpacking, and wrap fragile surfaces before the move.", href:"/packing-moving-supplies/" },
  { n:"03", title:"Think about climate", text:"Artwork, antiques, documents, and other sensitive belongings may benefit from a steadier environment.", href:"/storage-types/climate-controlled-storage-nyc/" },
  { n:"04", title:"Plan the move-in", text:"Confirm timing, building access, elevators, parking, and whether you need pickup or delivery help.", href:"/storage-types/moving-storage-nyc/" },
  { n:"05", title:"Keep access in mind", text:"Place items you may need sooner near the front and leave a narrow path through larger units.", href:"/contact-us/" },
  { n:"06", title:"Ask before guessing", text:"A quick conversation with an advisor can prevent renting too much—or too little—space.", href:"/get-a-quote/" },
];
export default function Storage101Page() { return <><PageHero eyebrow="Storage 101" title="A smarter start to storing your things" description="Practical guidance for choosing a unit, packing carefully, and making move-in day feel much less improvised." />
  <section className="section"><div className="shell"><div className="resource-grid">{resources.map((item)=><article className="resource-card" key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href}>Learn more <Icon name="arrow" /></Link></article>)}</div></div></section><CtaSection title="Have a storage question we missed?" /></> }

