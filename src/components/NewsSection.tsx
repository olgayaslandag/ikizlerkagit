import Image from "next/image";
import Link from "next/link";

import type { NewsItem } from "@/lib/api-types";

export default function NewsSection({ news }: { news: NewsItem[] }) {
  const featured = news.slice(0, 3);
  return (
    <section className="news section-space reveal" id="haberler">
      <div className="container">
        <div className="section-heading d-flex justify-content-between align-items-end">
          <div>
             <p className="eyebrow green">BİZDEN HABERLER</p>
            <h2>Güncel Gelişmeler</h2>
          </div>
          <Link className="text-link" href="/haberler/">
            Tüm Haberler <i className="bi bi-arrow-right" />
          </Link>
        </div>
        <div className="row g-4 mt-2">
          {featured.map((item) => (
            <article className="col-lg-4 news-card reveal" key={item.slug}>
              <Image
                src={item.image}
                alt={item.alt}
                width={320}
                height={240}
                sizes="(max-width: 991px) 100vw, 33vw"
              />
              <div>
                <small>{item.date}</small>
                <h3>{item.title}</h3>
              </div>
              <Link href={`/haberler/${item.slug}/`} aria-label={`Haberi oku: ${item.title}`}>
                <i className="bi bi-arrow-up-right" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
