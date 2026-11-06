/**
 * Mock "veritabanı" — JSON veri dosyalarına doğrudan tipli erişim.
 *
 * Hem API route handler'larının veri kaynağıdır hem de src/lib/api.ts
 * içindeki fetch başarısız olduğunda (örn. `next build` sırasında hiçbir
 * sunucu dinlemiyor) kullanılan offline fallback katmanıdır.
 */
import newsData from "@/data/news.json";
import newsContentData from "@/data/news-content.json";
import servicesData from "@/data/services.json";
import servicesContentData from "@/data/services-content.json";

import type { NewsCategory, NewsItem } from "@/data/news";
import type { NewsContent } from "@/data/news-content";
import type { Service } from "@/data/services";
import type { ServiceContent } from "@/data/services-content";

const NEWS_ITEMS = newsData.items as NewsItem[];
const NEWS_CONTENTS = newsContentData as Record<string, NewsContent>;
const SERVICES = servicesData.services as Service[];
const SERVICE_CONTENTS = servicesContentData as unknown as Record<string, ServiceContent>;

export const FEATURED_SLUGS: string[] = servicesData.featuredSlugs;

export function listNews(opts?: { limit?: number; category?: NewsCategory }): NewsItem[] {
  let items = NEWS_ITEMS;
  if (opts?.category) {
    items = items.filter((item) => item.category === opts.category);
  }
  if (typeof opts?.limit === "number") {
    items = items.slice(0, opts.limit);
  }
  return items;
}

export function getNewsWithContent(
  slug: string
): { item: NewsItem; content: NewsContent | null } | null {
  const item = NEWS_ITEMS.find((entry) => entry.slug === slug);
  if (!item) return null;
  return { item, content: NEWS_CONTENTS[slug] ?? null };
}

export function listServices(): Service[] {
  return SERVICES;
}

export function getServiceWithContent(
  slug: string
): { service: Service; content: ServiceContent | null } | null {
  const service = SERVICES.find((entry) => entry.slug === slug);
  if (!service) return null;
  return { service, content: SERVICE_CONTENTS[slug] ?? null };
}
