'use client'

import { motion } from 'framer-motion'
import { Hammer, Lightbulb } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Hammer,
      title: 'Workshop',
      description: 'Complete workshop services with professional tools and expert staff for all your needs.',
      features: ['Professional Equipment', 'Expert Technicians', 'Custom Solutions'],
    },
    {
      icon: Lightbulb,
      title: 'Technical Assistance',
      description: 'Comprehensive technical support and consultation for optimal results.',
      features: ['Expert Advice', 'Installation Support', 'Problem Solving'],
    },
  ]

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
    <section className="snap-start h-screen w-full flex items-center justify-center bg-white border-t border-gray-200">
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-8 sm:mb-16 text-black text-center"
        >
          Our Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
          variants={containerVariants}
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-4 sm:p-8 border border-gray-200 hover:border-[#FF6B35] transition-colors duration-300 group"
              >
                <motion.div
                  className="mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-10 sm:w-12 h-10 sm:h-12 text-[#FF6B35] group-hover:text-black transition-colors duration-300" />
                </motion.div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-black mb-2 sm:mb-3 group-hover:text-[#FF6B35] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm font-light mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="text-xs text-gray-500 flex items-center gap-2 tracking-wide">
                      <span className="w-1 h-1 bg-[#FF6B35] flex-shrink-0" />
                      <span className="break-words">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
