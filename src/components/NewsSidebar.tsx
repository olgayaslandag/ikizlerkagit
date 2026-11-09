import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/lib/api-types";

interface NewsSidebarProps {
  news: NewsItem[];
  activeSlug: string;
}

export default function NewsSidebar({ news, activeSlug }: NewsSidebarProps) {
  const recent = news.filter((n) => n.slug !== activeSlug).slice(0, 5);

  return (
    <aside className="news-sidebar" aria-label="Haber yan menüsü">
      <div className="news-sidebar-block">
        <p className="eyebrow green">SON HABERLER</p>
        <ul className="news-sidebar-list">
          {recent.map((item) => (
            <li key={item.slug} className="news-sidebar-item">
              <Link
                href={`/haberler/${item.slug}/`}
                className="news-sidebar-card"
                aria-label={`Haberi oku: ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={64}
                  height={64}
                  sizes="64px"
                  loading="lazy"
                  className="news-sidebar-thumb"
                />
                <span className="news-sidebar-body">
                  <small>{item.date}</small>
                  <span className="news-sidebar-title">{item.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="news-sidebar-block news-sidebar-cta">
        <p className="eyebrow green">TEKLİF</p>
        <h3>Atık Yönetimi İçin Bize Ulaşın</h3>
        <p>İşletmenize uygun plan ve teklif için ekibimizle iletişime geçin.</p>
        <div className="news-sidebar-cta-actions">
          <Link href="/iletisim/" className="button button-green">
            Teklif Talep Et <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
          <a href="tel:+902128861090" className="button button-outline-light news-sidebar-phone">
            <i className="bi bi-telephone" aria-hidden="true" /> 0212 886 10 90
          </a>
        </div>
      </div>
    </aside>
  );
}
