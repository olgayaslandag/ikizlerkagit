# BUILD Workflow — Yapım Aşaması (Build Agent Kendi Yönetir)

## Amaç
Project Manager'dan gelen plan ve görevleri Build Agent'ın yürütmesi. Build Agent, her görevi kendi başına değerlendirir, uygun alt-ajanı çağırır; uygun alt-ajan yoksa kendi çalışır. Bu sabit bir "sürekli döngü" değildir; her görev bağımsız olarak işlenir.

## Adımlar

### Adım 1 — Görevleri Al (Build Agent)
- `memory/project-plan.md` ve `memory/tasks.json` okunur.
- Her görev sırayla ele alınır.

### Adım 2 — Görev-Tür Eşleştirmesi (Build Agent)
Build Agent aşağıdaki mantıkla yürütür:

| İçerik | Yöntem |
|--------|--------|
| Tasarım / wireframe | `ux-ui-designer-agent` çağırılır; yoksa Build Agent yazar |
| İçerik / copy | `content-copywriter-agent` çağırılır; yoksa Build Agent yazar |
| SEO | `seo-specialist-agent` çağırılır; yoksa Build Agent meta etiket ekler |
| Görsel bul / araştırma | `image-researcher-agent` çağırılır; yoksa mevcut/öneri kullanılır |
| Görsel üretim promptu | `image-generator-agent` çağırılır; yoksa prompt önerisi yazılır |
| Kod yazımı | `frontend-coder-agent` çağırılır; yoksa Build Agent kendi kodunu yazar |
| Kod temizliği | `code-cleaner-agent` çağırılır; yoksa Build Agent temiz kod yazar |
| Backend / API | `backend-api-agent` çağırılır; yoksa Build Agent statik form yazar |
| Performans | `performance-agent` çağırılır; yoksa Build Agent temel optimizasyon uygular |
| QA / test | `qa-tester-agent` çağırılır; yoksa Build Agent kendi kontrolünü uygular |
| Dağıtım | `devops-deployment-agent` çağırılır; yoksa Build Agent dağıtım notu yazar |
| Diğer / tanımlanmamış | **Build Agent kendi yürütür** |

### Adım 3 — Çıktı Yazma
- Kod: `.opencode/build/output/`
- İçerik/analiz: `.opencode/context/`
- Rapor/durum: `.opencode/memory/`

### Adım 4 — Tamamlama ve Rapor
Tüm görevler tamamlandığında `memory/build-summary.md` oluşturulur ve Project Manager'a final teslim onayı için iletilir.

## Not
Build Agent'ın "sürekli subagent çalıştırma" zorunluluğu yoktur. Alt-ajan çağrısı yalnızca görev türüne uygun olduğunda yapılır; aksi takdirde Build Agent doğrudan işi yapar.