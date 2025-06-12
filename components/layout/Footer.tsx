import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent py-16 px-4">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-stretch justify-between">
        {/* Left: Logo, description, social */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-6 justify-between">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-xl text-[#964604]">NYUX</span>
          </div>
          <p className="text-gray-500 text-sm mb-4 max-w-xs">
            NYUX empowers teams to transform raw data into clear, compelling visuals—making insights easier to share, understand, and act on.
          </p>
          <div className="flex gap-4 text-[#964604] text-xl">
            <a href="#" aria-label="Twitter" className="hover:text-[#953735]"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#953735]"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#953735]"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub" className="hover:text-[#953735]"><FaGithub /></a>
          </div>
        </div>
        {/* Center: Product, Resources, Company */}
        <div className="flex-[2] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-8 md:mt-0">
          <div>
            <div className="font-semibold text-gray-900 mb-3">Information</div>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#964604] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#964604] transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#964604] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-900 mb-3">Resources</div>
            <ul className="space-y-2">
              <li><a href="/#faq" className="hover:text-[#964604] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#964604] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#964604] transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-[#964604] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-8 px-2 text-gray-400 text-xs">
        <div>&copy; {currentYear} NYUX Consultancy. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#964604]">Privacy Policy</a>
          <a href="#" className="hover:text-[#964604]">Terms of Service</a>
          <a href="#" className="hover:text-[#964604]">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}