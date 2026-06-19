"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { site } from "@/data/site";

const floatingBoxes = [
  { className: "hero-box-a", delay: 0, duration: 7 },
  { className: "hero-box-b", delay: 1.2, duration: 8.5 },
  { className: "hero-box-c", delay: 2.1, duration: 6.8 },
] as const;

export function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  return <section className="cinematic-hero" ref={sectionRef}>
    <div className="cinematic-grid" aria-hidden="true" />
    <motion.div className="cinematic-image" style={reduceMotion ? undefined : { y: imageY }}><Image src="/nyc-storage-hero.jpg" alt="Premium storage units inside the New York S. Storage facility" fill priority sizes="100vw" /></motion.div>
    <div className="cinematic-shade" />
    <div className="cinematic-glow cinematic-glow-one" /><div className="cinematic-glow cinematic-glow-two" />
    <div className="shell cinematic-inner">
      <motion.div className="cinematic-copy" style={reduceMotion ? undefined : { y: copyY }} initial={reduceMotion ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
        <div className="hero-kicker"><span>New York City</span><span>Storage, reimagined</span></div>
        <h1>Make space.<br /><em>Keep the life.</em></h1>
        <p>A cinematic storage experience in Harlem—expert help, flexible units, pickup, and delivery shaped around the way New Yorkers actually move.</p>
        <div className="hero-actions"><ButtonLink href="/get-a-quote/" variant="light" showArrow>Build my storage plan</ButtonLink><ButtonLink href="/storage-types/" variant="secondary">Explore solutions</ButtonLink></div>
      </motion.div>

      <div className="box-stage" aria-hidden="true">
        {floatingBoxes.map((box) => <motion.div key={box.className} className={`box-3d ${box.className}`} animate={reduceMotion ? undefined : { y: [0, -18, 0], rotate: [-4, 2, -4] }} transition={{ duration: box.duration, delay: box.delay, repeat: Infinity, ease: "easeInOut" }}><span className="box-front">NYSS</span><span className="box-side"/><span className="box-top"/><i /></motion.div>)}
      </div>

      <motion.div className="floating-quote-card" initial={reduceMotion ? false : { opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .65, duration: .65 }}>
        <div className="quote-card-head"><span className="quote-avatar">NY</span><div><strong>Storage advisor</strong><small>Usually replies quickly</small></div><span className="live-dot" /></div>
        <p>“Tell us what you’re storing. We’ll help size the space.”</p>
        <a href={site.phoneHref}><Icon name="phone" /> {site.phoneDisplay}</a>
      </motion.div>

      <div className="cinematic-stats"><span><strong>50+</strong> years in NYC</span><span><strong>8</strong> unit sizes</span><span><strong>6</strong> days of support</span></div>
      <a className="hero-scroll" href="#storage-gallery"><span>Scroll to explore</span><i /></a>
    </div>
  </section>;
}

