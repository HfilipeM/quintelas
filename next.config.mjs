/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/quintelas', // <--- TEM de ter a barra "/" e apenas o nome do repo
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;