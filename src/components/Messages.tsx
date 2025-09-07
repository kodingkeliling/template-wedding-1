'use client';

import { motion } from 'framer-motion';
import { Heart, MapPin, Users, Calendar } from 'lucide-react';
import { useMessages } from '@/context/MessagesContext';

export default function Messages() {
  const { messages, loading, error } = useMessages();
  
  console.log('🎨 Messages - Current messages from context:', messages);

  const formatDate = (timestamp: string) => {
    console.log('formatDate received timestamp:', timestamp);
    
    if (!timestamp || timestamp.trim() === '') {
      console.log('Timestamp is empty or null');
      return 'Tanggal tidak tersedia';
    }
    
    const date = new Date(timestamp);
    console.log('Parsed date:', date, 'isValid:', !isNaN(date.getTime()));
    
    if (isNaN(date.getTime())) {
      console.log('Invalid date detected');
      return 'Tanggal tidak valid';
    }
    
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  // Sort messages by timestamp (newest first)
  const sortedMessages = [...messages].sort((a, b) => {
    const timestampA = a.created_at || a.timestamp || '';
    const timestampB = b.created_at || b.timestamp || '';
    
    if (!timestampA && !timestampB) return 0;
    if (!timestampA) return 1;
    if (!timestampB) return -1;
    
    return new Date(timestampB).getTime() - new Date(timestampA).getTime();
  });

  if (loading) {
    return (
      <section id="messages" className="section-padding bg-gradient-to-br from-pink-50 to-red-50">
        <div className="container-custom">
          <div className="text-center">
            <div className="loading-dots mx-auto mb-4">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-600">Memuat pesan...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="messages" className="section-padding bg-gradient-to-br from-pink-50 to-red-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Doa dan Ucapan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kumpulan doa dan ucapan dari keluarga, kerabat, dan sahabat yang turut berbahagia dalam pernikahan kami.
          </p>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 max-w-md mx-auto">
              {error}
            </div>
          </motion.div>
        )}

        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-white/20 max-w-2xl mx-auto">
              <Heart className="w-16 h-16 text-primary-300 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
                Belum ada pesan
              </h3>
              <p className="text-gray-600">
                Saat ini belum ada doa dan harapan yang diberikan oleh teman-teman, keluarga atau kerabat. 
                Ajak teman-teman Anda untuk melihat dan memberikan doa melalui website pernikahan ini.
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="grid gap-6 max-w-4xl mx-auto">
            {sortedMessages.map((message, index) => (
              <motion.div
                key={message.id || `message-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                    message.hadir === true || message.attendance === 'yes'
                      ? 'bg-green-500'
                      : 'bg-red-500'
                  }`}>
                    {(message.nama_lengkap || message.name || 'U').charAt(0).toUpperCase()}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-gray-800">
                      {message.nama_lengkap || message.name || 'Nama tidak tersedia'}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      message.hadir === true || message.attendance === 'yes'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {message.hadir === true || message.attendance === 'yes' ? 'Akan Hadir' : 'Tidak Hadir'}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {message.ucapan || message.content || 'Pesan tidak tersedia'}
                  </p>

                    {/* Message Details */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{formatDate(message.created_at || message.timestamp || message.update_at || '')}</span>
                      </div>
                      
                      {message.location && (
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{message.location}</span>
                        </div>
                      )}
                      
                      {((message.jumlah_tamu || message.guestCount) && (message.jumlah_tamu || message.guestCount)! > 1) && (
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>{message.jumlah_tamu || message.guestCount} orang</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {messages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-outline">
              Lihat Semua Pesan
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
