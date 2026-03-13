'use client'

import { motion } from 'framer-motion'

const brands = ['SHIMANO', 'SRAM', 'CAMPAGNOLO', 'TREK', 'SPECIALIZED', 'CANNONDALE']

export default function BrandsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="snap-start h-screen w-full flex items-center justify-center bg-black border-t border-gray-800">
      <motion.div
        className="text-center max-w-5xl mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-8 sm:mb-16 text-white"
        >
          Partner Brands
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-12"
          variants={containerVariants}
        >
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-center justify-center p-3 sm:p-4 md:p-6 border border-gray-800 hover:border-[#CDFF00] transition-colors duration-300 group cursor-pointer"
            >
              <span className="text-xs sm:text-sm md:text-base font-light text-gray-400 group-hover:text-[#CDFF00] transition-colors duration-300 tracking-wide break-words">
                {brand}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-8 sm:mt-16 text-gray-500 text-xs sm:text-sm tracking-widest font-light"
        >
          TRUSTED BY THE BEST
        </motion.p>
      </motion.div>
    </section>
  )
}
