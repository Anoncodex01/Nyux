import React from 'react';
import Link from 'next/link';

const taxItems = [
  { label: 'Tax Advisory Services', href: '/services/tax/TaxAdvisoryServices' },
  { label: 'Tax Compliance and Filing', href: '/services/tax/TaxComplianceAndFiling' },
  { label: 'Tax Health Checks and Audits', href: '/services/tax/TaxHealthChecksAndAudits' },
  { label: 'International Taxation', href: '/services/tax/InternationalTaxation' },
  { label: 'Representation and Dispute Resolution', href: '/services/tax/RepresentationAndDisputeResolution' },
];

export function TaxDropdown() {
  return (
    <div className="w-full md:min-w-[260px] md:border-l border-[#f7e7d6] px-2 md:px-4 py-2 md:py-0">
      <h3 className="font-bold text-base md:text-lg text-[#964604] mb-2">Tax Services</h3>
      <ul className="space-y-2">
        {taxItems.map(item => (
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