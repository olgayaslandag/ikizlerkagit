# syntax=docker/dockerfile:1

# ---------- deps ----------
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- builder ----------
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Build sırasında API_BASE_URL hedefi dinlemez; mock-db fallback devreye girer (beklenen davranış)
RUN npm run build

# ---------- runner ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3004
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# sharp, next/image prod optimizasyonu için gerekli; nft trace dinamik require'i
# izleyemediği için bağımlılık ağacıyla birlikte deps stage'den manuel kopyalanır.
COPY --from=deps --chown=nextjs:nodejs /app/node_modules/sharp ./node_modules/sharp
COPY --from=deps --chown=nextjs:nodejs /app/node_modules/@img ./node_modules/@img
COPY --from=deps --chown=nextjs:nodejs /app/node_modules/color ./node_modules/color
COPY --from=deps --chown=nextjs:nodejs /app/node_modules/color-convert ./node_modules/color-convert
COPY --from=deps --chown=nextjs:nodejs /app/node_modules/color-string ./node_modules/color-string
COPY --from=deps --chown=nextjs:nodejs /app/node_modules/color-name ./node_modules/color-name
COPY --from=deps --chown=nextjs:nodejs /app/node_modules/simple-swizzle ./node_modules/simple-swizzle
COPY --from=deps --chown=nextjs:nodejs /app/node_modules/is-arrayish ./node_modules/is-arrayish
COPY --from=deps --chown=nextjs:nodejs /app/node_modules/detect-libc ./node_modules/detect-libc
COPY --from=deps --chown=nextjs:nodejs /app/node_modules/semver ./node_modules/semver

USER nextjs
EXPOSE 3004
CMD ["node", "server.js"]
