import React from 'react';
import { AdvisoryDropdown } from './AdvisoryDropdown';
import { TaxDropdown } from './TaxDropdown';
import { ActuarialDropdown } from './ActuarialDropdown';

export function ServicesDropdown() {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-xl border border-[#f7e7d6] p-8 min-w-[800px] max-w-full">
      <AdvisoryDropdown />
      <TaxDropdown />
      <ActuarialDropdown />
    </div>
  );
} 