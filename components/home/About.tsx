'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { team } from '@/lib/constants';

export function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2"
          >
            About us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Helping you navigate the world of business
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl text-center"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              NYUX Consultancy brings together industry veterans with decades of experience to help businesses thrive in today's complex environment. We're passionate about driving success through data-driven insights, strategic planning, and innovative solutions tailored to your unique needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Team section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-blue-200 mb-3">{member.role}</p>
                    <p className="text-sm text-white/80 line-clamp-3">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise & Approach</h3>
            <p className="text-gray-700 mb-6">
              At NYUX, we're passionate about guiding businesses through today's complex challenges. With a team of experienced consultants and a deep-seated commitment to helping you achieve your goals, we're here to simplify the complex.
            </p>
            <p className="text-gray-700 mb-8">
              Whether it's securing your strategic position, planning for growth, or navigating challenging market conditions, we're your trusted partner in making smart business decisions. Our data-driven approach ensures measurable results and sustainable growth.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-3xl font-bold text-blue-600">96%</p>
                <p className="text-sm text-gray-700">Client satisfaction</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-3xl font-bold text-blue-600">15+</p>
                <p className="text-sm text-gray-700">Industries served</p>
              </div>
            </div>
            
            <Button size="lg">Get to know us better</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}