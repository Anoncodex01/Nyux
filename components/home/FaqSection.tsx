'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What services does NYUX Consultancy offer?',
    a: 'We provide professional services in Actuarial, Tax, Financial, and Strategic Advisory, tailored to empower your business growth and manage risk effectively.'
  },
  {
    q: 'How does NYUX deliver customized solutions?',
    a: 'Our team works closely with clients to understand their unique needs, leveraging data-driven insights and industry expertise to deliver tailored, actionable solutions.'
  },
  {
    q: "Who can benefit from NYUX Consultancy's services?",
    a: "We serve businesses and institutions of all sizes, including those in financial services, government, energy, technology, and more, seeking to optimize performance and manage risk."
  },
  {
    q: "What is NYUX Consultancy's mission and vision?",
    a: 'Our mission is to empower growth through expert advisory solutions. Our vision is to be the most trusted provider of professional advisory services in Tanzania and beyond.'
  },
  {
    q: 'How can I get started with NYUX Consultancy?',
    a: 'Simply contact us to schedule a consultation. Our team will guide you through the process and recommend the best solutions for your needs.'
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-[#faf8f6] relative overflow-hidden">
      {/* Subtle background texture - more visible and unique */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true" style={{
        backgroundImage: 'repeating-radial-gradient(circle, #ecdcc7 1.5px, transparent 2.5px)',
        backgroundSize: '22px 22px',
        opacity: 0.7,
      }} />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start px-4 relative z-10">
        {/* Left: Heading and Description */}
        <div className="flex-1 flex flex-col justify-center md:pr-12 mb-10 md:mb-0">
          <div className="mb-3">
            <span className="inline-block px-4 py-1 rounded-full bg-[#f7e7d6] text-[#964604] font-semibold text-base">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-[#222]">Questions You're</span><br />
            <span className="bg-gradient-to-r from-[#964604] to-[#953735] bg-clip-text text-transparent">Probably Asking</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            If you've made it this far, you're either very interested or have questions. Here are a few frequently asked questions.
          </p>
          <div className="mb-2 text-base text-gray-500">Still looking for answers?</div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#964604] to-[#953735] text-white font-semibold rounded-full px-6 py-3 shadow hover:from-[#953735] hover:to-[#964604] transition text-base group w-full md:w-auto"
          >
            Speak to Expert
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
        {/* Right: FAQ List */}
        <div className="flex-1 w-full max-w-2xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="rounded-2xl bg-white shadow border border-[#f7e7d6] overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <button
                className="w-full flex items-center justify-between px-8 py-6 text-left text-lg font-semibold text-[#222] focus:outline-none hover:bg-[#f7e7d6]/40 transition-colors duration-200"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className="ml-4">
                  {open === i ? (
                    <svg className="w-6 h-6 text-[#964604]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                  ) : (
                    <svg className="w-6 h-6 text-[#964604]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#964604" strokeWidth="2" fill="none"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" /></svg>
                  )}
                </span>
              </button>
              {open === i && (
                <div className="px-8 pb-6 text-gray-600 text-base border-t border-[#f7e7d6] animate-fade-in bg-white/70">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 