# 🎉 Setup Instructions - Wedding Website

## 📋 Langkah-langkah Setup yang Benar

### 1. Setup Google Sheets

1. **Buat Google Spreadsheet baru**
   - Buka [Google Sheets](https://sheets.google.com)
   - Klik "Blank" untuk membuat spreadsheet baru
   - Beri nama: "Wedding RSVP Database"

2. **Buat Sheet "wedding3"**
   - Di bagian bawah, klik "+" untuk menambah sheet
   - Rename sheet menjadi "wedding3" (tanpa tanda kutip)
   - **PENTING**: Sheet harus bernama "wedding3" persis

3. **Set Header di Baris Pertama**
   - Di sheet "wedding3", set header di baris pertama:
   - A1: `id`
   - B1: `nama_lengkap`
   - C1: `no_telopon`
   - D1: `jumlah_tamu`
   - E1: `hadir`
   - F1: `ucapan`
   - G1: `created_at`
   - H1: `update_at`

### 2. Setup Google Apps Script

1. **Buka Apps Script**
   - Di Google Sheets, klik **Extensions** → **Apps Script**
   - Atau buka langsung [script.google.com](https://script.google.com)

2. **Copy Kode yang Benar**
   - Hapus semua kode default
   - Copy kode dari file `google-apps-script-correct.js`
   - Paste ke editor Apps Script

3. **Simpan Project**
   - Klik **Save** (Ctrl+S)
   - Beri nama: "Wedding RSVP API"

### 3. Deploy Google Apps Script

1. **Deploy sebagai Web App**
   - Klik **Deploy** → **New deployment**
   - Pilih **Web app** sebagai type
   - Set konfigurasi:
     - **Execute as**: Me (your email)
     - **Who has access**: Anyone
   - Klik **Deploy**

2. **Copy URL**
   - Copy URL yang dihasilkan
   - URL akan seperti: `https://script.google.com/macros/s/AKfycb.../exec`

### 4. Update Environment Variable

1. **Buat file .env.local**
   - Di root project, buat file `.env.local`
   - Tambahkan:
   ```env
   NEXT_PUBLIC_SPREADSHEET_API_URL=https://script.google.com/macros/s/AKfycbzwG4jbFpb4N-WiXa4-H-GoYYG3FeY7WOHv5wxIxDu4t2X3NvFQeGaOhe-JfZIhtEDCZA/exec
   ```

2. **Restart Development Server**
   - Stop server dengan Ctrl+C
   - Jalankan `npm run dev` lagi

## 🧪 Testing

### Test 1: Cek Sheet
- Buka Google Sheets
- Pastikan sheet "wedding3" ada
- Pastikan header sudah benar

### Test 2: Test API
```bash
curl "https://script.google.com/macros/s/AKfycbzwG4jbFpb4N-WiXa4-H-GoYYG3FeY7WOHv5wxIxDu4t2X3NvFQeGaOhe-JfZIhtEDCZA/exec?sheet=wedding3"
```

### Test 3: Test RSVP
- Buka website
- Isi form RSVP
- Cek apakah data masuk ke Google Sheets

## ⚠️ Troubleshooting

### Masalah: Sheet baru terus dibuat
**Solusi**: 
- Pastikan sheet "wedding3" sudah dibuat manual
- Script tidak akan membuat sheet baru, hanya menggunakan yang sudah ada

### Masalah: Field tidak sesuai
**Solusi**:
- Pastikan header di Google Sheets sesuai dengan yang diminta
- Gunakan kode dari `google-apps-script-correct.js`

### Masalah: Data tidak masuk
**Solusi**:
- Cek URL Apps Script di .env.local
- Pastikan deployment sudah dibuat dengan akses "Anyone"
- Cek logs di Apps Script editor

## 📊 Struktur Data yang Benar

| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `id` | String | Unique ID (auto-generated) |
| `nama_lengkap` | String | Nama lengkap tamu |
| `no_telopon` | String | Nomor telepon |
| `jumlah_tamu` | Number | Jumlah tamu |
| `hadir` | Boolean | true/false |
| `ucapan` | String | Pesan/ucapan |
| `created_at` | String | Timestamp dibuat |
| `update_at` | String | Timestamp update |

## 🎯 Checklist Setup

- [ ] Google Sheets dibuat
- [ ] Sheet "wedding3" dibuat
- [ ] Header di-set dengan benar
- [ ] Google Apps Script dibuat
- [ ] Kode dari `google-apps-script-correct.js` di-copy
- [ ] Script di-deploy sebagai Web App
- [ ] URL di-copy ke .env.local
- [ ] Development server di-restart
- [ ] Test API berhasil
- [ ] Test RSVP berhasil

## 📞 Support

Jika masih ada masalah:
1. Cek logs di Apps Script editor
2. Pastikan semua langkah diikuti dengan benar
3. Cek apakah URL Apps Script benar
4. Pastikan sheet "wedding3" sudah dibuat
