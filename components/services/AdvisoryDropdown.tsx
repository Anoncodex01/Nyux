import React from 'react';
import Link from 'next/link';

const advisoryItems = [
  { label: 'Business Strategy and Planning', href: '/services/advisory/BusinessStrategyAndPlanning' },
  { label: 'Financial Advisory', href: '/services/advisory/FinancialAdvisory' },
  { label: 'Risk Management and Compliance', href: '/services/advisory/RiskManagementAndCompliance' },
  { label: 'Project Management and Evaluation', href: '/services/advisory/ProjectManagementAndEvaluation' },
  { label: 'Human Capital Advisory', href: '/services/advisory/HumanCapitalAdvisory' },
];

export function AdvisoryDropdown() {
  return (
    <div className="w-full md:min-w-[260px] md:border-l border-[#f7e7d6] px-2 md:px-4 py-2 md:py-0">
      <h3 className="font-bold text-base md:text-lg text-[#964604] mb-2">Advisory Services</h3>
      <ul className="space-y-2">
        {advisoryItems.map(item => (
          <li key={item.label}>
            <Link href={item.href} className="text-gray-800 hover:text-[#953735] cursor-pointer transition-colors text-sm md:text-base pl-2 py-1 block">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 