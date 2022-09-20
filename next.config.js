/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'amplifytestbdd0e06107b8447297e670559eca7b6a01919-dev.s3.us-east-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
