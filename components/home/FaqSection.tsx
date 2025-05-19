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
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <div className="mb-2 text-xs font-semibold text-green-600 uppercase tracking-wider">Frequently Asked Questions</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Everything <span className="text-blue-600">You Need</span> to Know<br />About NYUX Consultancy
        </h2>
        <p className="text-gray-500 text-base">
          Answers to common questions about our services, mission, and how we help your business grow.
        </p>
      </div>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={faq.q} className="rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100/50 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900 focus:outline-none hover:bg-blue-50/50 transition-colors duration-200"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{faq.q}</span>
              <span className="ml-4">
                {open === i ? (
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                )}
              </span>
            </button>
            {open === i && (
              <div className="px-6 pb-5 text-gray-600 text-base border-t border-gray-100/50 animate-fade-in bg-white/50">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 