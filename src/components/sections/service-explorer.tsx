"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { serviceCategories, storageServices } from "@/data/services";
import { Icon } from "@/components/ui/icon";
import { ServiceCard } from "./service-card";

export function ServiceExplorer() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();
  const normalized = query.trim().toLowerCase();
  const filtered = storageServices.filter((service) => (category === "all" || service.category === category) && (!normalized || `${service.title} ${service.description}`.toLowerCase().includes(normalized)));

  return <div className="explorer-layout">
    <aside className="filter-panel"><p className="filter-label">Filter by need</p><div className="filter-options">{serviceCategories.map((item) => <button type="button" aria-pressed={category === item.value} className={category === item.value ? "active" : ""} key={item.value} onClick={() => setCategory(item.value)}><span>{item.label}</span><span>{storageServices.filter((service) => item.value === "all" || service.category === item.value).length}</span></button>)}</div><div className="filter-help"><strong>Not sure what fits?</strong><p>Our team can help match your items to the right space.</p><a href="tel:+12124107300">Call a storage advisor</a></div></aside>
    <div className="explorer-results"><label className="search-field"><Icon name="search" /><span className="sr-only">Search storage solutions</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search storage solutions..." /></label><div className="results-meta"><p><strong>{filtered.length}</strong> solutions</p><p>Harlem · New York City</p></div>
      <motion.div layout={!reduceMotion} className="service-grid"><AnimatePresence mode="popLayout">{filtered.map((service) => <motion.div layout={!reduceMotion} key={service.slug} initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }} transition={{ duration: 0.24 }}><ServiceCard service={service} /></motion.div>)}</AnimatePresence></motion.div>
      {filtered.length === 0 && <div className="empty-results"><h3>No exact match</h3><p>Try another search or call us and we will point you in the right direction.</p></div>}
    </div>
  </div>;
}
