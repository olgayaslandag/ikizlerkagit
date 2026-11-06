import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";
import { getNewsList } from "@/lib/api";

export const metadata: Metadata = {
  title: "Haberler",
  description:
    "İkizler Kağıt haberler ve güncel gelişmeler. Geri dönüşüm ve atık yönetimi alanındaki kurumsal haberler, projeler ve duyurular.",
  alternates: {
    canonical: "/haberler/",
  },
  openGraph: {
    title: "Haberler",
    description:
      "İkizler Kağıt haberler ve güncel gelişmeler. Geri dönüşüm ve atık yönetimi alanındaki kurumsal haberler, projeler ve duyurular.",
    url: "/haberler/",
    siteName: "İkizler Kağıt",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/assets/img/news/catalca-belediyesi-bolge-calismalari.webp",
        width: 640,
        height: 480,
        alt: "Haberler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haberler",
    description:
      "İkizler Kağıt haberler ve güncel gelişmeler. Geri dönüşüm ve atık yönetimi alanındaki kurumsal haberler, projeler ve duyurular.",
    images: ["/assets/img/news/catalca-belediyesi-bolge-calismalari.webp"],
  },
};

// NEWS_REVALIDATE (@/lib/api) ile aynı değer; Next.js segment config'te literal zorunlu.
export const revalidate = 300;

export default async function NewsPage() {
  const news = await getNewsList();

  return (
    <>
      <SiteHeaderContainer />
      <main>
        <section className="services services-page-head section-space" id="haberler">
          <div className="container">
            <p className="eyebrow green">BİZDEN HABERLER</p>
            <h1 className="services-page-title">
              Güncel
              <br />
              gelişmeler.
            </h1>
            <p className="services-page-lead">
              İkizler Kağıt olarak geri dönüşüm ve atık yönetimi alanındaki güncel gelişmeleri ve kurumsal haberlerimizi buradan takip edebilirsiniz.
            </p>
          </div>
        </section>

        <section className="services-page-list section-space">
          <div className="container">
            <h2 className="visually-hidden">Haberler</h2>
            <div className="news-grid">
              {news.map((item) => (
                <article className="news-grid-card reveal" key={item.slug}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={640}
                    height={480}
                    sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                  />
                  <div className="news-grid-card-body">
                    <small>{item.date}</small>
                    <h3>{item.title}</h3>
                  </div>
                  <Link
                    href={`/haberler/${item.slug}/`}
                    aria-label={`Haberi oku: ${item.title}`}
                    className="news-grid-card-link"
                  >
                    <i className="bi bi-arrow-up-right" />
                  </Link>
                </article>
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
