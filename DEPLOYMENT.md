# 🚀 Guia de Deployment - Quintela Group

## Pré-requisitos

- [ ] Node.js 18+ instalado
- [ ] Git configurado
- [ ] Conta Vercel (recomendado) ou servidor próprio

## 📋 Checklist Pré-Deployment

### 1. Validação Local
```bash
# Instalar dependencies
pnpm install

# Testar em dev
pnpm dev
# Verificar em http://localhost:3000

# Build test
pnpm build

# Lint check
pnpm lint
```

### 2. Dados Personalizados
- [ ] Números telefone reais (substituir `XXXXXXXXX`)
- [ ] Emails verificados
- [ ] Imagens finais em `/public/`
- [ ] Metadados SEO corretos

### 3. Performance
- [ ] Testar Lighthouse (alvo: 90+)
- [ ] Verificar Core Web Vitals
- [ ] Imagens otimizadas (<300KB)
- [ ] Sem console errors/warnings

## 🔧 Deployment Vercel (RECOMENDADO)

### Opção 1: Direto do CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (interactive)
vercel

# Deploy produção
vercel --prod
```

### Opção 2: GitHub Integration

1. **Push para GitHub:**
```bash
git init
git add .
git commit -m "Initial Quintela website"
git branch -M main
git remote add origin https://github.com/seu-usuario/quintela.git
git push -u origin main
```

2. **Conectar no Vercel Dashboard:**
   - Ir a [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Selecionar GitHub repository
   - Deixar config padrão
   - Click "Deploy"

### Opção 3: Vercel GUI

1. Fazer drag & drop da pasta do projeto na Vercel
2. Deixar config automática
3. Deploy instantâneo

## 🌐 Deployment GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar ao package.json
{
  "homepage": "https://seu-usuario.github.io/quintela",
  "scripts": {
    "deploy": "next build && gh-pages -d out"
  }
}

# Exportar como static
# Adicionar ao next.config.mjs:
const nextConfig = {
  output: 'export',
}

# Deploy
pnpm deploy
```

## 🔒 Variáveis de Ambiente

Se usar APIs (email, maps, etc):

### `.env.local` (local development)
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-key-here
RESEND_API_KEY=your-key-here
```

### Vercel Dashboard
1. Project Settings → Environment Variables
2. Adicionar cada variable
3. Selecionar ambientes (Production, Preview, Development)

## 🗂️ Estrutura para Deploy

```
Root
├── app/                      # App Router
├── components/               # Componentes reutilizáveis
├── public/                   # Ficheiros estáticos
│   ├── quintela-cycling-hero.jpg
│   └── casa-quintela-hero.jpg
├── .env.local               # (não commit)
├── .gitignore              # Excluir node_modules, .env
├── next.config.mjs         # Configuração Next.js
├── package.json
├── tailwind.config.ts      # Tailwind CSS
├── tsconfig.json           # TypeScript
└── README.md
```

## 🔍 Verificações Pós-Deploy

### Performance
```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse https://seu-site.vercel.app --view
```

### SEO
- [ ] Meta tags presente
- [ ] og:image funciona
- [ ] robots.txt (se necessário)
- [ ] sitemap.xml (se necessário)

### Funcionalidade
- [ ] Splash page carrega
- [ ] Botões redirecionam
- [ ] Scroll snap funciona
- [ ] Animações suaves
- [ ] Links de contacto (tel:, mailto:, WhatsApp)
- [ ] Responsivo em mobile
- [ ] Sem console errors

## 📱 Testing Pós-Deploy

### Mobile
```bash
# Chrome DevTools
- F12 → Toggle device toolbar
- Testar em diferentes devices
- Verificar orientações
```

### Cross-browser
- [ ] Chrome/Edge (Windows)
- [ ] Safari (Mac/iOS)
- [ ] Firefox (Windows/Mac)
- [ ] Mobile browsers

### Scroll Snap
- [ ] Scroll com scroll snap ativo
- [ ] Sections alinham ao topo
- [ ] Sem lag ou jumps
- [ ] Botões navegação funcionam

## 🔄 CI/CD Pipeline (Vercel Automático)

Vercel deploy automático em:
- [ ] Push para main branch
- [ ] Pull request (preview)
- [ ] Deployments automáticos

## 📊 Monitoramento Pós-Deploy

### Vercel Analytics
- Tempo de carregamento
- Geo location dos usuários
- Devices mais usados

### Google Analytics (Opcional)
```tsx
// Adicionar ao layout.tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🚨 Troubleshooting Deployment

| Erro | Solução |
|------|---------|
| Build falha | `pnpm install` e rebuild local |
| 404 errors | Verificar rotas em app/ folder |
| Imagens não carregam | Confirmar em /public/ e paths corretos |
| Animações lentas | Reduzir durations em Framer Motion |
| Scroll snap não funciona | Verificar browser compatibility |
| Estilo incorreto | Clear cache browser (Ctrl+Shift+Delete) |

## 🔐 Segurança

### Best Practices
- [ ] Não commitar `.env` files
- [ ] Usar HTTPS (Vercel automático)
- [ ] Validar form inputs (se houver)
- [ ] Sanitizar dados
- [ ] Proteção contra XSS

### .gitignore
```
node_modules/
.env
.env.local
.next/
out/
build/
dist/
.vercel/
```

## 📈 Escalabilidade

### Para quando crescer:
- [ ] Adicionar database (Supabase, Neon)
- [ ] Email service (Resend, SendGrid)
- [ ] Analytics (Google Analytics, Mixpanel)
- [ ] CDN para imagens (Vercel Image Optimization)
- [ ] Rate limiting para APIs

## 💰 Custos

### Vercel
- **Free tier:** Até 100GB/mês bandwidth
- **Pro:** $20/mês, unlimited bandwidth
- **Enterprise:** Customizado

### Alternativas
- **Netlify:** Similar a Vercel
- **GitHub Pages:** Grátis (estático apenas)
- **AWS:** Customizado, pode ser caro
- **Google Cloud:** Customizado

## 🔗 Domínio Personalizado

### Com Vercel
1. Dashboard → Settings → Domains
2. Adicionar domínio
3. Atualizar DNS (instruções automáticas)
4. Esperar propagação (até 48h)

### Com Registrador Externo
1. Registrador → DNS Settings
2. Apontar para Vercel nameservers:
   - `ns1.vercel.com`
   - `ns2.vercel.com`
3. Verificar no Dashboard Vercel

## 🧪 Testing Checklist

```bash
# Lint
pnpm lint

# Build
pnpm build

# Type check
npx tsc --noEmit

# Test responsiveness
# - Mobile (375px, 768px, 1024px)
# - Tablets
# - Desktop (1920px+)
```

## 📞 Suporte Vercel

- Docs: [vercel.com/docs](https://vercel.com/docs)
- Discord: [vercel.com/chat](https://vercel.com/chat)
- Support: [vercel.com/support](https://vercel.com/support)

## ✅ Deploy Checklist Final

- [ ] Local build sucesso (`pnpm build`)
- [ ] Sem console errors/warnings
- [ ] Lighthouse 90+
- [ ] Responsivo em mobile
- [ ] Todos os links funcionam
- [ ] Imagens otimizadas
- [ ] SEO verificado
- [ ] Deploy completo
- [ ] URL funciona
- [ ] Monitoramento ativo

---

**Próximas Steps:**
1. Fazer deploy em dev/preview
2. Validar em staging
3. Deploy em produção
4. Monitorar performance
5. Recolher feedback

**Última atualização:** Março 2024

**Suporte:** Consultar ARCHITECTURE.md ou SETUP.md
