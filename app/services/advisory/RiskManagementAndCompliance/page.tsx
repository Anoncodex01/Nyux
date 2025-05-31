import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function RiskManagementAndCompliance() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Breadcrumbs */}
      <section className="relative w-full h-[320px] md:h-[380px] flex flex-col items-center justify-center text-center overflow-hidden mb-12">
        <img src="/images/hero.webp" alt="Risk Management and Compliance background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-[#1a2236]/90 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Risk Management and Compliance</h1>
          <div className="flex justify-center">
            <nav className="text-white/90 text-base font-medium bg-[#964604]/80 rounded-xl px-6 py-2 shadow-sm backdrop-blur-md flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-white/90">
                <Home className="w-4 h-4 mr-1" /> Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <Link href="#" className="text-white/90">Advisory Services</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white font-semibold">Risk Management and Compliance</span>
            </nav>
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#964604] mb-6">Mitigating Risks, Ensuring Compliance</h2>
        <p className="text-lg text-gray-700 mb-6">
          NYUX provides expert risk management and compliance services to help organizations identify, assess, and mitigate risks while ensuring full regulatory compliance. Our approach is proactive, data-driven, and tailored to your business environment.
        </p>
        <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-8">
          <li>Enterprise risk assessment and management</li>
          <li>Regulatory compliance and reporting</li>
          <li>Internal controls and audit support</li>
          <li>Fraud prevention and forensic analysis</li>
          <li>Business continuity planning</li>
        </ul>
        <div className="bg-[#f7e7d6] rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-[#964604] mb-2">Why NYUX for Risk & Compliance?</h3>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>Deep regulatory knowledge and experience</li>
            <li>Proactive risk mitigation strategies</li>
            <li>Commitment to integrity and transparency</li>
            <li>Support for sustainable business operations</li>
          </ul>
        </div>
        <div className="mt-8">
          <Link href="/contact" className="inline-block bg-[#964604] text-white font-semibold rounded-full px-8 py-3 shadow hover:bg-[#953735] transition text-lg">Speak to an Expert</Link>
        </div>
      </section>
    </div>
  );
} 