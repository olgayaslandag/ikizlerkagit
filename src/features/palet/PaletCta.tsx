import Link from "next/link";

import { PALET } from "@/data/palet";

/**
 * İkizler Palet — Çağrı (CTA) bölümü
 */
export default function PaletCta() {
  const cta = PALET.cta;

  return (
    <section className="svc-section svc-section-cta reveal">
      <div className="container">
        <div className="svc-cta">
          <p className="eyebrow svc-cta-eyebrow">{cta.eyebrow}</p>
          <h2>{cta.title}</h2>
          <p className="svc-cta-text">{cta.text}</p>
          <div className="svc-cta-actions">
            <Link href="/iletisim/" className="button button-green">
              {cta.buttonLabel}
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
            <a href="tel:+902128861090" className="button button-outline-light">
              <i className="bi bi-telephone" aria-hidden="true" />
              0212 886 10 90
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}