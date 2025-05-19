import React from 'react';

const services = [
  {
    title: 'Actuarial Services',
    items: [
      'Employee Benefits Advisory',
      'Pension and Retirement Benefits Valuations',
      'Insurance and Risk Modelling',
      'Data Analytics and Actuarial Modelling',
      'Investment & Asset-Liability Management (ALM)',
      'Financial Modelling & Forecasting',
      'Regulatory and Compliance Support',
    ],
    img: '/images/actuarial.jpg',
  },
  {
    title: 'Tax Services',
    items: [
      'Corporate & Business Tax Compliance and Filing',
      'Transfer Pricing Solutions',
      'Tax Health Checks and Audits',
      'Representation and Dispute Resolution',
      'Mergers & Acquisitions Tax Structuring',
      'International Executive Tax Services',
    ],
    img: '/images/hero.webp',
  },
  {
    title: 'Advisory Services',
    items: [
      'Deal & Transaction Advisory',
      'Risk Management',
      'Forensic & Internal Audit',
      'ERP & IT System Advisory',
      'Restructuring',
      'Public & Private Sector Development',
      'Accounting & Performance Improvement',
    ],
    img: '/images/advisory.jpg',
  },
];

const industries = [
  'Financial Services (Banking, Insurance, Pensions)',
  'Energy & Natural Resources (Oil, Gas, Utilities)',
  'Government & Public Sector',
  'Telecommunications & Technology',
  'Education, Agriculture & Healthcare',
  'Real Estate & Manufacturing',
];

export function ServicesPreview() {
  return (
    <section className="relative py-20 px-4 flex flex-col items-center bg-gradient-to-br from-[#f0f4ff] via-white to-[#f0fdfa]">
      <div className="max-w-3xl w-full mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          <span className="text-blue-900">Our </span>
          <span className="text-orange-500">Services</span>
        </h2>
        <p className="text-lg text-gray-700">
          We offer a comprehensive suite of consulting services tailored to your business needs.
        </p>
      </div>
      <div className="w-full max-w-4xl flex flex-col gap-8">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg p-6 md:p-10 gap-6 md:gap-10"
          >
            <div className="flex-1 text-left w-full">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-2">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 w-full md:w-56 h-40 md:h-36 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src={service.img}
                alt={service.title}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        ))}
        {/* Industries Card */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg p-6 md:p-10 gap-6 md:gap-10">
          <div className="flex-1 text-left w-full">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Industries We Serve</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-2">
              {industries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink-0 w-full md:w-56 h-40 md:h-36 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src="/images/industries.jpg"
              alt="Industries"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 