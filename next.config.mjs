/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.rankeddaily.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
