'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-center items-center pointer-events-none">
      <div className="flex items-center justify-between gap-8 px-8 py-2 rounded-full shadow-xl bg-white/90 backdrop-blur max-w-4xl w-full border border-blue-100 mt-6 pointer-events-auto transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-700">
          {/* Example icon */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500"><rect x="3" y="6" width="18" height="12" rx="4" strokeWidth="2" /></svg>
          Nyux
        </Link>
        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
          <Link href="#home" className="hover:text-blue-700">Home</Link>
          <Link href="#about" className="hover:text-blue-700">About</Link>
          <Link href="#services" className="hover:text-blue-700">Our Services</Link>
          <Link href="#faq" className="hover:text-blue-700">FAQ</Link>
          <Link href="#contact" className="hover:text-blue-700">Contact Us</Link>
        </nav>
        {/* Hamburger - Mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-blue-50 text-blue-700 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Buttons - Desktop */}
        <div className="hidden md:flex gap-3 items-center">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full px-6 py-2 shadow hover:from-blue-600 hover:to-blue-800 transition text-sm">Get in Touch</button>
        </div>
      </div>
      {/* Mobile Dropdown */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40 flex md:hidden" onClick={() => setOpen(false)}>
          <nav
            className="ml-auto w-64 bg-white h-full shadow-2xl flex flex-col gap-6 p-8 text-lg font-medium text-blue-900 animate-slide-in pointer-events-auto"
            onClick={e => e.stopPropagation()}
          >
            <button className="self-end mb-8" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={28} />
            </button>
            <Link href="#home" className="hover:text-blue-700" onClick={() => setOpen(false)}>Home</Link>
            <Link href="#about" className="hover:text-blue-700" onClick={() => setOpen(false)}>About</Link>
            <Link href="#services" className="hover:text-blue-700" onClick={() => setOpen(false)}>Our Services</Link>
            <Link href="#faq" className="hover:text-blue-700" onClick={() => setOpen(false)}>FAQ</Link>
            <Link href="#contact" className="hover:text-blue-700" onClick={() => setOpen(false)}>Contact Us</Link>
            <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full px-6 py-2 shadow hover:from-blue-600 hover:to-blue-800 transition text-base">Get in Touch</button>
          </nav>
        </div>
      )}
    </header>
  );
}