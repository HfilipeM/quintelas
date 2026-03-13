# Quintela Group - Project Architecture

## Overview
Este é um projeto de dois portais distintos com uma Splash Page de entrada, construído com Next.js 16, Tailwind CSS 4 e Framer Motion.

## Estrutura do Projeto

### Páginas Principais
- **`/` (Home)** - Splash Page com divisão 50/50 (Quintela Cycling | Casa Quintela)
- **`/quintelacycling`** - Portal de Cycling com scroll snap
- **`/casaquintela`** - Portal de Home/Tools com scroll snap

### Componentes por Portal

#### Quintela Cycling (`/components/quintela-cycling/`)
- `hero-section.tsx` - Hero com slideshow animado (Performance, Innovation, Passion)
- `brands-section.tsx` - Grid com logos de marcas parceiras
- `highlights-section.tsx` - Seção destaque com imagem + conteúdo
- `services-section.tsx` - Workshop e Suporte Técnico
- `contact-section.tsx` - Informações de contacto, mapa e footer

#### Casa Quintela (`/components/casa-quintela/`)
- `hero-section.tsx` - Hero com slideshow animado (Expertise, Quality, Trust)
- `brands-section.tsx` - Grid com logos de marcas parceiras
- `highlights-section.tsx` - Seção destaque com imagem + conteúdo
- `services-section.tsx` - Workshop e Assistência Técnica
- `contact-section.tsx` - Informações de contacto, mapa e footer

## Design System

### Cores

**Quintela Cycling**
- Primária: `#CDFF00` (Lime Green)
- Secundária: Preto (`#000000`)
- Neutra: Cinza escuro

**Casa Quintela**
- Primária: `#FF6B35` (Orange)
- Secundária: Branco (`#FFFFFF`)
- Neutra: Cinza claro

### Tipografia
- **Font**: Geist (Google Fonts)
- **Tamanho Hero**: 80-96px (font-light)
- **Tamanho Corpo**: 16-18px
- **Espaçamento**: Muito espaço negativo, minimalista

### Layout
- **Splash Page**: 100vh, divisão 50/50
- **Portais**: Full-page scroll snap, cada seção = 100vh
- **Comportamento**: `scroll-snap-type: y mandatory`

## Animações (Framer Motion)

### Padrões de Animação
1. **Fade In**: Opacidade 0 → 1 (0.8s)
2. **Slide Up**: Y 20px → 0 (0.8s)
3. **Stagger**: Atraso em cascata entre elementos
4. **Hover Effects**: Scale, color transitions

### Componentes Animados
- Botões com scale ao hover
- Ícones com transições de cor
- Cards com hover effects
- Scroll indicators com animação contínua

## Funcionalidades

### Splash Page
- Divisão em duas metades clicáveis
- Redirecionamento para portais
- Animações de entrada suave
- Design premium em preto/branco

### Portais
- **Scroll Snap**: Cada seção alinha ao topo ao rolar
- **Hero Slideshow**: Rotação automática a cada 5 segundos
- **Botão Voltar**: Canto superior esquerdo
- **Botão WhatsApp**: Flutuante no canto inferior direito

## Configuração Técnica

### Stack
- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **Animações**: Framer Motion 11.0.0
- **Icons**: Lucide React

### Variáveis de Ambiente
Nenhuma variável de ambiente necessária no momento.

## Customizações Necessárias

1. **WhatsApp Link**: Atualizar números de telefone em:
   - `app/quintelacycling/page.tsx`
   - `app/casaquintela/page.tsx`

2. **Imagens**: Substituir imagens placeholder por fotos reais:
   - `public/quintela-cycling-hero.jpg`
   - `public/casa-quintela-hero.jpg`
   - Adicionar imagens nas seções de highlights

3. **Contacto**: Atualizar informações:
   - Números de telefone
   - E-mails
   - Endereço (já fornecido)

4. **Map Integration**: Adicionar Google Maps ou Mapbox para a seção de contacto

## Performance

- Lazy loading de componentes
- Image optimization com Next.js Image component
- CSS scroll snap nativo (melhor performance)
- Animações otimizadas com Framer Motion

## Browser Support

- Chrome/Edge (89+)
- Firefox (87+)
- Safari (15+)
- Scroll snap totalmente suportado em navegadores modernos
