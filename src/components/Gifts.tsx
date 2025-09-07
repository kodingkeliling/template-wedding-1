'use client';

import { motion } from 'framer-motion';
import { Copy, Heart, Gift, CheckCircle } from 'lucide-react';
import { weddingDetails } from '@/config/wedding';
import { useState } from 'react';

export default function Gifts() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="gifts" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Kirim Kado
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Terima kasih atas doa dan restu yang telah anda berikan, jika anda ingin mengirimkan kado nikah, 
            silahkan kirim dengan cara dibawah ini. Sebelumnya, kami mengucapkan banyak terima kasih.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Bank Transfer Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {weddingDetails.bankInfo.map((bank, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gift className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-4">
                    {bank.bankName}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Nomor Rekening</p>
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-lg font-mono font-semibold text-gray-800">
                          {bank.accountNumber}
                        </p>
                        <button
                          onClick={() => copyToClipboard(bank.accountNumber, index)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        >
                          {copiedIndex === index ? (
                            <CheckCircle className="text-green-600" size={16} />
                          ) : (
                            <Copy className="text-gray-600" size={16} />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Atas Nama</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {bank.accountName}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => copyToClipboard(bank.accountNumber, index)}
                    className="mt-6 btn-outline w-full"
                  >
                    {copiedIndex === index ? 'Tersalin!' : 'Copy Rekening'}
                  </button>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Digital Gift Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 shadow-lg border border-white/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
                Kado Nikah Digital
              </h3>
              <p className="text-gray-600 mb-6">
                Untuk mengirimkan Kado Nikah kepada kami, silahkan kirimkan melalui platform digital berikut:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Saweria</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Platform donasi digital yang aman dan mudah
                  </p>
                  <button className="btn-primary w-full">
                    Kirim via Saweria
                  </button>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Bank Transfer</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Transfer langsung ke rekening Bank Mandiri
                  </p>
                  <div className="text-center">
                    <p className="font-mono text-lg font-semibold text-gray-800 mb-2">
                      1320006284864
                    </p>
                    <button
                      onClick={() => copyToClipboard('1320006284864', 999)}
                      className="btn-outline w-full"
                    >
                      {copiedIndex === 999 ? 'Tersalin!' : 'Copy Nomor'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary-300"></div>
              <Heart className="text-primary-600" size={24} fill="currentColor" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary-300"></div>
            </div>
            <p className="mt-4 text-gray-600 italic">
              "Dan barang apa saja yang kamu nafkahkan, maka Allah akan menggantinya dan Dia-lah Pemberi rezeki yang sebaik-baiknya."
              <br />
              <span className="text-sm">- QS. Saba': 39</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
