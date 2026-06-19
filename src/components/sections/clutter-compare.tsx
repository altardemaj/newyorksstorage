"use client";

import { useState } from "react";
import Image from "next/image";

export function ClutterCompare() {
  const [position, setPosition] = useState(52);
  return <section className="compare-section"><div className="shell compare-grid"><div className="compare-copy"><p className="gallery-index">04 / MAKE SPACE</p><h2>Clutter out.<br /><em>Possibility in.</em></h2><p>Drag the slider and feel the difference between belongings waiting for a plan and a space ready for whatever comes next.</p><div className="compare-legend"><span><i className="legend-before"/>Before storage</span><span><i className="legend-after"/>After storage</span></div></div>
    <div className="compare-visual"><div className="compare-layer compare-before"><Image src="/packing-supplies.jpg" alt="Packed boxes and belongings before storage" fill sizes="(max-width: 800px) 100vw, 60vw" /><span>Cluttered</span></div><div className="compare-layer compare-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}><Image src="/nyc-storage-hero.jpg" alt="Organized storage space after moving belongings" fill sizes="(max-width: 800px) 100vw, 60vw" /><span>Cleared</span></div><div className="compare-handle" style={{ left: `${position}%` }}><i/><b>↔</b></div><label><span className="sr-only">Adjust before and after comparison</span><input type="range" min="8" max="92" value={position} onChange={(event) => setPosition(Number(event.target.value))} /></label></div>
  </div></section>;
}

