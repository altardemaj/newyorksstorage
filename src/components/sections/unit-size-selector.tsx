"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { unitSizes } from "@/data/sizes";
import { ButtonLink } from "@/components/ui/button-link";

export function UnitSizeSelector() {
  const [active, setActive] = useState(2);
  const reduceMotion = useReducedMotion();
  const unit = unitSizes[active];
  const boxCount = Math.min(12, active + 4);

  return <section className="motion-size-section"><div className="shell">
    <div className="motion-section-heading"><div><p className="gallery-index">02 / SIZE FINDER</p><h2>Find the room<br /><em>inside the room.</em></h2></div><p>Select a size and watch the storage space adapt. It is a visual guide—not a game of apartment Tetris.</p></div>
    <div className="size-selector-shell">
      <div className="size-selector-nav" role="tablist" aria-label="Choose a storage unit size">{unitSizes.map((item, index) => <button type="button" role="tab" aria-selected={active === index} className={active === index ? "active" : ""} key={item.size} onClick={() => setActive(index)}><span>{item.size}</span><small>{item.squareFeet}</small></button>)}</div>
      <div className="size-motion-stage">
        <div className="size-stage-copy"><AnimatePresence mode="wait"><motion.div key={unit.size} initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -12 }} transition={{ duration: .28 }}><span className="size-stage-label">Selected unit</span><strong>{unit.size}</strong><em>{unit.rooms}</em><p>{unit.fit}</p></motion.div></AnimatePresence><ButtonLink href="/get-a-quote/" variant="light" showArrow>Check this size</ButtonLink></div>
        <div className="isometric-room" aria-hidden="true"><div className="iso-floor"/><div className="iso-wall iso-wall-left"/><div className="iso-wall iso-wall-right"/><div className="iso-door"/>{Array.from({ length: boxCount }, (_, index) => <motion.span key={`${active}-${index}`} className={`iso-box iso-box-${index % 6}`} initial={reduceMotion ? false : { opacity: 0, y: -35, rotate: -8 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ delay: index * .045, type: "spring", stiffness: 180, damping: 18 }} />)}</div>
      </div>
    </div>
  </div></section>;
}

