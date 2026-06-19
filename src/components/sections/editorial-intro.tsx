"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export function EditorialIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reduceMotion || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(".editorial-image-reveal", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%", end: "top 20%", scrub: 1 } });
      gsap.from(".editorial-line", { y: 65, opacity: 0, stagger: .12, duration: .85, ease: "power3.out", scrollTrigger: { trigger: ".editorial-statement", start: "top 78%" } });
      gsap.from(".editorial-rule", { scaleX: 0, transformOrigin: "left", duration: 1.1, ease: "power3.inOut", scrollTrigger: { trigger: ".editorial-rule", start: "top 85%" } });
    }, sectionRef);
    return () => context.revert();
  }, [reduceMotion]);

  return <section className="editorial-intro" ref={sectionRef}>
    <div className="editorial-image-reveal"><Image src="/packing-supplies.jpg" alt="Moving boxes arranged inside a clean apartment" fill sizes="100vw" /><div /></div>
    <div className="shell editorial-layout"><p className="editorial-label">[ INTRODUCTION ]</p><div className="editorial-statement"><span className="editorial-line">New York S. Storage is built for</span><span className="editorial-line">controlled simplicity in a city</span><span className="editorial-line">that rarely gives you extra space.</span><p>We work with timing, access, unit size, and moving support to create storage that feels considered—not improvised.</p><div className="editorial-rule"/><div className="editorial-links"><Link href="/storage-types/">Our solutions</Link><Link href="/get-a-quote/">Build a plan</Link></div></div></div>
  </section>;
}
