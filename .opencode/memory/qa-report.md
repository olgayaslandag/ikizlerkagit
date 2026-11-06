# QA Smoke Test Raporu — Üretim Standalone (PORT 3102)

- Tarih: 2026-11-04
- Build: `.next/standalone/server.js` (public + static kopyalı)
- Sunucu: `HOSTNAME=127.0.0.1 PORT=3102 node server.js` — test sonunda kapatıldı (port 3102 kapalı doğrulandı)

## Sonuçlar

| # | Kontrol | Beklenen | Gerçekleşen | SONUÇ |
|---|---------|----------|-------------|-------|
| 1 | Sunucu ayakta, `curl /` | 200 | 200 | GEÇTİ |
| 2a | `/kurumsal/surdurulebilirlik/` HTTP kodu | 200 | 200 | GEÇTİ |
| 2b | Yeni sayfa `<h1>` | Başlık görünmeli | `<h1>Atığı değere dönüştürürken çevreyi koruyoruz.` | GEÇTİ |
| 2c | Bölüm başlıkları (Sıfır Atık / Çevreye Katkımız / Sosyal Sorumluluk) | en az 3 başlık | Hepsi mevcut (Sıfır Atık ×16+, Çevreye Katkımız ×9+, Sosyal Sorumluluk ×11+ occurrence, case-insensitive) | GEÇTİ |
| 2d | Sayfa `/iletisim/` CTA'sı | en az 1 | 1 | GEÇTİ |
| 3a | "referans" temizliği: `/`, `/kurumsal/`, `/kurumsal/surdurulebilirlik/`, `/haberler/`, `/hizmetler/`, `/iletisim/` | her sayfada 0 | 0 / 0 / 0 / 0 / 0 / 0 | GEÇTİ |
| 3b | `/` içinde "Referanslarımız" | YOK | 0 occurrence | GEÇTİ |
| 3c | `/` içinde Sürdürülebilirlik linki → `/kurumsal/surdurulebilirlik/` | VAR | `href="/kurumsal/surdurulebilirlik/">Sürdürülebilirlik` (header + mobil menü) | GEÇTİ |
| 3d | `/kurumsal/` içinde "İŞ BİRLİKLERİMİZ" / "REFERANSLARIMIZ" | VAR / YOK | VAR (2×) / 0 | GEÇTİ |
| 3e | Header menü: Sürdürülebilirlik etiketi + `/kurumsal/cozum-ortaklari/` → "Çözüm Ortakları"; referans linki yok | VAR / VAR / YOK | `>Sürdürülebilirlik`, `href="/kurumsal/cozum-ortaklari/">Çözüm Ortakları`, referans href hiçbir sayfada yok | GEÇTİ |
| 4a | `sitemap.xml` `<url>` sayısı | 42 | 42 | GEÇTİ |
| 4b | Sitemap'te surdurulebilirlik URL'si | olmalı | `<loc>https://ikizlerkagit.com.tr/kurumsal/surdurulebilirlik/</loc>` | GEÇTİ |
| 5a | Regresyon: `/haberler/palet-tesisimiz/` | 200 | 200 | GEÇTİ |
| 5b | Regresyon: `/nasil-geri-donusum-yapilir.html` redirect | 308 + doğru hedef | `308 → /haberler/nasil-geri-donusum-yapilir/` | GEÇTİ |
| 6 | Sunucu kapatma | port 3102 boş | `ss` ile doğrulandı, bağlantı yok (000) | GEÇTİ |

## Genel SONUÇ: TÜM KONTROLLER GEÇTİ (13/13) — KALDI YOK

Not: Bölüm başlıkları kontrolünde `grep -c` satır bazlı olduğu için tek satırda çok geçiş "1" gösterdi; occurrence bazlı (case-insensitive `grep -io | uniq -c`) sayımda üç başlık da bolca mevcut olduğu görüldü.

## Onay
BUILD TAMAMLANDI - TESLİM ONAYI: Bu smoke test turundaki tüm değişiklikler (yeni `/kurumsal/surdurulebilirlik/` sayfası, referans→çözüm ortakları temizliği, header menü, sitemap) üretim standalone build üzerinde doğrulanmıştır. `project-manager-agent`'a teslim onayı olarak raporlanır.
