'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import React from 'react';

const logos = [
  '/logo/ATCL_Logo.png',
  '/logo/National_Social_Security_Fund_Tanzania_Logo.png',
  '/logo/Azania-Bank-Logo-Landscape.png',
  '/logo/NHC-tanzania-national-housing-corporation-company.webp',
  '/logo/tanesco-tanzania-electric-supply-company-limited-logo-png_seeklogo-311615.png',
  '/logo/Bank_of_Tanzania_Logo.png',
];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-[#e0e7ff] via-white to-[#f0fdfa]">
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(30, 64, 175, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 64, 175, 0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Bottom Right Gradient (smaller and more subtle) */}
      <div
        className="absolute right-0 bottom-0 w-1/3 h-1/3 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 90% 100%, #c7d2fe 0%, transparent 80%)',
        }}
        aria-hidden="true"
      />
      {/* Centered Text Content */}
      <motion.div
        className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="inline-block mb-4 px-4 py-1 bg-white/60 rounded-full text-blue-900 font-semibold shadow">
          Your Smart Advisory Partner
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          <span className="whitespace-nowrap">Expert Advisory Services</span><br />
          for a Stronger Future
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-xl">
          Trusted consulting in Actuarial, Tax, Financial, and Strategic Advisory services.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button className="bg-blue-900 text-white rounded-xl px-6 py-3 text-lg shadow hover:bg-blue-800">Request Quote</Button>
          <Button variant="outline" className="rounded-xl px-6 py-3 text-lg border-blue-900 text-blue-900 hover:bg-blue-50">Get in Touch</Button>
        </div>
      </motion.div>
      {/* Video Row */}
      <motion.div
        className="w-full flex justify-center bg-transparent pt-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <div className="bg-white/80 rounded-3xl shadow-xl p-2 md:p-6 w-full max-w-xl">
          <video
            src="/video/Royalty.mp4"
            autoPlay
            muted
            loop
            controls
            playsInline
            className="w-full h-auto rounded-2xl object-cover shadow-lg border border-gray-200"
            poster="/images/hero-video-poster.jpg"
          />
        </div>
      </motion.div>
      {/* Logos row at the bottom */}
      <motion.div
        className="w-full max-w-5xl mx-auto mt-16 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        <div className="mb-4 text-center text-gray-500 font-medium text-sm uppercase tracking-wider">Trusted by leading organizations</div>
        <div className="flex flex-row overflow-x-auto gap-6 md:gap-10 whitespace-nowrap w-full px-2 md:justify-center md:flex-wrap md:overflow-visible">
          {logos.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Client logo ${i + 1}`}
              className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-md shadow-sm p-2 flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}