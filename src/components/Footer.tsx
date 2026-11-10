import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import type { Service } from "@/lib/api-types";

// Footer'da gösterilecek hizmet sayısı (ilk N hizmet)
const FOOTER_SERVICE_COUNT = 4;

const FOOTER_COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Kurumsal",
    links: [
      { href: "/kurumsal/", label: "Hakkımızda" },
      { href: "/kurumsal/misyon-vizyon/", label: "Vizyon & Misyon" },
      { href: "/kurumsal/tesisimiz/", label: "Tesisimiz" },
      { href: "/kurumsal/belgeler/", label: "Belgeler & Lisanslar" },
    ],
  },
  {
    title: "İkizler Palet",
    links: [
      { href: "/palet/", label: "Palet Tesisimiz" },
      { href: "/hizmetler/palet-hizmeti/", label: "Palet Ürünlerimiz" },
      { href: "/hizmetler/palet-hizmeti/", label: "Alım & Satım" },
      { href: "/hizmetler/palet-hizmeti/", label: "Palet Ölçüleri" },
    ],
  },
  {
    title: "Sürdürülebilirlik",
    links: [
      { href: "/kurumsal/surdurulebilirlik/", label: "Sıfır Atık" },
      { href: "/kurumsal/surdurulebilirlik/", label: "Çevreye Katkımız" },
      { href: "/kurumsal/surdurulebilirlik/", label: "Sosyal Sorumluluk" },
    ],
  },
];

export default function Footer({ services }: { services: Service[] }) {
  const FOOTER_SERVICES = services.slice(0, FOOTER_SERVICE_COUNT);
  const year = new Date().getFullYear();

  return (
    <footer className="reveal">
      <div className="container reveal">
        <div className="row g-4">
          <div className="col-lg-3">
            <Link className="brand" href="/">
              <Image
                src="/assets/img/ikizler_logo.png"
                alt="İkizler Kağıt"
                className="brand-img"
                width={1062}
                height={293}
              />
            </Link>
            <p className="footer-brand-text">
              Geri dönüşüm ve atık yönetiminde sürdürülebilir çözümler.
            </p>
            <div className="socials">
              <a href="https://www.facebook.com/ikizlerkagitcomtr" target="_blank" rel="noopener" aria-label="Facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="https://www.instagram.com/ikizlerkagit/" target="_blank" rel="noopener" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="https://twitter.com/ikizlerkagit" target="_blank" rel="noopener" aria-label="Twitter">
                <i className="bi bi-twitter-x" />
              </a>
            </div>
          </div>
          {FOOTER_COLUMNS.map((column, index) => (
            <Fragment key={column.title}>
              <div className="col-6 col-lg">
                <h4>{column.title}</h4>
                {column.links.map((link) => (
                  <Link href={link.href} key={link.label}>
                    {link.label}
                  </Link>
                ))}
              </div>
              {index === 0 && (
                <div className="col-6 col-lg">
                  <h4>Hizmetlerimiz</h4>
                  {FOOTER_SERVICES.map((service) => (
                    <Link href={`/hizmetler/${service.slug}/`} key={service.slug}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </Fragment>
          ))}
          <div className="col-lg-2">
            <h4>İletişim</h4>
            <a href="tel:+902128861090">
              <i className="bi bi-telephone" /> +90 212 886 10 90
            </a>
            <a href="mailto:info@ikizlerkagit.com.tr">
              <i className="bi bi-envelope" /> info@ikizlerkagit.com.tr
            </a>
            <Link href="/iletisim/">
              <i className="bi bi-geo-alt" /> Esenyurt, İstanbul
            </Link>
            <span className="footer-contact-info">
              <i className="bi bi-clock" /> Çalışma Saatleri: Pzt–Cmt 08:00–18:00
            </span>
            <span className="footer-contact-info">
              <i className="bi bi-map" /> Hizmet Bölgesi: İstanbul ve Tekirdağ
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} İkizler Kağıt. Tüm hakları saklıdır.</span>
          <Link href="/kvkk/">Gizlilik Politikası</Link>
        </div>
      </div>
    </footer>
  );
}
