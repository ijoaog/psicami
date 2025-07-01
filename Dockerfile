# Etapa 1: Build
FROM node:18 AS builder
WORKDIR /app

# Aproveita cache para instalar apenas se o package.json mudar
COPY package*.json ./
RUN npm install --force

# Copia o restante da aplicação
COPY . .
RUN npm run build

# Etapa 2: Runtime
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001

# Copia apenas o necessário para rodar
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3001

CMD ["npm", "start"]
