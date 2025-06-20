'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    company: 'Bank of Tanzania',
    avatar: '/logo/bank_of_tanzania_Logo.png',
    quote:
      'NYUX team was professional, fast, and incredibly knowledgeable. We saw immediate performance gains and a reduction in risk from their advisory services. Highly recommended!',
  },
  {
    company: 'TANESCO',
    avatar: '/logo/tanesco-tanzania-electric-supply-company-limited-logo-png_seeklogo-311615.png',
    quote:
      'Accurate and insightful business valuation that gave us clarity, confidence, and the true worth of our investees',
  },
  {
    company: 'National Insurance Corporation',
    avatar: '/logo/logo.png', // Placeholder - can be updated when actual logo is available
    quote:
      'We are grateful for their professional execution of the Customer Satisfaction Survey, which provided us with valuable feedback to improve our services and strengthen client relationships.',
  },
];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#f7e7d6] via-white to-[#fafbfc]">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-800">What Our Clients Say</h2>
        <p className="text-gray-500 mb-10">
          We're proud to partner with businesses that value innovation, reliability, and results. Here's what some of our clients have to say about working with NYUX.
        </p>
        <div className="flex justify-center items-center gap-2 mb-8 transition-all duration-500">
          {testimonials.map((t, i) => (
            <div
              key={t.company}
              className={`rounded-full border-4 border-white shadow bg-white transition-all duration-500 ${i === current ? 'scale-110 z-10' : 'opacity-60'} ${Math.abs(i - current) > 2 ? 'hidden md:block' : ''}`}
              style={{ width: i === current ? 72 : 56, height: i === current ? 72 : 56 }}
            >
              <Image
                src={t.avatar}
                alt={t.company}
                width={i === current ? 72 : 56}
                height={i === current ? 72 : 56}
                className="object-cover rounded-full"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            className="w-24 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#964604] to-[#953735] text-white shadow hover:scale-110 hover:shadow-lg transition-transform duration-200"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <blockquote className="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto transition-all duration-500">
            “{testimonials[current].quote}”
          </blockquote>
          <button
            className="w-24 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#964604] to-[#953735] text-white shadow hover:scale-110 hover:shadow-lg transition-transform duration-200"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-gray-700 text-base">
          <span className="font-bold text-lg">{testimonials[current].company}</span>
        </div>
      </div>
    </section>
  );
} 