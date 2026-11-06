"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import type { Service } from "@/lib/api-types";

// Dropdown'da uzun hizmet başlıkları yerine kısa, okunabilir etiketler.
// Eşleşme yoksa tam başlık (service.title) kullanılır.
const SERVICE_SHORT_LABELS: Record<string, string> = {
  "ambalaj-toplama": "Ambalaj Atığı Toplama",
  "tehlikesiz-atik": "Tehlikesiz Atık Toplama",
  "ayristirma-presleme": "Ayrıştırma ve Presleme",
  "evrak-imha": "Evrak ve Arşiv İmha",
  "depolama-planlama": "Depolama Alanı Planlaması",
  "kod-levhasi": "Atık Kod Levhası",
  "talep-bazli-toplama": "Talep Bazlı Toplama",
  "yerinde-personel": "Yerinde Personel",
  "palet-hizmeti": "Palet Hizmeti",
  "geri-kazanim": "Lisanslı Geri Kazanım",
};

// Hash linkler yalnızca ana sayfada çalışır; diğer sayfalarda /#anchor'a çevrilir.
// Kural: hiçbir menü öğesi tek başına "#" ile başlamaz; hedef her zaman bir sayfadır.
const resolveHref = (href: string, isHome: boolean): string => {
  if (!href.startsWith("#")) return href;
  return isHome ? href : `/${href}`;
};

export default function SiteHeader({ services }: { services: Service[] }) {
  // Hizmetlerimiz dropdown içeriği: önce liste sayfası, sonra tüm hizmetler (API'den gelen prop).
  const SERVICE_CHILDREN = [
    { href: "/hizmetler/", label: "Tüm Hizmetler" },
    ...services.map((service) => ({
      href: `/hizmetler/${service.slug}/`,
      label: SERVICE_SHORT_LABELS[service.slug] ?? service.title,
    })),
  ];

  const NAV_LINKS = [
    { href: "/kurumsal/", label: "Kurumsal", dropdown: true, children: [
      { href: "/kurumsal/", label: "Hakkımızda" },
      { href: "/kurumsal/misyon-vizyon/", label: "Misyon & Vizyon" },
      { href: "/kurumsal/tesisimiz/", label: "Tesisimiz" },
      { href: "/kurumsal/belgeler/", label: "Belgeler & Lisanslar" },
      { href: "/kurumsal/surdurulebilirlik/", label: "Sürdürülebilirlik" },
      { href: "/kvkk/", label: "KVKK Metni" },
    ] },
    { href: "/hizmetler/", label: "Hizmetlerimiz", dropdown: true, children: SERVICE_CHILDREN },
    { href: "/palet/", label: "İkizler Palet" },
    { href: "/haberler/", label: "Haberler" },
    { href: "/iletisim/", label: "İletişim" },
  ];

  const pathname = usePathname();
  const isHome = pathname === "/";
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("/");
  // Hangi dropdown'ın açık olduğu (href ile tanımlı); null = kapalı. Birden fazla dropdown aynı anda açılamaz.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Scrollspy: aktif menü öğesini görünürlüğe göre güncelle
  useEffect(() => {
    if (!isHome) return;
    const sectionIds = ["anasayfa", "kurumsal", "hizmetler", "surec", "palet", "haberler"];
    const onScroll = () => {
      const headerHeight = parseInt(document.documentElement.style.getPropertyValue("--header-height"), 10) || 105;
      const scrollPos = window.scrollY + headerHeight + 40;
      let current = "/";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = `/#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let rafId: number | null = null;

    const syncHeight = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const height = header.getBoundingClientRect().height;
        document.documentElement.style.setProperty("--header-height", `${height}px`);
        rafId = null;
      });
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add("topbar-hidden");
      } else {
        header.classList.remove("topbar-hidden");
      }
      syncHeight();
    };

    syncHeight();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new ResizeObserver(syncHeight);
    observer.observe(header);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Dropdown dışı tıklamada açık menüyü kapat
  useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && !target.closest(".nav-item.dropdown")) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setExpanded(false);
    setOpenDropdown(null);
  };

  // Scrollspy aktif değeri ve menü href'leri her zaman sayfa yolu içerir ("/" veya "/#bolum");
  // hiçbir bağlantı çıplak "#" ile başlamaz.
  const isRouteActive = (href: string) =>
    (href === "/hizmetler/" && (pathname.startsWith("/hizmetler/") || active === "/#hizmetler")) ||
    (href === "/kurumsal/" &&
      (pathname.startsWith("/kurumsal/") || pathname.startsWith("/kvkk/") || active === "/#kurumsal")) ||
    (href === "/palet/" && pathname.startsWith("/palet/")) ||
    (href === "/haberler/" && pathname.startsWith("/haberler/")) ||
    (href === "/iletisim/" && pathname.startsWith("/iletisim/"));
  return (
    <header className={`site-header${expanded ? " menu-open" : ""}`} ref={headerRef}>
      <div className="topbar d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="topbar-contact">
            <a href="tel:+902128861090"><i className="bi bi-telephone me-2" /> +90 212 886 10 90</a>
            <a href="mailto:info@ikizlerkagit.com.tr" className="ms-3"><i className="bi bi-envelope me-2" /> info@ikizlerkagit.com.tr</a>
          </div>
          <div className="topbar-social">
            <a href="https://www.facebook.com/ikizlerkagitcomtr" target="_blank" rel="noopener" aria-label="Facebook"><i className="bi bi-facebook" /></a>
            <a href="https://www.instagram.com/ikizlerkagit/" target="_blank" rel="noopener" aria-label="Instagram" className="ms-3"><i className="bi bi-instagram" /></a>
            <a href="https://twitter.com/ikizlerkagit" target="_blank" rel="noopener" aria-label="Twitter" className="ms-3"><i className="bi bi-twitter-x" /></a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg" aria-label="Ana navigasyon">
        <div className="container">
          <Link
            className="brand"
            href="/"
            aria-label="İkizler Kağıt ana sayfa"
            onClick={() => handleNavClick("/")}
          >
            <Image
              src="/assets/img/ikizler_logo.png"
              alt="İkizler Kağıt"
              className="brand-img"
              width={1062}
              height={293}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="mainNav"
            aria-expanded={expanded}
            aria-label={expanded ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setExpanded((prev) => !prev)}
          >
            <i className={`bi ${expanded ? "bi-x" : "bi-list"} toggler-icon`} />
          </button>
          <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="mainNav">
            <ul className="navbar-nav mx-auto gap-lg-4">
              {NAV_LINKS.map((link) => {
                if (link.dropdown) {
                  // Bu dropdown açık mı? (tek state: aynı anda yalnızca bir menü açık kalır)
                  const isOpen = openDropdown === link.href;
                  const isLinkActive = active === link.href || isRouteActive(link.href);
                  // Rota aktifken (örn. /hizmetler/<slug>) üst öğeye aria-current ekle
                  const routeCurrent = isRouteActive(link.href) ? ("page" as const) : undefined;
                  return (
                    <li className={`nav-item dropdown${isOpen ? " show" : ""}`} key={link.href}>
                      <a
                        className={`nav-link dropdown-toggle ${isLinkActive ? "active" : ""}`}
                        href={resolveHref(link.href, isHome)}
                        role="button"
                        aria-expanded={isOpen}
                        aria-current={routeCurrent}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown((prev) => (prev === link.href ? null : link.href));
                        }}
                      >
                        {link.label} <i className="bi bi-chevron-down ms-1 chevron-icon" />
                      </a>
                      <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                        {link.children?.map((child) => (
                          <li key={`${child.href}-${child.label}`}>
                            <Link
                              className="dropdown-item"
                              href={child.href}
                              onClick={() => handleNavClick(child.href)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                const navLinkClass = `nav-link ${active === link.href || isRouteActive(link.href) ? "active" : ""}`;

                return (
                  <li className="nav-item" key={link.href}>
                    <Link
                      className={navLinkClass}
                      href={link.href}
                      aria-current={isRouteActive(link.href) ? "page" : undefined}
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="nav-actions d-none d-lg-flex align-items-center gap-3">
              <Link className="button button-green" href="/iletisim/" onClick={() => setExpanded(false)}>
                Çözüm Talep Et <i className="bi bi-arrow-up-right" />
              </Link>
            </div>
            <div className="nav-actions-mobile d-lg-none mt-3 pt-3 border-top">
              <Link className="button button-green w-100 justify-content-center" href="/iletisim/" onClick={() => setExpanded(false)}>
                Çözüm Talep Et <i className="bi bi-arrow-up-right" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
