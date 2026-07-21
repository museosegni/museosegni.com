# Build context = radice del monorepo (vedi docker-compose.prod.yml:
# build.context "../..", build.dockerfile "apps/cms/Dockerfile"), perché il
# lockfile pnpm e il workspace vivono lì, non dentro apps/cms.
# Richiede `output: 'standalone'` in apps/cms/next.config.ts.

FROM node:22.17.0-alpine AS base
RUN apk add --no-cache libc6-compat
RUN corepack enable

# Installa le dipendenze dell'intero workspace (il lockfile pnpm copre tutti
# i package, non solo cms) sfruttando la cache dei layer Docker finché i
# manifest non cambiano.
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/cms/package.json apps/cms/package.json
COPY apps/web/package.json apps/web/package.json
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app ./
COPY . .
RUN pnpm --filter cms build

# Immagine finale: solo l'output standalone di apps/cms (server.js autonomo +
# node_modules già potati da Next), niente sorgenti né devDependencies.
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/cms/public ./apps/cms/public

RUN mkdir -p apps/cms/.next
RUN chown nextjs:nodejs apps/cms/.next

# Cartella media (upload Payload, vedi collections/Media.ts): montata come
# volume Docker in produzione (docker-compose.prod.yml) per persistere i file
# tra un deploy e l'altro. Deve essere scrivibile dall'utente nextjs.
RUN mkdir -p apps/cms/media
RUN chown nextjs:nodejs apps/cms/media

# L'output standalone di Next per un monorepo ricrea l'intero albero delle
# cartelle del workspace (apps/cms/server.js, node_modules, ecc.) sotto la
# working directory: copiarlo su ./ mantiene quella struttura.
COPY --from=builder --chown=nextjs:nodejs /app/apps/cms/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/cms/.next/static ./apps/cms/.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD HOSTNAME="0.0.0.0" node apps/cms/server.js
