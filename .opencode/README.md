# .opencode — Bialine Web Ajansı Kadrosu

Bu klasör, **bialine** websitesi projesi için oluşturulmuş tam profesyonel web ajansı ekibini (agent kadrosu), iş akışlarını (workflow) ve kuralları (rules) içerir.

## Klasör Yapısı
```
.opencode/
├── agents/                     # 15 uzman ajan
│   ├── account-manager-agent.md      # Müşteri ilişkileri & brief
│   ├── project-manager-agent.md      # Lider; plan & build koordinatörü
│   ├── technical-architect-agent.md  # Teknik mimar & stack kararı
│   ├── visual-analyst-agent.md       # PDF/PNG/JPG/HTML & site analizi
│   ├── ux-ui-designer-agent.md       # Arayüz tasarımı & design system
│   ├── content-copywriter-agent.md   # Türkçe web copy & içerik
│   ├── seo-specialist-agent.md       # Arama motoru optimizasyonu
│   ├── image-researcher-agent.md     # Ücretsiz görsel arama
│   ├── image-generator-agent.md      # AI görsel üretim promptları
│   ├── frontend-coder-agent.md       # Next.js / HTML-CSS-JS kodlama
│   ├── backend-api-agent.md          # API & sunucu tarafı
│   ├── code-cleaner-agent.md         # Kod temizliği & standartlar
│   ├── performance-agent.md          # Performans & Core Web Vitals
│   ├── qa-tester-agent.md            # Kalite kontrol & test
│   └── devops-deployment-agent.md    # Dağıtım & CI/CD
├── workflows/                  # İş akışları
│   ├── plan-workflow.md          # Planlama aşaması
│   ├── design-workflow.md        # Tasarım akışı
│   ├── content-workflow.md       # İçerik akışı
│   ├── seo-workflow.md           # SEO akışı
│   ├── build-workflow.md         # Yapım döngüsü (sürekli)
│   └── deploy-workflow.md        # Dağıtım akışı
├── rules/                      # Kurallar
│   ├── coding-standards.md
│   ├── design-rules.md
│   ├── content-rules.md
│   ├── image-rules.md
│   ├── analysis-rules.md
│   └── deploy-rules.md
├── context/                    # Proje bağlamı
│   ├── project-context.md        # bialine.pdf'den çıkarılan bilgiler
│   ├── project-brief.md          # Müşteri brief'i
│   ├── site-audit.md             # Hedef site analizi
│   ├── template-review.md        # HTML template incelemesi
│   ├── design-system.md          # Tasarım sistemi
│   ├── wireframes.md             # Sayfa akışları
│   ├── content-copy.md           # Tüm web metinleri
│   ├── seo-strategy.md           # SEO stratejisi
│   ├── technical-spec.md         # Teknik spesifikasyon
│   ├── page_1.png                # PDF sayfa 1 (render)
│   └── page_2.png                # PDF sayfa 2 (render)
├── build/                      # Çıktı klasörleri
│   ├── templates/                # Verilen HTML template'ler
│   └── output/                   # Final kod (HTML/CSS/JS veya Next.js)
└── memory/                     # Durum ve rapor dosyaları
    ├── project-state.json
    ├── project-plan.md
    ├── client-approvals.json
    ├── code-clean-log.md
    ├── qa-report.md
    ├── performance-report.md
    ├── change-requests.md
    └── build-summary.md
```

## Kullanım Komutları (örnek)

> `@account-manager-agent: bu pdf'yi brief'e dönüştür`  
> `@project-manager-agent: bu siteyi analiz et: https://örnek.com`  
> `@project-manager-agent: bu html template'i nextjs'e dönüştür`  
> `@project-manager-agent: bu png'yi analiz et ve siteye uygunlaştır`  
> `@project-manager-agent: internetten free mimari görsel bul`  
> `@project-manager-agent: bialine sitesini canlıya al`

## Akış (Plan → Build → Deploy)

1. **PLAN:** İstek alınır → brief → analiz → teknik karar → plan.
2. **DESIGN & CONTENT:** wireframe → design system → copy → SEO stratejisi.
3. **BUILD:** Kod üretilir → temizlenir → tasarımla kıyaslanır → test edilir → optimize edilir. Döngü onaylanana kadar tekrarlanır.
4. **DEPLOY:** CI/CD → production → teslim onayı.

## Hedef
- Varsayılan: **Next.js** (App Router + Tailwind CSS + TypeScript)
- İsteğe bağlı: Saf **HTML5 + CSS3 + Vanilla JS**
- Marka: **bialine — Cepehe Sistem Çözümleri** (2008, Avcılar/İstanbul)