/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ic2025-senai',
  assetPrefix: '/ic2025-senai',
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
  // Garantir que os arquivos sejam exportados como HTML
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
    };
  },
}

export default nextConfig
