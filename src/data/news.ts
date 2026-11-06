export type NewsCategory = "etkinlik" | "blog" | "duyuru";

export interface NewsItem {
  image: string;
  alt: string;
  date: string;
  title: string;
  link: string;
  slug: string;
  category: NewsCategory;
}

// İçerik verisi src/data/news.json dosyasından okunur (barrel/re-export).
import newsData from "./news.json";

export const NEWS: NewsItem[] = newsData.items as NewsItem[];

export const NEWS_CATEGORY_LABELS: Record<NewsCategory, string> = {
  etkinlik: "Etkinlik",
  blog: "Blog",
  duyuru: "Duyuru",
};
