import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/data/site";

type CtaSectionProps = { title?: string; description?: string };
export function CtaSection({ title = "Ready to make room?", description = "Tell us what you need to store. An experienced advisor will help you choose the right space and next step." }: CtaSectionProps) {
  return <section className="section cta-wrap"><div className="shell"><div className="cta-card"><div><p className="eyebrow eyebrow-light">A better fit starts here</p><h2>{title}</h2><p>{description}</p></div><div className="cta-actions"><ButtonLink href="/get-a-quote/" variant="light" showArrow>Get a free quote</ButtonLink><ButtonLink href={site.phoneHref} variant="secondary">Call {site.phoneDisplay}</ButtonLink></div></div></div></section>;
}

