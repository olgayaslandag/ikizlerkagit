# DEPLOY Workflow — Dağıtım Akışı

## Amaç
Siteyi production'a almak ve canlılaştırmak.

## Adımlar
1. `code-cleaner-agent` son temizlemeyi yapar.
2. `performance-agent` Lighthouse/Core Web Vitals testini çalıştırır.
3. `qa-tester-agent` final QA raporunu yazar (`memory/qa-report.md`).
4. `devops-deployment-agent` build komutları, ortam değişkenleri ve CI/CD'yi hazırlar (`build/deploy-config.md`).
5. `project-manager-agent`最終 teslim onayını verir ve kullanıcıya link gönderilir.