import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";
import { COMPANY } from "@/data/company";
import { PROCESS_STEPS } from "@/data/process";

export const metadata: Metadata = {
  title: "Tesisimiz",
  description:
    "İkizler Kağıt modern geri dönüşüm tesisi: ayrıştırma bandı, presleme hattı, geçici depolama ve lisanslı geri kazanım ortaklıkları.",
  alternates: { canonical: "/kurumsal/tesisimiz/" },
  openGraph: {
    title: "Tesisimiz",
    description:
      "İkizler Kağıt modern geri dönüşüm tesisi: ayrıştırma bandı, presleme hattı, geçici depolama ve lisanslı geri kazanım ortaklıkları.",
    url: "/kurumsal/tesisimiz/",
    siteName: "İkizler Kağıt",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/assets/img/slider01.png",
        width: 1100,
        height: 733,
        alt: "Tesisimiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesisimiz",
    description:
      "İkizler Kağıt modern geri dönüşüm tesisi: ayrıştırma bandı, presleme hattı, geçici depolama ve lisanslı geri kazanım ortaklıkları.",
    images: ["/assets/img/slider01.png"],
  },
};

export const revalidate = 3600;

export default function TesisimizPage() {
  const tesis = COMPANY.tesis;

  return (
    <>
      <SiteHeaderContainer />
      <main>
        <section
          className="about section-space reveal"
          id="tesisimiz"
          style={{ marginTop: "var(--header-height)" }}
        >
          <div className="container">
            <p className="eyebrow green">{tesis.eyebrow}</p>
            <h1>{tesis.tesisTitle}</h1>
            {tesis.tesisIntro.map((text, index) => (
              <p className="services-page-lead" key={index}>
                {text}
              </p>
            ))}
            <a
              href="/assets/img/hero/hero01.webp"
              data-lightbox
              data-lightbox-group="tesis-hero"
              data-lightbox-alt="İkizler Kağıt geri dönüşüm tesisi"
              className="lightbox-trigger"
            >
              <Image
                className="about-image about-image--tesis reveal mt-4"
                src="/assets/img/hero/hero01.webp"
                alt="İkizler Kağıt geri dönüşüm tesisi"
                width={1536}
                height={1024}
              />
            </a>
          </div>
        </section>

        <section
          className="section-space reveal"
          style={{ background: "var(--soft)" }}
        >
          <div className="container">
            <p className="eyebrow green">SÜREÇ ADIMLARIMIZ</p>
            <h2>Atığın yolculuğu</h2>
            <p className="services-page-lead">{tesis.tesisProcessNote}</p>
            <div className="steps mt-4">
              {PROCESS_STEPS.map((step, index) => (
                <Fragment key={step.number}>
                  <div className="step reveal">
                    <b>{step.number}</b>
                    <a href={step.image} data-lightbox data-lightbox-group="tesis-surec" data-lightbox-alt={step.alt} data-lightbox-caption={step.title} className="lightbox-trigger">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        width={1600}
                        height={900}
                        className="step-image"
                        sizes="(max-width: 991px) 35px, 135px"
                      />
                    </a>
                    <strong>{step.title}</strong>
                    <small>{step.text}</small>
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <i className="bi bi-arrow-right step-arrow" />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space reveal">
          <div className="container">
            <p className="eyebrow green">TESİS ÖZELLİKLERİ</p>
            <h2>Modern altyapımız</h2>
            <div className="row g-4 mt-2">
              {tesis.tesisFeatures.map((feature) => (
                <div className="col-md-6 col-lg-4" key={feature.title}>
                  <div
                    className="card h-100"
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: 16,
                      background: "#fff",
                    }}
                  >
                    <div className="card-body">
                      <h3>{feature.title}</h3>
                      <p style={{ color: "var(--muted)" }}>{feature.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section-space reveal"
          style={{ background: "var(--soft)" }}
        >
          <div className="container">
            <p className="eyebrow green">TESİSİMİZDEN GÖRÜNTÜLER</p>
            <a href="/assets/img/palet/palet-tesis-saha.webp" data-lightbox data-lightbox-group="tesis-saha" data-lightbox-alt="İkizler Kağıt tesis sahası" className="lightbox-trigger">
              <Image
                className="about-image reveal"
                src="/assets/img/palet/palet-tesis-saha.webp"
                alt="İkizler Kağıt tesis sahası"
                width={1600}
                height={900}
              />
            </a>
            <div className="row g-4 text-center mt-4">
              {tesis.tesisStats.map((stat) => (
                <div className="col-md-4" key={stat.label}>
                  <strong
                    className="d-block"
                    style={{ fontSize: "2rem", color: "var(--green)" }}
                  >
                    {stat.value}
                  </strong>
                  <span style={{ color: "var(--muted)" }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterContainer />
      <ScrollReveal />
    </>
  );
}