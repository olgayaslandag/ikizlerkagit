import Image from "next/image";
import Link from "next/link";

import { PALET } from "@/data/palet";

/**
 * İkizler Palet — Hakkımızda / Tanıtım bölümü (.about)
 */
export default function PaletAbout() {
  const about = PALET.about;

  return (
    <section className="about section-space reveal">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-4 reveal">
            <p className="eyebrow green">{about.eyebrow}</p>
            <h2>{about.title}</h2>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <Link href="/hizmetler/" className="outline-link">
              Hizmetlerimiz <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </div>
          <div className="col-lg-5">
            <Image
              className="about-image reveal"
              src="/assets/img/palet/palet-saha-genel.webp"
              alt="İkizler Palet tesisi sahası"
              width={1600}
              height={1000}
              sizes="(max-width: 991px) 100vw, 42vw"
            />
          </div>
          <div className="col-lg-3 stats reveal">
            <div className="stats-inner">
              <div>
                <strong>25+</strong>
                <span>Yıllık Deneyim</span>
              </div>
              <div>
                <strong>1000+</strong>
                <span>Kurumsal Müşteri</span>
              </div>
              <div>
                <strong>50.000+</strong>
                <span>Ton / Yıl Geri Kazanılan Atık</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}