FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

# Dependencies
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Production
FROM base AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/build ./
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3333
CMD ["node", "bin/server.js"]
