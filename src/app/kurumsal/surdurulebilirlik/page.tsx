import type { Metadata } from "next";
import Link from "next/link";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";
import { SUSTAINABILITY } from "@/data/sustainability";

export const metadata: Metadata = {
  title: "Sürdürülebilirlik",
  description:
    "İkizler Kağıt'ın sürdürülebilirlik yaklaşımı: sıfır atık, kaynağında ayrıştırma, çevreye katkımız ve sosyal sorumluluk projelerimiz.",
  alternates: { canonical: "/kurumsal/surdurulebilirlik/" },
  openGraph: {
    title: "Sürdürülebilirlik",
    description:
      "İkizler Kağıt'ın sürdürülebilirlik yaklaşımı: sıfır atık, kaynağında ayrıştırma, çevreye katkımız ve sosyal sorumluluk projelerimiz.",
    url: "/kurumsal/surdurulebilirlik/",
    siteName: "İkizler Kağıt",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/assets/img/hero/hero02.webp",
        width: 1600,
        height: 900,
        alt: "Sürdürülebilirlik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sürdürülebilirlik",
    description:
      "İkizler Kağıt'ın sürdürülebilirlik yaklaşımı: sıfır atık, kaynağında ayrıştırma, çevreye katkımız ve sosyal sorumluluk projelerimiz.",
    images: ["/assets/img/hero/hero02.webp"],
  },
};

export const revalidate = 3600;

export default function SurdurulebilirlikPage() {
  const s = SUSTAINABILITY;

  return (
    <>
      <SiteHeaderContainer />
      <main>
        <section
          className="about section-space reveal"
          id="surdurulebilirlik"
          style={{ marginTop: "var(--header-height)" }}
        >
          <div className="container">
            <p className="eyebrow green">{s.hero.eyebrow}</p>
            <h1>{s.hero.title}</h1>
            <p className="services-page-lead">{s.hero.lead}</p>
            {s.hero.intro.map((text, index) => (
              <p className="services-page-lead" key={index}>
                {text}
              </p>
            ))}
          </div>
        </section>

        <section
          className="section-space reveal"
          style={{ background: "var(--soft)" }}
        >
          <div className="container">
            <p className="eyebrow green">{s.zeroWaste.eyebrow}</p>
            <h2>{s.zeroWaste.title}</h2>
            {s.zeroWaste.text.map((text, index) => (
              <p key={index} style={{ color: "var(--muted)", maxWidth: 760 }}>
                {text}
              </p>
            ))}
            <ul className="mt-3" style={{ maxWidth: 760, color: "var(--muted)" }}>
              {s.zeroWaste.bullets.map((bullet) => (
                <li key={bullet} className="mb-2">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-space reveal">
          <div className="container">
            <p className="eyebrow green">{s.environment.eyebrow}</p>
            <h2>{s.environment.title}</h2>
            <p style={{ color: "var(--muted)", maxWidth: 760 }}>
              {s.environment.text}
            </p>
            <div className="row g-4 mt-2">
              {s.environment.stats.map((stat) => (
                <div className="col-md-4" key={stat.label}>
                  <div
                    className="card h-100 text-center"
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: 16,
                      background: "#fff",
                    }}
                  >
                    <div className="card-body">
                      <strong
                        className="d-block"
                        style={{ fontSize: "2rem", color: "var(--green)" }}
                      >
                        {stat.value}
                      </strong>
                      <span style={{ color: "var(--muted)" }}>{stat.label}</span>
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
            <p className="eyebrow green">{s.social.eyebrow}</p>
            <h2>{s.social.title}</h2>
            <div className="row g-4 mt-2">
              {s.social.items.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.title}>
                  <div
                    className="card h-100"
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: 16,
                      background: "#fff",
                    }}
                  >
                    <div className="card-body">
                      <h3>{item.title}</h3>
                      <p style={{ color: "var(--muted)" }}>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space reveal">
          <div className="container">
            <p className="eyebrow green">{s.approach.eyebrow}</p>
            <h2>{s.approach.title}</h2>
            <ul style={{ maxWidth: 760, color: "var(--muted)" }}>
              {s.approach.bullets.map((bullet) => (
                <li key={bullet} className="mb-2">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="section-space reveal"
          style={{ background: "var(--soft)" }}
        >
          <div className="container">
            <div
              className="svc-cta"
              style={{ background: "var(--dark)", borderRadius: 24 }}
            >
              <p className="eyebrow" style={{ color: "#dbe7df" }}>
                SÜRDÜRÜLEBİLİRLİK
              </p>
              <h2 style={{ color: "#fff" }}>Birlikte çalışalım</h2>
              <p style={{ color: "#c9d6cd", maxWidth: 560, lineHeight: 1.7 }}>
                {s.cta}
              </p>
              <Link className="button button-green mt-3" href="/iletisim/">
                İletişime Geç <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterContainer />
      <ScrollReveal />
    </>
  );
}
