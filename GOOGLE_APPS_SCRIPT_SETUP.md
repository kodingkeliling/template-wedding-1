# Google Apps Script Setup untuk Wedding Website

## 🚀 Setup Google Apps Script

### 1. Buat Google Spreadsheet

1. Buka [Google Sheets](https://sheets.google.com)
2. Buat spreadsheet baru
3. Beri nama: "Wedding RSVP Data"
4. **PENTING**: Buat sheet dengan nama "wedding3" (tanpa tanda kutip)
5. **PENTING**: Set header di baris pertama dengan field berikut:
   - A1: `id`
   - B1: `nama_lengkap`
   - C1: `no_telopon`
   - D1: `jumlah_tamu`
   - E1: `hadir`
   - F1: `ucapan`
   - G1: `created_at`
   - H1: `update_at`

### 2. Buat Google Apps Script

1. Di Google Sheets, klik **Extensions** → **Apps Script**
2. Hapus semua kode default
3. Copy kode dari file `google-apps-script-correct.js`
4. Paste ke editor Apps Script
5. Simpan dengan nama: "Wedding RSVP API"

### 3. Deploy sebagai Web App

1. Klik **Deploy** → **New deployment**
2. Pilih **Web app** sebagai type
3. Set konfigurasi:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Klik **Deploy**
5. **Copy URL** yang dihasilkan

### 4. Update Environment Variable

1. Buka file `.env.local` di project
2. Update `NEXT_PUBLIC_SPREADSHEET_API_URL` dengan URL dari step 3:

```env
NEXT_PUBLIC_SPREADSHEET_API_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## 📊 Struktur Data Google Sheets

Google Apps Script akan otomatis membuat kolom berikut di sheet "wedding3":

| Kolom | Deskripsi | Tipe Data | Contoh |
|-------|-----------|-----------|---------|
| `id` | Unique ID | String | `msg_1757227907545` |
| `nama_lengkap` | Nama lengkap tamu | String | `Budi dan Ani` |
| `no_telopon` | Nomor telepon | String | `08123456789` |
| `jumlah_tamu` | Jumlah tamu | Number | `2` |
| `hadir` | Konfirmasi kehadiran | Boolean | `true` atau `false` |
| `ucapan` | Pesan/ucapan | String | `Selamat menikah!` |
| `created_at` | Waktu dibuat | String | `2025-01-07T10:30:00.000Z` |
| `update_at` | Waktu update | String | `2025-01-07T10:30:00.000Z` |

## 🔧 API Endpoints

### GET - Ambil Data Messages
```
GET https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?sheet=wedding3
```

**Response:**
```json
{
  "data": [
    {
      "id": "msg_1757227907545",
      "nama_lengkap": "Budi dan Ani",
      "no_telopon": "08123456789",
      "jumlah_tamu": 2,
      "hadir": true,
      "ucapan": "Selamat menikah!",
      "created_at": "2025-01-07T10:30:00.000Z",
      "update_at": "2025-01-07T10:30:00.000Z"
    }
  ]
}
```

### POST - Submit RSVP
```
POST https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?sheet=wedding3
```

**Request Body:**
```json
{
  "action": "rsvp",
  "data": {
    "nama_lengkap": "Budi dan Ani",
    "no_telopon": "08123456789",
    "jumlah_tamu": 2,
    "hadir": true,
    "ucapan": "Selamat menikah!",
    "timestamp": "2025-01-07T10:30:00.000Z"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "RSVP submitted successfully",
  "data": {
    "id": "msg_1757227907545",
    "nama_lengkap": "Budi dan Ani",
    "no_telopon": "08123456789",
    "jumlah_tamu": 2,
    "hadir": true,
    "ucapan": "Selamat menikah!",
    "created_at": "2025-01-07T10:30:00.000Z",
    "update_at": "2025-01-07T10:30:00.000Z"
  }
}
```

## 🧪 Testing

### 1. Test GET Request
```bash
curl "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?sheet=wedding3"
```

### 2. Test POST Request
```bash
curl -X POST "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?sheet=wedding3" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "rsvp",
    "data": {
      "nama_lengkap": "Test User",
      "no_telopon": "08123456789",
      "jumlah_tamu": 1,
      "hadir": true,
      "ucapan": "Test message",
      "timestamp": "2025-01-07T10:30:00.000Z"
    }
  }'
```

## 🔄 Update Script

Jika perlu update script:

1. Edit kode di Apps Script editor
2. Simpan perubahan
3. Klik **Deploy** → **Manage deployments**
4. Klik **Edit** pada deployment yang ada
5. Pilih **New version**
6. Klik **Deploy**

## ⚠️ Troubleshooting

### Error: "Script not found"
- Pastikan URL Apps Script benar
- Pastikan deployment sudah dibuat dengan akses "Anyone"

### Error: "Sheet not found"
- Pastikan parameter `?sheet=wedding3` ada di URL
- Pastikan sheet "wedding3" sudah dibuat di Google Sheets
- Script tidak akan membuat sheet baru, harus dibuat manual

### Error: "Invalid action"
- Pastikan request body memiliki `action: "rsvp"`
- Pastikan struktur data sesuai dengan yang diharapkan

### Data tidak muncul di Google Sheets
- Cek permission Apps Script
- Pastikan script sudah di-deploy
- Cek logs di Apps Script editor

## 📝 Logs dan Debugging

1. Buka Apps Script editor
2. Klik **Executions** untuk melihat log
3. Cek error messages jika ada masalah
4. Gunakan `console.log()` untuk debugging

## 🔒 Security Notes

- URL Apps Script bersifat public (karena akses "Anyone")
- Data tersimpan di Google Sheets Anda
- Tidak ada authentication untuk API ini
- Pertimbangkan rate limiting jika diperlukan
