export interface ServiceSEO {
  region?: string;
  certifications?: string[];
  highlights?: string[];
}

export interface ServiceHero {
  eyebrow: string;
  lead: string;
}

export interface ServiceFeature {
  title: string;
  text: string;
}

export interface ServiceStep {
  title: string;
  text: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  summary?: string;
  seo?: ServiceSEO;
  // Zengin detay sayfası içeriği (opsiyonel, geriye uyumlu)
  hero?: ServiceHero;
  features?: ServiceFeature[];
  steps?: ServiceStep[];
  faq?: ServiceFaq[];
  relatedSlugs?: string[];
}

// İçerik verisi src/data/services.json dosyasından okunur (barrel/re-export).
import servicesData from "./services.json";

export const SERVICES: Service[] = servicesData.services as Service[];
export const FEATURED_SLUGS: string[] = servicesData.featuredSlugs;
