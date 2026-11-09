"use client";

import { useState } from "react";
import Image from "next/image";

interface NewsGalleryProps {
  images: string[];
  title: string;
  initialCount?: number;
  group?: string;
}

/**
 * NewsGallery
 *
 * Haber detay sayfalarındaki foto galerisi. Büyük galerilerde (yüzlerce
 * görsel) tüm DOM'u birden basmak yerine "devamını göster" davranışı
 * uygular: ilk `initialCount` görsel gösterilir, kalanlar buton ile açılır.
 */
export default function NewsGallery({
  images,
  title,
  initialCount = 9,
  group,
}: NewsGalleryProps) {
  const lightboxGroup = group || `news-${title}`;
  const [expanded, setExpanded] = useState(false);

  if (images.length === 0) {
    return null;
  }

  const hasMore = images.length > initialCount;
  const visibleImages = expanded ? images : images.slice(0, initialCount);

  return (
    <div className="news-gallery-block">
      <p className="eyebrow green">GALERİ</p>
      <h2>Fotoğraflar</h2>

      <div className="news-gallery">
        {visibleImages.map((src, index) => (
          <a
            key={src}
            href={src}
            data-lightbox
            data-lightbox-group={lightboxGroup}
            data-lightbox-alt={`${title} — fotoğraf ${index + 1}`}
            data-lightbox-caption={`${title} — fotoğraf ${index + 1}`}
            className="lightbox-trigger"
            aria-label={`${title} fotoğrafını büyüt (${index + 1})`}
          >
            <Image
              src={src}
              alt={`${title} — fotoğraf ${index + 1}`}
              width={800}
              height={600}
              sizes="(max-width: 575px) 50vw, (max-width: 991px) 33vw, 260px"
            />
          </a>
        ))}
      </div>

      {hasMore && (
        <div className="news-gallery-more">
          <button
            type="button"
            className="outline-link"
            aria-expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded
              ? "Daha az göster"
              : `Tüm fotoğrafları göster (${images.length})`}
          </button>
        </div>
      )}
    </div>
  );
}
