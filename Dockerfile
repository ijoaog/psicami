# Etapa 1: Build
FROM node:18 AS builder
WORKDIR /app

# Ativa o pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia arquivos de dependência e instala apenas o necessário
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copia o restante da aplicação
COPY . .

# Desativa sourcemaps e faz o build de produção
ENV NEXT_DISABLE_SOURCEMAPS=true
RUN pnpm build

# Etapa 2: Runtime (produção real)
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001

# Ativa o pnpm no ambiente leve
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia apenas o necessário do builder
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
