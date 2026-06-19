import { unitSizes } from "@/data/sizes";
import { ButtonLink } from "@/components/ui/button-link";

type SizeGridProps = { limit?: number };
export function SizeGrid({ limit }: SizeGridProps) {
  const sizes = typeof limit === "number" ? unitSizes.slice(0, limit) : unitSizes;
  return <div className="size-grid">{sizes.map((unit) => <article className="size-card" key={unit.size}><div className="size-visual"><span className="size-door" /><span>{unit.rooms}</span></div><div className="size-copy"><p>{unit.squareFeet}</p><h3>{unit.size}</h3><p>{unit.fit}</p><ButtonLink href="/get-a-quote/" variant="text" showArrow>Check availability</ButtonLink></div></article>)}</div>;
}

