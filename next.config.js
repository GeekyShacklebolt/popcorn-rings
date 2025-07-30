/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/popcorn-rings' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/popcorn-rings/' : '',
}

module.exports = nextConfig
