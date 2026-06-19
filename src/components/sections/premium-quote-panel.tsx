"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { site } from "@/data/site";

export function PremiumQuotePanel() {
  const reduceMotion = useReducedMotion();
  return <section className="premium-cta-section"><div className="shell"><div className="premium-cta-panel"><div className="premium-cta-grid" aria-hidden="true"/><motion.div className="cta-floating-box cta-float-one" animate={reduceMotion ? undefined : { y: [0, -15, 0], rotate: [-7, -2, -7] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}>5×5</motion.div><motion.div className="cta-floating-box cta-float-two" animate={reduceMotion ? undefined : { y: [0, 13, 0], rotate: [8, 3, 8] }} transition={{ repeat: Infinity, duration: 8.5, ease: "easeInOut" }}>10×10</motion.div>
    <div className="premium-cta-copy"><p className="gallery-index gallery-index-light">05 / YOUR NEXT MOVE</p><h2>Let’s make room<br />for the <em>next thing.</em></h2><p>Share a few details. We’ll turn boxes, dates, and square footage into a storage plan that actually makes sense.</p><div className="premium-cta-actions"><ButtonLink href="/get-a-quote/" variant="light" showArrow>Design my storage plan</ButtonLink><ButtonLink href={site.phoneHref} variant="secondary"><Icon name="phone" className="button-icon" /> Talk to an advisor</ButtonLink></div></div>
    <motion.div className="premium-quote-preview" initial={reduceMotion ? false : { opacity: 0, rotate: 5, y: 30 }} whileInView={{ opacity: 1, rotate: -2, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}><div className="preview-top"><span>Instant plan preview</span><i /></div><div className="preview-line"><span>Your move</span><strong>Apartment</strong></div><div className="preview-line"><span>Recommended</span><strong>5&apos; × 10&apos;</strong></div><div className="preview-line"><span>Support</span><strong>Pickup + storage</strong></div><div className="preview-total"><span>Next step</span><strong>Talk with NYSS →</strong></div></motion.div>
    </div></div></section>;
}
