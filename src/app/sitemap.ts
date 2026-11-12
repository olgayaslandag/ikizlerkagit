import type { MetadataRoute } from "next";
import { getNewsList, getServicesList } from "@/lib/api";

// SITEMAP_REVALIDATE (@/lib/api) ile aynı değer; Next.js segment config'te literal zorunlu.
export const revalidate = 3600;

const SITE_URL = "https://ikizlerkagit.com.tr";

// news.ts içindeki date alanı Türkçe formatta ("30 Haziran 2025") saklanıyor.
// Sitemap lastModified W3C datetime beklediği için ISO 8601'e çeviriyoruz;
// parse edilemezse undefined bırakıyoruz.
const TR_MONTHS: Record<string, number> = {
  ocak: 0,
  şubat: 1,
  mart: 2,
  nisan: 3,
  mayıs: 4,
  haziran: 5,
  temmuz: 6,
  ağustos: 7,
  eylül: 8,
  ekim: 9,
  kasım: 10,
  aralık: 11,
};

function toIsoDate(date?: string): string | undefined {
  if (!date) return undefined;
  const match = date.trim().match(/^(\d{1,2})\s+([a-zçğıöşü]+)\s+(\d{4})$/i);
  if (!match) return undefined;
  const day = Number(match[1]);
  const month = TR_MONTHS[match[2].toLocaleLowerCase("tr-TR")];
  const year = Number(match[3]);
  if (month === undefined || Number.isNaN(day) || Number.isNaN(year)) return undefined;
  const parsed = new Date(Date.UTC(year, month, day));
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [news, services] = await Promise.all([getNewsList(), getServicesList()]);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/haberler/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/hizmetler/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/iletisim/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/kurumsal/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/kurumsal/belgeler/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/kurumsal/misyon-vizyon/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/kurumsal/tesisimiz/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/kurumsal/surdurulebilirlik/`,
      lastModified: undefined,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/kvkk/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/gizlilik-politikasi/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/cerez-politikasi/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/palet/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const newsPages: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${SITE_URL}/haberler/${item.slug}/`,
    lastModified: toIsoDate(item.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/hizmetler/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticPages, ...newsPages, ...servicePages];
}
