import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const SPREADSHEET_API_URL = process.env.NEXT_PUBLIC_SPREADSHEET_API_URL || 'https://script.google.com/macros/s/AKfycbxC9TDCUaBS9xybpn-4sfr_UKl92lbGRdh3YHLF9CjA5wnz_0SVNMPKgQ30aGiCqBlxvA/exec';

const RSVPSchema = z.object({
  // New field format (prioritas)
  nama_lengkap: z.string().min(1, 'Nama harus diisi').optional(),
  ucapan: z.string().min(1, 'Pesan harus diisi').optional(),
  hadir: z.boolean().optional(),
  jumlah_tamu: z.number().min(1).max(10).optional(),
  no_telopon: z.string().optional(),
  
  // Legacy field format (fallback)
  name: z.string().min(1, 'Nama harus diisi').optional(),
  message: z.string().min(1, 'Pesan harus diisi').optional(),
  attendance: z.enum(['yes', 'no']).optional(),
  guestCount: z.number().min(1).max(10).optional(),
  phone: z.string().optional(),
}).refine((data) => {
  // At least one name field must be provided
  return data.nama_lengkap || data.name;
}, {
  message: "Nama harus diisi",
  path: ["nama_lengkap"]
}).refine((data) => {
  // At least one message field must be provided
  return data.ucapan || data.message;
}, {
  message: "Pesan harus diisi",
  path: ["ucapan"]
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('🔧 API Route - Raw request body:', body);
    
    // Validate the request body
    const validatedData = RSVPSchema.parse(body);
    console.log('🔧 API Route - Validated data:', validatedData);
    
    // Prepare data for Google Sheets sesuai dengan struktur yang diminta
    // Struktur: id, nama_lengkap, no_telopon, jumlah_tamu, hadir, ucapan, created_at, update_at
    const sheetData = {
      action: 'rsvp',
      data: {
        nama_lengkap: validatedData.nama_lengkap || validatedData.name,
        no_telopon: validatedData.no_telopon || validatedData.phone || '',
        jumlah_tamu: validatedData.jumlah_tamu || validatedData.guestCount || 1,
        hadir: validatedData.hadir !== undefined ? validatedData.hadir : (validatedData.attendance === 'yes'),
        ucapan: validatedData.ucapan || validatedData.message,
        created_at: new Date().toISOString(),
        update_at: new Date().toISOString(),
      }
    };
    
    console.log('🔧 API Route - Sheet data to send:', sheetData);
    
    // Send to Google Sheets dengan parameter sheet
    const urlWithParams = `${SPREADSHEET_API_URL}?sheet=wedding3`;
    const response = await fetch(urlWithParams, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'id-ID',
      },
      body: JSON.stringify(sheetData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('🔧 API Route - Google Sheets response:', result);
    
    return NextResponse.json({
      success: true,
      message: 'RSVP berhasil dikirim! Terima kasih atas konfirmasinya.',
      data: result
    });
    
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Data tidak valid',
        error: error.errors.map(e => e.message).join(', ')
      }, { status: 400 });
    }
    
    return NextResponse.json({
      success: false,
      message: 'Terjadi kesalahan saat mengirim RSVP. Silakan coba lagi.',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
