import Link from "next/link";
import type { StorageService } from "@/data/services";
import { Icon } from "@/components/ui/icon";

type ServiceCardProps = { service: StorageService; featured?: boolean };
export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return <Link href={service.href} className={`service-card ${featured ? "service-card-featured" : ""}`}>
    <div className="service-card-top"><span className="service-icon"><Icon name={service.icon} /></span><span className="service-arrow"><Icon name="arrow" /></span></div>
    <div><p className="service-category">{service.category.replace("climate", "climate-controlled")}</p><h3>{service.shortTitle}</h3><p>{service.description}</p></div>
    <span className="service-link">Explore solution <Icon name="arrow" /></span>
  </Link>;
}

