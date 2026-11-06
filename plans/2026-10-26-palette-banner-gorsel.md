# Plan: PaletteSection Banner Görseli — modified/ Görsellerinden Seçim

Durum: tamamlandı
Tarih: 2026-10-26 (build ✓, ESLint 0, tsc 0)

## Onaylı Karar
- Kullanılmayan kaynaklar arasından en uygun palet temalı görsel seçilsin
- Hedef: public/assets/img/banner/paletin-ikinci-hayati.webp (≈1920px, 16:9 crop, ≤300KB WebP)
- .palette-banner CSS url güncellensin

## Görevler
- [ ] T1 [visual-asset-manager] Görsel seçimi + optimizasyon
      Kullanılmayan 5 kaynak (ikizler_01, 03, 04, 14, 15) + alternatif 16
      incele, en uygun palet temalı geniş kareyi seç, optimize et
      Kabul: palet temalı, hizmet görselleriyle tekrar etmiyor, ≤300KB
- [ ] T2 [nextjs-frontend-architect] globals.css .palette-banner url güncelle
      + build + doğrula
      Bağımlılık: T1