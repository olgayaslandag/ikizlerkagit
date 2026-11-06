/**
 * Sunucu tarafı fetch client — mock REST API (/api/*) üzerinden veri çeker.
 *
 * Çalışma mantığı:
 *  - base URL: process.env.API_BASE_URL ?? `http://127.0.0.1:${PORT ?? 3000}`
 *    (standalone sunucu kendi API'sine bu adresten ulaşır; `next build`
 *    sırasında hiçbir şey dinlemez, bu durumda mock-db fallback devreye girer).
 *  - Her istek: AbortSignal.timeout(5000), tek denemede başarısız olursa
 *    500ms sonra BİR kez retry, ve `next: { revalidate, tags }` ile cache.
 *  - Item endpoint'lerinde 404 → null (sayfa 404 gösterecek).
 *  - DİĞER TÜM hatalarda mock-db'ye (doğrudan JSON importu) düşülür; böylece
 *    build/runtime asla kırılmaz.
 */
import {
  FEATURED_SLUGS,
  getNewsWithContent,
  getServiceWithContent,
  listNews,
  listServices,
} from "@/lib/mock-db";
import type {
  ApiItemResponse,
  ApiListResponse,
  NewsApiItem,
  ServiceApiItem,
} from "@/lib/api-types";
import type { NewsItem, Service } from "@/lib/api-types";

export const NEWS_REVALIDATE = 300;
export const SERVICES_REVALIDATE = 3600;
export const PAGES_REVALIDATE = 600;
export const SITEMAP_REVALIDATE = 3600;

const FETCH_TIMEOUT_MS = 5000;
const RETRY_DELAY_MS = 500;
const MAX_ATTEMPTS = 2; // 1 ilk deneme + 1 retry

const baseUrl = (
  process.env.API_BASE_URL ?? `http://127.0.0.1:${process.env.PORT ?? "3000"}`
).replace(/\/+$/, "");

class HttpError extends Error {
  status: number;
  constructor(status: number, url: string) {
    super(`HTTP ${status} for ${url}`);
    this.status = status;
  }
}

function isNotFoundError(err: unknown): boolean {
  return err instanceof HttpError && err.status === 404;
}

/**
 * GET isteği atar; HTTP 404'te HttpError(404) fırlatır (retry yapılmaz),
 * diğer hatalarda tek retry yapar, sonra hatayı yukarı fırlatır.
 */
async function fetchJson<T>(path: string, revalidate: number, tags: string[]): Promise<T> {
  const url = `${baseUrl}${path}`;
  let lastError: unknown;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
        next: { revalidate, tags },
      });
      if (!res.ok) {
        // 404 kalıcıdır; retry anlamsız.
        throw new HttpError(res.status, url);
      }
      return (await res.json()) as T;
    } catch (err) {
      lastError = err;
      if (isNotFoundError(err) || attempt === MAX_ATTEMPTS) {
        throw err;
      }
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
    }
  }
  throw lastError;
}

export async function getNewsList(): Promise<NewsItem[]> {
  try {
    const res = await fetchJson<ApiListResponse<NewsItem>>("/api/news", NEWS_REVALIDATE, [
      "news",
    ]);
    return res.data;
  } catch (err) {
    if (!isNotFoundError(err)) {
      console.warn("[api] GET /api/news başarısız, mock-db fallback:", err);
    }
    return listNews();
  }
}

export async function getNewsItem(slug: string): Promise<NewsApiItem | null> {
  try {
    const res = await fetchJson<ApiItemResponse<NewsApiItem>>(
      `/api/news/${encodeURIComponent(slug)}`,
      NEWS_REVALIDATE,
      ["news", `news:${slug}`]
    );
    return res.data;
  } catch (err) {
    if (isNotFoundError(err)) return null; // 404
    console.warn(`[api] GET /api/news/${slug} başarısız, mock-db fallback:`, err);
    return getNewsWithContent(slug);
  }
}

export async function getServicesList(): Promise<Service[]> {
  try {
    const res = await fetchJson<ApiListResponse<Service>>(
      "/api/services",
      SERVICES_REVALIDATE,
      ["services"]
    );
    return res.data;
  } catch (err) {
    if (!isNotFoundError(err)) {
      console.warn("[api] GET /api/services başarısız, mock-db fallback:", err);
    }
    return listServices();
  }
}

export async function getFeaturedServiceSlugs(): Promise<string[]> {
  try {
    const res = await fetchJson<ApiListResponse<Service>>(
      "/api/services",
      SERVICES_REVALIDATE,
      ["services"]
    );
    return res.meta.featuredSlugs ?? FEATURED_SLUGS;
  } catch (err) {
    if (!isNotFoundError(err)) {
      console.warn("[api] GET /api/services (featuredSlugs) başarısız, mock-db fallback:", err);
    }
    return FEATURED_SLUGS;
  }
}

export async function getService(slug: string): Promise<ServiceApiItem | null> {
  try {
    const res = await fetchJson<ApiItemResponse<ServiceApiItem>>(
      `/api/services/${encodeURIComponent(slug)}`,
      SERVICES_REVALIDATE,
      ["services", `services:${slug}`]
    );
    return res.data;
  } catch (err) {
    if (isNotFoundError(err)) return null; // 404
    console.warn(`[api] GET /api/services/${slug} başarısız, mock-db fallback:`, err);
    return getServiceWithContent(slug);
  }
}
