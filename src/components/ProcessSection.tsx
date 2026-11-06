import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROCESS_STEPS } from "@/data/process";

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
            <div className="d-flex gap-3 flex-wrap">
              <Link href="/hizmetler/" className="outline-link">
                Süreci Keşfet <i className="bi bi-arrow-right" />
              </Link>
              <Link href="/kurumsal/surdurulebilirlik/" className="outline-link">
                Sürdürülebilirlik <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="steps">
              {PROCESS_STEPS.map((step, index) => (
                <Fragment key={step.number}>
                  <div className="step reveal">
                    <b>{step.number}</b>
                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={1600}
                      height={900}
                      className="step-image"
                    />
                    <strong>{step.title}</strong>
                    <small>{step.text}</small>
                  </div>
                  {index < PROCESS_STEPS.length - 1 && <i className="bi bi-arrow-right step-arrow" />}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
