'use client';

import { motion } from 'framer-motion';
import { weddingDetails } from '@/config/wedding';

export default function Invitation() {
  return (
    <section id="invitation" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-8">
            {weddingDetails.brideName} & {weddingDetails.groomName}
          </h2>
          
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 mb-12">
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
              {weddingDetails.invitationText}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bride */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={weddingDetails.brideImage}
                    alt={weddingDetails.brideFullName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">♀</span>
                </div>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-2">
                {weddingDetails.brideFullName}
              </h3>
              <p className="text-gray-600 mb-4">Putri dari</p>
              <p className="text-lg font-medium text-gray-700">
                {weddingDetails.brideParents}
              </p>
            </motion.div>

            {/* Groom */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={weddingDetails.groomImage}
                    alt={weddingDetails.groomFullName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">♂</span>
                </div>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-2">
                {weddingDetails.groomFullName}
              </h3>
              <p className="text-gray-600 mb-4">Putra dari</p>
              <p className="text-lg font-medium text-gray-700">
                {weddingDetails.groomParents}
              </p>
            </motion.div>
          </div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary-300"></div>
              <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary-300"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
