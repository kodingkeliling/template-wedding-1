export interface RSVPFormData {
  name: string;
  message: string;
  attendance: 'yes' | 'no';
  guestCount?: number;
  phone?: string;
}

export interface WeddingMessage {
  id: string;
  name?: string;
  nama_lengkap?: string;
  content?: string;
  ucapan?: string;
  attendance?: 'yes' | 'no';
  hadir?: boolean;
  timestamp?: string;
  location?: string;
  guestCount?: number;
  jumlah_tamu?: number;
  no_telopon?: string;
  created_at?: string;
  update_at?: string;
  createdAt?: string;
  updateAt?: string;
}

export interface WeddingInvitationData {
  data: WeddingMessage[];
}

export interface CommentFormData {
  nama_lengkap?: string;
  ucapan?: string;
  hadir?: boolean;
  jumlah_tamu?: number;
  no_telopon?: string;
  
  name?: string;
  message?: string;
  attendance?: 'yes' | 'no';
  guestCount?: number;
  phone?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}
