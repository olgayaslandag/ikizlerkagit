import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";
import { DOCUMENTS } from "@/data/documents";

export const metadata: Metadata = {
  title: "Belgeler & Lisanslar",
  description:
    "İkizler Kağıt'ın Çevre İzin ve Lisans Belgesi, lisans üst yazısı ve ISO 15713 Gizli Malzemelerin Güvenli İmhası Sertifikası. Resmi belgelerimizi bu sayfadan görüntüleyebilir ve indirebilirsiniz.",
  alternates: { canonical: "/kurumsal/belgeler/" },
  openGraph: {
    title: "Belgeler & Lisanslar",
    description:
      "İkizler Kağıt'ın Çevre İzin ve Lisans Belgesi, lisans üst yazısı ve ISO 15713 Gizli Malzemelerin Güvenli İmhası Sertifikası. Resmi belgelerimizi bu sayfadan görüntüleyebilir ve indirebilirsiniz.",
    url: "/kurumsal/belgeler/",
    siteName: "İkizler Kağıt",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/assets/img/slider01.png",
        width: 1100,
        height: 733,
        alt: "Belgeler & Lisanslar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belgeler & Lisanslar",
    description:
      "İkizler Kağıt'ın Çevre İzin ve Lisans Belgesi, lisans üst yazısı ve ISO 15713 Gizli Malzemelerin Güvenli İmhası Sertifikası. Resmi belgelerimizi bu sayfadan görüntüleyebilir ve indirebilirsiniz.",
    images: ["/assets/img/slider01.png"],
  },
};

export const revalidate = 3600;

export default function BelgelerPage() {
  return (
    <>
      <SiteHeaderContainer />
      <main>
        <section
          className="about section-space reveal"
          id="belgeler"
          style={{ marginTop: "var(--header-height)" }}
        >
          <div className="container">
            <p className="eyebrow green">BELGELER &amp; LİSANSLAR</p>
            <h1>Belgeler &amp; Lisanslar</h1>
            <p className="services-page-lead">
              İkizler Kağıt olarak tüm geri dönüşüm ve atık yönetimi
              faaliyetlerimizi, Çevre, Şehircilik ve İklim Değişikliği
              Bakanlığı tarafından verilen izin ve lisanslar çerçevesinde
              yürütüyoruz. Resmi belgelerimize bu sayfadan
              ulaşabilirsiniz. Ayrıca gizli malzemelerin güvenli imhası
              alanında ISO 15713:2009 sertifikamızla hizmetlerimizi
              belgelendiriyoruz.
            </p>
          </div>
        </section>

        <section
          className="section-space reveal"
          style={{ background: "var(--soft)" }}
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow green">RESMİ BELGELER</p>
                <h2>Belgelerimiz</h2>
              </div>
            </div>
            <div className="row g-4 mt-2">
              {DOCUMENTS.map((doc) => (
                <div className="col-md-6 col-lg-4" key={doc.title}>
                  <article className="document-card reveal h-100">
                    <a
                      href={doc.fileSrc}
                      target={doc.fileType === "pdf" ? "_blank" : undefined}
                      rel={doc.fileType === "pdf" ? "noopener" : undefined}
                      className={doc.fileType === "image" ? "document-card-media lightbox-trigger" : "document-card-media"}
                      aria-label={`${doc.title} belgesini ${doc.fileType === "pdf" ? "yeni sekmede aç" : "büyüt"}`}
                      {...(doc.fileType === "image"
                        ? {
                            "data-lightbox": "",
                            "data-lightbox-group": `belge-${doc.title}`,
                            "data-lightbox-alt": `${doc.title} önizlemesi`,
                            "data-lightbox-caption": doc.title,
                          }
                        : {})}
                    >
                      <Image
                        src={doc.previewSrc}
                        alt={`${doc.title} önizlemesi`}
                        width={1200}
                        height={900}
                        sizes="(max-width: 767px) 100vw, 50vw"
                      />
                      <span className="document-type-badge">
                        <i
                          className={`bi ${
                            doc.fileType === "pdf"
                              ? "bi-file-earmark-pdf"
                              : "bi-file-earmark-image"
                          }`}
                        />
                        {doc.fileType === "pdf" ? "PDF" : "Görsel"}
                      </span>
                    </a>
                    <div className="document-card-body">
                      {doc.date && <small>{doc.date}</small>}
                      <h3>{doc.title}</h3>
                      {doc.description && <p>{doc.description}</p>}
                      <a
                        href={doc.fileSrc}
                        target="_blank"
                        rel="noopener"
                        className="document-card-link"
                      >
                        Belgeyi Görüntüle <i className="bi bi-arrow-up-right" />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space reveal">
          <div className="container">
            <div
              className="svc-cta"
              style={{ background: "var(--dark)", borderRadius: 24 }}
            >
              <p className="eyebrow" style={{ color: "#dbe7df" }}>
                BELGELERİMİZ
              </p>
              <h2 style={{ color: "#fff" }}>
                Belgelerimiz hakkında sorularınız mı var?
              </h2>
              <p style={{ color: "#c9d6cd", maxWidth: 560, lineHeight: 1.7 }}>
                Belgelerimiz ve sertifikalarımızla ilgili tüm sorularınız için
                ekibimizle iletişime geçebilirsiniz.
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
