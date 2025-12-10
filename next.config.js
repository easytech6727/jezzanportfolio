/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper CSS handling in production
  swcMinify: true,
  // Proper asset handling
  trailingSlash: false,
  // Ensure images are optimized
  images: {
    domains: [],
    unoptimized: false,
  },
  // Production optimizations
  poweredByHeader: false,
  // Ensure CSS is properly processed
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
