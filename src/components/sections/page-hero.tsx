import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/data/site";

type PageHeroProps = { eyebrow: string; title: string; description: string; compact?: boolean };
export function PageHero({ eyebrow, title, description, compact = false }: PageHeroProps) {
  return <section className={`page-hero ${compact ? "page-hero-compact" : ""}`}><div className="page-hero-orb" /><div className="shell page-hero-inner"><p className="eyebrow eyebrow-light">{eyebrow}</p><h1>{title}</h1><p>{description}</p><div className="hero-actions"><ButtonLink href="/get-a-quote/" variant="light" showArrow>Get a free quote</ButtonLink><ButtonLink href={site.phoneHref} variant="secondary">Call {site.phoneDisplay}</ButtonLink></div></div></section>;
}

