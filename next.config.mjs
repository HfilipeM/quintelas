/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Se o teu repositório é 'quintelas', o basePath deve ser '/quintelas'
  basePath: '/quintelas', 
  images: {
    unoptimized: true, // Essencial para evitar erros no GitHub Pages
  },
  // Remove ou comenta qualquer outra configuração complexa por agora
};

export default nextConfig;