'use client';

import { Mail, Phone, MapPin, Building2, User } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Contact us today and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
            <div className="space-y-6">
              {/* Managing Director */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Managing Director</h3>
                  <p className="text-gray-700">Lanyuni Robert</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-700">
                    <Link href="tel:+255714540331" className="hover:text-blue-600">+255 714 540 331</Link>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-700">
                    <Link href="mailto:Info@nyux.co.tz" className="hover:text-blue-600">
                      Info@nyux.co.tz
                    </Link>
                  </p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Office Address</h3>
                  <p className="text-gray-700">
                    Mji Mwema Road, Near Kwa Mwingira Bus Stop<br />
                    P.O. Box 36317<br />
                    Dar es Salaam, Tanzania
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden h-[500px] shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8754728208366!2d39.2088!3d-6.7924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDcnMzIuNiJTIDM5wrAxMiczMS43IkU!5e0!3m2!1sen!2stz!4v1635774243789!5m2!1sen!2stz"
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
    </section>
  );
} 