# Deploy Rules — Dağıtım Kuralları

## Ortam
- Geliştirme: localhost
- Staging: Vercel/Netlify preview
- Production: özel domain + SSL

## Build
- Next.js: `next build` + `next start` (veya statik export `next export`).
- HTML/CSS/JS: doğrudan statik dosya dağıtımı.
- Tüm ortam değişkenleri `.env.example` içindeörnekle birlikte bırakılır, gerçek değerler production'da girilir.

## CI/CD
- Her push'ta test → build → deploy akışı çalışır.
- QA raporu onaylanmadan production'a deploy yapılmaz.

## Teslim
- Final kod `build/output/` içinde.
- Dağıtım talimatları `build/deploy-config.md` içinde.