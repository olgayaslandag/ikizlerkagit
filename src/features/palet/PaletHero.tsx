import Image from "next/image";
import Link from "next/link";

import { PALET } from "@/data/palet";

/**
 * İkizler Palet — Hero (svc-hero)
 *
 * Sol sütun: eyebrow, başlık, lead, intro paragrafları ve aksiyonlar.
 * Sağ sütun: palet tesisi görselleri (1 büyük + 2 küçük).
 */
export default function PaletHero() {
  const hero = PALET.hero;

  return (
    <header className="svc-hero reveal">
      <div className="container">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-8">
            <p className="svc-hero-eyebrow">{hero.eyebrow}</p>
            <h1 className="services-page-title svc-hero-title">{hero.title}</h1>
            <p className="services-page-lead svc-hero-lead">{hero.lead}</p>

            {hero.intro.length > 0 && (
              <div className="svc-hero-intro">
                {hero.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            <div className="svc-hero-actions">
              <Link href="/iletisim/" className="button button-green">
                Çözüm Talep Et
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
              <Link href="/#surec" className="outline-link">
                Süreci Gör
                <i className="bi bi-arrow-down" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="palet-hero-media reveal">
              <Image
                className="palet-hero-media-main"
                src="/assets/img/palet/palet-hero.webp"
                alt="İkizler Palet tesisi — açık saha ve palet yığınları"
                width={1600}
                height={1000}
                sizes="(max-width: 991px) 100vw, 33vw"
                priority
              />
              <div className="palet-hero-media-grid">
                <Image
                  src="/assets/img/palet/palet-hero-2.webp"
                  alt="İkizler Palet tesisi — konteyner ve palet sahası"
                  width={800}
                  height={600}
                  sizes="(max-width: 991px) 50vw, 16vw"
                  loading="lazy"
                />
                <Image
                  src="/assets/img/palet/palet-hero-3.webp"
                  alt="İkizler Palet tesisi — geniş saha panoraması"
                  width={800}
                  height={600}
                  sizes="(max-width: 991px) 50vw, 16vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}