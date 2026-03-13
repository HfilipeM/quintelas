'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    title: 'PERFORMANCE',
    subtitle: 'Pushing the Limits',
  },
  {
    id: 2,
    title: 'INNOVATION',
    subtitle: 'Cutting-Edge Technology',
  },
  {
    id: 3,
    title: 'PASSION',
    subtitle: 'Born to Ride',
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 9000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <section className="snap-start h-screen w-full relative flex items-center justify-center bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#CDFF00]/5 via-transparent to-black" />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(205, 255, 0, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(205, 255, 0, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(205, 255, 0, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Slide Content */}
      <motion.div
        key={currentSlide}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 1.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tighter mb-3 sm:mb-6 text-white"
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-2xl lg:text-3xl font-light text-[#CDFF00] tracking-wide"
        >
          {slides[currentSlide].subtitle}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-16 flex justify-center gap-2"
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-[#CDFF00] w-8' : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-xs tracking-widest mb-2">SCROLL</div>
        <div className="text-xl">↓</div>
      </motion.div>
    </section>
  )
}
