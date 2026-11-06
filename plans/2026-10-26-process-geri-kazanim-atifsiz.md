# Plan: ProcessSection Geri Kazanım Görseli — Atıfsız Stok Görsel (Seçenek C)

Durum: tamamlandı
Tarih: 2026-10-26 (build ✓ EXIT=0)

## Bağlam
- Mevcut görsel CC BY 2.0 (Tony Webster) → atıf zorunlu (credit eklendi).
- Kullanıcı: "sadece görsel değişsin, credit/CSS olmasın" → atıf gerektirmeyen
  (Unsplash/Pexels) stok görsel ile değiştirilecek, credit ve .image-credit CSS
  kaldırılacak.

## Görevler
- [ ] T1 [visual-asset-manager] Atıfsız stok görsel temini — Unsplash/Pexels
      "paper recycling / recycled paper production" temalı, tesis/logistik değil
      (çıktı/ürün odaklı), 1600×900 WebP ≤300KB →
      public/assets/img/process/geri-kazanim.webp (üzerine yaz)
      Kabul: görsel Geri Kazanım adımıyla anlamlı, Ayrıştırma'dan farklı,
      atıf gerektirmeyen lisans (Unsplash/Pexels)
- [ ] T2 [nextjs-frontend-architect] ProcessSection step 04 alt metni güncelle
      (yeni görseli tarif eden), credit alanını + render'ını kaldır,
      .image-credit CSS kuralını sil; build + doğrula
      Bağımlılık: T1