import React from 'react';

const taxItems = [
  'Tax Advisory Services',
  'Tax Compliance and Filing',
  'Tax Health Checks and Audits',
  'International Taxation',
  'Representation and Dispute Resolution',
];

export function TaxDropdown() {
  return (
    <div className="min-w-[260px]">
      <h3 className="font-bold text-lg text-[#964604] mb-2">Tax Services</h3>
      <ul className="space-y-2">
        {taxItems.map(item => (
          <li key={item} className="text-gray-800 hover:text-[#953735] cursor-pointer transition-colors text-base pl-2 py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
} 