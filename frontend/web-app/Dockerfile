FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
# RUN npm install -g yarn
WORKDIR /app

COPY frontend/web-app/package*.json ./
COPY frontend/web-app/yarn.lock ./
RUN  yarn install --omit-dev

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY frontend/web-app ./


ENV NEXT_TELEMETRY_DISABLED 1

RUN npx prisma generate

RUN yarn run build

# production image, copy all files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

# ENV DATABASE_URL postgresql://rukshansuranga:test123@db:5432/kottasa-saba?schema=public

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]