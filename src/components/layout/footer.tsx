import Image from "next/image";
import Link from "next/link";
import { navigation, site } from "@/data/site";
import { storageServices } from "@/data/services";
import { Icon } from "@/components/ui/icon";

export function Footer() {
  return <footer className="site-footer"><div className="shell footer-grid">
    <div className="footer-brand"><Image src="/nyss-logo.png" alt="New York S. Storage" width={180} height={53} /><p>Manhattan storage with experienced advisors, flexible unit sizes, and moving help when you need it.</p><a className="footer-contact" href={site.phoneHref}><Icon name="phone" />{site.phoneDisplay}</a><a className="footer-contact" href={`mailto:${site.email}`}><Icon name="mail" />{site.email}</a></div>
    <div><h2>Storage solutions</h2><ul>{storageServices.slice(0, 6).map((service) => <li key={service.href}><Link href={service.href}>{service.shortTitle}</Link></li>)}</ul></div>
    <div><h2>Explore</h2><ul>{navigation.slice(1).map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}<li><Link href="/get-a-quote/">Get a quote</Link></li></ul></div>
    <div><h2>Visit us</h2><p className="footer-detail"><Icon name="pin" /><span>{site.address.street}<br />{site.address.city}, {site.address.region} {site.address.postalCode}</span></p><p className="footer-detail"><Icon name="clock" /><span>{site.hours}</span></p><a className="footer-portal" href={site.customerPortalUrl} target="_blank" rel="noreferrer">Customer login / Pay online <Icon name="arrow" /></a></div>
  </div><div className="shell footer-bottom"><p>© {new Date().getFullYear()} New York S. Storage. All rights reserved.</p><div><Link href="/terms-conditions/">Terms & privacy</Link><Link href="/accessibility-statement/">Accessibility</Link></div></div></footer>;
}

