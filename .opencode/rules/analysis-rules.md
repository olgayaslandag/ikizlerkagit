# Analysis Rules — Analiz Kuralları

## PDF/PNG/JPG Analizi
- Dosya `.opencode/context/` altına kopyalanır.
- pypdfium2 ile PDF sayfaları PNG'ye dönüştürülür ve incelenir.
- Çıkan bilgi `context/project-context.md` ye yazılır:
  - Marka adı, slogan, kuruluş yılı, konum, iletişim
  - Hizmet listesi
  - Renk paleti, tipografi, bölüm sırası

## Hedef Site Analizi (URL)
- Site manuel veya otomatik olarak taranır.
- `context/site-audit.md` ye yazılır:
  - Navigasyon yapısı
  - Hero, hizmetler, hakkında, iletişim bölümleri
  - Kullanılan renkler ve fontlar
  - İyileştirilebilir bölümler

## HTML Template Analizi
- Verilen template `.opencode/build/templates/` içine koyulur.
- `context/template-review.md` ye yazılır:
  - Semantic HTML kullanımı
  - CSS yapısı (Tailwind/plain)
  - JS etkileşimleri
  - Eksik/eklenecek bölümler