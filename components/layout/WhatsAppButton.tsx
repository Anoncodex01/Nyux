'use client';

import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/255714540331"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
} 