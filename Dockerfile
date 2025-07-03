# Etapa 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Melhora a compatibilidade e reduz imagem
RUN apk add --no-cache libc6-compat

# Copia e instala dependências
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit

# Copia todo o projeto
COPY . .

# Gera o build da aplicação
ENV NEXT_DISABLE_SOURCEMAPS=true
RUN npm run build

# Etapa 2: Runtime otimizada
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001

# Copia arquivos necessários para rodar o app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./

# Instala somente dependências de produção
RUN npm ci --omit=dev --prefer-offline --no-audit

EXPOSE 3001
CMD ["npm", "start"]