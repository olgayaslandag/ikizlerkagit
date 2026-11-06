/**
 * Hizmet Detay İçerikleri
 *
 * Zengin sayfa içeriği verisi src/data/services-content.json dosyasından okunur (barrel/re-export).
 * Metinler hizmetler.rtf resmi açıklamalarından uyarlanmıştır.
 * hero.intro: 2-3 kısa editoryal paragraf (hizmet nedir / kimlere uygun / neden önemli).
 * hero.quickFacts: 3-4 hızlı bilgi etiketi; seo.region ve seo.certifications ile tutarlıdır.
 */

export interface ServiceContentHero {
  eyebrow: string;
  lead: string;
  intro?: string[];
  quickFacts?: { label: string; value: string }[];
}

export interface ServiceContentFeature {
  title: string;
  text: string;
}

export interface ServiceContentStep {
  title: string;
  text: string;
}

export interface ServiceContentFaq {
  q: string;
  a: string;
}

export interface ServiceContentSeo {
  region: string;
  certifications: string[];
  highlights: string[];
}

export interface ServiceContent {
  slug: string;
  hero: ServiceContentHero;
  features: ServiceContentFeature[];
  steps: ServiceContentStep[];
  faq: ServiceContentFaq[];
  relatedSlugs: string[];
  seo: ServiceContentSeo;
}

import servicesContentData from "./services-content.json";

export const SERVICE_CONTENTS: Record<string, ServiceContent> =
  servicesContentData as unknown as Record<string, ServiceContent>;
