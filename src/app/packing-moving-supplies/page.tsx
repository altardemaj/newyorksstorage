import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = { title: "Packing & Moving Supplies", description: "Ask New York S. Storage about boxes and packing supplies for your move, with delivery options available.", alternates: { canonical: "/packing-moving-supplies/" } };
export default function SuppliesPage() { return <><PageHero eyebrow="Packing & moving supplies" title="The right box makes every move easier" description="We stock boxes in multiple sizes and moving supplies to help protect, label, and organize your belongings." />
  <section className="section content-section"><div className="shell service-overview"><div><p className="eyebrow">Pack with a plan</p><h2>Supplies for apartments, offices, and storage moves.</h2><p>Tell us what you are packing and how much you have. We can help you put together a practical supplies order and discuss delivery to your doorstep.</p><div className="feature-grid" style={{gridTemplateColumns:"1fr 1fr"}}><article className="feature-card"><Icon name="box" className="button-icon"/><h3>Boxes of all sizes</h3><p>Options for books, clothing, kitchenware, decor, and larger belongings.</p></article><article className="feature-card"><Icon name="truck" className="button-icon"/><h3>Delivery available</h3><p>Ask our team about bringing your packing supplies to you.</p></article></div></div><div className="supplies-image"><Image src="/packing-supplies.jpg" alt="Packing and moving supplies ready for a storage move" fill sizes="(max-width: 900px) 100vw, 50vw" /></div></div></section>
  <section className="section form-section"><div className="shell form-layout"><aside className="form-aside"><p className="eyebrow">Order inquiry</p><h2>What supplies do you need?</h2><p>Send a list or describe your move. The message will open in your email app for review before sending.</p></aside><ContactForm /></div></section></> }

