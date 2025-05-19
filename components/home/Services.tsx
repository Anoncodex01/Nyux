'use client';

import React from 'react';
import { Briefcase, FileBarChart, Scale, Users, BarChart2, Settings, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Actuarial Services',
    icon: FileBarChart,
    description: 'Employee Benefits Advisory, Pension and Retirement Benefits Valuations, Insurance and Risk Modelling.',
  },
  {
    title: 'Tax Services',
    icon: Scale,
    description: 'Corporate & Business Tax Compliance, Transfer Pricing Solutions, Tax Health Checks and Audits.',
  },
  {
    title: 'Advisory Services',
    icon: Briefcase,
    description: 'Deal & Transaction Advisory, Risk Management, Forensic & Internal Audit.',
  },
  {
    title: 'Industries We Serve',
    icon: Users,
    description: 'Financial Services, Energy & Natural Resources, Government & Public Sector, and more.',
  },
];

export function Services() {
  return (
    <section className="relative py-20 px-4 flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-blue-50 min-h-[80vh]">
      <div className="max-w-3xl w-full mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
          Our <span className="text-blue-700">Services</span>
        </h2>
        <p className="text-lg text-gray-600">
          We offer a comprehensive suite of consulting services tailored to your business needs.
        </p>
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={
                idx === 0
                  ? 'relative rounded-2xl shadow-xl p-8 flex flex-col justify-between min-h-[240px] bg-gradient-to-br from-blue-700 to-blue-500 text-white transform -rotate-2 hover:rotate-0 transition-all duration-300 group'
                  : 'relative rounded-2xl shadow-md p-8 flex flex-col justify-between min-h-[240px] bg-white text-gray-900 border border-blue-100 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500 hover:text-white hover:-rotate-2 transition-all duration-300 group'
              }
            >
              <div className="flex items-center mb-6">
                <span
                  className={
                    idx === 0
                      ? 'inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 text-white mr-4 transition-all duration-300'
                      : 'inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-700 mr-4 group-hover:bg-white/20 group-hover:text-white transition-all duration-300'
                  }
                >
                  <Icon size={32} />
                </span>
                <h3 className={
                  idx === 0
                    ? 'text-xl font-bold text-white transition-all duration-300'
                    : 'text-xl font-bold text-gray-900 group-hover:text-white transition-all duration-300'
                }>
                  {service.title}
                </h3>
              </div>
              <p className={idx === 0 ? 'mb-8 text-white/90' : 'mb-8 text-gray-600 group-hover:text-white/90 transition-all duration-300'}>
                {service.description}
              </p>
              <a
                href="#"
                className={
                  idx === 0
                    ? 'text-blue-100 font-semibold flex items-center hover:underline transition-all duration-300'
                    : 'text-blue-700 font-semibold flex items-center hover:underline group-hover:text-blue-100 transition-all duration-300'
                }
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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