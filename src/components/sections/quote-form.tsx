"use client";
import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { site } from "@/data/site";

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ address: "", date: "", size: "Not too sure", type: "Personal", items: "", duration: "3–6 months", details: "", firstName: "", lastName: "", email: "", phone: "" });
  const setField = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const next = () => setStep((current) => Math.min(3, current + 1));
  const previous = () => setStep((current) => Math.max(1, current - 1));
  const canContinue = step === 1 ? Boolean(form.address && form.date) : step === 2 ? Boolean(form.items) : true;
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Storage quote request from ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(`Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nCurrent address: ${form.address}\nMove-in date: ${form.date}\nUnit size: ${form.size}\nStorage type: ${form.type}\nItems: ${form.items}\nDuration: ${form.duration}\nDetails: ${form.details}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return <form className="quote-form" onSubmit={submit}>
    <div className="form-progress"><div><span>Step {step} of 3</span><span>{step === 1 ? "Your storage" : step === 2 ? "What you're storing" : "Your details"}</span></div><div className="progress-track"><span style={{ width: `${step * 33.333}%` }} /></div></div>
    {step === 1 && <fieldset><legend>Let’s start with the move</legend><div className="field-grid"><label>Current address<input required value={form.address} onChange={(e) => setField("address", e.target.value)} placeholder="Street address or neighborhood" /></label><label>When do you need storage?<input required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} /></label><label>Unit size<select value={form.size} onChange={(e) => setField("size", e.target.value)}><option>Not too sure</option><option>Small</option><option>Medium</option><option>Large</option><option>Commercial</option></select></label><label>Type of storage<select value={form.type} onChange={(e) => setField("type", e.target.value)}><option>Personal</option><option>Commercial</option></select></label></div></fieldset>}
    {step === 2 && <fieldset><legend>Tell us about your items</legend><div className="field-grid"><label>What do you want to store?<select required value={form.items} onChange={(e) => setField("items", e.target.value)}><option value="">Select items</option><option>Furniture / household items</option><option>Personal effects</option><option>Documents / boxes</option><option>Heavy equipment</option><option>Other items</option></select></label><label>How long will you need storage?<select value={form.duration} onChange={(e) => setField("duration", e.target.value)}><option>A couple of months</option><option>3–6 months</option><option>6–12 months</option><option>12+ months</option><option>Indefinitely</option></select></label><label className="field-wide">Anything else we should know?<textarea value={form.details} onChange={(e) => setField("details", e.target.value)} placeholder="Elevator access, delicate items, pickup needs..." rows={5} /></label></div></fieldset>}
    {step === 3 && <fieldset><legend>Where should we send your quote?</legend><div className="field-grid"><label>First name<input required value={form.firstName} onChange={(e) => setField("firstName", e.target.value)} /></label><label>Last name<input required value={form.lastName} onChange={(e) => setField("lastName", e.target.value)} /></label><label>Email<input required type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} /></label><label>Phone<input required type="tel" value={form.phone} onChange={(e) => setField("phone", e.target.value)} /></label></div><p className="form-note">Submitting opens a prepared email to {site.email}; you can review it before sending.</p></fieldset>}
    <div className="form-actions">{step > 1 && <button type="button" className="button button-secondary" onClick={previous}>Back</button>}{step < 3 ? <button type="button" className="button button-primary" onClick={next} disabled={!canContinue}>Continue <Icon name="arrow" className="button-icon" /></button> : <button type="submit" className="button button-primary">Prepare quote request <Icon name="arrow" className="button-icon" /></button>}</div>
  </form>;
}
