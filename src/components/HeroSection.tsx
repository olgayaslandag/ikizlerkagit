"use client";

import { useEffect, useRef } from "react";

const HERO_IMAGES = [
  "/assets/img/slider01.png",
  "/assets/img/slider02.png",
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let current = 0;
    const apply = () => {
      const isMobile = window.matchMedia("(max-width: 575px)").matches;
      const gradient = isMobile
        ? "linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.35) 50%, rgba(0, 0, 0, 0.1) 100%)"
        : "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.05) 100%)";
      hero.style.backgroundImage = `${gradient}, url('${HERO_IMAGES[current]}')`;
    };

    apply();
    const interval = window.setInterval(() => {
      current = (current + 1) % HERO_IMAGES.length;
      apply();
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero position-relative" id="anasayfa" ref={heroRef}>
      <div className="container">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            ATIK BUGÜN
            <br />
            DAHA TEMİZ YARINLAR İÇİN
          </p>
          <h1>
            DÖNÜŞÜM BURADA
            <br />
            <em>BAŞLAR.</em>
          </h1>
          <p className="hero-text">
            Topluyor, ayrıştırıyor, geri kazandırıyor,
            <br />
            daha temiz bir gelecek için çalışıyoruz.
          </p>
          <a href="#hizmetler" className="circle-link" aria-label="Hizmetlerimizi keşfet">
            <i className="bi bi-arrow-right" />
          </a>
          <span className="cta-label">Hizmetlerimizi Keşfet</span>
        </div>
      </div>
      <div className="hero-side reveal">
        <span>
          ATIKLARI
          <br />
          DEĞERLİ
          <br />
          KAYNAKLARA
          <br />
          DÖNÜŞTÜRÜYORUZ.
        </span>
        <small>01　━━━━　03</small>
      </div>
    </section>
  );
}
