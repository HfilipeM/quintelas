# 🚴 Quintela Group - Website Project

Projeto premium com **Splash Page de entrada** e **dois portais distintos** (Quintela Cycling e Casa Quintela) com scroll snap, animações modernas e design minimalista.

## 🎨 Visão Geral

```
HOME (Splash Page)
│
├─ /quintelacycling → Portal de Cycling
│  ├─ Hero (Slideshow)
│  ├─ Brands
│  ├─ Highlights
│  ├─ Services
│  └─ Contact
│
└─ /casaquintela → Portal de Home/Tools
   ├─ Hero (Slideshow)
   ├─ Brands
   ├─ Highlights
   ├─ Services
   └─ Contact
```

## ✨ Características Principais

### 🖥️ Splash Page
- Divisão 50/50 (Verde-lima vs Orange)
- Animações de entrada suave
- Redirecionamento inteligente para portais
- Design premium em minimalismo extremo

### 📱 Portais de Scroll Snap
- **100vh por seção** - Cada secção ocupa altura total da tela
- **Scroll snap nativo** - Alinha automaticamente ao rolar
- **Animações Framer Motion** - Fade-in, slide-up, stagger
- **Responsivo** - Mobile, tablet e desktop otimizados

### 🎬 Componentes Implementados
- Hero com slideshow automático (5s)
- Grid de marcas parceiras
- Seção de highlights com conteúdo
- Serviços (Workshop + Assistência Técnica)
- Contacto com 3 métodos (Endereço, Telefone, Email)
- Botão WhatsApp flutuante

## 🛠️ Tech Stack

```
┌─────────────────────────────────────┐
│         Next.js 16 (App Router)    │
├─────────────────────────────────────┤
│      Tailwind CSS 4 + Framer Motion │
├─────────────────────────────────────┤
│   Lucide React Icons + TypeScript   │
└─────────────────────────────────────┘
```

## 📁 Estrutura de Arquivos

```
app/
├── page.tsx                              # Splash Page
├── layout.tsx                            # Root layout
├── globals.css                           # Global styles + scroll snap
├── quintelacycling/
│   ├── page.tsx                         # Portal principal
│   └── layout.tsx                       # Metadados
└── casaquintela/
    ├── page.tsx                         # Portal principal
    └── layout.tsx                       # Metadados

components/
├── quintela-cycling/                    # Componentes Cycling
│   ├── hero-section.tsx
│   ├── brands-section.tsx
│   ├── highlights-section.tsx
│   ├── services-section.tsx
│   └── contact-section.tsx
└── casa-quintela/                       # Componentes Home
    ├── hero-section.tsx
    ├── brands-section.tsx
    ├── highlights-section.tsx
    ├── services-section.tsx
    └── contact-section.tsx

public/
├── quintela-cycling-hero.jpg            # Imagem hero
└── casa-quintela-hero.jpg               # Imagem hero
```

## 🎯 Paleta de Cores

### Quintela Cycling
```
🟢 Primária:   #CDFF00 (Lime Green)
⬛ Secundária: #000000 (Preto)
⬜ Neutra:     Cinza escuro
```

### Casa Quintela
```
🟠 Primária:   #FF6B35 (Orange)
⬜ Secundária: #FFFFFF (Branco)
⬜ Neutra:     Cinza claro
```

## 🚀 Quick Start

### 1. Instalação
```bash
pnpm install
```

### 2. Desenvolvimento
```bash
pnpm dev
```
Abra [http://localhost:3000](http://localhost:3000)

### 3. Build
```bash
pnpm build
pnpm start
```

## ⚙️ Configurações Necessárias

### Contactos (PRIORITÁRIO)
- [ ] Adicionar número telefone real (substitua `+351XXXXXXXXX`)
- [ ] Verificar emails
- [ ] Configurar WhatsApp link

**Arquivos a editar:**
- `components/quintela-cycling/contact-section.tsx`
- `components/casa-quintela/contact-section.tsx`
- `app/quintelacycling/page.tsx`
- `app/casaquintela/page.tsx`

### Imagens (OPCIONAL)
- [ ] Substituir `/public/quintela-cycling-hero.jpg` (fotos reais)
- [ ] Substituir `/public/casa-quintela-hero.jpg` (fotos reais)
- [ ] Adicionar logos de marcas reais

### Mapa (RECOMENDADO)
- [ ] Integrar Google Maps ou similar
- [ ] Substituir placeholder em contact sections

## 📚 Documentação

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Arquitetura detalhada
- **[SETUP.md](./SETUP.md)** - Guia de configuração
- **[IMAGE_INTEGRATION.md](./IMAGE_INTEGRATION.md)** - Guia de imagens
- **[CONTACT_INTEGRATION.md](./CONTACT_INTEGRATION.md)** - Guia de contacto

## 🎨 Customizações Comuns

### Mudar Cores
Editar valores hex em:
- `app/page.tsx` (Splash Page)
- Componentes do portal

### Ajustar Animações
Modificar `duration` e `delay` em componentes:
```tsx
transition={{ duration: 0.8, delay: 0.2 }}
```

### Adicionar Mais Seções
Copiar um componente de seção e personalizar:
```tsx
export default function NewSection() {
  return (
    <section className="snap-start h-screen w-full flex items-center justify-center">
      {/* Conteúdo aqui */}
    </section>
  )
}
```

## ✅ Checklist de Deployment

- [ ] Substituir todos os `XXXXXXXXX` com dados reais
- [ ] Adicionar imagens em `/public/images/`
- [ ] Testar scroll snap em navegadores modernos
- [ ] Validar SEO com Google Search Console
- [ ] Testar acessibilidade (a11y)
- [ ] Verificar performance com Lighthouse
- [ ] Deploy em Vercel/GitHub

## 📱 Responsividade

**Breakpoints Tailwind:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Todos os componentes adapta-se automaticamente.

## ♿ Acessibilidade

✅ Implementado:
- Contraste de cores adequado
- ARIA labels em botões
- Alt text em imagens
- Navegação por teclado
- Semântica HTML

## 🌐 SEO

✅ Otimizado para:
- Meta tags (title, description)
- Open Graph (redes sociais)
- Structured data (JSON-LD)
- Mobile-first indexing

## 📊 Performance

**Lighthouse Score Target:** 90+

Otimizações implementadas:
- CSS scroll snap nativo
- Lazy loading de componentes
- Image optimization
- Font loading otimizado
- CSS minificado

## 🔗 Links Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## 📞 Informações de Contacto

**Quintela Cycling**
- 📍 Rua da Vila Corneliana, 1125 - Correlhã, Ponte de Lima, 4990-307
- 🔗 info@quintelacycling.com
- 📱 [Link direto WhatsApp](https://wa.me/351XXXXXXXXX)

**Casa Quintela**
- 📍 Rua da Vila Corneliana, 1125 - Correlhã, Ponte de Lima, 4990-307
- 🔗 info@casaquintela.com
- 📱 [Link direto WhatsApp](https://wa.me/351XXXXXXXXX)

## 📄 Licença

Projeto privado - Todos os direitos reservados © 2024

---

**Status:** ✅ Pronto para desenvolvimento e customizações

**Última atualização:** Março 2024

**Desenvolvido com:** v0.app + Next.js + Tailwind CSS
