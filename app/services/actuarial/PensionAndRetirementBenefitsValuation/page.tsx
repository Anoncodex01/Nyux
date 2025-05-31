import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function PensionAndRetirementBenefitsValuation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Breadcrumbs */}
      <section className="relative w-full h-[320px] md:h-[380px] flex flex-col items-center justify-center text-center overflow-hidden mb-12">
        <img src="/images/hero.webp" alt="Pension and Retirement Benefits Valuation background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-[#1a2236]/90 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 mt-10 md:mt-16">Pension and Retirement Benefits Valuation</h1>
          <div className="flex justify-center">
            <nav className="text-white/90 text-base font-medium bg-[#964604]/80 rounded-xl px-6 py-2 shadow-sm backdrop-blur-md flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-white/90">
                <Home className="w-4 h-4 mr-1" /> Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <Link href="#" className="text-white/90">Actuarial Services</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white font-semibold">Pension and Retirement Benefits Valuation</span>
            </nav>
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#964604] mb-6">Valuing Your Future Commitments</h2>
        <p className="text-lg text-gray-700 mb-6">
          NYUX provides actuarial valuations for pension and retirement benefit schemes, ensuring compliance with regulatory standards and supporting sound financial planning for your organization.
        </p>
        <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-8">
          <li>IAS 19 and IPSAS 39 valuations</li>
          <li>Funding and solvency assessments</li>
          <li>Benefit design and cost analysis</li>
          <li>Regulatory and audit support</li>
          <li>Employee communication and reporting</li>
        </ul>
        <div className="bg-[#f7e7d6] rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-[#964604] mb-2">Why NYUX for Pension Valuation?</h3>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>Experienced actuarial professionals</li>
            <li>Compliance with international standards</li>
            <li>Clear, actionable reporting</li>
            <li>Support for trustees and sponsors</li>
          </ul>
        </div>
        <div className="mt-8">
          <Link href="/contact" className="inline-block bg-[#964604] text-white font-semibold rounded-full px-8 py-3 shadow hover:bg-[#953735] transition text-lg">Speak to an Expert</Link>
        </div>
      </section>
    </div>
  );
} 