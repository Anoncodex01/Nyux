'use client';

import React from 'react';
import { Briefcase, FileBarChart, Scale, Users, BarChart2, Settings, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Business Strategy & Planning',
    icon: Briefcase,
    description: 'Strategic business model development, operational planning, and market entry solutions to drive sustainable growth.',
  },
  {
    title: 'Risk Management & Compliance',
    icon: ShieldCheck,
    description: 'Enterprise risk frameworks, regulatory compliance, internal controls, and forensic audit for robust governance.',
  },
  {
    title: 'Tax Advisory & Planning',
    icon: Scale,
    description: 'Comprehensive tax planning, transaction advice, and corporate tax optimization for individuals and businesses.',
  },
  {
    title: 'Tax Compliance & Filing',
    icon: FileBarChart,
    description: 'Preparation and filing of tax returns, VAT, PAYE, and statutory filings to ensure full regulatory compliance.',
  },
  {
    title: 'Pension & Benefits Valuation',
    icon: BarChart2,
    description: 'Actuarial valuation of pension schemes, employee benefits, and compliance with IAS 19 and IPSAS 39 standards.',
  },
  {
    title: 'Insurance & Risk Modelling',
    icon: Settings,
    description: 'Insurance product pricing, reserving, claims analysis, and solvency modeling for risk mitigation.',
  },
];

export function Services() {
  return (
    <section className="relative py-20 px-4 flex flex-col items-center bg-white min-h-[80vh]">
      <div className="max-w-3xl w-full mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">
          Our <span className="text-[#964604]">Services</span>
        </h2>
        <p className="text-lg text-gray-700">
          We offer a comprehensive suite of consulting services tailored to your business needs.
        </p>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="relative rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[320px] bg-white border border-[#f7e7d6] hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <span
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#f7e7d6] text-[#964604] mr-4 text-3xl"
                >
                  <Icon size={36} />
                </span>
                <h3 className="text-xl font-bold text-black">
                  {service.title}
                </h3>
              </div>
              <p className="mb-8 text-gray-700 text-base">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-block bg-[#964604] text-white font-semibold rounded-full px-6 py-3 shadow hover:bg-[#953735] transition text-base text-center"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}