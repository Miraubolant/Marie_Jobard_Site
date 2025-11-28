# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml* package-lock.json* ./

# Install dependencies (ignore prepare script)
RUN npm pkg delete scripts.prepare 2>/dev/null || true
RUN if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; fi

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* package-lock.json* ./

# Install production dependencies only (ignore prepare script)
RUN npm pkg delete scripts.prepare 2>/dev/null || true
RUN if [ -f pnpm-lock.yaml ]; then \
      corepack enable && corepack prepare pnpm@latest --activate && pnpm install --prod --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci --omit=dev --ignore-scripts; \
    else npm install --omit=dev --ignore-scripts; fi

# Copy built application
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

# Create uploads directory
RUN mkdir -p public/uploads/pages public/uploads/services public/uploads/testimonials

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3333

# Expose port
EXPOSE 3333

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3333/health || exit 1

# Start the application
CMD ["node", "build/bin/server.js"]
