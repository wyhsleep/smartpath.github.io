/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/smartpath.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/smartpath.github.io/' : '',
}

export default nextConfig
