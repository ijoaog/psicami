const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  // A funcionalidade experimental 'optimizeCss' está causando o erro de build com 'critters'.
  // Desativá-la é a forma mais segura de garantir que o build funcione.
  // experimental: {
  //   optimizeCss: true,
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;