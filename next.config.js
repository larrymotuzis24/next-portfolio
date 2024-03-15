/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/portfolio/',
  basePath: '/portfolio',
  trailingSlash: true,
  output: 'export', // Add this line to specify the export output method
}

module.exports = nextConfig;