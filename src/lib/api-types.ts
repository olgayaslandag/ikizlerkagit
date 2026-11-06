import type { NewsItem, NewsCategory } from "@/data/news";
import type { NewsContent } from "@/data/news-content";
import type { Service } from "@/data/services";
import type { ServiceContent } from "@/data/services-content";

export interface ApiMeta { total: number; generatedAt: string; featuredSlugs?: string[]; }
export interface ApiListResponse<T> { data: T[]; meta: ApiMeta; }
export interface ApiItemResponse<T> { data: T; meta: { generatedAt: string } }
export interface ApiErrorResponse { error: string }
export interface NewsApiItem { item: NewsItem; content: NewsContent | null }
export interface ServiceApiItem { service: Service; content: ServiceContent | null }
export type { NewsItem, NewsCategory, NewsContent, Service, ServiceContent };
