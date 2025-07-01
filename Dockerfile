# Etapa 1: Build
FROM node:18 AS builder
WORKDIR /app

# Copia apenas os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Gera o build da aplicação
RUN npm run build

# Etapa 2: Runtime otimizado
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001

# Instala apenas dependências de produção
COPY package*.json ./
RUN npm install --omit=dev

# Copia artefatos do build e arquivos essenciais
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/styles ./styles
COPY --from=builder /app/postcss.config.mjs ./postcss.config.mjs
COPY --from=builder /app/tailwind.config.ts ./tailwind.config.ts

# Expõe a porta 3001
EXPOSE 3001

# Inicializa a aplicação
CMD ["npm", "start"]
