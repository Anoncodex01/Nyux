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
    <section className="relative overflow-hidden flex items-center justify-center min-h-screen w-full">
      {/* Video Background */}
      <video
        src="/video/Royalty.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/images/hero-video-poster.jpg"
      />
      {/* Black Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(150, 70, 4, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(150, 70, 4, 0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Centered Content */}
      <div className="relative z-30 flex flex-col items-center justify-center w-full px-4 text-center">
        <motion.div
          className="max-w-3xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block mb-4 px-4 py-1 bg-[#f7e7d6]/80 rounded-full text-[#953735] font-semibold shadow">
            Your Smart Advisory Partner
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="whitespace-nowrap">Expert Advisory Services</span><br />
            for a Stronger Future
          </h1>
          <p className="text-lg text-white mb-8 max-w-xl">
            Trusted consulting in Actuarial, Tax, Financial, and Strategic Advisory services.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="bg-[#964604] text-white rounded-xl px-6 py-3 text-lg shadow hover:bg-[#953735]">Request Quote</Button>
            <Button variant="outline" className="rounded-xl px-6 py-3 text-lg border-[#964604] text-[#964604] hover:bg-[#f7e7d6]">Get in Touch</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}