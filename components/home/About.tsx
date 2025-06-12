'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { team } from '@/lib/constants';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { useState } from 'react';
import { ReadyToGetSection } from './ReadyToGetSection';

const clientLogos = [
  '/logo/Bank_of_Tanzania_Logo.png',
  '/logo/National_Social_Security_Fund_Tanzania_Logo.png',
  '/logo/NHC-tanzania-national-housing-corporation-company.webp',
  '/logo/Azania-Bank-Logos-Landscape.png',
  '/logo/ATCL_Logo.png',
  '/logo/tanesco-tanzania-electric-supply-company-limited-logo-png_seeklogo-311615.png',
];

const tabContent = {
  mission: {
    title: 'Our Mission',
    content: 'Empowering growth through expert advisory solutions.'
  },
  vision: {
    title: 'Our Vision',
    content: 'To be the most trusted provider of professional advisory services in Tanzania and beyond.'
  },
  story: {
    title: 'Our Story',
    content: 'Founded by industry veterans, NYUX Consultancy has grown to become a leader in actuarial, tax, financial, and strategic advisory. Our journey is defined by a commitment to excellence, innovation, and client success.'
  }
} as const;

type TabKey = keyof typeof tabContent;

export function About() {
  const [activeTab, setActiveTab] = useState<TabKey>('mission');

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[320px] md:h-[380px] flex flex-col items-center justify-center text-center overflow-hidden mb-12">
        <img src="/images/hero.webp" alt="About background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-[#1a2236]/90 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">About</h1>
          <div className="flex justify-center">
            <Breadcrumb>
              <BreadcrumbList className="text-white/90 text-base font-medium bg-[#964604]/80 rounded-xl px-6 py-2 shadow-sm backdrop-blur-md">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex items-center gap-1 text-white/90">
                    <Home className="w-4 h-4 mr-1" /> Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <span className="mx-2 text-white/60">/</span>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white font-semibold">About</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-br from-white via-[#96460408] to-[#95373508] pt-8 pb-16">
        {/* Background gradient accent */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#964604]/5 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#953735]/5 to-transparent rounded-tr-full"></div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Headline & Intro */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-gray-900">Get to Know </span>
            <span className="bg-gradient-to-r from-[#964604] to-[#953735] text-transparent bg-clip-text">NYUX</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mb-10">
            At NYUX, we believe professional expertise should be a powerful tool — not a barrier. With a passion for innovation and a commitment to excellence, we help businesses and institutions of all sizes navigate the ever-changing landscape. From actuarial and tax strategy to financial and strategic advisory, our team delivers scalable, secure, and data-driven solutions.
          </p>
          
          {/* Image Grid with gradient border */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#964604]/20 to-[#953735]/20">
              <img src="/images/tax.jpg" alt="NYUX team at work" className="rounded-xl object-cover w-full h-64 md:h-80" />
            </div>
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#964604]/20 to-[#953735]/20">
              <img src="/images/hero.webp" alt="NYUX consulting" className="rounded-xl object-cover w-full h-64 md:h-80" />
            </div>
          </div>
          
          {/* Client Logos with gradient background */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white via-[#96460410] to-[#95373510] mb-16">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {clientLogos.map((logo, idx) => (
                <img key={logo} src={logo} alt={`Client logo ${idx + 1}`} className="h-10 max-w-[160px] object-contain opacity-80 hover:opacity-100 transition-opacity" />
              ))}
            </div>
          </div>
          {/* Modern Feature Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Image with Gradient Overlay */}
            <div className="flex-1 w-full flex justify-center mb-8 md:mb-0 relative">
              <div className="relative w-full max-w-xl h-80 md:h-[420px]">
                <img src="/images/hero.webp" alt="Consulting team" className="rounded-3xl shadow-2xl w-full h-full object-cover" />
                <div className="absolute inset-0 rounded-3xl" style={{background: 'linear-gradient(135deg, #96460499 0%, #95373599 100%)', mixBlendMode: 'multiply', opacity: 0.55}} />
                {/* Optional: Floating Accent Shape */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#964604]/40 to-[#953735]/30 rounded-full blur-2xl z-10" />
              </div>
            </div>
            {/* Right: Content with Accent Border */}
            <div className="flex-1 w-full flex flex-col items-start pl-0 md:pl-8 border-l-0 md:border-l-8 border-[#964604]">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#964604] mb-2">Empowering Business with <span className="text-[#953735]">NYUX</span></h2>
              <p className="text-gray-700 text-lg mb-6">NYUX Consultancy specializes in delivering smart, scalable, and secure solutions tailored to modern businesses. From actuarial and tax advisory to financial and strategic consulting, we help you grow, optimize, and manage risk.</p>
              {/* Tabs */}
              <div className="flex gap-2 mb-4">
                <button
                  className={`px-4 py-2 rounded-full font-semibold shadow border transition-colors ${activeTab === 'mission' ? 'bg-[#964604] text-white border-[#964604]' : 'bg-white text-[#964604] border-[#964604]'}`}
                  onClick={() => setActiveTab('mission')}
                >
                  Our Mission
                </button>
                <button
                  className={`px-4 py-2 rounded-full font-semibold shadow border transition-colors ${activeTab === 'vision' ? 'bg-[#964604] text-white border-[#964604]' : 'bg-white text-[#964604] border-[#964604]'}`}
                  onClick={() => setActiveTab('vision')}
                >
                  Our Vision
                </button>
                <button
                  className={`px-4 py-2 rounded-full font-semibold shadow border transition-colors ${activeTab === 'story' ? 'bg-[#964604] text-white border-[#964604]' : 'bg-white text-[#964604] border-[#964604]'}`}
                  onClick={() => setActiveTab('story')}
                >
                  Our Story
                </button>
              </div>
              <div className="bg-[#f7e7d6] rounded-xl p-4 mb-6 w-full max-w-lg">
                <h3 className="text-lg font-bold text-[#964604] mb-1">{tabContent[activeTab].title}</h3>
                <p className="text-gray-800">{tabContent[activeTab].content}</p>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg mb-2">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#964604]">96%</div>
                  <div className="text-gray-700 text-sm">Client satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#964604]">15+</div>
                  <div className="text-gray-700 text-sm">Industries served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#964604]">+46%</div>
                  <div className="text-gray-700 text-sm">Accelerate Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#964604]">720</div>
                  <div className="text-gray-700 text-sm">Reduce Costs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Industries We Serve Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#964604]">Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#f7e7d6] rounded-2xl shadow p-6 flex items-center">
              <span className="text-2xl mr-4">💼</span>
              <span className="text-lg font-medium text-gray-800">Financial Services (Banking, Insurance, Pensions)</span>
            </div>
            <div className="bg-[#f7e7d6] rounded-2xl shadow p-6 flex items-center">
              <span className="text-2xl mr-4">⛽</span>
              <span className="text-lg font-medium text-gray-800">Energy & Natural Resources (Oil, Gas, Utilities)</span>
            </div>
            <div className="bg-[#f7e7d6] rounded-2xl shadow p-6 flex items-center">
              <span className="text-2xl mr-4">🏛️</span>
              <span className="text-lg font-medium text-gray-800">Government & Public Sector</span>
            </div>
            <div className="bg-[#f7e7d6] rounded-2xl shadow p-6 flex items-center">
              <span className="text-2xl mr-4">📡</span>
              <span className="text-lg font-medium text-gray-800">Telecommunications & Technology</span>
            </div>
            <div className="bg-[#f7e7d6] rounded-2xl shadow p-6 flex items-center">
              <span className="text-2xl mr-4">🏥</span>
              <span className="text-lg font-medium text-gray-800">Education, Agriculture & Healthcare</span>
            </div>
            <div className="bg-[#f7e7d6] rounded-2xl shadow p-6 flex items-center">
              <span className="text-2xl mr-4">🏢</span>
              <span className="text-lg font-medium text-gray-800">Real Estate & Manufacturing</span>
            </div>
          </div>
        </div>
      </section>
      <ReadyToGetSection />
    </>
  );
}