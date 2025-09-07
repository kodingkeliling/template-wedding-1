'use client';

import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { IoIosArrowDown } from 'react-icons/io';
import { weddingDetails } from '@/config/wedding';
import { getGuestInfoFromUrl, formatGuestName, formatGuestLocation } from '@/lib/url-params';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [guestInfo, setGuestInfo] = useState({ name: '', location: '' });

  useEffect(() => {
    const info = getGuestInfoFromUrl();
    setGuestInfo({
      name: formatGuestName(info.name) || weddingDetails.guestName || '',
      location: formatGuestLocation(info.location) || weddingDetails.guestLocation || ''
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary-200 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-secondary-200 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 border-2 border-primary-200 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-secondary-200 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-primary-200 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 border-2 border-secondary-200 rounded-full"></div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-primary-300/60"
          animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={20} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 text-secondary-300/60"
          animate={{ y: [8, -8, 8], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={16} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 text-primary-300/60"
          animate={{ y: [-12, 12, -12], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={14} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 text-secondary-300/60"
          animate={{ y: [6, -6, 6], rotate: [0, -3, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={18} fill="currentColor" />
        </motion.div>
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-gradient mb-6 leading-tight">
            {weddingDetails.brideName} & {weddingDetails.groomName}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light tracking-wide">
            Akan segera melangsungkan pernikahan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 text-lg md:text-xl text-gray-700 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/30">
            <Calendar className="text-primary-600" size={24} />
            <span className="font-semibold">{weddingDetails.weddingDate}</span>
          </div>
        </motion.div>

        {/* Guest Information */}
        {guestInfo.name && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 max-w-lg mx-auto">
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-3 tracking-wide">Kepada</p>
                <h3 className="text-3xl font-playfair font-semibold text-gray-800 mb-4 leading-tight">
                  {guestInfo.name}
                </h3>
                {guestInfo.location && (
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <MapPin size={18} className="text-primary-500" />
                    <span className="font-medium">di {guestInfo.location}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <button 
            onClick={() => document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20"
          >
            Buka Undangan
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-400 hover:text-primary-600 transition-colors duration-300 cursor-pointer bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30"
            onClick={() => document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <IoIosArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
