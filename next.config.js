/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['localhost'],
    },
    trailingSlash: true,
    output: 'export',
  }
  
  module.exports = nextConfig