'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { weddingDetails } from '@/config/wedding';

export default function Location() {
  const openGoogleMaps = () => {
    const address = encodeURIComponent(`${weddingDetails.venue}, ${weddingDetails.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <section id="location" className="section-padding bg-gradient-to-br from-pink-50 to-red-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Peta Lokasi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Anda dapat menuju lokasi akad maupun resepsi kami dengan bantuan peta dibawah ini. 
            Atau anda bisa buka di Google Maps
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-2">
                      {weddingDetails.venue}
                    </h3>
                    <p className="text-gray-600 mb-4">{weddingDetails.address}</p>
                    <button
                      onClick={openGoogleMaps}
                      className="btn-primary flex items-center gap-2 mx-auto"
                    >
                      <Navigation size={20} />
                      <span>Buka di Google Maps</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Venue Info */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-2">
                      Lokasi Acara
                    </h3>
                    <p className="text-lg font-medium text-gray-700 mb-1">
                      {weddingDetails.venue}
                    </p>
                    <p className="text-gray-600">
                      {weddingDetails.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Event Schedule */}
              <div className="card">
                <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-4">
                  Jadwal Acara
                </h3>
                <div className="space-y-4">
                  {weddingDetails.events.map((event, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-4">
                      <h4 className="font-semibold text-gray-800">{event.title}</h4>
                      <p className="text-gray-600 text-sm">{event.date}</p>
                      <p className="text-gray-600 text-sm">{event.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Directions */}
              <div className="card">
                <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-4">
                  Petunjuk Arah
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>• Lokasi mudah dijangkau dengan kendaraan pribadi maupun transportasi umum</p>
                  <p>• Tersedia area parkir yang luas</p>
                  <p>• Akses jalan yang lancar dan mudah ditemukan</p>
                  <p>• Berada di pusat kota dengan fasilitas lengkap</p>
                </div>
                <button
                  onClick={openGoogleMaps}
                  className="mt-4 btn-outline w-full flex items-center justify-center gap-2"
                >
                  <Navigation size={20} />
                  <span>Dapatkan Petunjuk Arah</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
                Catatan Penting
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Transportasi</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Parkir tersedia untuk 200+ kendaraan</li>
                    <li>• Akses mudah dari tol Cimahi</li>
                    <li>• Transportasi umum: Angkot 01, 02, 03</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Fasilitas</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• AC dan sound system lengkap</li>
                    <li>• Toilet bersih dan nyaman</li>
                    <li>• Area bermain untuk anak-anak</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
