'use client';

import { motion } from 'framer-motion';

const aboutValues = [
  'Integrity',
  'Excellence',
  'Innovation',
  'Collaboration',
  'Accountability',
];

export function AboutPreview() {
  return (
    <section className="relative py-20 px-0 bg-gradient-to-br from-[#f7e7d6] via-white to-[#fbeeee] w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-stretch">
        {/* Left: About Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-start text-left md:pr-12 max-w-xl w-full mb-12 md:mb-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
            About <span className="text-[#964604]">Us</span>
          </h2>
          <p className="text-lg text-black mb-6 font-medium">
            NYUX Consultancy is a leading consulting firm offering professional services in Actuarial, Tax, Financial, and Strategic Advisory. Our goal is to deliver customized, data-driven solutions that empower businesses and institutions to grow, optimize performance, and manage risk effectively.
          </p>
          <div className="mb-2">
            <span className="font-semibold text-[#953735]">Mission:</span> <span className="text-black">Empowering growth through expert advisory solutions.</span>
          </div>
          <div className="mb-6">
            <span className="font-semibold text-[#953735]">Vision:</span> <span className="text-black">To be the most trusted provider of professional advisory services in Tanzania and beyond.</span>
          </div>
          {/* Values Row */}
          <div className="flex flex-row flex-wrap gap-3 mb-8">
            {aboutValues.map((v) => (
              <div
                key={v}
                className="flex items-center gap-2 bg-white rounded-full shadow px-5 py-2 text-[#964604] font-semibold text-base border border-[#f7e7d6]"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#f7e7d6] text-[#953735] mr-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                {v}
              </div>
            ))}
          </div>
          <a href="/about" className="bg-[#964604] text-white font-semibold rounded-full px-8 py-4 shadow hover:bg-[#953735] transition text-lg">Read More</a>
        </motion.div>
        {/* Right: Image Placeholder */}
        <motion.div
          className="flex-1 flex items-center justify-center w-full md:w-auto min-h-[320px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="w-full max-w-xl flex flex-col gap-4">
            <img
              src="/images/hero.webp"
              alt="Consulting team working with financial documents"
              className="w-full h-40 md:h-48 object-cover shadow-xl bg-[#f7e7d6] about-ellipse-right"
            />
            <img
              src="/images/tax.jpg"
              alt="Consulting team working with financial documents"
              className="w-full h-40 md:h-48 object-cover shadow-xl bg-[#f7e7d6] about-ellipse-left"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 