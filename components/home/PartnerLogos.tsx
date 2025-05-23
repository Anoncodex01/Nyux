'use client';
import Image from 'next/image';

const logos = [
  '/logo/ATCL_Logo.png',
  '/logo/National_Social_Security_Fund_Tanzania_Logo.png',
  '/logo/Azania-Bank-Logo-Landscape.png',
  '/logo/NHC-tanzania-national-housing-corporation-company.webp',
  '/logo/tanesco-tanzania-electric-supply-company-limited-logo-png_seeklogo-311615.png',
  '/logo/Bank_of_Tanzania_Logo.png',
];

export function PartnerLogos() {
  return (
    <section className="py-12 bg-[#f7e7d6]/40">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-xl md:text-2xl font-bold text-[#964604] mb-8 tracking-wide">Our Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {logos.map((src, i) => (
            <div key={src} className="flex-shrink-0 flex items-center justify-center h-20">
              <Image
                src={src}
                alt={`Partner logo ${i + 1}`}
                width={140}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-lg shadow p-2 h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 