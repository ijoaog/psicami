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

# Variáveis de ambiente (build-time)
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

ARG NEXT_PUBLIC_JWT_SECRET
ENV NEXT_PUBLIC_JWT_SECRET=$NEXT_PUBLIC_JWT_SECRET

# Build da aplicação com otimização
RUN npm run build

# Etapa 2: Runtime
FROM node:18-alpine AS runner

WORKDIR /app

# Cria usuário não-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copia a build final otimizada e assets
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone/server.js ./

# Usa usuário seguro
USER nextjs

# Porta exposta
EXPOSE 3001

# Ambiente de produção
ENV NODE_ENV=production
ENV PORT=3001

# Inicia a aplicação
CMD ["node", "server.js"]
