import type { Metadata } from "next";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Misyon & Vizyon — İkizler Kağıt",
  description:
    "İkizler Kağıt'in misyonu, vizyonu ve temel değerleri: sürdürülebilirlik, güvenilirlik, yasal uyum, müşteri odaklılık ve sürekli iyileştirme.",
  alternates: { canonical: "/kurumsal/misyon-vizyon/" },
};

export const revalidate = 3600;

export default function MisyonVizyonPage() {
  const mv = COMPANY.missionVision;

  return (
    <>
      <SiteHeaderContainer />
      <main>
        <section
          className="about section-space reveal"
          id="misyon-vizyon"
          style={{ marginTop: "var(--header-height)" }}
        >
          <div className="container">
            <p className="eyebrow green">KURUMSAL</p>
            <h1>Misyon &amp; Vizyon</h1>
            <p className="services-page-lead">
              Sürdürülebilir bir gelecek için öncü olma vizyonumuz ve atıkları değere
              dönüştürme misyonumuz; bizi biz yapan temel değerlerimiz.
            </p>
          </div>
        </section>

        <section className="section-space reveal">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <p className="eyebrow green">{mv.visionEyebrow}</p>
                <h2>{mv.visionTitle}</h2>
                {mv.visionText.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
              <div className="col-lg-6">
                <p className="eyebrow green">{mv.missionEyebrow}</p>
                <h2>{mv.missionTitle}</h2>
                {mv.missionText.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-space reveal"
          style={{ background: "var(--soft)" }}
        >
          <div className="container">
            <p className="eyebrow green">{mv.valuesEyebrow}</p>
            <h2>{mv.valuesTitle}</h2>
            <div className="row g-4 mt-2">
              {mv.values.map((value) => (
                <div className="col-md-6 col-lg-4" key={value.title}>
                  <div
                    className="card h-100"
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: 16,
                      background: "#fff",
                    }}
                  >
                    <div className="card-body">
                      <h3>{value.title}</h3>
                      <p style={{ color: "var(--muted)" }}>{value.text}</p>
                    </div>
                  </div>
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