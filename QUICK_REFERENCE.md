# 🚀 Guia Rápido - Quintela Group Website

## ⚡ Comandos Essenciais

```bash
# Instalação
pnpm install

# Desenvolvimento (recomendado)
pnpm dev
# Abra: http://localhost:3000

# Build produção
pnpm build
pnpm start

# Lint
pnpm lint
```

## 🎯 Rotas Disponíveis

```
/                    → Splash Page (Home)
/quintelacycling     → Portal Quintela Cycling
/casaquintela        → Portal Casa Quintela
```

## 📝 Ficheiros para Customizar

### 1️⃣ CONTACTOS (URGENTE)

Substituir `XXXXXXXXX` por número real:

**`app/quintelacycling/page.tsx`** (linhas ~38)
```tsx
href="https://wa.me/351XXXXXXXXX"
```

**`app/casaquintela/page.tsx`** (linhas ~36)
```tsx
href="https://wa.me/351XXXXXXXXX"
```

**`components/quintela-cycling/contact-section.tsx`** (linhas ~82, ~95)
```tsx
href="tel:+351XXXXXXXXX"
href="mailto:info@quintelacycling.com"
```

**`components/casa-quintela/contact-section.tsx`** (linhas ~82, ~95)
```tsx
href="tel:+351XXXXXXXXX"
href="mailto:info@casaquintela.com"
```

### 2️⃣ IMAGENS (RECOMENDADO)

Substituir imagens em `/public/`:
- `quintela-cycling-hero.jpg` → Fotos de bikes
- `casa-quintela-hero.jpg` → Fotos de ferramentas

### 3️⃣ CORES (OPCIONAL)

**Quintela Cycling:** `#CDFF00` (Verde-lima)
**Casa Quintela:** `#FF6B35` (Orange)

## 🎨 Estrutura de Componentes

```
Quintela Cycling (preto/verde-lima)
├── Hero Section (slideshow)
├── Brands Section (grid de logos)
├── Highlights Section (destaque com imagem)
├── Services Section (Workshop + Suporte)
└── Contact Section (localização + contacto)

Casa Quintela (branco/orange)
├── Hero Section (slideshow)
├── Brands Section (grid de logos)
├── Highlights Section (destaque com imagem)
├── Services Section (Workshop + Assistência)
└── Contact Section (localização + contacto)
```

## 🔄 Fluxo de Navegação

```
SplashPage (/)
    ↓
  Click left (50%)  →  /quintelacycling
  Click right (50%) →  /casaquintela
    ↓
  5 secções com scroll snap
    ↓
  Botão ← HOME no topo-esquerdo volta ao /
```

## 🎬 Animações

### Tipos Implementados:
1. **Fade-in**: Opacidade 0→1
2. **Slide-up**: Transform Y 20px→0
3. **Stagger**: Atraso entre elementos
4. **Hover**: Scale e color transitions

### Customizar:
```tsx
transition={{ 
  duration: 0.8,      // Velocidade (segundos)
  delay: 0.2,         // Atraso
  ease: 'easeOut'     // Easing
}}
```

## 📊 Breakpoints Responsivos

```
Base (mobile)  → 0px
sm             → 640px
md             → 768px (mudanças principais)
lg             → 1024px
xl             → 1280px
2xl            → 1536px
```

## 🎯 Sections (100vh cada)

Cada seção ocupa **100% da altura da tela** e alinha automaticamente ao scroll:

```tsx
<section className="snap-start h-screen w-full flex items-center justify-center">
  {/* Conteúdo aqui */}
</section>
```

## 🔗 Links Importantes

### Setup
- Guia completo: [`SETUP.md`](./SETUP.md)
- Arquitetura: [`ARCHITECTURE.md`](./ARCHITECTURE.md)

### Customização
- Imagens: [`IMAGE_INTEGRATION.md`](./IMAGE_INTEGRATION.md)
- Contacto: [`CONTACT_INTEGRATION.md`](./CONTACT_INTEGRATION.md)

### Documentação
- README: [`README.md`](./README.md)

## 🐛 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| Scroll snap não funciona | Verificar browser (Chrome 89+, Firefox 87+, Safari 15+) |
| Imagens não carregam | Confirmar ficheiro em `/public/` e usar caminho correto |
| Animações lentas | Reduzir `duration` em Framer Motion |
| Links quebrados | Verificar `href` values nos componentes contact |
| Styles não aplicam | Fazer rebuild com `pnpm dev` |

## 💡 Dicas Rápidas

✅ **Fazer:**
- Usar `pnpm` para instalar packages
- Testar em mobile com DevTools
- Verificar Lighthouse score (90+)
- Comprimir imagens antes de upload

❌ **Evitar:**
- Modificar `/components/ui/*` (componentes base)
- Usar cores diferentes das 5 definidas
- Adicionar muitos shadows ou rounded corners
- Usar animações muito complexas

## 📱 Testing Mobile

```bash
# Abrir DevTools
F12

# Ativar mobile view
Ctrl+Shift+M (Windows/Linux)
Cmd+Shift+M (Mac)

# Testar orientações
- Portrait (vertical)
- Landscape (horizontal)
```

## 🌐 Deploy

### Vercel (Recomendado)
```bash
vercel
```

### GitHub Pages
```bash
npm run build
```

### Custom Server
```bash
pnpm build
pnpm start
# Server corre em :3000
```

## 📞 Dados de Contacto

```
Endereço: Rua da Vila Corneliana, 1125 - Correlhã, Ponte de Lima, 4990-307

Quintela Cycling
- Email: info@quintelacycling.com
- Tel: +351 XXXXXXXXX

Casa Quintela
- Email: info@casaquintela.com
- Tel: +351 XXXXXXXXX
```

## 📋 Checklist Final

- [ ] Números telefone atualizados
- [ ] Emails verificados
- [ ] Imagens substituídas (opcional)
- [ ] Mapa adicionado (recomendado)
- [ ] Testado em mobile
- [ ] Lighthouse score 90+
- [ ] Links de redes sociais funcionam
- [ ] SEO metadados OK
- [ ] Deploy realizado

---

**Dúvidas?** Consultar os ficheiros de documentação (SETUP.md, ARCHITECTURE.md, etc.)

**Última atualização:** Março 2024
