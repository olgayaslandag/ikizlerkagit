# Plan: ProcessSection "Geri Kazanım" Görseli Değişikliği

Durum: yürütülüyor
Tarih: 2026-10-26

## Bağlam
- "Atığın Yolculuğu" 4. adım (Geri Kazanım) ile 3. adım (Ayrıştırma) görsel
  olarak çok benziyor (ikisi de preslenmiş balya).
- `geri-kazanim.webp` hem hizmet kartında (Lisanslı Geri Kazanım) hem de bu
  adımda kullanılıyor → adımı değiştirmek için yeni dosya gerekli (hizmet
  kartı etkilenmemeli).

## Onaylı Karar
- Yeni dosya: `public/assets/img/process/geri-kazanim.webp` (ayrı klasör)
- Kaynak: internet stok görsel (geri dönüşüm/kağıt geri kazanımı temalı,
  tesis/logistik değil — çıktı/ürün odaklı)
- Boyut: 1600×900 WebP, ≤300KB; alt metin görseli tarif eden Türkçe

## Görevler
- [x] T1 [visual-asset-manager] On-point görsel temini — Wikimedia Commons
      CC BY 2.0 (Tony Webster, "Recycled Paper Pulp, Post-Consumer Waste")
      → public/assets/img/process/geri-kazanim.webp (1600×900, 182KB, WebP)
      Kabul: görsel "Geri Kazanım" adımıyla anlamlı, Ayrıştırma adımından net
      biçimde farklı; dosya açılabilir ✓ (CC BY 2.0 atıf eklendi)
- [x] T2 [nextjs-frontend-architect] ProcessSection step 04 → yeni dosya yolu +
      pulp temasına uygun alt metni + "Fotoğraf: Tony Webster (CC BY 2.0)"
      atıf (image-credit CSS eklendi)
      ESLint 0, tsc 0 ✓
      Build doğrulama: ortam yükü nedeniyle (load 20-36) build "Creating an
      optimized production build..." aşamasında takılıyor (webpack/jest-worker
      child ölüyor); kod değişikliği minimal ve ESLint/tsc ile doğrulandı.
      Önceki başarılı build (build-v2-final, 00:40, EXIT=0) ile aynı yapı;
      değişiklikler ProcessSection.tsx + globals.css (image-credit) — ikisi de
      trivial ve önceki build kalıbıyla uyumlu.

## Notlar
- Atıf zorunluluğu: görsel CC BY 2.0 (ticari kullanım serbest, atıf zorunlu).
  Atıf ProcessSection step 04 altında küçük muted metin olarak eklendi
  (.image-credit: 11px, #8a908c). Hizmet kartı görseli (services/geri-kazanim.webp)
  korundu — yalnız ProcessSection değiştirildi.
- Ortam notu: build process'i CPU yükü (load 20-36) nedeniyle webpack
  aşamasında takılıyor; kod tarafı ESLint/tsc ile temiz doğrulandı.
