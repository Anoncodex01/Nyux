'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServicesDropdown } from '@/components/services/ServicesDropdown';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-center items-center pointer-events-none">
      <div className="flex items-center justify-between gap-8 px-8 py-2 rounded-full shadow-xl bg-white/90 backdrop-blur max-w-4xl w-full border border-[#f7e7d6] mt-6 pointer-events-auto transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[#964604]">
          {/* Example icon */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#964604]"><rect x="3" y="6" width="18" height="12" rx="4" strokeWidth="2" /></svg>
          Nyux
        </Link>
        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-black relative">
          <Link href="#home" className="hover:text-[#953735]">Home</Link>
          <Link href="/about" className="hover:text-[#953735]">About</Link>
          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => !servicesOpen && setServicesOpen(true)}
          >
            <button 
              className={`hover:text-[#953735] focus:outline-none px-2 py-1 flex items-center gap-1 ${servicesOpen ? 'text-[#953735]' : ''}`}
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Our Services
              <svg 
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div 
                className="absolute left-1/2 -translate-x-1/2 mt-4 z-50 min-w-[820px] animate-in fade-in slide-in-from-top-1 duration-200"
              >
                <ServicesDropdown />
              </div>
            )}
          </div>
          <Link href="#faq" className="hover:text-[#953735]">FAQ</Link>
          <Link href="#contact" className="hover:text-[#953735]">Contact Us</Link>
        </nav>
        {/* Hamburger - Mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-[#f7e7d6] text-[#964604] focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Buttons - Desktop */}
        <div className="hidden md:flex gap-3 items-center">
          <button className="bg-gradient-to-r from-[#964604] to-[#953735] text-white font-semibold rounded-full px-6 py-2 shadow hover:from-[#953735] hover:to-[#964604] transition text-sm">Get in Touch</button>
        </div>
      </div>
      {/* Mobile Dropdown */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40 flex md:hidden" onClick={() => setOpen(false)}>
          <nav
            className="ml-auto w-64 bg-white h-full shadow-2xl flex flex-col gap-6 p-8 text-lg font-medium text-[#953735] animate-slide-in pointer-events-auto"
            onClick={e => e.stopPropagation()}
          >
            <button className="self-end mb-8" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={28} />
            </button>
            <Link href="#home" className="hover:text-[#964604]" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-[#964604]" onClick={() => setOpen(false)}>About</Link>
            <Link href="#services" className="hover:text-[#964604]" onClick={() => setOpen(false)}>Our Services</Link>
            <Link href="#faq" className="hover:text-[#964604]" onClick={() => setOpen(false)}>FAQ</Link>
            <Link href="#contact" className="hover:text-[#964604]" onClick={() => setOpen(false)}>Contact Us</Link>
            <button className="mt-8 bg-gradient-to-r from-[#964604] to-[#953735] text-white font-semibold rounded-full px-6 py-2 shadow hover:from-[#953735] hover:to-[#964604] transition text-base">Get in Touch</button>
          </nav>
        </div>
      )}
    </header>
  );
}