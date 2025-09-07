'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { weddingDetails } from '@/config/wedding';

export default function Events() {
  return (
    <section id="events" className="section-padding bg-gradient-to-br from-pink-50 to-red-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Undangan dan Acara
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bahagia rasanya apabila anda berkenan hadir dan memberikan doa restu kepada kami. 
            Kami mengundang anda untuk hadir dalam acara resepsi pernikahan kami berikut ini
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddingDetails.events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-4">
                  {event.title}
                </h3>
                
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-primary-600" size={18} />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="text-primary-600" size={18} />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary-600 mt-1" size={18} />
                    <div>
                      <p className="font-medium">{event.venue}</p>
                      <p className="text-sm">{event.address}</p>
                    </div>
                  </div>
                </div>

                {event.description && (
                  <p className="mt-4 text-sm text-gray-500 italic">
                    {event.description}
                  </p>
                )}

                <button className="mt-6 btn-outline w-full">
                  Add To Calendar
                </button>
              </div>
            </motion.div>
          ))}
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
              Turut Mengundang
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Kami mengundang keluarga, kerabat, dan sahabat untuk turut berbahagia dalam acara pernikahan kami. 
              Kehadiran dan doa restu dari Bapak/Ibu/Saudara/i merupakan kebahagiaan yang tak ternilai bagi kami.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
