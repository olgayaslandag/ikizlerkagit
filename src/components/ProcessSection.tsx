import { Fragment } from "react";

const STEPS = [
  { number: "01", icon: "bi-truck", title: "Toplama", text: "Atıkları kaynağında toplarız." },
  { number: "02", icon: "bi-gear", title: "Taşıma", text: "Güvenli şekilde tesisimize ulaştırırız." },
  { number: "03", icon: "bi-layers", title: "Ayrıştırma", text: "Modern tesisimizde türlerine göre ayırırız." },
  { number: "04", icon: "bi-recycle", title: "Geri Kazanım", text: "Atıkları ekonomiye kazandırırız." },
];

export default function ProcessSection() {
  return (
    <section className="process section-space reveal" id="surec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 reveal">
            <p className="eyebrow">ATIKIN YOLCULUĞU</p>
            <h2>
              Doğaya
              <br />
              <em>Değer</em> Katıyoruz.
            </h2>
            <p>Her adımda daha temiz bir dünya için çalışıyoruz.</p>
            <a href="#iletisim" className="outline-link">
              Süreci Keşfet <i className="bi bi-arrow-right" />
            </a>
          </div>
          <div className="col-lg-9">
            <div className="steps">
              {STEPS.map((step, index) => (
                <Fragment key={step.number}>
                  <div className="step reveal">
                    <b>{step.number}</b>
                    <i className={`bi ${step.icon}`} />
                    <strong>{step.title}</strong>
                    <small>{step.text}</small>
                  </div>
                  {index < STEPS.length - 1 && <i className="bi bi-arrow-right step-arrow" />}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
