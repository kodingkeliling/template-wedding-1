# Contoh Mengubah Nama Pasangan

## 🎯 Skenario: Mengubah dari "Rara & Adi" ke "Sari & Budi"

### 1. Buat File Environment
Buat file: `.env.local` di root project

### 2. Copy Template
Copy isi dari `env.template` ke `.env.local`

### 3. Ubah Nilai Nama

**SEBELUM (file `.env.local`):**
```env
NEXT_PUBLIC_BRIDE_NAME=Rara
NEXT_PUBLIC_GROOM_NAME=Adi
NEXT_PUBLIC_BRIDE_FULL_NAME=Siti Salamah Azzahra
NEXT_PUBLIC_GROOM_FULL_NAME=Adi Sumaryadi
NEXT_PUBLIC_BRIDE_PARENTS=Maman & Imas
NEXT_PUBLIC_GROOM_PARENTS=Sumarmo & Kantun
```

**SESUDAH (file `.env.local`):**
```env
NEXT_PUBLIC_BRIDE_NAME=Sari
NEXT_PUBLIC_GROOM_NAME=Budi
NEXT_PUBLIC_BRIDE_FULL_NAME=Sari Indah Lestari
NEXT_PUBLIC_GROOM_FULL_NAME=Budi Santoso
NEXT_PUBLIC_BRIDE_PARENTS=Ahmad & Fatimah
NEXT_PUBLIC_GROOM_PARENTS=Surya & Dewi
```

### 4. Restart Server
```bash
npm run dev
```

### 5. Hasil Perubahan

Setelah restart server dan refresh browser, nama akan berubah di:

- **Hero Section**: "Sari & Budi" (bukan "Rara & Adi")
- **Page Title**: "Sari & Budi - Wedding Invitation"
- **Meta Description**: "Undangan pernikahan Sari & Budi"
- **Invitation Section**: Nama lengkap "Sari Indah Lestari" & "Budi Santoso"
- **Footer**: "Sari & Budi" di bagian bawah
- **Semua komponen** yang menampilkan nama pasangan

## 🚀 Testing

1. **Buat file `.env.local`** dengan nama baru
2. **Restart development server**:
   ```bash
   npm run dev
   ```

3. **Buka browser**: `http://localhost:3000`

4. **Lihat perubahan nama** di seluruh website

## 💡 Keuntungan Sistem Environment Variables

- ✅ **Satu tempat edit** - Hanya edit 1 file untuk mengubah semua nama
- ✅ **Konsisten** - Tidak ada nama yang terlewat atau salah ketik
- ✅ **Mudah maintenance** - Gampang diupdate kapan saja
- ✅ **Environment specific** - Bisa beda nama untuk development/production
- ✅ **Secure** - File `.env.local` tidak di-commit ke Git
- ✅ **Next.js compatible** - Menggunakan prefix `NEXT_PUBLIC_`

## 🔄 Kembali ke Default

Untuk kembali ke nama default, edit file `.env.local`:

```env
NEXT_PUBLIC_BRIDE_NAME=Rara
NEXT_PUBLIC_GROOM_NAME=Adi
NEXT_PUBLIC_BRIDE_FULL_NAME=Siti Salamah Azzahra
NEXT_PUBLIC_GROOM_FULL_NAME=Adi Sumaryadi
NEXT_PUBLIC_BRIDE_PARENTS=Maman & Imas
NEXT_PUBLIC_GROOM_PARENTS=Sumarmo & Kantun
```
