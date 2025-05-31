import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function TaxHealthChecksAndAudits() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Breadcrumbs */}
      <section className="relative w-full h-[320px] md:h-[380px] flex flex-col items-center justify-center text-center overflow-hidden mb-12">
        <img src="/images/hero.webp" alt="Tax Health Checks and Audits background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-[#1a2236]/90 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 mt-10 md:mt-16">Tax Health Checks and Audits</h1>
          <div className="flex justify-center">
            <nav className="text-white/90 text-base font-medium bg-[#964604]/80 rounded-xl px-6 py-2 shadow-sm backdrop-blur-md flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-white/90">
                <Home className="w-4 h-4 mr-1" /> Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <Link href="#" className="text-white/90">Tax Services</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white font-semibold">Tax Health Checks and Audits</span>
            </nav>
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#964604] mb-6">Proactive Tax Risk Management</h2>
        <p className="text-lg text-gray-700 mb-6">
          NYUX conducts tax health checks and audits to identify potential risks, ensure compliance, and uncover opportunities for savings. We help you stay ahead of issues before they arise.
        </p>
        <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-8">
          <li>Comprehensive tax risk reviews</li>
          <li>Audit preparation and support</li>
          <li>Identification of compliance gaps</li>
          <li>Recommendations for process improvement</li>
          <li>Assistance with tax authority audits</li>
        </ul>
        <div className="bg-[#f7e7d6] rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-[#964604] mb-2">Why NYUX for Tax Audits?</h3>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>Thorough, independent reviews</li>
            <li>Actionable recommendations</li>
            <li>Support throughout the audit process</li>
            <li>Reduced risk of penalties and disputes</li>
          </ul>
        </div>
        <div className="mt-8">
          <Link href="/contact" className="inline-block bg-[#964604] text-white font-semibold rounded-full px-8 py-3 shadow hover:bg-[#953735] transition text-lg">Speak to an Expert</Link>
        </div>
      </section>
    </div>
  );
} 