import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/sections/service-card";
import { SizeGrid } from "@/components/sections/size-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { storageServices } from "@/data/services";
import { site } from "@/data/site";

export default function HomePage() {
  return <>
    <section className="home-hero"><div className="shell home-hero-grid">
      <div className="hero-copy"><Reveal><p className="eyebrow">Manhattan storage since 1975</p><h1>More room for your <span>New York life.</span></h1><p className="hero-lede">A full-service storage experience in Harlem—with flexible unit sizes, experienced advisors, and help packing, picking up, and returning your belongings.</p><div className="hero-actions"><ButtonLink href="/get-a-quote/" showArrow>Get a free quote</ButtonLink><ButtonLink href={site.phoneHref} variant="secondary"><Icon name="phone" className="button-icon" /> {site.phoneDisplay}</ButtonLink></div><div className="hero-proof"><span><Icon name="check" /> Founded in 1975</span><span><Icon name="check" /> Open 6 days</span><span><Icon name="check" /> Harlem location</span></div></Reveal></div>
      <Reveal className="hero-visual" delay={0.12}><div className="hero-image"><Image src="/nyc-storage-hero.jpg" alt="Organized belongings ready for storage" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div><div className="hero-float hero-float-top"><span className="float-icon"><Icon name="pin" /></span><div><strong>Harlem, NYC</strong><span>234 E 121st Street</span></div></div><div className="hero-float hero-float-bottom"><strong>8 flexible sizes</strong><span>From 25 to 400 sq. ft.</span><Link href="/storage-unit-size-guide/">View size guide <Icon name="arrow" /></Link></div></Reveal>
    </div></section>

    <section className="trust-strip"><div className="shell"><p>Storage should feel simple.</p><div><span>Personal storage</span><span>Business storage</span><span>Moving support</span><span>Climate-controlled options</span></div></div></section>

    <section className="section solutions-preview"><div className="shell"><Reveal><div className="section-header-row"><SectionHeading eyebrow="Find your fit" title="Storage for whatever is taking up space" description="Explore solutions shaped around real New York moves, apartments, businesses, collections, and changing plans." /><ButtonLink href="/storage-types/" variant="secondary" showArrow>Browse all solutions</ButtonLink></div></Reveal><div className="featured-services">{storageServices.slice(0, 6).map((service, index) => <Reveal key={service.slug} delay={index * 0.05}><ServiceCard service={service} featured={index < 2} /></Reveal>)}</div></div></section>

    <section className="section process-section"><div className="shell process-grid"><Reveal className="process-intro"><p className="eyebrow eyebrow-light">How it works</p><h2>From packed to stored, without the usual shuffle.</h2><p>We have spent decades making city storage easier. Start with what you need; our team can help with the rest.</p><ButtonLink href="/get-a-quote/" variant="light" showArrow>Start your quote</ButtonLink></Reveal><div className="process-steps">
      {[{n:"01",title:"Pack it",text:"Use your own supplies or ask us about boxes and packing help."},{n:"02",title:"Move it",text:"Bring items to Harlem or ask about curbside pickup and moving support."},{n:"03",title:"Store it",text:"Choose short- or long-term space with guidance from an advisor."},{n:"04",title:"Get it back",text:"Access your unit or arrange return delivery when you are ready."}].map((step, index) => <Reveal key={step.n} className="process-step" delay={index * 0.06}><span>{step.n}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></Reveal>)}
    </div></div></section>

    <section className="section size-preview"><div className="shell"><Reveal><SectionHeading eyebrow="Storage size guide" title="A little visual help goes a long way" description="From a closet-sized unit to space for a large move, compare common sizes before requesting a quote." align="center" /></Reveal><SizeGrid limit={4} /><div className="center-action"><ButtonLink href="/storage-unit-size-guide/" variant="secondary" showArrow>Explore all unit sizes</ButtonLink></div></div></section>

    <section className="section local-section"><div className="shell local-card"><Reveal className="local-copy"><p className="eyebrow">Rooted in Harlem</p><h2>City storage with a neighborhood address.</h2><p>Find us at 234 East 121st Street, close to the 4, 5, and 6 trains and reachable by car, truck, or van.</p><div className="local-facts"><span><Icon name="clock" />{site.hours}</span><span><Icon name="phone" />Real advisors on the phone</span></div><ButtonLink href="/contact-us/" showArrow>Plan your visit</ButtonLink></Reveal><div className="map-art" role="img" aria-label="Stylized map showing the New York S. Storage location in Harlem"><div className="map-road road-one"/><div className="map-road road-two"/><div className="map-road road-three"/><span className="map-pin"><Icon name="pin" /></span><div className="map-label"><strong>New York S. Storage</strong><span>234 E 121st St</span></div></div></div></section>

    <CtaSection />
  </>;
}
