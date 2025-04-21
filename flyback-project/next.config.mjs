/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ic2025-senai',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
