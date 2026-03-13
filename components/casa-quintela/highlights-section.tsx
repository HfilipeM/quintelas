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
    <section className="snap-start h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
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
          className="h-64 sm:h-96 md:h-full bg-gradient-to-br from-[#FF6B35]/10 to-transparent border border-gray-200 flex items-center justify-center"
        >
          <div className="text-center px-4">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🏠</div>
            <p className="text-gray-500 text-xs sm:text-sm tracking-widest">FEATURED COLLECTION</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={containerVariants} className="px-2 sm:px-0">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-4 sm:mb-6 text-black"
          >
            Premium Selection
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-700 font-light leading-relaxed mb-6 sm:mb-8"
          >
            Our curated collection offers the finest selection of tools, hardware, and home essentials. Each product is carefully chosen to meet our high standards of quality and durability.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-1 h-16 bg-[#FF6B35]" />
              <div>
                <h3 className="text-black font-light text-lg mb-1">Premium Quality</h3>
                <p className="text-gray-600 text-sm">Carefully selected products from trusted brands</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-1 h-16 bg-[#FF6B35]" />
              <div>
                <h3 className="text-black font-light text-lg mb-1">Expert Service</h3>
                <p className="text-gray-600 text-sm">Professional advice and personalized support</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
