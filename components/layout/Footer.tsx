import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8 text-gray-500 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-semibold text-gray-700">
          &copy; {currentYear} NYUX Consultancy
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}