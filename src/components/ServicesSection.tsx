import Image from "next/image";
import Link from "next/link";

import type { Service } from "@/lib/api-types";

interface ServicesSectionProps {
  services: Service[];
  featuredSlugs: string[];
}

export default function ServicesSection({ services, featuredSlugs }: ServicesSectionProps) {
  const FEATURED_SERVICES: Service[] = featuredSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => service !== undefined);
  return (
    <section className="services section-space reveal" id="hizmetler">
      <div className="container">
        <div className="section-heading d-flex justify-content-between align-items-end">
          <div>
            <p className="eyebrow green">HİZMETLERİMİZ</p>
            <h2>
              Değeri olan her atık,
              <br />
              doğru yere ulaşır.
            </h2>
          </div>
          <Link className="text-link" href="/hizmetler/">
            Tüm Hizmetler <i className="bi bi-arrow-right" />
          </Link>
        </div>
        <div className="row mt-3 g-3">
          {FEATURED_SERVICES.map((service) => (
            <article className="col-6 col-lg-4 service-card reveal" key={service.slug}>
              <div className="card-inner">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={1600}
                  height={900}
                  sizes="(max-width: 991px) 50vw, 33vw"
                />
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.summary ?? service.description}</p>
                  <Link href={`/hizmetler/${service.slug}/`}>
                    Detaylı Bilgi <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
