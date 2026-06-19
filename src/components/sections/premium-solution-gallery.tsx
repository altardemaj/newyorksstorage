"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@/components/ui/icon";
import { serviceCategories, storageServices } from "@/data/services";

export function PremiumSolutionGallery() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const search = query.trim().toLowerCase();
  const visible = storageServices.filter((service) => (category === "all" || service.category === category) && (!search || `${service.title} ${service.description}`.toLowerCase().includes(search)));

  useLayoutEffect(() => {
    if (reduceMotion || !pinRef.current || !trackRef.current || visible.length < 2) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(min-width: 821px)", () => {
      const pin = pinRef.current;
      const track = trackRef.current;
      if (!pin || !track) return;
      const tween = gsap.to(track, {
        x: () => -(track.scrollWidth - pin.clientWidth + 80),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top 78px",
          end: () => `+=${Math.max(track.scrollWidth - pin.clientWidth, 600)}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => tween.kill();
    });
    return () => media.revert();
  }, [reduceMotion, visible.length]);

  return <section className="premium-gallery" id="storage-gallery">
    <div className="gallery-orbit gallery-orbit-a" aria-hidden="true" /><div className="gallery-orbit gallery-orbit-b" aria-hidden="true" />
    <div className="shell">
      <div className="gallery-heading"><div><p className="gallery-index">01 / SOLUTIONS</p><h2>Choose your<br /><em>storage solution.</em></h2></div><p>Browse storage the way you browse a premium template gallery—filter by need, preview the experience, then open the full solution.</p></div>
      <div className="gallery-controls">
        <label className="gallery-search"><Icon name="search" /><span className="sr-only">Search storage solutions</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the collection" /></label>
        <div className="gallery-filters" role="group" aria-label="Filter storage solutions">{serviceCategories.map((item) => <button key={item.value} type="button" aria-pressed={category === item.value} className={category === item.value ? "active" : ""} onClick={() => setCategory(item.value)}>{item.label}</button>)}</div>
      </div>

      <div className="horizontal-gallery-pin" ref={pinRef}><div className="horizontal-gallery-meta"><span>Selected collection</span><strong>{String(visible.length).padStart(2, "0")}</strong><small>Scroll to move sideways →</small></div><motion.div className="horizontal-gallery-track" ref={trackRef} layout={!reduceMotion}>
        <AnimatePresence mode="popLayout">{visible.map((service, index) => <motion.article layout={!reduceMotion} key={service.slug} className={`template-card template-card-${index % 5}`} initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0, scale: .96 }} transition={{ duration: .35 }}>
          <Link href={service.href} aria-label={`Explore ${service.shortTitle}`}>
            <div className="template-preview">
              {(index === 0 || index === 4) && <Image src={index === 0 ? "/nyc-storage-hero.jpg" : "/packing-supplies.jpg"} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />}
              <div className="preview-gradient" />
              <div className="preview-room" aria-hidden="true"><span className="preview-door"/><span className="preview-shelf"/><i className="preview-box pb-one"/><i className="preview-box pb-two"/><i className="preview-box pb-three"/></div>
              <span className="preview-badge">Live preview</span>
              <span className="preview-action"><Icon name="arrow" /></span>
            </div>
            <div className="template-overlay"><span className="template-pill">{service.category}</span><div><Icon name={service.icon} /><h3>{service.shortTitle}</h3><p>{service.description}</p></div></div>
          </Link>
        </motion.article>)}</AnimatePresence>
      </motion.div></div>
      {visible.length === 0 && <div className="gallery-empty">No exact match. Try another category or search.</div>}
    </div>
  </section>;
}
