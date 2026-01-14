# 1️⃣ Login no GCP (se ainda não tiver feito)
gcloud auth login

# 2️⃣ Definir o projeto
gcloud config set project kleinx-484111

# 3️⃣ Habilitar o Artifact Registry
gcloud services enable artifactregistry.googleapis.com

# 4️⃣ Criar o repositório Docker (caso ainda não exista) - criar um repo no GCP - Roda uma vez
gcloud artifacts repositories create kleinx-docker-repo \
    --repository-format=docker \
    --location=southamerica-east1 \
    --description="Repositório para imagens Docker dos projetos de landings"

# 5️⃣ Configurar Docker para autenticação com o GCP
gcloud auth configure-docker southamerica-east1-docker.pkg.dev

# 6️⃣ Build da imagem local a partir do Dockerfile
docker build -t landingpage_psicami:0.0.1 .

# 7️⃣ Tag da imagem para o repositório no Artifact Registry
docker tag landingpage_psicami:0.0.1 southamerica-east1-docker.pkg.dev/kleinx-484111/kleinx-docker-repo/landingpage_psicami:latest

# 8️⃣ Push da imagem para o Artifact Registry
docker push southamerica-east1-docker.pkg.dev/kleinx-484111/kleinx-docker-repo/landingpage_psicami:latest

# 9️⃣ Verificar imagens no Artifact Registry (opcional)
gcloud artifacts docker images list southamerica-east1-docker.pkg.dev/kleinx-484111/kleinx-docker-repo

# 🔟 Deploy no Cloud Run (mesma região do Artifact Registry)
gcloud run deploy landingpage-psicami \
  --image=southamerica-east1-docker.pkg.dev/kleinx-484111/kleinx-docker-repo/landingpage_psicami:latest \
  --region=southamerica-east1 \
  --platform=managed \
  --allow-unauthenticated
