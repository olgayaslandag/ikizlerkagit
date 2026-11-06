import type { ServiceContent } from "@/lib/api-types";

type ServiceContentFeature = ServiceContent["features"][number];

/**
 * Özellikler (Features) Bileşeni
 *
 * Kart grid yerine iki sütunlu (col-md-6) numaralı liste:
 * her satır üstte ince çizgi, solda büyük soluk numara, sağda başlık + metin.
 */
interface ServiceFeaturesProps {
  features: ServiceContentFeature[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section id="avantajlar" className="svc-section svc-section-features">
      <div className="container">
        <div className="svc-section-head">
          <p className="eyebrow green">Avantajlar</p>
          <h2>Hizmet Avantajlarımız</h2>
        </div>
        <div className="row g-4 svc-features">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6">
              <article className="svc-feature h-100">
                <span className="svc-feature-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="svc-feature-body">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
