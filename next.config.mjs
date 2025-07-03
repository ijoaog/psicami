// next.config.js ou next.config.mjs
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  webpack(config) {
    config.resolve.alias['@'] = resolve(__dirname);
    return config;
  },
};

export default nextConfig;
