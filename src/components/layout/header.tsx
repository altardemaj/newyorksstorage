import Image from "next/image";
import Link from "next/link";
import { navigation, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";

export function Header() {
  return <>
    <div className="utility-bar"><div className="shell utility-inner"><p><span className="utility-dot" /> Units of all sizes available in Harlem</p><div className="utility-links"><a href={site.phoneHref}>{site.phoneDisplay}</a><a href={site.customerPortalUrl} target="_blank" rel="noreferrer">Log in / Pay online</a></div></div></div>
    <header className="site-header"><div className="shell header-inner">
      <Link className="brand" href="/" aria-label="New York S. Storage home"><Image src="/nyss-logo.png" alt="New York S. Storage" width={164} height={49} priority /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <div className="header-actions"><ButtonLink href={site.phoneHref} variant="secondary" className="header-phone"><Icon name="phone" className="button-icon" /> Call</ButtonLink><ButtonLink href="/get-a-quote/" showArrow>Get a quote</ButtonLink></div>
      <details className="mobile-menu"><summary aria-label="Open navigation"><Icon name="menu" className="menu-icon" /></summary><nav aria-label="Mobile navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<a href={site.customerPortalUrl} target="_blank" rel="noreferrer">Log in / Pay online</a><ButtonLink href="/get-a-quote/">Get a quote</ButtonLink></nav></details>
    </div></header>
  </>;
}

