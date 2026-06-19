import { site } from "@/data/site";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";

export function MobileActions() { return <div className="mobile-actions" aria-label="Quick contact actions"><a href={site.phoneHref}><Icon name="phone" />Call</a><Link href="/get-a-quote/">Get a quote<Icon name="arrow" /></Link></div>; }
