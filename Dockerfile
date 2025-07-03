# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Adiciona compatibilidade com dependências nativas
RUN apk add --no-cache libc6-compat

# Copia arquivos de dependência e configuração
COPY package*.json tsconfig.json ./

# Usa cache para acelerar builds
RUN --mount=type=cache,target=/root/.npm npm ci --omit=dev

# Copia o restante do código
COPY . .

# Build da aplicação
RUN npm run build

# Etapa 2: Runtime
FROM node:18-alpine AS runner

WORKDIR /app

# Cria usuário não-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copia a build final otimizada
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Define o usuário
USER nextjs

# Porta usada
EXPOSE 3001

# Variáveis de ambiente
ENV PORT=3001
ENV HOSTNAME=0.0.0.0

# Comando final
CMD ["node", "server.js"]