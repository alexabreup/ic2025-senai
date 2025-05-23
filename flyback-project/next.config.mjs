/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/ic2025-senai' : '',
  assetPrefix: isProd ? '/ic2025-senai' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuração para webpack para lidar com o KaTeX
  webpack: (config) => {
    // Resolver o problema com o pacote KaTeX que usa 'fs'
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

export default nextConfig
