import Link from "next/link";

/**
 * Çağrı Eylemi (CTA) Bileşeni
 *
 * Koyu blok (--dark zemin, radius'lu kart görünümü): eyebrow, başlık,
 * kısa metin ve iki aksiyon — yeşil teklif butonu + telefon linki.
 */
export default function ServiceCta() {
  return (
    <section className="svc-section svc-section-cta">
      <div className="container">
        <div className="svc-cta">
          <p className="eyebrow svc-cta-eyebrow">Teklif</p>
          <h2>Atık Yönetim Çözümünüz İçin Bize Ulaşın</h2>
          <p className="svc-cta-text">
            Ekibimizle işletmenizin ihtiyaçlarına uygun bir plan hazırlayabiliriz.
            Detaylı bilgi ve teklif için bizimle iletişime geçin.
          </p>
          <div className="svc-cta-actions">
            <Link href="/iletisim/" className="button button-green">
              Teklif Talep Et
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
