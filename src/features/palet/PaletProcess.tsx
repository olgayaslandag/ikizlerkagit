import { PALET } from "@/data/palet";

/**
 * İkizler Palet — Süreç (timeline, #surec)
 */
export default function PaletProcess() {
  return (
    <section id="surec" className="svc-section svc-section-soft svc-section-steps reveal">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="svc-section-head svc-sticky-head">
              <p className="eyebrow green">SÜREÇ</p>
              <h2>Paletin Yolculuğu</h2>
              <p className="svc-section-lead">
                Paletin toplanmasından onarım ve teslime kadar izlediği şeffaf ve
                planlı yolculuk.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <ol className="svc-timeline list-unstyled m-0 p-0">
              {PALET.process.map((step) => (
                <li key={step.title} className="svc-step">
                  <span className="svc-step-num" aria-hidden="true">
                    {step.number}
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