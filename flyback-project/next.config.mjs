/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure basePath conditionally - only use in production
  basePath: process.env.NODE_ENV === 'production' ? '/ic2025-senai' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ic2025-senai' : '',
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
}

export default nextConfig
