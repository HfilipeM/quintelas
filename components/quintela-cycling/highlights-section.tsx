'use client'

import { motion } from 'framer-motion'

export default function HighlightsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="snap-start h-screen w-full flex items-center justify-center bg-gradient-to-b from-black to-gray-950 border-t border-gray-800">
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image Area */}
        <motion.div
          variants={itemVariants}
          className="h-64 sm:h-96 md:h-full bg-gradient-to-br from-[#CDFF00]/20 to-transparent border border-gray-800 flex items-center justify-center"
        >
          <div className="text-center px-4">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🚴</div>
            <p className="text-gray-500 text-xs sm:text-sm tracking-widest">FEATURED CONTENT</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={containerVariants} className="px-2 sm:px-0">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-4 sm:mb-6 text-white"
          >
            Latest Innovations
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed mb-6 sm:mb-8"
          >
            Discover our latest collection of high-performance cycling equipment and accessories designed for athletes who refuse to compromise on quality or performance.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-1 h-16 bg-[#CDFF00]" />
              <div>
                <h3 className="text-white font-light text-lg mb-1">Carbon Fiber Excellence</h3>
                <p className="text-gray-400 text-sm">Premium materials for maximum performance</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-1 h-16 bg-[#CDFF00]" />
              <div>
                <h3 className="text-white font-light text-lg mb-1">Aerodynamic Design</h3>
                <p className="text-gray-400 text-sm">Engineering precision at every detail</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
