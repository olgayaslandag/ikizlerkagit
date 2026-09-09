"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { href: "#kurumsal", label: "Kurumsal", dropdown: true, children: [
    { href: "#kurumsal", label: "Hakkımızda" },
    { href: "#surec", label: "Sürdürülebilirlik" },
    { href: "#cozum-ortaklarimiz", label: "Çözüm Ortakları" },
    { href: "/kvkk", label: "KVKK Metni" },
  ] },
  { href: "#hizmetler", label: "Hizmetlerimiz" },
  { href: "#palet", label: "İkizler Palet" },
  { href: "#haberler", label: "Haberler" },
  { href: "#iletisim", label: "İletişim" },
];

export default function SiteHeader() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("#anasayfa");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

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

    syncHeight();

    const observer = new ResizeObserver(syncHeight);
    observer.observe(header);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setExpanded(false);
    setDropdownOpen(false);
  };

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
          <a
            className="brand"
            href="#anasayfa"
            aria-label="İkizler Kağıt ana sayfa"
            onClick={() => handleNavClick("#anasayfa")}
          >
            <Image
              src="/assets/img/ikizler_logo.png"
              alt="İkizler Kağıt"
              className="brand-img"
              width={1062}
              height={293}
            />
          </a>
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
                  return (
                    <li className="nav-item dropdown" key={link.href}>
                      <a
                        className={`nav-link dropdown-toggle ${active === link.href ? "active" : ""}`}
                        href={link.href}
                        role="button"
                        aria-expanded={dropdownOpen}
                        onClick={(e) => {
                          e.preventDefault();
                          setDropdownOpen((prev) => !prev);
                        }}
                      >
                        {link.label} <i className="bi bi-chevron-down ms-1 chevron-icon" />
                      </a>
                      <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                        {link.children?.map((child) => (
                          <li key={child.href}>
                            <a
                              className="dropdown-item"
                              href={child.href}
                              onClick={() => {
                                handleNavClick(child.href);
                                setDropdownOpen(false);
                              }}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li className="nav-item" key={link.href}>
                    <a
                      className={`nav-link ${active === link.href ? "active" : ""}`}
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="nav-actions d-none d-lg-flex align-items-center gap-3">
              <button className="search-btn" type="button" aria-label="Ara">
                <i className="bi bi-search" />
              </button>
              <a className="button button-green" href="#iletisim" onClick={() => setExpanded(false)}>
                Çözüm Talep Et <i className="bi bi-arrow-up-right" />
              </a>
            </div>
            <div className="nav-actions-mobile d-lg-none mt-3 pt-3 border-top">
              <button className="search-btn mb-2" type="button" aria-label="Ara">
                <i className="bi bi-search me-2" /> Arama
              </button>
              <a className="button button-green w-100 justify-content-center" href="#iletisim" onClick={() => setExpanded(false)}>
                Çözüm Talep Et <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
