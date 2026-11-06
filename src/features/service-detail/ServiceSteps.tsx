import type { ServiceContent } from "@/lib/api-types";

type ServiceContentStep = ServiceContent["steps"][number];

/**
 * Süreç Adımları (Steps) Bileşeni
 *
 * Dikey zaman çizelgesi (timeline): sol kenarda dikey çizgi, her adımda
 * büyük ghost numara; sağda başlık + metin. Bölüm başlığı sol sütunda
 * sticky (col-lg-4), içerik sağ sütunda (col-lg-8) — asimetrik düzen.
 */
interface ServiceStepsProps {
  steps: ServiceContentStep[];
}

export default function ServiceSteps({ steps }: ServiceStepsProps) {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section id="surec" className="svc-section svc-section-soft svc-section-steps">
      <div className="container">
        <div className="row g-5">
          {/* Sticky bölüm başlığı */}
          <div className="col-lg-4">
            <div className="svc-section-head svc-sticky-head">
              <p className="eyebrow green">Süreç</p>
              <h2>Nasıl Çalışıyoruz?</h2>
              <p className="svc-section-lead">
                Keşiften raporlamaya kadar her adımı şeffaf ve planlı yürütüyoruz.
              </p>
            </div>
          </div>

          {/* Zaman çizelgesi */}
          <div className="col-lg-8">
            <ol className="svc-timeline list-unstyled m-0 p-0">
              {steps.map((step, index) => (
                <li key={index} className="svc-step">
                  <span className="svc-step-num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="svc-step-body">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
