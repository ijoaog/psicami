# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Instala compatibilidade nativa para libs nativas
RUN apk add --no-cache libc6-compat

# Copia apenas arquivos essenciais para instalar dependências
COPY package.json package-lock.json tsconfig.json ./

# Instala dependências (trocado npm ci por install com fallback de conflitos)
RUN npm install --omit=dev --legacy-peer-deps --prefer-offline --no-audit

# Copia o restante do projeto
COPY . .

# Gera build otimizada para produção (standalone)
RUN npm run build

# Etapa 2: Runtime enxuto e seguro
FROM node:18-alpine AS runner

WORKDIR /app

# Cria usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copia arquivos necessários da build
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Define usuário seguro
USER nextjs

# Define variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

# Inicia aplicação
CMD ["node", "server.js"]
