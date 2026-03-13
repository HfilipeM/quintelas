# 🎯 START HERE - Quintela Group Website

## ⚡ 3 Passos para Começar (5 Minutos)

### 1️⃣ Instalar
```bash
pnpm install
```

### 2️⃣ Rodar Localmente
```bash
pnpm dev
```
Abra: http://localhost:3000

### 3️⃣ Explorar
- Clique em **QUINTELA CYCLING** (esquerda)
- Clique em **CASA QUINTELA** (direita)
- Teste scroll snap em cada portal
- Tente os botões de contacto

---

## 🎨 O Que Você Verá

```
┌─────────────────────────────────────────────────────┐
│                  SPLASH PAGE (/)                    │
├──────────────────────┬──────────────────────────────┤
│                      │                              │
│  QUINTELA CYCLING    │   CASA QUINTELA              │
│  (Clique)            │   (Clique)                   │
│  🟢 Verde-Lima       │   🟠 Orange                  │
│                      │                              │
│  /quintelacycling    │   /casaquintela              │
└──────────────────────┴──────────────────────────────┘

        ↓ Clique em qualquer lado ↓

┌──────────────────────────────────────────────────────┐
│         QUINTELA CYCLING PORTAL (5 SEÇÕES)          │
├──────────────────────────────────────────────────────┤
│                                                      │
│  SEÇÃO 1: Hero (Slideshow - Performance, etc)       │
│  SEÇÃO 2: Brands (Grid de logos)                    │
│  SEÇÃO 3: Highlights (Imagem + Texto)               │
│  SEÇÃO 4: Services (Workshop + Suporte)             │
│  SEÇÃO 5: Contact (Endereço + Telefone + Mapa)      │
│                                                      │
│  Scroll: Cada seção alinha automaticamente (snap)   │
│  Voltar: Clique em "← HOME" no topo-esquerdo       │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 📋 Customizações Necessárias

### ⚠️ OBRIGATÓRIO (10 minutos)

Abra estes ficheiros e procure `XXXXXXXXX`:

1. **`app/quintelacycling/page.tsx`** (linha ~38)
   ```tsx
   href="https://wa.me/351XXXXXXXXX"
   // Substitua XXXXXXXXX por seu número (ex: 351912345678)
   ```

2. **`app/casaquintela/page.tsx`** (linha ~36)
   ```tsx
   href="https://wa.me/351XXXXXXXXX"
   // Substitua XXXXXXXXX
   ```

3. **`components/quintela-cycling/contact-section.tsx`** (linhas 82, 95)
   ```tsx
   href="tel:+351XXXXXXXXX"
   // Substitua com número real
   ```

4. **`components/casa-quintela/contact-section.tsx`** (linhas 82, 95)
   ```tsx
   href="tel:+351XXXXXXXXX"
   // Substitua com número real
   ```

✅ **Emails já estão corretos!**

### ⭐ RECOMENDADO (Opcional)

Substituir imagens em `/public/`:
- `quintela-cycling-hero.jpg` → Sua foto de bike
- `casa-quintela-hero.jpg` → Sua foto de ferramentas

---

## 🗂️ Onde Estão as Coisas

```
Splash Page         → app/page.tsx
Quintela Portal     → app/quintelacycling/page.tsx
Casa Portal         → app/casaquintela/page.tsx

Componentes        → components/
  ├── quintela-cycling/
  └── casa-quintela/

Estilos Globais    → app/globals.css
Config             → tailwind.config.ts, next.config.mjs

Documentação       → *.md files (ver DOCS_INDEX.md)
```

---

## 🎬 Animações Que Verá

✨ **Fade-in** - Textos aparecem suavemente
🎯 **Slide-up** - Elementos sobem ao aparecer
🔄 **Stagger** - Efeito em cascata
🖱️ **Hover** - Cores mudam ao passar o mouse

---

## 📊 Cores do Projeto

### Quintela Cycling 🟢
- Principal: `#CDFF00` (Verde-lima vibrante)
- Fundo: Preto puro
- Texto: Branco + Gray

### Casa Quintela 🟠
- Principal: `#FF6B35` (Orange quente)
- Fundo: Branco puro
- Texto: Preto + Gray

---

## 📱 Testar em Mobile

1. Abra http://localhost:3000 no seu telemóvel
2. Ou use DevTools (F12 → Toggle device toolbar)
3. Teste em diferentes orientações
4. Teste scroll snap (funciona melhor em mobile)

---

## 🔗 Links de Contacto

Atualize estes links:

```
Telefone (tel:)     → +351 XXXXXXXXX
WhatsApp (wa.me)    → 351XXXXXXXXX (sem +)
Email (mailto)      → info@quintela*.com
```

---

## 🚀 Deploy em 2 Cliques (Vercel)

### Opção 1: Vercel CLI
```bash
vercel --prod
```

### Opção 2: Vercel Dashboard
1. Vá a [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Selecione seu repositório GitHub
4. Deploy automático!

---

## 📚 Documentação

Consulte quando precisar:

| Ficheiro | Para Quem | Tempo |
|----------|-----------|-------|
| README.md | Visão geral | 5 min |
| QUICK_REFERENCE.md | Dicas rápidas | 5 min |
| SETUP.md | Setup completo | 15 min |
| ARCHITECTURE.md | Entender código | 20 min |
| VISUAL_GUIDE.md | Design visual | 20 min |
| DEPLOYMENT.md | Deploy produção | 20 min |

👉 Ver DOCS_INDEX.md para índice completo

---

## ✅ Checklist Rápido

- [ ] `pnpm install`
- [ ] `pnpm dev`
- [ ] Abrir http://localhost:3000
- [ ] Clique em QUINTELA CYCLING
- [ ] Clique em CASA QUINTELA
- [ ] Teste scroll snap (role a página)
- [ ] Teste botões de contacto
- [ ] Teste em mobile

---

## 🐛 Se Algo Não Funcionar

### Erro: "Cannot find module"
```bash
rm -rf node_modules
pnpm install
```

### Scroll snap não funciona
- Verificar navegador (Chrome 89+, Firefox 87+, Safari 15+)
- Testar em navegador diferente

### Imagens não carregam
- Verificar se estão em `/public/`
- Fazer refresh (Ctrl+F5)

### Estilo incorreto
- Limpar cache (Ctrl+Shift+Delete)
- Fazer rebuild: `pnpm dev` novamente

---

## 💡 Dicas Úteis

### Atalhos úteis:
- `Ctrl+Shift+M` (DevTools) → View mobile
- `F12` → Abrir DevTools
- `Ctrl+/` → Comentar código

### Espaços negros:
- Seções com fundo preto/branco
- Espaço entre seções
- Espaço entre elementos

### Scroll snap:
- Cada seção = 100% altura
- Alinha automaticamente
- Muito suave

---

## 🎓 Aprender Enquanto Usa

Este projeto usa:
- **Next.js** - Framework React moderno
- **Tailwind CSS** - Estilos rápidos
- **Framer Motion** - Animações suaves
- **TypeScript** - Código robusto

Quer aprender mais?
- Next.js: https://nextjs.org/learn
- Tailwind: https://tailwindcss.com/docs
- Framer: https://www.framer.com/motion/

---

## 🎯 Próximas Steps

### Hoje (30 min)
1. ✅ Instalar + rodar
2. ✅ Customizar contactos
3. ✅ Testar funcionamento

### Esta Semana (1-2 horas)
1. Adicionar imagens reais
2. Testar em mobile
3. Fazer deploy em Vercel

### Próximas Semanas (Conforme necessário)
1. Adicionar Google Maps
2. Integrar email
3. Analytics
4. Mais conteúdo

---

## 📞 Dados Importantes

```
QUINTELA CYCLING
📍 Rua da Vila Corneliana, 1125
   Correlhã, Ponte de Lima, 4990-307
📧 info@quintelacycling.com
📱 +351 __________ (adicione seu número)

CASA QUINTELA
📍 Rua da Vila Corneliana, 1125
   Correlhã, Ponte de Lima, 4990-307
📧 info@casaquintela.com
📱 +351 __________ (adicione seu número)
```

---

## 🎉 Parabéns!

Seu site está 95% pronto! 🚀

Falta apenas:
1. Customizar os números de telefone (10 min)
2. (Opcional) Adicionar imagens reais (20 min)
3. Deploy em Vercel (5 min)

**Total: 15-35 minutos até site live!**

---

## 🆘 Precisa de Ajuda?

1. **Setup/Tech**: Ver SETUP.md
2. **Design**: Ver VISUAL_GUIDE.md
3. **Deploy**: Ver DEPLOYMENT.md
4. **Tudo**: Ver DOCS_INDEX.md

---

## 🎊 Você é Incrível!

Você agora tem:
✅ Website profissional
✅ Design premium
✅ Totalmente responsivo
✅ Animações modernas
✅ Documentação completa
✅ Pronto para deploy

**Hora de brilhar!** ✨

---

## 🔄 Próxima Ação

```bash
# Rode isto AGORA:
pnpm dev

# Depois abra:
http://localhost:3000
```

🎯 **Desfrutar!**

---

**Versão:** 1.0 🚀
**Status:** ✅ PRONTO
**Tempo setup:** ~5 minutos
**Tempo customização:** ~10 minutos
**Tempo deploy:** ~5 minutos

**Total: ~20 minutos para site live!**

Boa sorte! 🎉
