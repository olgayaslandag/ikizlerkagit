import type { ServiceContent } from "@/lib/api-types";

type ServiceContentFaq = ServiceContent["faq"][number];

/**
 * SSS (FAQ) Bileşeni
 *
 * Sık sorulan soruları native <details>/<summary> akordeonu ile gösterir.
 * JavaScript gerektirmez; statik export'ta da çalışır (name="faq-accordion").
 * Numaralı satırlar, ince ayraçlar; açıkken yeşil sol çizgi + chevron dönmesi.
 */
interface ServiceFaqProps {
  faq: ServiceContentFaq[];
}

export default function ServiceFaq({ faq }: ServiceFaqProps) {
  if (!faq || faq.length === 0) {
    return null;
  }

  return (
    <section id="sss" className="svc-section svc-section-faq">
      <div className="container">
        <div className="svc-section-head text-center mx-auto">
          <p className="eyebrow green">SSS</p>
          <h2>Sık Sorulan Sorular</h2>
        </div>
        <div className="svc-faq">
          <div className="faq-list">
            {faq.map((item, index) => (
              <details className="faq-item" key={index} name="faq-accordion">
                <summary className="faq-summary">
                  <span className="faq-num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-grow-1">{item.q}</span>
                  <i className="bi bi-chevron-down faq-chevron" aria-hidden="true" />
                </summary>
                <div className="faq-answer">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
