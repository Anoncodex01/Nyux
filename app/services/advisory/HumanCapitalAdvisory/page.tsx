import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function HumanCapitalAdvisory() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Breadcrumbs */}
      <section className="relative w-full h-[320px] md:h-[380px] flex flex-col items-center justify-center text-center overflow-hidden mb-12">
        <img src="/images/hero.webp" alt="Human Capital Advisory background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-[#1a2236]/90 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Human Capital Advisory</h1>
          <div className="flex justify-center">
            <nav className="text-white/90 text-base font-medium bg-[#964604]/80 rounded-xl px-6 py-2 shadow-sm backdrop-blur-md flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-white/90">
                <Home className="w-4 h-4 mr-1" /> Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <Link href="#" className="text-white/90">Advisory Services</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white font-semibold">Human Capital Advisory</span>
            </nav>
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#964604] mb-6">Unlocking People Potential</h2>
        <p className="text-lg text-gray-700 mb-6">
          NYUX's Human Capital Advisory services help organizations attract, develop, and retain top talent. We provide strategic guidance on workforce planning, leadership development, and organizational effectiveness to drive business success.
        </p>
        <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-8">
          <li>Talent acquisition and retention strategies</li>
          <li>Leadership and team development</li>
          <li>Performance management systems</li>
          <li>Organizational design and change management</li>
          <li>Employee engagement and culture transformation</li>
        </ul>
        <div className="bg-[#f7e7d6] rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-[#964604] mb-2">Why NYUX for Human Capital?</h3>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>Expertise in HR and organizational development</li>
            <li>Customized solutions for your workforce needs</li>
            <li>Focus on people, performance, and results</li>
            <li>Support for a positive and productive culture</li>
          </ul>
        </div>
        <div className="mt-8">
          <Link href="/contact" className="inline-block bg-[#964604] text-white font-semibold rounded-full px-8 py-3 shadow hover:bg-[#953735] transition text-lg">Speak to an Expert</Link>
        </div>
      </section>
    </div>
  );
} 