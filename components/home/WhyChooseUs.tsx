import { CheckCircle, Users, Target, Eye, DollarSign } from 'lucide-react';

const values = [
  { icon: <CheckCircle className="w-7 h-7 text-[#964604]" />, title: 'Proven Experience', desc: 'With top-tier institutions' },
  { icon: <Users className="w-7 h-7 text-[#964604]" />, title: 'Skilled Professionals', desc: 'Locally & internationally trained' },
  { icon: <Target className="w-7 h-7 text-[#964604]" />, title: 'Personalized Solutions', desc: 'Tailored to your organization' },
  { icon: <Eye className="w-7 h-7 text-[#964604]" />, title: 'Transparent Delivery', desc: 'Reliable, clear, and honest' },
  { icon: <DollarSign className="w-7 h-7 text-[#964604]" />, title: 'Competitive Pricing', desc: 'No compromise on quality' },
];

export function WhyChooseUs() {
  // Odd steps (1, 3, ...) except last if odd count
  const leftSteps = values.filter((_, i) => i % 2 === 0 && (i !== values.length - 1 || values.length % 2 === 0));
  // Even steps (2, 4, ...) only
  const rightSteps = values.filter((_, i) => i % 2 === 1);
  // Last step (if odd count)
  const hasCenterStep = values.length % 2 === 1;
  const centerStep = hasCenterStep ? values[values.length - 1] : null;

  return (
    <section className="relative w-full py-20 px-2 md:px-8 bg-[#f9f6f3] overflow-x-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
          Why Choose <span className="text-[#964604]">NYUX</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Proven experience, highly skilled professionals, and tailored solutions—delivered with transparency and competitive pricing.
        </p>
        <a href="#contact" className="inline-block bg-[#964604] text-white font-semibold rounded-full px-8 py-3 shadow hover:bg-[#953735] transition text-base">Book a Consultation</a>
      </div>
      {/* Mobile: stacked cards, marker left */}
      <div className="flex flex-col gap-8 md:hidden w-full max-w-xl mx-auto">
        {values.map((v, i) => (
          <div key={v.title} className="relative flex items-center bg-white rounded-xl shadow p-6 border border-[#f7e7d6]">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#964604] text-white border-2 border-white shadow-lg mr-4 flex-shrink-0">
              <CheckCircle className="w-5 h-5" />
            </span>
            <span className="mr-3">{v.icon}</span>
            <div>
              <div className="text-base font-bold text-black">{v.title}</div>
              <div className="text-gray-600 text-sm">{v.desc}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Desktop: timeline and two columns */}
      <div className="relative hidden md:flex flex-col items-center w-full">
        {/* Timeline vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-[#f7e7d6] z-0" />
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 z-10">
          {/* Left column (odd steps except last if odd) */}
          <div className="flex flex-col gap-16">
            {leftSteps.map((v, idx) => (
              <div key={v.title} className="relative flex items-center justify-end">
                <div className="inline-flex items-center gap-3 bg-white rounded-xl shadow p-6 max-w-md w-full border border-[#f7e7d6]">
                  <span>{v.icon}</span>
                  <div>
                    <div className="text-lg font-bold text-black">{v.title}</div>
                    <div className="text-gray-600 text-base">{v.desc}</div>
                  </div>
                </div>
                {/* Timeline marker */}
                <div className="absolute right-[-38px] top-1/2 -translate-y-1/2 z-10">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#964604] text-white border-4 border-white shadow-lg">
                    <CheckCircle className="w-7 h-7" />
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Right column (even steps) */}
          <div className="flex flex-col gap-16">
            {rightSteps.map((v, idx) => (
              <div key={v.title} className="relative flex items-center justify-start">
                {/* Timeline marker */}
                <div className="absolute left-[-38px] top-1/2 -translate-y-1/2 z-10">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#964604] text-white border-4 border-white shadow-lg">
                    <CheckCircle className="w-7 h-7" />
                  </span>
                </div>
                <div className="inline-flex items-center gap-3 bg-white rounded-xl shadow p-6 max-w-md w-full border border-[#f7e7d6]">
                  <span>{v.icon}</span>
                  <div>
                    <div className="text-lg font-bold text-black">{v.title}</div>
                    <div className="text-gray-600 text-base">{v.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Centered last step if odd count */}
        {hasCenterStep && centerStep && (
          <div className="relative flex flex-col items-center justify-center mt-16 w-full">
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#964604] text-white border-4 border-white shadow-lg">
                <CheckCircle className="w-7 h-7" />
              </span>
            </div>
            <div className="inline-flex items-center gap-3 bg-white rounded-xl shadow p-6 max-w-md w-full border border-[#f7e7d6] mt-8 mx-auto">
              <span>{centerStep.icon}</span>
              <div>
                <div className="text-lg font-bold text-black">{centerStep.title}</div>
                <div className="text-gray-600 text-base">{centerStep.desc}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 