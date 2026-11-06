# Plan: Tesis Görselleri + 10 Hizmetin Entegrasyonu

Durum: tamamlandı
Tarih: 2026-10-25
Final: `npm run build` ✓ (Exporting 2/2), ESLint 0, tsc 0, Unsplash 0,
canonical `/hizmetler/` slash'lı, out/ güncel

## Kaynaklar
- `hizmetler.rtf` (proje kökü): 10 hizmetin nihai başlık + açıklamaları
- `modified/ikizler_01.png` … `ikizler_17.png`: tesis/hizmet görselleri (2-4MB PNG)
- `contents/` klasörü BOŞ — görseller `modified/` alındı

## Onaylı Kararlar
- Ana sayfada 6 hizmet özeti + `/hizmetler/` sayfasında 10 hizmetin tamamı
- Görseller max 1600px + WebP, ≤300KB
- Hedef klasör: `public/assets/img/services/`, slug isimleriyle
- Hero slider + ProcessSection görselleri de yerelleşecek (Unsplash kalkacak)

## Hizmet Listesi (slug → başlık)
1. ambalaj-toplama — Ambalaj Atığı Toplama
2. tehlikesiz-atik — Geri Dönüştürülemeyen Tehlikesiz Atık Toplama
3. ayristirma-presleme — Atık Kodlarına Göre Ayrıştırma ve Presleme
4. evrak-imha — Güvenli Evrak ve Arşiv İmha
5. depolama-planlama — Atık Tonajına Göre Depolama Alanı Planlaması
6. kod-levhasi — Atık Kod Levhası Temini
7. talep-bazli-toplama — Esnek ve Talep Bazlı Toplama
8. yerinde-personel — Yerinde Sürekli Personel Görevlendirmesi
9. palet-hizmeti — Palet Alım, Satım, Onarım ve Revizyon
10. geri-kazanim — Lisanslı Geri Kazanım Firmaları ile Anlaşma

## Görevler
- [x] T1 [visual-asset-manager] Görsel optimizasyonu + hizmet eşleştirmesi
      10 hizmet (1600×900, 199-284KB) + hero01/02 → tümü hazır, modified/ korundu
- [x] T2 [nextjs-frontend-architect] `src/data/services.ts` veri katmanı
      Service interface + SERVICES (10, RTF birebir) + FEATURED_SLUGS + summary
- [x] T3 [nextjs-frontend-architect] ServicesSection 6 hizmet özeti
      col-6 col-lg-4 (3×2), yerel görseller, "Detaylı Bilgi" → /hizmetler/#<slug>
- [x] T4 [nextjs-frontend-architect] `/hizmetler/` sayfası
      10 h2, 10 görsel, metadata + canonical (/hizmetler/), SiteHeader/Footer
- [x] T5 [nextjs-frontend-architect] Hero + Process yerelleştirme
      Hero hero01/02.webp; Process 4 adım 4 farklı yerel görsel; Unsplash 0
- [x] T6 [self/test] Build doğrulama: unsplash grep 0, /hizmetler/index.html ✔,
      footer sahte hizmet linkleri temizlendi, scroll-padding-css çıktıda ✔
- [x] T7 [code-reviewer → code-refiner] İnceleme (3 blocking + orta/düşük
      bulgular) → 16 düzeltme uygulandı; ESLint 0 / tsc 0 / build ✔
- [x] T8 [self] Final build + plan raporu — build ✓, ESLint 0, tsc 0, canonical düzeltildi

## İnceleme Bulguları Özeti (T7)
- Blocking: header/footer hash linkleri /hizmetler & /kvkk'te ölü → usePathname + /#...
- Footer sahte hizmet etiketleri (Kurumsal Atık Yönetimi / Çevre Danışmanlığı) → veriden üretildi
- "Detaylı Bilgi" → /hizmetler/#<slug>; /kvkk → /kvkk/; Link geçişi; scroll-padding-top
- summary alanı (mobil taşma); as const satisfies (tip güvenliği); a11y (aria-current,
  prefers-reduced-motion + scripting:none fallback); metadata kısaltma + canonical; priority LCP

## Notlar
- `next.config.mjs` images.unoptimized: true → optimizasyon elle yapılacak (T1)
- Statik export + trailingSlash → linkler `/hizmetler/` şeklinde olmalı
