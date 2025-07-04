# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Instala compatibilidade nativa para algumas libs Node
RUN apk add --no-cache libc6-compat

# Copia apenas arquivos de dependência para otimizar cache
COPY package.json package-lock.json tsconfig.json ./

# Usa cache compartilhado de dependências com BuildKit
RUN --mount=type=cache,id=psicami-npm,target=/root/.npm \
    npm ci --omit=dev --prefer-offline --no-audit

# Copia restante do projeto
COPY . .

# Gera build otimizada
RUN npm run build

# Etapa 2: Runtime enxuto e seguro
FROM node:18-alpine AS runner

WORKDIR /app

# Cria usuário não-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copia somente os arquivos essenciais da build
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Usa usuário seguro
USER nextjs

# Define variáveis de ambiente de runtime
ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

# Inicia aplicação
CMD ["node", "server.js"]
