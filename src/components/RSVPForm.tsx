'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart, Send, CheckCircle, XCircle } from 'lucide-react';
import { submitRSVP } from '@/lib/api';
import { CommentFormData } from '@/types';
import { useMessages } from '@/context/MessagesContext';

export default function RSVPForm() {
  const { addMessage } = useMessages();
  const [formData, setFormData] = useState<CommentFormData>({
    name: '',
    message: '',
    attendance: 'yes',
    guestCount: 1,
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Transform formData to match spreadsheet field format
      const apiPayload = {
        nama_lengkap: formData.name,
        ucapan: formData.message,
        hadir: formData.attendance === 'yes',
        jumlah_tamu: formData.guestCount,
        no_telopon: formData.phone
      };
      
      console.log('🚀 RSVPForm - Sending payload:', apiPayload);
      const response = await submitRSVP(apiPayload);
      console.log('✅ RSVPForm - Received response:', response);
      setSubmitStatus('success');
      
      // Tambahkan message baru ke UI secara optimistik
      // Extract the actual message data from the response
      const messageData = (response as any).data || response;
      console.log('📤 RSVPForm - Adding message to context:', messageData);
      addMessage(messageData);
      
      setFormData({
        name: '',
        message: '',
        attendance: 'yes',
        guestCount: 1,
        phone: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Terjadi kesalahan');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guestCount' ? parseInt(value) || 1 : value
    }));
  };

  return (
    <section id="rsvp" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Kirim doa dan Ucapan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tuliskan sesuatu ucapan berupa harapan ataupun doa untuk kedua mempelai.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Masukkan nomor telepon Anda"
                />
              </div>

              {/* Guest Count */}
              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                  Jumlah Tamu
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} orang</option>
                  ))}
                </select>
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Apakah anda akan hadir memenuhi undangan saya? *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    formData.attendance === 'yes' 
                      ? 'border-green-500 bg-green-50 text-green-700' 
                      : 'border-gray-300 hover:border-green-300'
                  }`}>
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-2">
                      <CheckCircle size={20} />
                      <span className="font-medium">Saya Akan hadir</span>
                    </div>
                  </label>
                  
                  <label className={`relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    formData.attendance === 'no' 
                      ? 'border-red-500 bg-red-50 text-red-700' 
                      : 'border-gray-300 hover:border-red-300'
                  }`}>
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-2">
                      <XCircle size={20} />
                      <span className="font-medium">Saya Tidak Akan hadir</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Ucapan dan Doa *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tuliskan ucapan dan doa terbaik Anda untuk kedua mempelai..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary-fixed gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-dots">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>KIRIM</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700"
                >
                  <CheckCircle size={20} />
                  <span>Terima kasih! Ucapan dan konfirmasi kehadiran Anda telah berhasil dikirim.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700"
                >
                  <XCircle size={20} />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
