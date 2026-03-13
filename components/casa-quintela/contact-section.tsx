'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="snap-start h-screen w-full flex items-center justify-center bg-gradient-to-t from-white to-gray-50 border-t border-gray-200 overflow-y-auto">
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 w-full py-8 sm:py-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-3 sm:mb-4 text-black text-center"
        >
          Contact Us
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-16 font-light"
        >
          We're here to help
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16"
          variants={containerVariants}
        >
          {/* Address */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              className="mb-3 sm:mb-4"
              whileHover={{ scale: 1.2 }}
            >
              <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-[#FF6B35]" />
            </motion.div>
            <h3 className="text-black font-light text-base sm:text-lg mb-2 sm:mb-3">Location</h3>
            <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
              Rua da Vila Corneliana, 1125<br />
              Correlhã, Ponte de Lima<br />
              Portugal, 4990-307
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              className="mb-3 sm:mb-4"
              whileHover={{ scale: 1.2 }}
            >
              <Phone className="w-6 sm:w-8 h-6 sm:h-8 text-[#FF6B35]" />
            </motion.div>
            <h3 className="text-black font-light text-base sm:text-lg mb-2 sm:mb-3">Phone</h3>
            <a
              href="tel:+351258941075"
              className="text-gray-600 text-xs sm:text-sm font-light hover:text-[#FF6B35] transition-colors duration-300 break-all"
            >
              +351 258 941 075
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              className="mb-3 sm:mb-4"
              whileHover={{ scale: 1.2 }}
            >
              <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-[#FF6B35]" />
            </motion.div>
            <h3 className="text-black font-light text-base sm:text-lg mb-2 sm:mb-3">Email</h3>
            <a
              href="mailto:geral@casaquintelalda.com"
              className="text-gray-600 text-xs sm:text-sm font-light hover:text-[#FF6B35] transition-colors duration-300 break-all"
            >

              geral@casaquintelalda.com
            </a>
          </motion.div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          variants={itemVariants}
          className="w-full h-40 sm:h-64 border border-gray-200 mb-6 sm:mb-8 overflow-hidden rounded-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d921.4864125663536!2d-8.603037037511813!3d41.749367023588796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25b6f8ffffffff%3A0xb0f50f814e824501!2sCasa%20Quintela%20Husqvarna%20Ponte%20de%20Lima!5e1!3m2!1spt-PT!2spt!4v1773412128159!5m2!1spt-PT!2spt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="text-center border-t border-gray-200 pt-4 sm:pt-8"
        >
          <p className="text-gray-500 text-xs tracking-widest font-light px-2">
            CASA QUINTELA © 2024 — All Rights Reserved
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
