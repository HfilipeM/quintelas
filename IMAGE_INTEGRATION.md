# Guia de Integração de Imagens

## Estrutura Atual

O projeto tem placeholders para imagens. Aqui está como substituir e otimizar:

## 1. Imagens Geradas Automaticamente

Duas imagens foram geradas em `/public/`:
- `quintela-cycling-hero.jpg` - Premium cycling bike
- `casa-quintela-hero.jpg` - Professional tools and workshop

Você pode substituir estas imagens por fotos reais:

```bash
# Substitua os arquivos em /public/
public/
├── quintela-cycling-hero.jpg    # Substitua com sua imagem
├── casa-quintela-hero.jpg       # Substitua com sua imagem
└── ...
```

## 2. Implementar Imagens nas Seções Highlights

### Exemplo para Quintela Cycling

Arquivo: `components/quintela-cycling/highlights-section.tsx`

**Atual (Placeholder):**
```tsx
<motion.div
  variants={itemVariants}
  className="h-96 md:h-full bg-gradient-to-br from-[#CDFF00]/20 to-transparent border border-gray-800 flex items-center justify-center"
>
  <div className="text-center">
    <div className="text-6xl mb-4">🚴</div>
    <p className="text-gray-500 text-sm tracking-widest">FEATURED CONTENT</p>
  </div>
</motion.div>
```

**Com Imagem Real:**
```tsx
import Image from 'next/image'

<motion.div
  variants={itemVariants}
  className="relative h-96 md:h-full border border-gray-800 overflow-hidden"
>
  <Image
    src="/quintela-cycling-featured.jpg"
    alt="Featured Cycling Equipment"
    fill
    className="object-cover"
    quality={90}
    priority
  />
  {/* Overlay opcional */}
  <div className="absolute inset-0 bg-black/20" />
</motion.div>
```

### Exemplo para Casa Quintela

Arquivo: `components/casa-quintela/highlights-section.tsx`

**Com Imagem Real:**
```tsx
import Image from 'next/image'

<motion.div
  variants={itemVariants}
  className="relative h-96 md:h-full border border-gray-200 overflow-hidden"
>
  <Image
    src="/casa-quintela-featured.jpg"
    alt="Featured Tools and Equipment"
    fill
    className="object-cover"
    quality={90}
    priority
  />
</motion.div>
```

## 3. Otimização de Imagens

### Next.js Image Component

O Next.js otimiza automaticamente:
- Responsividade (diferentes tamanhos para diferentes devices)
- Lazy loading
- Formato moderno (WebP quando suportado)
- Placeholder blur (opcional)

### Tamanhos Recomendados

**Hero Images:**
- Largura: 1920px
- Altura: 1080px
- Formato: JPG (qualidade 85-90)
- Tamanho do arquivo: < 300KB

**Highlight Images:**
- Largura: 1200px
- Altura: 800px
- Formato: JPG (qualidade 85-90)
- Tamanho do arquivo: < 200KB

**Brand Logos:**
- Largura: 200px
- Altura: 100px
- Formato: PNG com transparência
- Tamanho do arquivo: < 50KB

## 4. Adicionar Imagens com Blur Placeholder

Para melhor UX, adicionar blur placeholder:

```tsx
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

// No build time
export const getStaticProps = async () => {
  const { base64, img } = await getPlaiceholder(
    '/quintela-cycling-featured.jpg'
  )

  return {
    props: {
      blurDataURL: base64,
      src: img.src,
    },
  }
}

// No component
<Image
  src={src}
  alt="Featured"
  fill
  placeholder="blur"
  blurDataURL={blurDataURL}
  className="object-cover"
/>
```

## 5. Estrutura de Pastas Recomendada

```
public/
├── images/
│   ├── heroes/
│   │   ├── quintela-cycling-hero.jpg
│   │   └── casa-quintela-hero.jpg
│   ├── highlights/
│   │   ├── quintela-cycling-featured.jpg
│   │   └── casa-quintela-featured.jpg
│   ├── brands/
│   │   ├── shimano.png
│   │   ├── sram.png
│   │   └── ...
│   └── backgrounds/
│       └── ...
```

## 6. Adicionar Backgrounds de Imagem

Exemplo para seção com background image:

```tsx
<section 
  className="snap-start h-screen w-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/background.jpg')`
  }}
>
  {/* Conteúdo */}
</section>
```

Ou com CSS:

```css
.hero-section {
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
              url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
```

## 7. Performance Tips

✅ **Fazer:**
- Usar Next.js Image component
- Comprimir imagens antes de upload
- Usar WebP para navegadores modernos
- Lazy load imagens que não estão em viewport
- Usar srcSet para diferentes resoluções

❌ **Evitar:**
- Tag `<img>` HTML puro (sem otimização)
- Imagens muito grandes (> 500KB)
- Múltiplas requestes para mesma imagem
- Não usar `priority` para imagens não-hero

## 8. Adicionar Imagens em Massa

Para adicionar várias imagens de marcas:

```tsx
const brands = [
  { name: 'SHIMANO', logo: '/brands/shimano.png' },
  { name: 'SRAM', logo: '/brands/sram.png' },
  // ... mais brands
]

{brands.map((brand) => (
  <div key={brand.name}>
    <Image
      src={brand.logo}
      alt={brand.name}
      width={120}
      height={60}
      className="h-auto"
    />
  </div>
))}
```

## 9. Troubleshooting

### Imagem não aparece
```tsx
// Verificar se o arquivo existe em /public/
// Usar caminho correto: /images/nome.jpg
// Não usar: ./images/nome.jpg ou file:///...
```

### Image component error
```tsx
// next.config.mjs
export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
}
```

### Imagens muito lentas
```tsx
// Usar quality reduzido para imagens não-hero
<Image
  src="..."
  quality={75} // Default é 75
  loading="lazy" // Default
/>
```

---

**Próximos Passos:**
1. Adicionar imagens reais em `/public/images/`
2. Atualizar componentes com `Image` tags
3. Testar responsividade em diferentes devices
4. Verificar performance com Lighthouse
