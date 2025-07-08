# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat

# Copia arquivos essenciais
COPY package.json package-lock.json tsconfig.json ./

# Instala todas as dependências para build (incluindo dev)
RUN npm install --legacy-peer-deps

# Copia restante do projeto
COPY . .

# Gera build
RUN npm run build

# Após o build, remove devDependencies para reduzir peso
RUN npm prune --production

# Etapa 2: Runtime enxuto e seguro
FROM node:18-alpine AS runner

WORKDIR /app

# Cria usuário seguro
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copia apenas o necessário da build
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

CMD ["node", "server.js"]
