# Faz 2 Plan: Remote Bağımlılıklarının Giderilmesi

Durum: tamamlandı
Tarih: 2026-10-25 → 2026-10-26 (final build 00:40+UTC, EXIT=0)
Final: ESLint 0, tsc 0, build ✓, remote `next/image` 0, remotePatterns [],
font `next/font/local` (build'te font fetch 0), out/ güncel
Önceki plan: plans/2026-10-25-tesis-hizmet-entegrasyon.md (tamamlandı)

## Onaylı Kararlar
- Kapsam: partner logoları + haber görselleri + font yerelleştirme + /kvkk düzeltmeleri (4'ü de)
- Logo temini: resmi kaynaklardan (kurum siteleri/wikipedia)

## Görevler
- [x] T1 [visual-asset-manager] Partner logoları — 5/5 resmi/sağlam kaynaklardan
      (Esenyurt fbcdn token'ı ÖLDÜ → esenyurt.bel.tr resmi apple-touch-icon;
      sifiratik.gov.tr, meb.gov.tr resmi; İBŞB ve İÜ orijinal kaynak)
      Hepsi ≤35.4KB, yükseklik ≤200px, görsel doğrulamalı
- [x] T2 [visual-asset-manager] Haber görselleri — 3/3 indi (HTTP 200),
      sonra T7 bulgusu üzerine 768×576 → 320×240 (−171.8KB, −77%)
- [x] T3 [nextjs-frontend-architect] PartnersSection + NewsSection yerel +
      next/image (width/height gerçek boyutla), remotePatterns: []
      Kabul: src/ + out/ remote görsel 0 (haber içerik linkleri bilinçli uzak)
- [x] T4 [nextjs-frontend-architect] Font — next/font/local manrope.woff2
      (tek birleşik dosya, değişken 200..800, 373 codepoint, Türkçe eksiksiz);
      weight "200 800"; build'te font fetch 0 ✓
- [x] T5 [nextjs-frontend-architect] /kvkk — .kvkk-section margin-top:
      var(--header-height) (.services-page-head ile aynı yöntem) + metadata
      (title, description 160kr, canonical /kvkk/)
- [x] T6 [self] Build + doğrulama ✓ (EXIT=0, ESLint 0, tsc 0)
- [x] T7 [code-reviewer → iki ajan paralel] İnceleme: KRİTİK 0, blocking 1
      (bayat out/) + 2 ORTA + 3 DÜŞÜK → hepsi düzeltildi:
      • blocking: final rebuild (00:40) ✓
      • .palette-banner uzak CSS url → /assets/img/banner/paletlik_09.webp
        (1600×1200, 150.3KB indirildi)
      • haber görselleri 320×240 (≤30KB) + width/height=320/240
      • font weight "200 800"; --header-height default 60→105px + fallback
        72→105px; aria-label'lar benzersiz (Haberi oku: <başlık>)
      • BİLGİ: metadataBase bilinçli eklenmedi (kapsam dışı, mutlak URL kararı)

## Notlar
- Haber İÇERİK linkleri (Tüm Haberler, haber kartları) ikizlerkagit.com.tr'ye
  gitmeye devam eder — sadece görseller yerelleşir (onaylı bilinçli karar)
- Site genelinde remote `next/image` = 0; kalan tek 3. parti bağımlılık:
  NewsSection haber linkleri (içerik linki, görsel değil)
- out/ assets toplam: 7.9MB (tümü yerel)
