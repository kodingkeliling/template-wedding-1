import { WEDDING_COUPLE } from './global';

export interface WeddingDetails {
  brideName: string;
  groomName: string;
  brideFullName: string;
  groomFullName: string;
  brideParents: string;
  groomParents: string;
  weddingDate: string;
  weddingTime: string;
  venue: string;
  address: string;
  description: string;
  coverImage: string;
  brideImage: string;
  groomImage: string;
  loveStory: {
    title: string;
    content: string;
  }[];
  events: {
    title: string;
    date: string;
    time: string;
    venue: string;
    address: string;
    description?: string;
  }[];
  gallery: {
    id: string;
    src: string;
    alt: string;
  }[];
  bankInfo: {
    bankName: string;
    accountNumber: string;
    accountName: string;
  }[];
  invitationText: string;
  guestName?: string;
  guestLocation?: string;
}

export const weddingDetails: WeddingDetails = {
  brideName: WEDDING_COUPLE.brideName,
  groomName: WEDDING_COUPLE.groomName,
  brideFullName: WEDDING_COUPLE.brideFullName,
  groomFullName: WEDDING_COUPLE.groomFullName,
  brideParents: WEDDING_COUPLE.brideParents,
  groomParents: WEDDING_COUPLE.groomParents,
  weddingDate: 'Selasa, 01 April 2025',
  weddingTime: '12:00 WIB',
  venue: 'Aula Masjid ABRI Cimahi',
  address: 'Jalan Gatot Subroto Kota Cimahi',
  description: 'Dengan Rahmat Allah yang Maha Kuasa InsyaAllah kami akan melangsungkan pernikahan',
  coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
  brideImage: '/images/foto-wanita.png',
  groomImage: '/images/foto-pria.png',
  loveStory: [
    {
      title: 'Pertama Kali Berjumpa',
      content: 'Maha kuasa Allah yang telah mempertemukan kami dalam sebuah moment yang tak direncanakan bertemu pada awal tahun 2012 lalu, wajah cantik Siti Salamah Azzahra dan pribadi yang santun itu masih teringat jelas dalam ingatan Adi. Sayang, tak sempat berbincang saat itu, dan waktupun berganti hari, berganti bulan dan berganti tahun, tidak ada komunikasi diantara kami, karena memang kami tak tau kabar masing-masing dan bisa dibilang belum begitu kenal.'
    },
    {
      title: 'Adi Mengunjungi Rumah Rara Pertama Kali',
      content: 'Setelah sekian lama tidak berkomunikasi, akhirnya Allah mempertemukan kami kembali. Adi memberanikan diri untuk mengunjungi rumah Rara untuk pertama kalinya. Pertemuan yang sangat berkesan dan menjadi awal dari perjalanan cinta kami.'
    },
    {
      title: 'Prosesi Lamaran',
      content: 'Setelah melalui perjalanan yang panjang, akhirnya Adi memutuskan untuk melamar Rara. Prosesi lamaran berlangsung dengan khidmat dan penuh kebahagiaan dihadiri oleh keluarga besar kedua belah pihak.'
    },
    {
      title: 'Kami Dipingit Satu Sama Lain',
      content: 'Sebelum hari pernikahan, kami menjalani masa pingitan sesuai dengan tradisi. Masa yang penuh dengan persiapan dan doa untuk memulai kehidupan baru sebagai suami istri.'
    }
  ],
  events: [
    {
      title: 'Akad Nikah',
      date: 'Selasa, 01 April 2025',
      time: '12:00 - selesai',
      venue: 'Aula Masjid ABRI Cimahi',
      address: 'Jalan Gatot Subroto Kota Cimahi',
      description: 'Prosesi akad nikah akan dilaksanakan dengan khidmat'
    },
    {
      title: 'Resepsi',
      date: 'Sabtu, 17 Agustus 2024',
      time: '12:00 - selesai',
      venue: 'Aula Masjid ABRI Cimahi',
      address: 'Jalan Gatot Subroto Kota Cimahi',
      description: 'Resepsi pernikahan akan diadakan dengan meriah'
    },
    {
      title: 'Ngunduh Mantu',
      date: 'Rabu, 30 September 2020',
      time: '08:00 - selesai',
      venue: 'Rumah Keluarga',
      address: 'Alamat keluarga',
      description: 'Acara ngunduh mantu sebagai tradisi keluarga'
    }
  ],
  gallery: [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
      alt: 'Wedding Photo 1'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop',
      alt: 'Wedding Photo 2'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Wedding Photo 3'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop',
      alt: 'Wedding Photo 4'
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=400&fit=crop',
      alt: 'Wedding Photo 5'
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
      alt: 'Wedding Photo 6'
    }
  ],
  bankInfo: [
    {
      bankName: 'Bank Syariah Indonesia',
      accountNumber: '12345678910',
      accountName: 'Siti Salamah Azzahra & Adi Sumaryadi'
    },
    {
      bankName: 'Bank Mandiri',
      accountNumber: '12345678910',
      accountName: 'Siti Salamah Azzahra & Adi Sumaryadi'
    }
  ],
  invitationText: 'Assalamu\'alaikum Warahmatullah\n\nDengan Rahmat Allah yang Maha Kuasa InsyaAllah kami akan melangsungkan pernikahan pada:\nSelasa, 01 April 2025',
  guestName: 'Budi dan Ani',
  guestLocation: 'Bandung'
};

export const weddingColors = {
  primary: '#DC2626', // Red
  secondary: '#EC4899', // Pink
  accent: '#000000', // Black
  background: '#FFFFFF', // White
  text: '#1F2937', // Dark gray for text
  lightPink: '#FCE7F3', // Light pink for backgrounds
  gold: '#F59E0B', // Gold
};

export const weddingFonts = {
  heading: 'Playfair Display, serif',
  body: 'Inter, sans-serif',
  decorative: 'Great Vibes, cursive',
};
