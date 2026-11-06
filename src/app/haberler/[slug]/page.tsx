import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";
import NewsGallery from "@/components/NewsGallery";
import { getNewsItem, getNewsList } from "@/lib/api";
import type { NewsCategory } from "@/lib/api-types";

const SITE_URL = "https://ikizlerkagit.com.tr";

// Haber kategorisi etiketleri (API yanıtındaki category değerlerine karşılık)
const NEWS_CATEGORY_LABELS: Record<NewsCategory, string> = {
  etkinlik: "Etkinlik",
  blog: "Blog",
  duyuru: "Duyuru",
};

// NEWS_REVALIDATE (@/lib/api) ile aynı değer; Next.js segment config'te literal zorunlu.
export const revalidate = 300;
export const dynamicParams = true;

/**
 * Haber Detay Sayfası
 *
 * Dinamik routing ile her haber için ayrı statik sayfa oluşturur.
 * Next.js 15 async params kullanan metadata destekler.
 * JSON-LD NewsArticle + BreadcrumbList schema üretilir.
 */
export async function generateStaticParams() {
  // Tüm haberler için statik sayfaları oluşturur (API üzerinden; build'de JSON fallback)
  const news = await getNewsList();
  return news.map((item) => ({
    slug: item.slug,
  }));
}

/**
 * Metaveri (Metadata) Üretici
 *
 * Her haber için benzersiz title/description/OG üretir;
 * haber bulunamazsa 404 döndürür.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const found = await getNewsItem(slug);

  if (!found) {
    return notFound();
  }

  const { item, content } = found;
  const description = content?.paragraphs?.[0] ?? item.title;

  return {
    title: item.title,
    description,
    openGraph: {
      title: item.title,
      description,
      url: `/haberler/${slug}/`,
      siteName: "İkizler Kağıt",
      locale: "tr_TR",
      type: "article",
      images: [{ url: item.image, alt: item.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description,
      images: [item.image],
    },
    alternates: {
      canonical: `/haberler/${slug}/`,
    },
  };
}

/**
 * Haber Detay Sayfası
 *
 * async params ile Next.js 15 uyumludur.
 * JSON-LD NewsArticle ve BreadcrumbList schema sayfaya eklenir.
 */
export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = await getNewsItem(slug);

  if (!found) {
    return notFound();
  }

  const { item, content } = found;
  const paragraphs = content?.paragraphs ?? [];
  const images = content?.images ?? [];

  // Diğer haberler (mevcut haberin hariç tutulduğu ilk 3 kayıt)
  const related = (await getNewsList()).filter((n) => n.slug !== slug).slice(0, 3);

  // JSON-LD NewsArticle Schema
  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    datePublished: item.date,
    author: { "@type": "Organization", name: "İkizler Kağıt" },
    image: [`${SITE_URL}${item.image}`],
    articleSection: NEWS_CATEGORY_LABELS[item.category],
    publisher: {
      "@type": "Organization",
      name: "İkizler Kağıt",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/haberler/${item.slug}/`,
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
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Haberler",
        item: `${SITE_URL}/haberler/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.title,
        item: `${SITE_URL}/haberler/${item.slug}/`,
      },
    ],
  };

  return (
    <>
      <SiteHeaderContainer />
      <main>
        <section
          className="section-space reveal"
          style={{ marginTop: "var(--header-height)" }}
        >
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Anasayfa</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/haberler/">Haberler</Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  style={{ color: "var(--muted)" }}
                >
                  {item.title}
                </li>
              </ol>
            </nav>

            <p className="eyebrow green" style={{ marginTop: 16 }}>
              {NEWS_CATEGORY_LABELS[item.category]} · {item.date}
            </p>
            <h1>{item.title}</h1>
          </div>
        </section>

        <section className="section-space reveal" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="news-detail-cover">
              <Image
                src={item.image}
                alt={item.alt}
                width={1600}
                height={900}
                sizes="(max-width: 991px) 100vw, 1100px"
                priority
              />
            </div>

            <div className="news-detail-body">
              {paragraphs.length > 0 ? (
                paragraphs.map((p, index) => <p key={index}>{p}</p>)
              ) : (
                <p style={{ color: "var(--muted)" }}>
                  Bu haberin detay içeriği yakında eklenecektir.
                </p>
              )}
            </div>

            {images.length > 0 && (
              <NewsGallery images={images} title={item.title} />
            )}
          </div>
        </section>

        <section
          className="section-space reveal"
          style={{ background: "var(--soft)" }}
        >
          <div className="container">
            <div className="section-heading d-flex justify-content-between align-items-end">
              <div>
                <p className="eyebrow green">DİĞER HABERLER</p>
                <h2>İlgili gelişmeler</h2>
              </div>
              <Link className="text-link" href="/haberler/">
                Tüm Haberler <i className="bi bi-arrow-right" />
              </Link>
            </div>
            <div className="news-grid mt-2">
              {related.map((rel) => (
                <article className="news-grid-card reveal" key={rel.slug}>
                  <Image
                    src={rel.image}
                    alt={rel.alt}
                    width={640}
                    height={480}
                    sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                  />
                  <div className="news-grid-card-body">
                    <small>{rel.date}</small>
                    <h3>{rel.title}</h3>
                  </div>
                  <Link
                    href={`/haberler/${rel.slug}/`}
                    aria-label={`Haberi oku: ${rel.title}`}
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

      {/* JSON-LD NewsArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsSchema) }}
      />

      {/* JSON-LD BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
