# 🎨 Guia Visual - Quintela Group Website

## 📐 Dimensões e Layout

### Splash Page (/)
```
┌─────────────────────────────────────────┐
│              100vh (100% altura)        │
├──────────────────┬──────────────────────┤
│                  │                      │
│  QUINTELA        │     CASA QUINTELA    │
│  CYCLING         │                      │
│  (Esquerda 50%)  │  (Direita 50%)       │
│                  │                      │
│  Lime Green      │  Orange              │
│  #CDFF00         │  #FF6B35             │
│  Preto           │  Branco              │
│                  │                      │
│  Clicável        │  Clicável            │
│  ↓               │  ↓                   │
│/quintelacycling  │/casaquintela         │
└──────────────────┴──────────────────────┘
```

### Portais (/quintelacycling, /casaquintela)

```
Página Completa (Full Height)
┌─────────────────────────────────┐
│                                 │
│    SECTION 1 (Hero)             │
│    100vh - Slideshow            │ ← Scroll aqui
│    Animação fade-in             │
│    3 slides rotam (5s cada)     │
│                                 │
├─────────────────────────────────┤
│                                 │
│    SECTION 2 (Brands)           │
│    100vh - Grid 3 colunas       │
│    6 logos em grid limpo        │
│                                 │
├─────────────────────────────────┤
│                                 │
│    SECTION 3 (Highlights)       │
│    100vh - Split layout         │
│    Imagem | Conteúdo            │
│                                 │
├─────────────────────────────────┤
│                                 │
│    SECTION 4 (Services)         │
│    100vh - 2 cards              │
│    Workshop + Suporte           │
│                                 │
├─────────────────────────────────┤
│                                 │
│    SECTION 5 (Contact)          │
│    100vh - Info + Mapa          │
│    3 métodos contacto           │
│    Footer copyright             │
│                                 │
└─────────────────────────────────┘

Scroll Snap: Cada seção alinha ao topo
```

## 🎯 Tipografia

### Tamanhos Hierárquicos

```
H1 (Hero)          → 80-96px (font-light)
                      "QUINTELA CYCLING"
                      "CASA QUINTELA"

H2 (Seção)         → 56-64px (font-light)
                      "Partner Brands"
                      "Our Services"

H3 (Card)          → 20-24px (font-light)
                      "Workshop"
                      "Technical Support"

Body (Parágrafo)   → 16-18px (font-light)
                      Leading: 1.5-1.6

Label (Small)      → 12-14px
                      Tracking: 0.1em
                      Text: uppercase

Button             → 14-16px
                      Tracking: 0.05em
```

### Weight Distribution

```
Headings    → font-light (300)
Body        → font-light (300)
All text    → Muito espaço negativo
Contrast   → Via cor, não weight
```

## 🎨 Paleta de Cores

### Quintela Cycling

```
┌─────────────────────────────────────┐
│   QUINTELA CYCLING - Lime Green     │
├─────────────────────────────────────┤
│                                     │
│  Primária:  #CDFF00 (Lime)         │
│  ■ Usado em: texto destaque,       │
│    accents, hover effects          │
│    Ex: "QUINTELA", underlines      │
│                                     │
│  Secundária: #000000 (Preto)       │
│  ■ Fundo principal, texto          │
│    Uso: bg-black, text             │
│                                     │
│  Neutra:    Grays                  │
│  ■ #1a1a1a (muito escuro)          │
│  ■ #404040 (escuro)                │
│  ■ #606060 (médio)                 │
│  ■ #a0a0a0 (claro)                 │
│  ■ #d0d0d0 (muito claro)           │
│                                     │
│  White:     #ffffff                │
│  ■ Texto secundário                │
│                                     │
│  Transparência:                    │
│  ■ Overlays: rgba(205,255,0,0.1)  │
│  ■ Borders: rgba(205,255,0,0.3)   │
│                                     │
└─────────────────────────────────────┘

Color Palette Visual:
🟢 #CDFF00 ▲
⬛ #000000 ▲
🔘 #1a1a1a ▲
🔘 #404040 ▲
🔘 #606060 ▲
🔘 #a0a0a0 ▲
🔘 #d0d0d0 ▲
⬜ #ffffff ▲
```

### Casa Quintela

```
┌─────────────────────────────────────┐
│   CASA QUINTELA - Orange            │
├─────────────────────────────────────┤
│                                     │
│  Primária:  #FF6B35 (Orange)       │
│  ■ Usado em: texto destaque,       │
│    accents, hover effects          │
│    Ex: "CASA", underlines          │
│                                     │
│  Secundária: #ffffff (Branco)      │
│  ■ Fundo principal                 │
│    Uso: bg-white, clean design     │
│                                     │
│  Neutra:    Grays                  │
│  ■ #f5f5f5 (muito claro)           │
│  ■ #e0e0e0 (claro)                 │
│  ■ #b0b0b0 (médio)                 │
│  ■ #707070 (escuro)                │
│  ■ #2a2a2a (muito escuro)          │
│                                     │
│  Black:     #000000                │
│  ■ Texto principal                 │
│                                     │
│  Transparência:                    │
│  ■ Overlays: rgba(255,107,53,0.08)│
│  ■ Borders: rgba(255,107,53,0.2)  │
│                                     │
└─────────────────────────────────────┘

Color Palette Visual:
🟠 #FF6B35 ▲
⬜ #ffffff ▲
🔘 #f5f5f5 ▲
🔘 #e0e0e0 ▲
🔘 #b0b0b0 ▲
🔘 #707070 ▲
⬛ #2a2a2a ▲
```

## 📱 Responsive Grid

### Mobile (0-640px)
```
┌─────────────┐
│             │ 16px padding
│ 1 column    │
│             │
│ Full width  │
│ Stacked     │
│             │
└─────────────┘
```

### Tablet (641-1024px)
```
┌──────────────────────────┐
│                          │ 24px padding
│  2 columns               │
│  ┌──────┬──────┐        │
│  │ 1/2  │ 1/2  │        │
│  └──────┴──────┘        │
│                          │
└──────────────────────────┘
```

### Desktop (1025px+)
```
┌─────────────────────────────────────┐
│                                     │ 32px padding
│  3 columns                          │
│  ┌─────┬─────┬─────┐              │
│  │ 1/3 │ 1/3 │ 1/3 │              │
│  └─────┴─────┴─────┘              │
│                                     │
└─────────────────────────────────────┘
```

## 🎬 Animação Visual

### Fade-in
```
Timeline: 0.8s
┌─────────────────────┐
│ Opacity: 0→1        │
│ Start at: 0ms       │
│ End at: 800ms       │
│ Ease: easeOut       │
│                     │
│ Result: Suave       │
│         dissolve    │
└─────────────────────┘
```

### Slide-up
```
Timeline: 0.8s
┌─────────────────────┐
│ Y Position: 20px→0  │
│ Opacity: 0→1        │
│ Start at: 0ms       │
│ End at: 800ms       │
│ Ease: easeOut       │
│                     │
│ Result: Slide com   │
│         fade        │
└─────────────────────┘
```

### Stagger (Em cascata)
```
Element 1: Delay 0ms   ─────────┐
Element 2: Delay 100ms    ─────────┐
Element 3: Delay 200ms       ─────────┐
Element 4: Delay 300ms          ─────────┐

Resultado: Efeito cascata suave
```

### Hover Effects
```
Card:
┌──────────────────┐
│ Default:         │
│ Border: gray800  │
│ Color: gray400   │
│                  │
│ Hover:           │
│ Border: lime     │
│ Color: lime      │
│ Transition: 0.3s │
│                  │
└──────────────────┘
```

## 🖼️ Espaçamento (Whitespace)

### Padding/Margin Scale
```
px → 4px
2  → 8px
3  → 12px
4  → 16px (base)
6  → 24px
8  → 32px
12 → 48px
16 → 64px
```

### Uso Recomendado
```
Splash Page:
├─ Section padding: 8 (32px)
├─ Text gap: 6 (24px)
└─ Button margin: 4 (16px)

Portais:
├─ Section padding: 12 (48px)
├─ Content gap: 8 (32px)
├─ Card padding: 8 (32px)
└─ Element gap: 4 (16px)
```

## 🔲 Border & Radius

```
Borders:
├─ Color: bg-gray-800 (Cycling)
├─ Color: bg-gray-200 (Casa)
├─ Width: 1px (thin, clean)
└─ No rounded corners (sharp)

Radius:
└─ Nenhum! (Design flat/modern)
   Exceção: Botão WhatsApp (rounded-full)
```

## 🔗 Componentes Reutilizáveis

### Button (Hero CTA)
```
┌──────────────────────┐
│  DISCOVER →          │
├──────────────────────┤
│ Tamanho:  text-sm    │
│ Color:    hover-[#]  │
│ Cursor:   pointer    │
│ Transition: 0.3s     │
│ No border            │
│ Uppercase            │
└──────────────────────┘
```

### Card (Service)
```
┌────────────────────────┐
│ Icon: 12x12 + color    │
│ Title: text-2xl        │
│ Description: text-sm   │
│ Features list          │
├────────────────────────┤
│ Border: 1px gray       │
│ Padding: 8 (32px)      │
│ Hover: Color change    │
│ No shadow              │
└────────────────────────┘
```

### Link (Footer)
```
Padrão:
└─ Color: gray-400
   Transition: 0.3s

Hover:
└─ Color: lime/#FF6B35
   Underline: none
```

## 📊 Component Hierarchy

```
App
├── Splash Page
│   ├── Left Half (Quintela Cycling)
│   │   └── Animated Text + CTA
│   └── Right Half (Casa Quintela)
│       └── Animated Text + CTA
│
├── Quintela Portal
│   ├── Hero Section
│   ├── Brands Section
│   ├── Highlights Section
│   ├── Services Section (2 cards)
│   └── Contact Section (3 cols + map)
│
└── Casa Portal
    ├── Hero Section
    ├── Brands Section
    ├── Highlights Section
    ├── Services Section (2 cards)
    └── Contact Section (3 cols + map)
```

## 🎯 Visual Hierarchy

```
1. Hero Title (Largest, most visible)
   ├─ Text: 80-96px
   ├─ Weight: light
   ├─ Color: Primary (#CDFF00 ou #FF6B35)

2. Section Title (Large, bold)
   ├─ Text: 56-64px
   ├─ Weight: light
   ├─ Color: Primary or white/black

3. Card Title (Medium)
   ├─ Text: 20-24px
   ├─ Weight: light
   ├─ Color: Primary or accent

4. Body Text (Small, readable)
   ├─ Text: 16-18px
   ├─ Weight: light
   ├─ Color: Gray variants
   ├─ Line height: 1.5-1.6

5. Label/Caption (Tiny, helper)
   ├─ Text: 12-14px
   ├─ Weight: light
   ├─ Color: Gray-500
   ├─ Uppercase
   ├─ Tracking: 0.1em
```

---

**Princípios de Design:**
- ✅ Minimalista (muito espaço negativo)
- ✅ Monocromático (cores bem definidas)
- ✅ Limpo (sem clutter)
- ✅ Premium (qualidade em detalhe)
- ✅ Responsivo (mobile-first)

**Última atualização:** Março 2024
