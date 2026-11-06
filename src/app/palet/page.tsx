import type { Metadata } from "next";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";

import { PALET } from "@/data/palet";
import {
  PaletHero,
  PaletAbout,
  PaletTesis,
  PaletServices,
  PaletProcess,
  PaletCta,
} from "@/features/palet";

export const metadata: Metadata = {
  title: { absolute: PALET.seo.title },
  description: PALET.seo.description,
  keywords: PALET.seo.keywords,
  alternates: { canonical: "/palet/" },
  openGraph: {
    title: PALET.seo.title,
    description: PALET.seo.description,
    url: "/palet/",
    siteName: "İkizler Kağıt",
    locale: "tr_TR",
    images: [
      {
        url: "/assets/img/palet/palet-hero.webp",
        width: 1600,
        height: 1000,
        alt: "İkizler Palet tesisi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PALET.seo.title,
    description: PALET.seo.description,
    images: ["/assets/img/palet/palet-hero.webp"],
  },
};

export const revalidate = 3600;

export default function PaletPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İkizler Palet",
    serviceType: "İkinci El Ahşap Palet Alım, Satım, Onarım ve Revizyon",
    description: PALET.seo.description,
    provider: {
      "@type": "Organization",
      name: "İkizler Kağıt",
      url: "https://ikizlerkagit.com.tr",
      telephone: "+902128861090",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Esenyurt",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
    },
    areaServed: "İstanbul ve çevresi",
    url: "https://ikizlerkagit.com.tr/palet/",
    image: "https://ikizlerkagit.com.tr/assets/img/palet/palet-hero.webp",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Anasayfa",
        item: "https://ikizlerkagit.com.tr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "İkizler Palet",
        item: "https://ikizlerkagit.com.tr/palet/",
      },
    ],
  };

  return (
    <>
      <SiteHeaderContainer />
      <main className="service-detail-page">
        <PaletHero />
        <PaletAbout />
        <PaletTesis />
        <PaletServices />
        <PaletProcess />
        <PaletCta />
      </main>
      <FooterContainer />
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}