import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCard } from "@/components/sections/service-card";
import { CtaSection } from "@/components/sections/cta-section";
import { getService, storageServices } from "@/data/services";

type ServicePageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return storageServices.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> { const { slug } = await params; const service = getService(slug); if (!service) return {}; return { title: service.title, description: service.description, alternates: { canonical: service.href }, openGraph: { title: `${service.title} | New York S. Storage`, description: service.description } }; }

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params; const service = getService(slug); if (!service) notFound();
  const related = storageServices.filter((item) => item.slug !== service.slug && (item.category === service.category || item.category === "moving")).slice(0, 3);
  return <><PageHero eyebrow={service.eyebrow} title={service.title} description={service.description} />
    <section className="section content-section"><div className="shell service-overview"><div><p className="eyebrow">Designed around your needs</p><h2>{service.shortTitle}, without the guesswork.</h2><p>{service.longDescription}</p><div className="hero-actions"><ButtonLink href="/get-a-quote/" showArrow>Get a free quote</ButtonLink><ButtonLink href="/storage-unit-size-guide/" variant="secondary">Compare unit sizes</ButtonLink></div></div><div className="service-visual"><Icon name={service.icon} /><div className="service-visual-badge"><span>New York S. Storage</span>Harlem · NYC</div></div></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="Why it works" title={`A practical ${service.shortTitle.toLowerCase()} setup`} description="A straightforward combination of flexible space, a local facility, and help from people who understand city moves." /><div className="feature-grid">{service.features.map((feature, index) => <article className="feature-card" key={feature.title}><span className="feature-number">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div></div></section>
    <section className="section content-section"><div className="shell"><div className="section-header-row"><SectionHeading eyebrow="Keep exploring" title="Related storage solutions" /><ButtonLink href="/storage-types/" variant="secondary" showArrow>View all</ButtonLink></div><div className="related-grid">{related.map((item) => <ServiceCard service={item} key={item.slug} />)}</div></div></section><CtaSection title={`Talk through your ${service.shortTitle.toLowerCase()} needs`} /></>;
}

