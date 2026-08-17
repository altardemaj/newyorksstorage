"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { site } from "@/data/site";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "4689b137-0f55-4ab4-89f3-8a740726b5a1";
const referralOptions = [
  "Google",
  "Stored with New York S. Storage before",
  "Live locally / saw facility",
  "Building management / super",
  "Social media",
  "Friend",
  "Saw truck",
  "Real estate agent",
  "Yelp",
  "Bing",
  "Other",
] as const;
const initialForm = { address: "", date: "", size: "Not too sure", type: "Personal", items: "", duration: "3–6 months", details: "", firstName: "", lastName: "", email: "", phone: "", referral: "" };

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submissionState, setSubmissionState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const setField = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const next = () => setStep((current) => Math.min(3, current + 1));
  const previous = () => setStep((current) => Math.max(1, current - 1));
  const canContinue = step === 1 ? Boolean(form.address && form.date) : step === 2 ? Boolean(form.items) : true;

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionState === "submitting") return;

    setSubmissionState("submitting");
    const data = new FormData();
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New York S. Storage Quote Request");
    data.append("from_name", "New York S. Storage Website");
    data.append("replyto", form.email);
    data.append("First name", form.firstName);
    data.append("Last name", form.lastName);
    data.append("email", form.email);
    data.append("Phone", form.phone);
    data.append("Current address", form.address);
    data.append("Move-in date", form.date);
    data.append("Unit size", form.size);
    data.append("Storage type", form.type);
    data.append("Items being stored", form.items);
    data.append("Storage duration", form.duration);
    data.append("Additional details", form.details || "None provided");
    data.append("How did you hear about us?", form.referral);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: data });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("Web3Forms rejected the submission.");
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  };

  const reset = () => {
    setForm(initialForm);
    setStep(1);
    setSubmissionState("idle");
  };

  if (submissionState === "success") {
    return <div className="quote-form quote-confirmation" role="status" aria-live="polite">
      <p className="eyebrow">Request received</p>
      <h2>Thank you.</h2>
      <p>Thank you for your request. A New York S. Storage advisor will contact you shortly. For immediate assistance, call <a href={site.phoneHref}>(212) 410-7300</a>.</p>
      <button type="button" className="button button-primary" onClick={reset}>Submit another request</button>
    </div>;
  }

  return <form className="quote-form" onSubmit={submit}>
    <div className="form-progress"><div><span>Step {step} of 3</span><span>{step === 1 ? "Your storage" : step === 2 ? "What you're storing" : "Your details"}</span></div><div className="progress-track"><span style={{ width: `${step * 33.333}%` }} /></div></div>
    {step === 1 && <fieldset><legend>Let’s start with the move</legend><div className="field-grid"><label>Current address<input required value={form.address} onChange={(e) => setField("address", e.target.value)} placeholder="Street address or neighborhood" /></label><label>When do you need storage?<input required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} /></label><label>Unit size<select value={form.size} onChange={(e) => setField("size", e.target.value)}><option>Not too sure</option><option>Small</option><option>Medium</option><option>Large</option><option>Commercial</option></select></label><label>Type of storage<select value={form.type} onChange={(e) => setField("type", e.target.value)}><option>Personal</option><option>Commercial</option></select></label></div></fieldset>}
    {step === 2 && <fieldset><legend>Tell us about your items</legend><div className="field-grid"><label>What do you want to store?<select required value={form.items} onChange={(e) => setField("items", e.target.value)}><option value="">Select items</option><option>Furniture / household items</option><option>Personal effects</option><option>Documents / boxes</option><option>Heavy equipment</option><option>Other items</option></select></label><label>How long will you need storage?<select value={form.duration} onChange={(e) => setField("duration", e.target.value)}><option>A couple of months</option><option>3–6 months</option><option>6–12 months</option><option>12+ months</option><option>Indefinitely</option></select></label><label className="field-wide">Anything else we should know?<textarea value={form.details} onChange={(e) => setField("details", e.target.value)} placeholder="Elevator access, delicate items, pickup needs..." rows={5} /></label></div></fieldset>}
    {step === 3 && <fieldset><legend>Where should we send your quote?</legend><div className="field-grid"><label>First name<input required autoComplete="given-name" value={form.firstName} onChange={(e) => setField("firstName", e.target.value)} /></label><label>Last name<input required autoComplete="family-name" value={form.lastName} onChange={(e) => setField("lastName", e.target.value)} /></label><label>Email<input required autoComplete="email" name="email" type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} /></label><label>Phone<input required autoComplete="tel" type="tel" value={form.phone} onChange={(e) => setField("phone", e.target.value)} /></label><label className="field-wide">How did you hear about us?<select required value={form.referral} onChange={(e) => setField("referral", e.target.value)}><option value="">Select an option</option>{referralOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label></div><p className="form-note">Your request will be sent securely to the New York S. Storage team.</p></fieldset>}
    {submissionState === "error" && <p className="form-status form-status-error" role="alert">We couldn’t send your request. Please try again, or call <a href={site.phoneHref}>{site.phoneDisplay}</a> for immediate assistance.</p>}
    <div className="form-actions">{step > 1 && <button type="button" className="button button-secondary" onClick={previous} disabled={submissionState === "submitting"}>Back</button>}{step < 3 ? <button type="button" className="button button-primary" onClick={next} disabled={!canContinue}>Continue <Icon name="arrow" className="button-icon" /></button> : <button type="submit" className="button button-primary" disabled={submissionState === "submitting"}>{submissionState === "submitting" ? "Sending…" : <>Submit quote request <Icon name="arrow" className="button-icon" /></>}</button>}</div>
  </form>;
}
