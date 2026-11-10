import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServiceDetail from "@/features/service-detail/ServiceDetail";
import { getService, getServicesList } from "@/lib/api";

// SERVICES_REVALIDATE (@/lib/api) ile aynı değer; Next.js segment config'te literal zorunlu.
export const revalidate = 3600;
export const dynamicParams = true;

/**
 * Service Detay Sayfası
 *
 * Dinamik routing ile her hizmet için ayrı statik sayfa oluşturur.
 * Next.js 15 async params kullanan metadata destekler.
 * JSON-LD Service + BreadcrumbList schema üretilir.
 */
export async function generateStaticParams() {
  // Tüm servisler için statik sayfaları oluşturur (API üzerinden; build'de JSON fallback)
  const services = await getServicesList();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * Metaveri (Metadata) Üretici
 *
 * Her hizmet için benzersiz title/description/OG üretir;
 * service bulunamazsa 404 döndürür.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Slug ile service'ı bul (API üzerinden)
  const found = await getService(slug);

  // Service bulunamazsa 404
  if (!found) {
    return notFound();
  }

  const { service, content } = found;
  const seo = content?.seo ?? service.seo;

  return {
    title: service.title,
    description: service.description,
    keywords: seo?.highlights?.join(", ") ?? undefined,
    openGraph: {
      title: service.title,
      description: service.description,
      url: `/hizmetler/${service.slug}/`,
      siteName: "İkizler Kağıt",
      locale: "tr_TR",
      images: [
        {
          url: service.image,
          width: 1600,
          height: 900,
          alt: service.alt,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [service.image],
    },
    alternates: {
      canonical: `/hizmetler/${service.slug}/`,
    },
  };
}

/**
 * Service Detay Sayfası
 *
 * async params ile Next.js 15 uyumludur.
 * ServiceDetail component'i ile içerik render edilir.
 * JSON-LD Service ve BreadcrumbList schema sayfaya eklenir.
 */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Async param ile service'ı bul (API üzerinden)
  const { slug } = await params;
  const [found, allServices] = await Promise.all([getService(slug), getServicesList()]);

  // Service bulunamazsa 404
  if (!found) {
    return notFound();
  }

  const { service, content } = found;
  const seo = content?.seo ?? service.seo;

  // JSON-LD FAQPage Schema (koşullu)
  const faqSchema =
    content?.faq && content.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  // JSON-LD Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
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
    areaServed: seo?.region ?? "İstanbul ve Tekirdağ",
    hasCredential: seo?.certifications
      ? seo.certifications.map((cert) => ({
          "@type": "OccupationalCredential",
          name: cert,
        }))
      : [],
    image: service.image,
    url: `https://ikizlerkagit.com.tr/hizmetler/${service.slug}/`,
  };

  // JSON-LD BreadcrumbList Schema
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
        name: "Hizmetlerimiz",
        item: "https://ikizlerkagit.com.tr/hizmetler/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://ikizlerkagit.com.tr/hizmetler/${service.slug}/`,
      },
    ],
  };

  return (
    <>
      <ServiceDetail service={service} content={content} allServices={allServices} />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* JSON-LD Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* JSON-LD BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
