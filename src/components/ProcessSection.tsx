import { Fragment } from "react";
import Image from "next/image";

const STEPS = [
  { number: "01", image: "https://ikizlerkagit.com.tr/wp-content/uploads/2018/06/IMG-20171109-WA0016.jpg", title: "Toplama", text: "Atıkları kaynağında toplarız." },
  { number: "02", image: "https://ikizlerkagit.com.tr/wp-content/uploads/2018/03/IMGP0911.jpg", title: "Taşıma", text: "Güvenli şekilde tesisimize ulaştırırız." },
  { number: "03", image: "/assets/img/slider02.png", title: "Ayrıştırma", text: "Modern tesisimizde türlerine göre ayırırız." },
  { number: "04", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=500&q=85", title: "Geri Kazanım", text: "Atıkları ekonomiye kazandırırız." },
];

export default function ProcessSection() {
  return (
    <section className="process section-space reveal" id="surec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 reveal">
             <p className="eyebrow green">ATIKIN YOLCULUĞU</p>
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
                    <Image src={step.image} alt={step.title} width={700} height={700} className="step-image" />
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
