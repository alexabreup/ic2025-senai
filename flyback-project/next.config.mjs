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
  // Configurações para garantir que os arquivos sejam exportados corretamente
  // Nota: exportPathMap não é compatível com o diretório app
  experimental: {
    appDir: true,
  },
}

export default nextConfig
