'use client';

import { motion } from 'framer-motion';
import { benefits } from '@/lib/constants';
import { Users, Fingerprint, Lightbulb, LifeBuoy } from 'lucide-react';

const iconComponents = {
  Users,
  Fingerprint,
  Lightbulb,
  LifeBuoy,
};

export function Benefits() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2 inline-block">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What makes us the preferred choice?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise, innovative methodologies, and personalized attention to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => {
              const IconComponent = iconComponents[benefit.icon as keyof typeof iconComponents];
              
              return (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      {IconComponent && <IconComponent size={22} />}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}