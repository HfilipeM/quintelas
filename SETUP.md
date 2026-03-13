# Guia de Configuração - Quintela Group

## 🚀 Quick Start

### 1. Instalação de Dependências
```bash
pnpm install
```

### 2. Desenvolvimento Local
```bash
pnpm dev
```
A aplicação estará disponível em `http://localhost:3000`

### 3. Build para Produção
```bash
pnpm build
pnpm start
```

## 📋 Checklist de Customizações

### Contactos
- [ ] Atualizar `+351XXXXXXXXX` com número real de telefone
- [ ] Atualizar emails em:
  - `app/quintelacycling/page.tsx` (linha ~38)
  - `app/casaquintela/page.tsx` (linha ~36)
- [ ] Componentes de contacto em:
  - `components/quintela-cycling/contact-section.tsx`
  - `components/casa-quintela/contact-section.tsx`

### Imagens
As imagens foram geradas automaticamente. Para substituir por fotos reais:

1. **Hero Images** (Seção 1):
   - Quintela Cycling: `/public/quintela-cycling-hero.jpg`
   - Casa Quintela: `/public/casa-quintela-hero.jpg`

2. **Adicionar fotos nas seções**:
   - Highlights section: Adicionar imagem de destaque em `/components/{portal}/highlights-section.tsx`
   - Brands section: Adicionar logos reais em vez de texto

### Mapa
Adicionar integração de mapa na seção de contacto:
```tsx
// Exemplo com Google Maps Embed
<iframe 
  width="100%" 
  height="400" 
  frameBorder="0" 
  src="https://www.google.com/maps/embed?pb=..."
/>
```

### Cores (Opcional)
Se quiser ajustar as cores, modificar os valores hex em:
- `app/page.tsx` - Splash Page
- Componentes de cada portal

Cores atuais:
- Quintela Cycling: `#CDFF00` (Lime Green)
- Casa Quintela: `#FF6B35` (Orange)

## 📱 Responsividade

O design adapta-se automaticamente para mobile e desktop:
- **Mobile**: Stack vertical, botões maiores, espaço reduzido
- **Tablet**: Grid 2 colunas nas seções de serviços
- **Desktop**: Layout otimizado para tela grande

## ♿ Acessibilidade

- Todos os botões têm `aria-label`
- Imagens têm `alt` text
- Contraste de cores adequado
- Navegação por teclado suportada

## 🎨 Customização de Design

### Tailwind CSS
O projeto usa Tailwind CSS 4 com `@apply` patterns.

Modificar `tailwind.config.ts` para:
- Ajustar espaçamento
- Mudar breakpoints
- Adicionar cores customizadas

### Framer Motion
As animações podem ser ajustadas em cada componente:
```tsx
transition={{ duration: 0.8, delay: 0.2 }}
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
vercel
```

### GitHub Pages
```bash
npm run build
```

## 📊 SEO

Os metadados foram configurados em:
- `app/layout.tsx` - Global
- `app/quintelacycling/layout.tsx`
- `app/casaquintela/layout.tsx`

Atualizar títulos e descrições conforme necessário.

## 🔧 Troubleshooting

### Scroll Snap não funciona
- Verificar browser (requer Chrome 89+, Firefox 87+, Safari 15+)
- Fallback para `scroll-behavior: smooth` está configurado

### Imagens não carregam
- Verificar se estão em `/public/`
- Usar `Image` component do Next.js para otimização

### Animações lentas
- Reduzir `duration` em Framer Motion
- Verificar performance em navegadores mobile

## 📞 Contatos Atualizados

**Quintela Cycling**
- 📍 Rua da Vila Corneliana, 1125 - Correlhã, Ponte de Lima, 4990-307
- 📧 info@quintelacycling.com
- 📱 +351 XXXXXXXXX

**Casa Quintela**
- 📍 Rua da Vila Corneliana, 1125 - Correlhã, Ponte de Lima, 4990-307
- 📧 info@casaquintela.com
- 📱 +351 XXXXXXXXX

---

**Última atualização**: Março 2024
