'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Mail, MapPin, Phone, User } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              We'd love to<br />hear from you!
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Whether you have a project in mind, want to collaborate, or just have a question, feel free to reach out. Our team is ready to help.
            </p>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-full border border-gray-300 bg-transparent px-6 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-gray-300 bg-transparent px-6 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <textarea
                placeholder="Write your message"
                className="w-full rounded-2xl border border-gray-300 bg-transparent px-6 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition min-h-[120px]"
              />
              <button
                type="submit"
                className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition flex items-center gap-2"
              >
                SEND
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </form>
                </div>
          {/* Right: Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-xl mx-auto">
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              <div className="font-semibold text-gray-900 flex items-center">Managing Director</div>
              <div className="font-semibold text-gray-900 flex items-center gap-2"><User className="w-5 h-5 text-blue-600" />Lanyuni Robert</div>
              <div className="font-semibold text-gray-900">Phone</div>
              <div className="text-gray-700">
                +255 764 286 025<br />+255 714 540 331
              </div>
              <div className="font-semibold text-gray-900">Email</div>
                <div>
                <a href="mailto:lanyunir@nyuxcompany.com" className="text-blue-600 underline font-medium">lanyunir@nyuxcompany.com</a>
              </div>
              <div className="font-semibold text-gray-900">Office Address</div>
              <div className="text-gray-700">
                Mji Mwema Road, Near Kwa Mwingira Bus Stop<br />P.O. Box 36317, Dar es Salaam, Tanzania
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}