import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";
import { getServicesList } from "@/lib/api";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "İkizler Kağıt'in 10 hizmeti: atık toplama, ayrıştırma ve presleme, güvenli evrak imha, depolama planlaması, kod levhası, yerinde personel, palet hizmeti ve lisanslı geri kazanım.",
  alternates: {
    canonical: "/hizmetler/",
  },
  openGraph: {
    title: "Hizmetlerimiz",
    description:
      "İkizler Kağıt'in 10 hizmeti: atık toplama, ayrıştırma ve presleme, güvenli evrak imha, depolama planlaması, kod levhası, yerinde personel, palet hizmeti ve lisanslı geri kazanım.",
    url: "/hizmetler/",
    siteName: "İkizler Kağıt",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/assets/img/services/ambalaj-toplama.webp",
        width: 1600,
        height: 900,
        alt: "Hizmetlerimiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hizmetlerimiz",
    description:
      "İkizler Kağıt'in 10 hizmeti: atık toplama, ayrıştırma ve presleme, güvenli evrak imha, depolama planlaması, kod levhası, yerinde personel, palet hizmeti ve lisanslı geri kazanım.",
    images: ["/assets/img/services/ambalaj-toplama.webp"],
  },
};

// SERVICES_REVALIDATE (@/lib/api) ile aynı değer; Next.js segment config'te literal zorunlu.
export const revalidate = 3600;

export default async function ServicesPage() {
  const services = await getServicesList();

  return (
    <>
      <SiteHeaderContainer />
      <main>
        <section className="services services-page-head section-space" id="hizmetler">
          <div className="container">
            <p className="eyebrow green">HİZMETLERİMİZ</p>
            <h1 className="services-page-title">
              Atığınız için
              <br />
              uçtan uca <em>çözüm.</em>
            </h1>
            <p className="services-page-lead">
              Kaynağında toplamadan ayrıştırmaya, preslemeden lisanslı geri kazanıma kadar;
              işletmenizin atık yönetimi için yürüttüğümüz 10 hizmeti tek çatı altında topladık.
            </p>
          </div>
        </section>

        <section className="services-page-list section-space">
          <div className="container">
            {/* Başlık hiyerarşisi h1 → h3 atlamasın diye görünümez ara başlık (erişilebilirlik) */}
            <h2 className="visually-hidden">Hizmetlerimiz</h2>

            {/* Anasayfataki ServicesSection ile aynı kart yapısı; 3'lü sütunlu grid */}
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card reveal" key={service.slug}>
                  <div className="card-inner">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={1600}
                      height={900}
                      sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                      priority={index === 0}
                    />
                    <div className="card-body">
                      <h3>{service.title}</h3>
                      <p>{service.summary ?? service.description}</p>
                      <Link href={`/hizmetler/${service.slug}/`}>
                        Detaylı Bilgi <i className="bi bi-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="services-page-cta">
              <Link className="outline-link" href="/iletisim/">
                Teklif ve Bilgi İçin Bize Ulaşın <i className="bi bi-arrow-right" />
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
