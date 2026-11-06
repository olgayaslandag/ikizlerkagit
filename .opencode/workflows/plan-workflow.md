# PLAN Workflow — Planlama Aşaması

## Amaç
Gelen isteği analiz etmek, teknik kararı almak ve build için yol haritası oluşturmak.

## Adımlar

1. **İstek Alımı** (project-manager-agent)
   - Kaynak: PDF / PNG / JPG / HTML template / hedef site URL'si
   - İstenen çıktı türü: HTML/CSS/JS veya Next.js

2. **Görsel Analiz** (visual-analyst-agent)
   - Kaynak dosyayı incele → `context/project-context.md` yaz
   - Hedef site URL'si varsa → `context/site-audit.md` yaz
   - HTML template varsa → `context/template-review.md` yaz

3. **Görsel Kararı** (project-manager-agent)
   - Mevcut görseller yeterli mi?
   - Yoksa: `image-researcher-agent` (free görsel bul) veya `image-generator-agent` (prompt üret)

4. **Teknik Karar**
   - Varsayılan: Next.js (App Router + Tailwind)
   - Kullanıcı "html css js" derse: Saf HTML/CSS/JS

5. **Plan Kaydı**
   - `.opencode/memory/project-plan.md` oluşturulur:
     - Proje adı
     - Marka bilgileri
     - Renk paleti & tipografi
     - Bölüm listesi (hero, services, about, contact, footer)
     - Teknoloji kararı
     - Görsel kaynak listesi

6. **Build'e Geçiş**
   - `workflows/build-workflow.md` başlatılır.