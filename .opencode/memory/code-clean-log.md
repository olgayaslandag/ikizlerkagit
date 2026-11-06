
## 2026-10-31 — Kalite kontrolü (R-01/R-02 kontrast turu · inceleme + doğrulama, KOD DEĞİŞTİRİLMEDİ)
- Tarama başlıkları: (1) beyaz metin (`color:#fff`) + `var(--green)` zemin eşleşmesi — `globals.css`
  tüm kuralları ayrıştırılarak + TSX satır içi stil/`text-white` taraması; (2) token tutarlılığı
  (`--green-text` tek `:root` tanımı, `#437a36` literal'i sadece token satırında, iç içe `var(var` yok);
  (3) `sizes` prop'ları (3'lü grid → `33vw`, `col-6/col-lg-4` → `50vw/33vw`); (4) ölü sınıf / gereksiz
  `!important` / media-içi sızıntı / süslü parantez bütünlüğü (derinlik 0, iç içe `@media` YOK, noktalı-virgül eksik YOK);
  (5) `grep "service-list|service-item" src/` = 0 eşleşme.
- **Düzeltme yapılmadı:** bırakılan tüm `var(--green)` kullanımları bilinçli (ikon/grafik/r_border) ve
  beyaz-metin + `var(--green)` zemine sahip tek seçici `.circle-link` (46px ikon → grafik 3:1).
  Son turda yazılan satırlar tekrar değiştirilmedi.
- Doğrulamalar: `npx tsc --noEmit` = 0 · `npx eslint src/app/hizmetler/page.tsx src/components/ServicesSection.tsx` = 0 ·
  `npx eslint src` = 0.
- Kontrast (gerçek hesap): `#fff / #437a36` = **5.15**, `#f7f8f6 / #437a36` = **4.84**,
  `#6c726e / #fff` = **4.92**, `#6c726e / #f7f8f6` = **4.62** (hepsi AA PASS).
- **Raporlandı, dokunulmadı (önceden mevcut, bu turun kapsamı dışı):** hazır tersi yönde AA altı gri/değerler —
  `.breadcrumb-item.active` (#4b853e/beyaz 4.45), `.step b` (#92aa94/#fafbf9 2.35), `.footer a` (3.67),
  `.footer-bottom` (2.97), `.news-card small` (2.98), `.step small` (3.48), `.stats span` (4.40);
  ölü/tanımsız: `.text-green` (kullanım yok), `.topbar` için bitişik iki ayrı base kural (satır 73 ve 76).

---

## 2026-10-30 — Kalite kontrolü (/hizmetler kart grid + globals.css kart bölümü)
- `src/app/hizmetler/page.tsx`: başlık hiyerarşisi h1 → h3 atlıyordu; liste bölümüne `.visually-hidden`
  (Bootstrap 5.3) ile görünümez `<h2>Hizmetlerimiz</h2>` eklendi — görsel etkisi yok, `<section>` aynı
  zamanda erişilebilir ad kazandı (axe `heading-order` uyarısını kapatır).
- `src/app/globals.css`: kart bloğundaki ölü `.icon` tanımları silindi (2 adet: satır ~533 ve
  ~1047'deki media query içi 36px versiyonu) — `src/` altında `icon` sınıfı kullanan hiyerarşi yok.
- Ölü CSS taraması: `.service-list`, `.service-item*` için `src/` altında referans YOK;
  `id={service.slug}` kaldırılmış, `/#<slug>` formatında derin link yok (yalnızca `/#iletisim`,
  `/#palet` gibi anasayfa bölüm linkleri var).
- Doğrulama: `tsc --noEmit` = 0, `eslint src/app/hizmetler/page.tsx` = 0, `next build` = 0 (17 sayfa SSG),
  10 servis görseli `public/` altında mevcut.
- Not (raporlandı, dokunulmadı): `.services-page-list` section'ının arka planı beyaz, `.card-inner`
  da beyaz → kart panelleri beyaz-üstü-beyaz; görsel ayrım yalnızca içerikten geliyor (visual-analyst kararı).
  Ayrıca `.card-body*` kuralları Bootstrap `.card-body` ile çakışıyor (RelatedServices detay sayfasını da
  etkiliyor) ve `.services .service-card` / `.services-page-list .service-card` blokları tekrar ediyor.

---

## 2026-10-30 — Kalite kontrolü (ContactFormSection / ProcessSection / Hero / final-cta)
- ProcessSection.tsx: STEPS verisindeki 4 adet boşluk satırı (silinmiş alan kalıntısı) temizlendi; uzun `<Image />` satırı çok satıra bölündü.
- ContactFormSection.tsx: label'sız 3 form alanına (ad, eposta, mesaj) `aria-label` eklendi — görsel etkisi yok.
- ESLint (next/core-web-vitals + typescript) ve `tsc --noEmit` temiz.
- Ölü kod taraması: `step-icon`, `hero-bottom-bar` vb. kalıntı YOK (src genelinde).
- Not (raporlandı, dokunulmadı): `.contact-block` sınıfı CSS'te tanımıyor (etkisiz hook, görsel etki yok);
  globals.css içinde tümü kullanılmayan tanımlar: `.search-btn`, `.button-dark`, `.feature-icon`, `.text-green`.
