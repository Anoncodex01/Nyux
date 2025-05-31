import React from 'react';
import Link from 'next/link';
import { Home, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Breadcrumbs */}
      <section className="relative w-full h-[320px] md:h-[380px] flex flex-col items-center justify-center text-center overflow-hidden mb-12">
        <img src="/images/hero.webp" alt="Contact Us background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-[#1a2236]/90 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 mt-10 md:mt-16">Contact Us</h1>
          <div className="flex justify-center">
            <nav className="text-white/90 text-base font-medium bg-[#964604]/80 rounded-xl px-6 py-2 shadow-sm backdrop-blur-md flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1 text-white/90">
                <Home className="w-4 h-4 mr-1" /> Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white font-semibold">Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#f7e7d6]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#964604] mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#964604] focus:border-transparent transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#964604] focus:border-transparent transition"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#964604] focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#964604] focus:border-transparent transition"
                  placeholder="+255 123 456 789"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#964604] focus:border-transparent transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#964604] to-[#953735] text-white font-semibold rounded-full px-8 py-4 shadow hover:from-[#953735] hover:to-[#964604] transition text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#f7e7d6]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#964604] mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f7e7d6] p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-[#964604]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">Mji Mwema Road, Near Kwa Mwingira Bus Stop<br />P.O. Box 36317, Dar es Salaam, Tanzania</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f7e7d6] p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-[#964604]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600">+255 764 286 025<br />+255 714 540 331</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f7e7d6] p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-[#964604]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600">lanyunir@nyuxcompany.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f7e7d6] p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-[#964604]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#f7e7d6]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#964604] mb-6">Find Us</h2>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.752656905785!2d39.2084!3d-6.7924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDcnMzIuNiJTIDM5wrAxMiczMC4yIkU!5e0!3m2!1sen!2stz!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <div className="bg-gradient-to-r from-[#964604]/90 to-[#953735]/90 rounded-2xl shadow-xl p-10 md:p-16 flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to transform your organization? Let's talk.</h2>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <a href="/contact" className="bg-white text-[#964604] font-semibold rounded-full px-8 py-3 shadow hover:bg-[#f7e7d6] transition text-lg">Contact Us</a>
            <a href="/contact?type=proposal" className="bg-[#953735] text-white font-semibold rounded-full px-8 py-3 shadow hover:bg-[#964604] transition text-lg">Request a Proposal</a>
          </div>
        </div>
      </section>
    </div>
  );
} 