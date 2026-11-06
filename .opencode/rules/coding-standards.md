# Coding Standards — Kod Standartları

## Genel
- Türkçe içerik, UTF-8 encoding.
- Semantic HTML5 kullanımı zorunludur (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Mobil-first responsive tasarım.
- Renk paleti ve tipografi `context/project-context.md` içinden alınır.

## Next.js (varsayılan)
- App Router kullanılır.
- TypeScript kullanılır.
- Tailwind CSS kullanılır.
- `<Image>` ve `<Link>` Next.js bileşenleri tercih edilir.
- Her sayfa için `metadata` (title, description) eklenir.
- `'use client'` sadece etkileşim gerektiren componentlerde kullanılır.

## HTML/CSS/JS (isteğe bağlı)
- CSS değişkenleri (`--color-primary`, `--font-sans`) ile renkler merkezi tutulur.
- Vanilla JS, modern ES6+ syntax ile yazılır.
- Global değişkenlerden kaçınılır.

## Erişilebilirlik (a11y)
- Tüm img etiketlerinde `alt` olmalı (dekoratif ise `alt=""`).
- Renk kontrastı en az WCAG AA (4.5:1).
- Klavye navigasyonu desteklenmeli, focus görünür olmalı.
- `<html lang="tr">` eklenmeli.

## Performans
- Görseller WebP veya optimize JPEG, `loading="lazy"`.
- CSS/JS minify edilir.
- Fontlar `font-display: swap` ile yüklenir.

## Dosya İsimlendirme
- Küçük harf, tireyle ayrılmış: `hero-section.tsx`, `services-grid.tsx`, `global.css`