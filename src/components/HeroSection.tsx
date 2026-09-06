"use client";

import { useEffect, useRef } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1800&q=90",
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
        ? "linear-gradient(180deg, rgba(255,255,255,.97) 0%, rgba(255,255,255,.72) 46%, rgba(255,255,255,.1) 100%)"
        : "linear-gradient(to right, rgba(255,255,255,.99), rgba(255,255,255,.94) 3.78%, rgba(255,255,255,.08) 70%)";
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
