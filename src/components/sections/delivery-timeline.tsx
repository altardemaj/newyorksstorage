"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import type { IconName } from "@/data/services";

const steps: { number: string; title: string; text: string; icon: IconName }[] = [
  { number: "01", title: "You point", text: "Tell us what is moving and where it needs to go.", icon: "home" },
  { number: "02", title: "We pick up", text: "Ask about curbside pickup and moving assistance.", icon: "truck" },
  { number: "03", title: "We store", text: "Your belongings settle into the right Harlem unit.", icon: "box" },
  { number: "04", title: "We return", text: "Arrange delivery when your space—or your next address—is ready.", icon: "building" },
];

export function DeliveryTimeline() {
  const reduceMotion = useReducedMotion();
  return <section className="delivery-section"><div className="delivery-glow" /><div className="shell"><div className="delivery-heading"><p className="gallery-index gallery-index-light">03 / PICKUP & DELIVERY</p><h2>From your curb<br />to your <em>clean slate.</em></h2><p>One continuous visual journey, with an experienced team at every handoff.</p></div>
    <div className="delivery-track"><motion.div className="delivery-progress" initial={reduceMotion ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} />{steps.map((step, index) => <motion.article className="delivery-step" key={step.number} initial={reduceMotion ? false : { opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .15, duration: .5 }}><span className="delivery-node"><Icon name={step.icon} /></span><small>{step.number}</small><h3>{step.title}</h3><p>{step.text}</p></motion.article>)}</div>
  </div></section>;
}

