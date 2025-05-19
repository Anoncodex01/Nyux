'use client';

import { motion } from 'framer-motion';
import { partnerLogos } from '@/lib/constants';

export function Partners() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">
            Trusted By
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our Partners & Clients
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {/* Since we don't have actual logos, I'll use text placeholders with styling */}
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="text-gray-500 hover:text-gray-800 font-semibold text-xl transition-colors duration-300">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}