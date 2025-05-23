import React from 'react';

const actuarialItems = [
  'Pension and Retirement Benefits Valuation',
  'Insurance and Risk Modelling',
  'Employee Benefits Advisory',
  'Data Analytics and Actuarial Modelling',
  'Regulatory and Compliance Support',
  'Investment & Asset-Liability Management (ALM)',
];

export function ActuarialDropdown() {
  return (
    <div className="min-w-[260px]">
      <h3 className="font-bold text-lg text-[#964604] mb-2">Actuarial Services</h3>
      <ul className="space-y-2">
        {actuarialItems.map(item => (
          <li key={item} className="text-gray-800 hover:text-[#953735] cursor-pointer transition-colors text-base pl-2 py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
} 