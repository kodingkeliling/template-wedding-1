'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { weddingDetails } from '@/config/wedding';

export default function LoveStory() {
  return (
    <section id="love-story" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Cerita Cinta
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Setiap kisah cinta memiliki momen-momen indah yang tak terlupakan. 
            Inilah perjalanan cinta kami yang penuh dengan keajaiban.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {weddingDetails.loveStory.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex items-center gap-8`}
            >
              {/* Story Content */}
              <div className="flex-1">
                <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {story.content}
                  </p>
                </div>
              </div>

              {/* Timeline Indicator */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="text-white" size={24} fill="currentColor" />
                </div>
                {index < weddingDetails.loveStory.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-primary-300 to-secondary-300 mt-4"></div>
                )}
              </div>

              {/* Story Number */}
              <div className="flex-1">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-primary-100 mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    Chapter {index + 1}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary-300"></div>
            <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary-300"></div>
          </div>
          <p className="mt-4 text-gray-500 italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, 
            supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang." 
            <br />
            <span className="text-sm">- QS. Ar-Rum: 21</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
