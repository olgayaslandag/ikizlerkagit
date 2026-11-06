/**
 * Haber Detay İçerikleri
 *
 * Her haberin kendi detay (single) sayfasında gösterilecek içerik verisi
 * src/data/news-content.json dosyasından okunur (barrel/re-export).
 * paragraphs: haber gövdesindeki düz metin paragrafları (kaynak: parsed haber içerikleri).
 * images: haberin foto galerisi web yolları (boş liste olabilir).
 */

export interface NewsContent {
  slug: string;
  paragraphs: string[];
  images: string[];
}

import newsContentData from "./news-content.json";

export const NEWS_CONTENTS: Record<string, NewsContent> =
  newsContentData as Record<string, NewsContent>;

export const getNewsContent = (slug: string): NewsContent | undefined =>
  NEWS_CONTENTS[slug];
