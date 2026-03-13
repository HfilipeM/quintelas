'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import HeroSection from '@/components/quintela-cycling/hero-section'
import BrandsSection from '@/components/quintela-cycling/brands-section'
import HighlightsSection from '@/components/quintela-cycling/highlights-section'
import ServicesSection from '@/components/quintela-cycling/services-section'
import ContactSection from '@/components/quintela-cycling/contact-section'

export default function QuintelaCyclingPage() {
  return (
    <main className="bg-black text-white">
      {/* Scroll Snap Container */}
      <div className="min-h-screen">
        <HeroSection />
        <BrandsSection />
        <HighlightsSection />
        <ServicesSection />
        <ContactSection />
      </div>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="fixed top-8 left-8 z-50 text-white hover:text-[#90C300] transition-colors duration-300 text-sm font-light tracking-widest"
      >
        ← HOME
      </Link>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/351919628874"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#90C300] text-black p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.a>
    </main>
  )
}
