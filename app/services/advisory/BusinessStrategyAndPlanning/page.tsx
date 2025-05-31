import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function BusinessStrategyAndPlanning() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Breadcrumbs */}
      <section className="relative w-full h-[320px] md:h-[380px] flex flex-col items-center justify-center text-center overflow-hidden mb-12">
        <img src="/images/hero.webp" alt="Business Strategy and Planning background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-[#1a2236]/90 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 mt-10 md:mt-16">Business Strategy and Planning</h1>
          <div className="flex justify-center">
            <nav className="text-white/90 text-base font-medium bg-[#964604]/80 rounded-xl px-6 py-2 shadow-sm backdrop-blur-md flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-white/90">
                <Home className="w-4 h-4 mr-1" /> Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <Link href="#" className="text-white/90">Advisory Services</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white font-semibold">Business Strategy and Planning</span>
            </nav>
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#964604] mb-6">Strategic Guidance for Sustainable Growth</h2>
        <p className="text-lg text-gray-700 mb-6">
          NYUX offers comprehensive business strategy and planning services to help organizations define their vision, set achievable goals, and develop actionable plans. Our team leverages industry expertise and data-driven insights to create strategies that drive long-term success.
        </p>
        <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-8">
          <li>Vision and mission development</li>
          <li>Market analysis and competitive positioning</li>
          <li>Operational and financial planning</li>
          <li>Business model innovation</li>
          <li>Performance measurement and KPIs</li>
        </ul>
        <div className="bg-[#f7e7d6] rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-[#964604] mb-2">Why Choose NYUX for Strategy?</h3>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>Proven experience in diverse industries</li>
            <li>Tailored solutions for your unique challenges</li>
            <li>Focus on innovation and sustainable growth</li>
            <li>Collaborative approach with measurable results</li>
          </ul>
        </div>
        <div className="mt-8">
          <Link href="/contact" className="inline-block bg-[#964604] text-white font-semibold rounded-full px-8 py-3 shadow hover:bg-[#953735] transition text-lg">Speak to an Expert</Link>
        </div>
      </section>
    </div>
  );
} 