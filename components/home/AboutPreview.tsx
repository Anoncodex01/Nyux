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
    <section className="relative py-20 px-4 flex flex-col items-center bg-gradient-to-br from-[#e0e7ff] via-white to-[#f0fdfa]">
      <motion.div
        className="max-w-4xl w-full mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          <span className="text-blue-900">About </span>
          <span className="text-orange-500">Us</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          NYUX Consultancy is a leading consulting firm offering professional services in Actuarial, Tax, Financial, and Strategic Advisory. Our goal is to deliver customized, data-driven solutions that empower businesses and institutions to grow, optimize performance, and manage risk effectively.
        </p>
        <div className="mb-2">
          <span className="font-semibold text-blue-900">Mission:</span> <span className="text-gray-700">Empowering growth through expert advisory solutions.</span>
        </div>
        <div className="mb-8">
          <span className="font-semibold text-blue-900">Vision:</span> <span className="text-gray-700">To be the most trusted provider of professional advisory services in Tanzania and beyond.</span>
        </div>
      </motion.div>
      {/* Values Row with Tick and Rounded Box */}
      <motion.div
        className="w-full flex flex-row overflow-x-auto gap-4 mb-10 md:flex-wrap md:justify-center md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {aboutValues.map((v) => (
          <motion.div
            key={v}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-2 bg-white rounded-full shadow px-6 py-3 text-blue-900 font-semibold text-lg border border-blue-100"
          >
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            {v}
          </motion.div>
        ))}
      </motion.div>
      <button className="bg-blue-900 text-white font-semibold rounded-full px-8 py-4 shadow hover:bg-blue-800 transition text-lg">Book a Consultation</button>
    </section>
  );
} 