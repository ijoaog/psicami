# Etapa 1: Base - Define imagem base com Node.js e pnpm
FROM node:18-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

# Etapa 2: Dependencies - Instala dependências com cache eficiente
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Etapa 3: Builder - Copia o restante do app e roda o build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_DISABLE_SOURCEMAPS=true
RUN pnpm build

# Etapa 4: Runner - Imagem final leve para produção
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001

# Copia a build standalone
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3001
CMD ["node", "server.js"]
