import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },

  images: {
    formats: ['image/webp'],
    unoptimized: true, // útil para usar imagens locais sem otimização do Next
  },

  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  typescript: {
    ignoreBuildErrors: true,
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
          },
        },
      };
    }

    config.resolve.alias['@'] = resolve(__dirname);
    return config;
  },
};

export default nextConfig;