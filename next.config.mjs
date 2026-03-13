/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // ← esta linha faz o Next.js gerar site estático
  basePath: 'HfilipeM/quintelas'
}

export default nextConfig
