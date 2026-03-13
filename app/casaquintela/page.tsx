'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import HeroSection from '@/components/casa-quintela/hero-section'
import BrandsSection from '@/components/casa-quintela/brands-section'
import HighlightsSection from '@/components/casa-quintela/highlights-section'
import ServicesSection from '@/components/casa-quintela/services-section'
import ContactSection from '@/components/casa-quintela/contact-section'


export default function CasaQuintelaPage() {
  return (
    <main className="bg-white text-black">
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
        className="fixed top-8 left-8 z-50 text-black hover:text-[#FF6B35] transition-colors duration-300 text-sm font-light tracking-widest"
      >
        ← HOME
      </Link>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/351258941075"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#FF6B35] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.a>
    </main>
  )
}
