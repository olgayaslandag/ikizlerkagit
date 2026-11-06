import Link from "next/link";
import type { Service, ServiceContent } from "@/lib/api-types";

type ServiceContentHero = ServiceContent["hero"];

/**
 * Hizmet Detay Hero Bileşeni
 *
 * Görsel içermez; editoryal/asimetrik düzen kullanır:
 * sol sütun (col-lg-8) eyebrow + başlık + lead + opsiyonel intro paragrafları
 * + aksiyon butonları, sağ sütun (col-lg-4) sticky "künye" (quickFacts) paneli.
 * hero.intro ve hero.quickFacts opsiyoneldir; yoksa ilgili bölümler render edilmez.
 */

interface ServiceDetailHeroProps {
  service: Service;
  hero?: ServiceContentHero;
}

export default function ServiceDetailHero({ service, hero }: ServiceDetailHeroProps) {
  // Opsiyonel hero alanları (ServiceContentHero arayüzünde tanımlı)
  const intro = hero?.intro ?? [];
  const quickFacts = hero?.quickFacts ?? [];

  return (
    <header className="svc-hero">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Sol sütun: başlık, lead, intro ve aksiyonlar */}
          <div className="col-lg-8">
            {hero?.eyebrow && <p className="svc-hero-eyebrow">{hero.eyebrow}</p>}
            <h1 className="services-page-title svc-hero-title">{service.title}</h1>
            <p className="services-page-lead svc-hero-lead">
              {hero?.lead ?? service.description}
            </p>

            {intro.length > 0 && (
              <div className="svc-hero-intro">
                {intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            <div className="svc-hero-actions">
              <Link href="/iletisim/" className="button button-green">
                Teklif Al
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
              <a href={`/hizmetler/${service.slug}/#surec`} className="outline-link">
                Süreci Gör
                <i className="bi bi-arrow-down" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Sağ sütun: künye (quick facts) paneli — sticky */}
          {quickFacts.length > 0 && (
            <div className="col-lg-4">
              <aside className="svc-hero-facts" aria-label="Hizmet özeti">
                <ul className="list-unstyled m-0 p-0">
                  {quickFacts.map((fact, index) => (
                    <li key={index} className="svc-fact">
                      <span className="svc-fact-label">{fact.label}</span>
                      <span className="svc-fact-value">{fact.value}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
