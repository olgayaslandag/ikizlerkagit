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

    const syncHeight = () => {
      const height = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    };

    syncHeight();

    const observer = new ResizeObserver(syncHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setExpanded(false);
  };

  return (
    <header className="site-header" ref={headerRef}>
      <nav className="navbar navbar-expand-lg container py-3" aria-label="Ana navigasyon">
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
          aria-label="Menüyü aç"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <i className="bi bi-list" />
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
                      {link.label} <i className="bi bi-chevron-down ms-1" />
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
          <div className="nav-actions d-flex align-items-center gap-3">
            <button className="search-btn" type="button" aria-label="Ara">
              <i className="bi bi-search" />
            </button>
            <a className="button button-dark" href="#iletisim" onClick={() => setExpanded(false)}>
              Teklif Al <i className="bi bi-arrow-up-right" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
