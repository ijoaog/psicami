# Etapa 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Ativa pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia só os arquivos de dependência para aproveitar cache
COPY package.json pnpm-lock.yaml ./

# Instala dependências
RUN pnpm install --frozen-lockfile

# Copia o resto da aplicação
COPY . .

# Desativa sourcemaps e roda o build
ENV NEXT_DISABLE_SOURCEMAPS=true
RUN pnpm build

# Etapa 2: Runtime
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001

# Ativa pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia o mínimo necessário para rodar
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/styles ./styles
COPY --from=builder /app/postcss.config.mjs ./postcss.config.mjs
COPY --from=builder /app/tailwind.config.ts ./tailwind.config.ts

EXPOSE 3001

CMD ["pnpm", "start"]