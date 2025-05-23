import React from 'react';

const advisoryItems = [
  'Business Strategy and Planning',
  'Financial Advisory',
  'Risk Management and Compliance',
  'Project Management and Evaluation',
  'Human Capital Advisory',
];

export function AdvisoryDropdown() {
  return (
    <div className="min-w-[260px]">
      <h3 className="font-bold text-lg text-[#964604] mb-2">Advisory Services</h3>
      <ul className="space-y-2">
        {advisoryItems.map(item => (
          <li key={item} className="text-gray-800 hover:text-[#953735] cursor-pointer transition-colors text-base pl-2 py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
} 