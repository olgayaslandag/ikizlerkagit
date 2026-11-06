import { PALET } from "@/data/palet";

/**
 * İkizler Palet — Hizmetler/Çözümler bölümü (svc-section-features)
 */
export default function PaletServices() {
  return (
    <section id="hizmetler" className="svc-section svc-section-features reveal">
      <div className="container">
        <div className="svc-section-head">
          <p className="eyebrow green">HİZMETLERİMİZ</p>
          <h2>Palet Çözümlerimiz</h2>
        </div>
        <div className="row g-4 svc-features">
          {PALET.services.map((service, index) => (
            <div key={service.title} className="col-md-6">
              <article className="svc-feature h-100">
                <span className="svc-feature-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="svc-feature-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}