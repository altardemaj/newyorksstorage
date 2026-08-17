import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Icon } from "@/components/ui/icon";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import { createPageMetadata, site } from "@/data/site";

export const metadata = createPageMetadata("Contact Our Harlem Storage Team", "Call, email, or visit New York S. Storage at 234 East 121st Street in Harlem, New York.", "/contact-us");
export default function ContactPage() { return <>
  <JsonLd data={[
    webPageSchema({ path: "/contact-us", name: "Contact Our Harlem Storage Team | New York S. Storage", description: "Call, email, or visit New York S. Storage at 234 East 121st Street in Harlem, New York.", type: "ContactPage" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact-us" }]),
  ]} />
  <PageHero eyebrow="Contact" title="Talk with a real storage advisor" description="Questions about sizes, pickup, specialty items, or an upcoming move? Call, email, or send us a message." compact /><section className="section form-section"><div className="shell form-layout"><aside className="form-aside"><p className="eyebrow">Get in touch</p><h2>Helpful answers, six days a week.</h2><div className="contact-cards"><a className="contact-card" href={site.phoneHref}><Icon name="phone" /><span><strong>Customer service</strong><span>{site.phoneDisplay}</span></span></a><a className="contact-card" href={`mailto:${site.email}`}><Icon name="mail" /><span><strong>Email</strong><span>{site.email}</span></span></a><div className="contact-card"><Icon name="pin" /><span><strong>Our location</strong><span>{site.address.street}<br />{site.address.city}, {site.address.region} {site.address.postalCode}</span></span></div><div className="contact-card"><Icon name="clock" /><span><strong>Hours</strong><span>{site.hours}</span></span></div></div></aside><ContactForm /></div></section></> }
