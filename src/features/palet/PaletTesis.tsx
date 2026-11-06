import Image from "next/image";

import { PALET } from "@/data/palet";

/**
 * İkizler Palet — Tesis tanıtım bölümü
 */
export default function PaletTesis() {
  const tesis = PALET.tesis;

  return (
    <section className="section-space reveal">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <p className="eyebrow green">{tesis.eyebrow}</p>
            <h2>{tesis.title}</h2>
            <p className="services-page-lead">{tesis.lead}</p>
            {tesis.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="col-lg-6">
            <div className="palet-gallery">
              <Image
                src={tesis.image}
                alt={tesis.imageAlt}
                width={1600}
                height={1000}
                sizes="(max-width: 991px) 100vw, 50vw"
                className="palet-gallery-main reveal"
                loading="lazy"
              />
              <div className="palet-gallery-thumbs">
                {tesis.gallery.map((item) => (
                  <Image
                    key={item.src}
                    src={item.src}
                    alt={item.alt}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 991px) 33vw, 16vw"
                    className="palet-gallery-thumb reveal"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}