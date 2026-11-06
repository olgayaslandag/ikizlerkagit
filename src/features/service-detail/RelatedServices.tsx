import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/api-types";

/**
 * İlişkili Hizmetler Bileşeni
 *
 * Kocaman görsel yerine kompakt kartlar: 56×56 küçük thumbnail + başlık
 * + kısa özet + sağda ok ikonu. next/image ile hafif yükleme.
 * Slug'lar services prop'u (API'den gelen tüm hizmetler) üzerinden çözümlenir.
 */
interface RelatedServicesProps {
  relatedSlugs: string[];
  services: Service[];
}

export default function RelatedServices({ relatedSlugs, services }: RelatedServicesProps) {
  const relatedServices = relatedSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((service): service is NonNullable<typeof service> => service !== undefined);

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section className="svc-section svc-section-soft svc-section-related">
      <div className="container">
        <div className="svc-section-head">
          <p className="eyebrow green">Keşfet</p>
          <h2>İlişkili Hizmetler</h2>
        </div>
        <div className="svc-related">
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}/`}
              className="svc-related-card"
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={112}
                height={112}
                sizes="56px"
                loading="lazy"
                className="svc-related-thumb"
              />
              <span className="svc-related-body">
                <h3>{service.title}</h3>
                <p>{service.summary ?? service.description}</p>
              </span>
              <i className="bi bi-arrow-right svc-related-arrow" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
