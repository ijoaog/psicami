import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  webpack(config) {
    config.resolve.alias['@'] = resolve(__dirname, '.');
    return config;
  },
};

export default nextConfig;
