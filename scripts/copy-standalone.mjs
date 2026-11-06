import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");

if (!existsSync(standalone)) {
  console.error("Standalone build bulunamadı (.next/standalone). Önce `npm run build` çalıştırın.");
  process.exit(1);
}

// public/ → .next/standalone/public
const publicSrc = join(root, "public");
const publicDst = join(standalone, "public");
if (existsSync(publicSrc)) {
  cpSync(publicSrc, publicDst, { recursive: true, force: true });
  console.log("Kopyalandı: public/ → .next/standalone/public");
}

// .next/static → .next/standalone/.next/static
const staticSrc = join(root, ".next", "static");
const staticDst = join(standalone, ".next", "static");
if (existsSync(staticSrc)) {
  mkdirSync(join(standalone, ".next"), { recursive: true });
  cpSync(staticSrc, staticDst, { recursive: true, force: true });
  console.log("Kopyalandı: .next/static → .next/standalone/.next/static");
}

console.log("Standalone bundle hazır: .next/standalone/server.js");