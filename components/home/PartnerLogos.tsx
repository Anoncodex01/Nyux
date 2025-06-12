'use client';
import Image from 'next/image';

const logos = [
  '/logo/ATCL_Logo.png',
  '/logo/Azania-Bank-Logo-Landscape.png',
  '/logo/Azania-Bank-Logos-Landscape.png',
  '/logo/Bank_of_Tanzania_Logo.png',
  '/logo/NHC-tanzania-national-housing-corporation-company.webp',
  '/logo/National_Social_Security_Fund_Tanzania_Logo.png',
  '/logo/TIB-BANK.png',
  '/logo/Tanzania-Agricultural-Development-Bank-Loan-Rate.webp',
  '/logo/images.png',
  '/logo/logo (1).png',
  '/logo/logo.jpg',
  '/logo/logo.png',
  '/logo/logo_white copy.png',
  '/logo/logo_white.png',
  '/logo/mnh_logo.png',
  '/logo/social-action-trust-fund-satf-231780.jpg',
  '/logo/tanesco-tanzania-electric-supply-company-limited-logo-png_seeklogo-311615.png',
  '/logo/silabu.png',
];

export function PartnerLogos() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7e7d6]/60 via-white to-[#f7e7d6]/40">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-3xl md:text-4xl font-extrabold text-[#964604] mb-12 tracking-wide drop-shadow">Our Partners</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10">
          {logos.map((src, i) => (
            <div
              key={src}
              className="flex items-center justify-center bg-white rounded-2xl shadow-lg p-6 h-32 transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#f7e7d6]"
            >
              <Image
                src={src}
                alt={`Partner logo ${i + 1}`}
                width={160}
                height={80}
                className="object-contain max-h-20 w-auto h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 