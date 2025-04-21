/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ic2025-senai',
  assetPrefix: '/ic2025-senai/',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
