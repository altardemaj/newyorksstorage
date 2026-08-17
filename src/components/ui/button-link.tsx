import Link from "next/link";
import { Icon } from "./icon";

type ButtonLinkProps = { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "light" | "text"; external?: boolean; className?: string; showArrow?: boolean };

export function ButtonLink({ href, children, variant = "primary", external = false, className = "", showArrow = false }: ButtonLinkProps) {
  const classes = `button button-${variant} ${className}`;
  const content = <>{children}{showArrow && <Icon name="arrow" className="button-icon" />}</>;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) return <a className={classes} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{content}</a>;
  return <Link className={classes} href={href}>{content}</Link>;
}

