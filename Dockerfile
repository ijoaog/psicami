# Etapa 1: Base - Define a imagem base com Node.js e pnpm
FROM node:18-alpine AS base
WORKDIR /app
# Ativa o corepack para usar o pnpm
RUN corepack enable

# Etapa 2: Builder - Instala dependências e constrói a aplicação
FROM base AS builder
COPY package.json pnpm-lock.yaml ./
# Instala TODAS as dependências (incluindo dev) necessárias para o build.
# A ausência de '--frozen-lockfile' permite que o pnpm corrija o lockfile se necessário.
# Para melhores práticas, rode 'pnpm install' localmente e comite o pnpm-lock.yaml atualizado.
RUN pnpm install
COPY . .
# Constrói a aplicação para produção. O output 'standalone' já está configurado no next.config.mjs.
RUN pnpm build

# Etapa 3: Runner - Cria a imagem final, otimizada e leve
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001

# Copia a saída otimizada 'standalone' do estágio de build
COPY --from=builder /app/.next/standalone ./
# Copia os assets públicos e estáticos
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3001
# O comando para iniciar o servidor no modo standalone
CMD ["node", "server.js"]
