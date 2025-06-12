'use client';

import React from 'react';
import { Briefcase, FileBarChart, Scale, Users, BarChart2, Settings, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Advisory Service',
    icon: Users,
    description: 'Project Management and Evaluation, Risk Management and Compliance, Marketing Advisory, Human Capital Advisory, Investment Advisory, Sustainability & ESG Advisory.',
  },
  {
    title: 'Tax Service',
    icon: Scale,
    description: 'Compliance and Filing, Health Checks and Audits, Representation and Dispute Resolution, Tax planning & Transfer pricing documentation.',
  },
  {
    title: 'Actuarial Service',
    icon: BarChart2,
    description: 'Employee Benefits Advisory, Pension and Insurance, Risk Modeling, Data Analytics, Investment & Asset-Liability Management.',
  },
  {
    title: 'Business Strategy and Planning',
    icon: Briefcase,
    description: 'Development and Implementation of Strategic plan, Business model development and review, Strategic and operational planning, Market entry and expansion strategies, Organizational restructuring, Impact Analysis.',
  },
  {
    title: 'Accounts and Financial Advisory',
    icon: FileBarChart,
    description: 'Business valuations Services, Investment analysis and feasibility studies, Capital structuring and fundraising support, Financial planning and forecasting, Technical accounting advice.',
  },
  {
    title: 'Digital Transformation & Technology Advisory',
    icon: Settings,
    description: 'IT Strategy & Digital Roadmaps, Fintech & AI Solutions, ERP & Financial Systems Implementation, Cybersecurity & Data Protection – Risk assessments and compliance (Eg: GDPR, ISO 27001).',
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
                href="mailto:Info@nyux.co.tz"
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