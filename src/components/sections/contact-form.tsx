import { site } from "@/data/site";
export function ContactForm() {
  return <form className="contact-form" action={`mailto:${site.email}`} method="post" encType="text/plain"><div className="field-grid"><label>First name<input required name="first-name" /></label><label>Last name<input required name="last-name" /></label><label>Email<input required name="email" type="email" /></label><label>Phone<input name="phone" type="tel" /></label><label className="field-wide">Your message<textarea required name="message" rows={6} /></label></div><button className="button button-primary" type="submit">Prepare message</button><p className="form-note">This opens your email app so you can review the message before sending.</p></form>;
}
