import React from 'react';
import { AdvisoryDropdown } from './AdvisoryDropdown';
import { TaxDropdown } from './TaxDropdown';
import { ActuarialDropdown } from './ActuarialDropdown';

export function ServicesDropdown({ onServiceClick, mobile }: { onServiceClick?: () => void; mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="flex flex-col gap-4 bg-white rounded-xl shadow border border-[#f7e7d6] p-2 max-h-[60vh] overflow-y-auto w-full min-w-0">
        <h2 className="text-xl font-bold text-[#964604] mb-2 text-left">Our Services</h2>
        <AdvisoryDropdown onServiceClick={onServiceClick} />
        <TaxDropdown onServiceClick={onServiceClick} />
        <ActuarialDropdown onServiceClick={onServiceClick} />
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white rounded-2xl shadow-xl border border-[#f7e7d6] p-4 md:p-8 w-full max-w-full">
      {/* Mobile Heading */}
      <h2 className="block md:hidden text-xl font-bold text-[#964604] mb-4 text-center">Our Services</h2>
      <div className="flex-1 w-full md:w-auto"><AdvisoryDropdown onServiceClick={onServiceClick} /></div>
      <div className="flex-1 w-full md:w-auto"><TaxDropdown onServiceClick={onServiceClick} /></div>
      <div className="flex-1 w-full md:w-auto"><ActuarialDropdown onServiceClick={onServiceClick} /></div>
    </div>
  );
} 