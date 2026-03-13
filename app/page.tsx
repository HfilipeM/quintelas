'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function SplashPage() {
  const router = useRouter()
  const [closing, setClosing] = useState<'cycling' | 'casa' | null>(null)
  const [pushing, setPushing] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024)
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const handleClick = (side: 'cycling' | 'casa', url: string) => {
    if (!isDesktop) {
      router.push(url)
      return
    }

    // Fase 1: preenchimento da imagem (0.8s)
    setClosing(side)

    // Fase 2: pequeno delay após preenchimento → splash empurrada para cima (0.9s)
    // Navegação acontece quando a splash já saiu completamente do ecrã
    setTimeout(() => {
      setPushing(true)
      setTimeout(() => router.push(url), 900)
    }, 1100) // 0.8s fill + 0.3s delay
  }

  // Cor de fundo da página destino — simula a nova página a subir por baixo
  const underlayColor =
    closing === 'cycling' ? '#000000' : closing === 'casa' ? '#ffffff' : 'transparent'

  // Quando "casa" expande para ecrã completo, o clipPath transita para retângulo
  // sem diagonal, evitando o corte visível na borda esquerda
  const casaClipPath =
    closing === 'casa'
      ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
      : 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'

  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* Underlay — fundo da página destino, sobe de baixo durante o push */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: underlayColor }}
        initial={false}
        animate={{ y: pushing ? '0%' : '100%' }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Splash — sobe para fora enquanto o underlay sobe por baixo (parallax) */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col lg:flex-row bg-black overflow-hidden"
        initial={false}
        animate={{ y: pushing ? '-100%' : '0%' }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      >

        {/* Desktop diagonal background split — posicionado absolutamente sobre toda a tela */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block" aria-hidden="true">

          {/* Lado esquerdo — Cycling */}
          <motion.div
            className="absolute inset-y-0 left-0"
            initial={false}
            animate={{
              width: closing === 'casa' ? '0%' : closing === 'cycling' ? '100%' : '55%',
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="h-full w-full bg-[url('/quintela-cycling-hero.jpg')] bg-cover bg-center opacity-40" />
          </motion.div>

          {/* Lado direito — Casa: clipPath anima de diagonal para retângulo ao expandir */}
          <motion.div
            className="absolute inset-y-0 right-0 bg-black"
            initial={false}
            animate={{
              width: closing === 'cycling' ? '0%' : closing === 'casa' ? '100%' : '55%',
              clipPath: casaClipPath,
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="h-full w-full bg-[url('/casa-quintela-hero.jpg')] bg-cover bg-center opacity-55" />
          </motion.div>

        </div>

        {/* CYCLING — painel clicável */}
        <motion.div
          className="relative z-10 w-full h-1/2 lg:w-1/2 lg:h-full cursor-pointer group overflow-hidden"
          initial={false}
          animate={{
            width: isDesktop
              ? closing === 'casa'
                ? '0%'
                : closing === 'cycling'
                ? '100%'
                : '50%'
              : '100%',
            height: '100%'
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          onClick={() => handleClick('cycling', '/quintelacycling')}
        >
          {/* Mobile / tablet — imagem de fundo */}
          <div className="absolute inset-0 lg:hidden">
            <div className="h-full w-full bg-[url('/quintela-cycling-hero.jpg')] bg-cover bg-center opacity-40 md:opacity-60" />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black via-black to-transparent opacity-35 group-hover:opacity-10 transition-opacity duration-500" />

          {/* Conteúdo */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tighter text-[#CDFF00] mb-4">
                QUINTELA
              </h1>
              <p className="text-lg md:text-2xl lg:text-3xl text-white tracking-wide">
                CYCLES
              </p>
              <p className="mt-6 sm:mt-12 text-xs sm:text-sm md:text-base text-gray-400 font-light tracking-widest">
                PERFORMANCE • INNOVATION • PASSION
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 sm:bottom-12 w-full flex justify-center text-xs text-gray-500 group-hover:text-[#CDFF00] transition-colors duration-300">
            DISCOVER →
          </div>
        </motion.div>

        {/* CASA QUINTELA — painel clicável */}
        <motion.div
          className="relative z-10 w-full h-1/2 lg:w-1/2 lg:h-full cursor-pointer group overflow-hidden"
          initial={false}
          animate={{
            width: isDesktop
              ? closing === 'cycling'
                ? '0%'
                : closing === 'casa'
                ? '100%'
                : '50%'
              : '100%',
            height: '100%'
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          onClick={() => handleClick('casa', '/casaquintela')}
        >
          {/* Mobile / tablet — imagem de fundo */}
          <div className="absolute inset-0 lg:hidden">
            <div className="h-full w-full bg-[url('/casa-quintela-hero.jpg')] bg-cover bg-center opacity-50 md:opacity-70" />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black via-black to-transparent opacity-35 group-hover:opacity-10 transition-opacity duration-500" />

          {/* Conteúdo */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tighter text-[#FF6B35] mb-4">
                CASA
              </h1>
              <p className="text-lg md:text-2xl lg:text-3xl text-white tracking-wide">
                QUINTELA
              </p>
              <p className="mt-6 sm:mt-12 text-xs sm:text-sm md:text-base text-gray-400 font-light tracking-widest">
              MÁQUINAS • FLORESTA • JARDIM • SERVIÇO
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 sm:bottom-12 w-full flex justify-center text-xs text-gray-500 group-hover:text-[#FF6B35] transition-colors duration-300">
            DISCOVER →
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}