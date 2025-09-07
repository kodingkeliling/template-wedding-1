'use client';

import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { weddingDetails } from '@/config/wedding';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Couple Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-3xl font-playfair font-bold mb-4">
                {weddingDetails.brideName} & {weddingDetails.groomName}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i 
                untuk turut berbahagia dalam acara pernikahan kami.
              </p>
              <div className="flex items-center gap-2 text-primary-400">
                <Heart size={20} fill="currentColor" />
                <span className="font-medium">Made with Love</span>
              </div>
            </motion.div>

            {/* Wedding Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-playfair font-semibold mb-4">Acara Pernikahan</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary-400" size={18} />
                  <span className="text-gray-300">{weddingDetails.weddingDate}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary-400 mt-1" size={18} />
                  <div>
                    <p className="text-gray-300 font-medium">{weddingDetails.venue}</p>
                    <p className="text-gray-400 text-sm">{weddingDetails.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-playfair font-semibold mb-4">Kontak</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary-400" size={18} />
                  <span className="text-gray-300">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary-400" size={18} />
                  <span className="text-gray-300">wedding@example.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary-500"></div>
            <Heart className="text-primary-500" size={24} fill="currentColor" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              © {currentYear} {weddingDetails.brideName} & {weddingDetails.groomName}. All rights reserved. Powered by <a href="https://www.kodingkeliling.com" className="text-primary-500">KodingKeliling</a>
            </p>
            <p className="text-gray-500 text-sm">
              Terima kasih telah menjadi bagian dari hari bahagia kami
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
