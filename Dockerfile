# Etapa 1: Build
FROM node:18 AS builder
WORKDIR /app

# Instala pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia arquivos de dependência
COPY package.json pnpm-lock.yaml ./

# Instala dependências
RUN pnpm install

# Copia o restante do código e roda o build
COPY . .
RUN pnpm build

# Etapa 2: Runtime
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001

# Instala pnpm no ambiente de produção
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia apenas as dependências de produção
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Copia artefatos de build e arquivos essenciais
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/styles ./styles
COPY --from=builder /app/postcss.config.mjs ./postcss.config.mjs
COPY --from=builder /app/tailwind.config.ts ./tailwind.config.ts

EXPOSE 3001

CMD ["pnpm", "start"]