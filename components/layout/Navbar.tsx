'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
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
          <Link href="/" className="hover:text-[#953735]">Home</Link>
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
          <Link href="/contact" className="hover:text-[#953735]">Contact Us</Link>
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
          <a href="tel:+255714540331" className="bg-gradient-to-r from-[#964604] to-[#953735] text-white font-semibold rounded-full px-6 py-2 shadow hover:from-[#953735] hover:to-[#964604] transition text-sm flex items-center gap-2">
          +255714540331
          </a>
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
            <Link href="/" className="hover:text-[#964604]" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-[#964604]" onClick={() => setOpen(false)}>About</Link>
            <Link href="#services" className="hover:text-[#964604]" onClick={() => setOpen(false)}>Our Services</Link>
            <Link href="/contact" className="hover:text-[#964604]" onClick={() => setOpen(false)}>Contact Us</Link>
            <a href="tel:+255714540331" className="mt-8 bg-gradient-to-r from-[#964604] to-[#953735] text-white font-semibold rounded-full px-6 py-2 shadow hover:from-[#953735] hover:to-[#964604] transition text-base flex items-center gap-2">
              Get in Touch
            </a>
          </nav>
        </div>
      )}
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/255714540331"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.617h-.001a9.87 9.87 0 0 1-4.988-1.358l-.357-.213-3.714.982.993-3.617-.232-.372a9.86 9.86 0 0 1-1.51-5.19c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.987c-.003 5.45-4.437 9.884-9.88 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .06 5.433.058 12.084c0 2.137.56 4.223 1.623 6.067L0 24l6.064-1.589a11.93 11.93 0 0 0 5.982 1.527h.005c6.554 0 11.89-5.433 11.893-12.084a11.93 11.93 0 0 0-3.487-8.465"/>
        </svg>
      </a>
    </header>
  );
}