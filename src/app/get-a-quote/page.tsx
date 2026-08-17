import { PageHero } from "@/components/sections/page-hero";
import { QuoteForm } from "@/components/sections/quote-form";
import { Icon } from "@/components/ui/icon";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import { createPageMetadata, site } from "@/data/site";

export const metadata = createPageMetadata("Request a Storage Quote", "Tell New York S. Storage what you need to store and get help choosing a unit in our Harlem facility.", "/get-a-quote");
export default function QuotePage() {
  return <>
    <JsonLd data={[
      webPageSchema({ path: "/get-a-quote", name: "Request a Storage Quote | New York S. Storage", description: "Tell New York S. Storage what you need to store and get help choosing a unit in our Harlem facility." }),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Get a Quote", path: "/get-a-quote" }]),
    ]} />
    <PageHero eyebrow="No-obligation quote" title="Tell us what needs a little more room" description="A few details help our storage advisors recommend a unit, moving support, and the right next step." compact />
    <section className="section form-section"><div className="shell form-layout"><aside className="form-aside"><p className="eyebrow">Get a free quote</p><h2>A clearer estimate starts with what you’re storing.</h2><p>Not sure about size? That is completely normal. Describe your items and our team will help.</p><div className="aside-contact"><a href={site.phoneHref}><Icon name="phone" />{site.phoneDisplay}</a><span><Icon name="clock" />{site.hours}</span><span><Icon name="pin" />Harlem, New York City</span></div></aside><QuoteForm /></div></section>
  </>;
}
