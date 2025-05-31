import React from 'react';
import Link from 'next/link';

const actuarialItems = [
  { label: 'Pension and Retirement Benefits Valuation', href: '/services/actuarial/PensionAndRetirementBenefitsValuation' },
  { label: 'Insurance and Risk Modelling', href: '/services/actuarial/InsuranceAndRiskModelling' },
  { label: 'Employee Benefits Advisory', href: '/services/actuarial/EmployeeBenefitsAdvisory' },
  { label: 'Data Analytics and Actuarial Modelling', href: '/services/actuarial/DataAnalyticsAndActuarialModelling' },
  { label: 'Regulatory and Compliance Support', href: '/services/actuarial/RegulatoryAndComplianceSupport' },
  { label: 'Investment & Asset-Liability Management (ALM)', href: '/services/actuarial/InvestmentAndAssetLiabilityManagementALM' },
];

export function ActuarialDropdown() {
  return (
    <div className="w-full md:min-w-[260px] md:border-l border-[#f7e7d6] px-2 md:px-4 py-2 md:py-0">
      <h3 className="font-bold text-base md:text-lg text-[#964604] mb-2">Actuarial Services</h3>
      <ul className="space-y-2">
        {actuarialItems.map(item => (
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