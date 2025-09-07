# Cara Mengubah Nama Pasangan

Untuk mengubah nama pasangan di seluruh website, Anda hanya perlu mengedit **file environment**:

## 📁 File yang Perlu Diedit

**File:** `.env.local` (buat file ini jika belum ada)

## 🔧 Cara Mengubah Nama

1. **Buat file `.env.local`** di root project (sama level dengan `package.json`)
2. **Copy isi dari `env.template`** ke file `.env.local`
3. **Edit nilai-nilai** di file `.env.local`:

```env
# Nama panggilan (untuk tampilan utama)
NEXT_PUBLIC_BRIDE_NAME=Rara           # ← Ubah nama panggilan mempelai wanita
NEXT_PUBLIC_GROOM_NAME=Adi            # ← Ubah nama panggilan mempelai pria

# Nama lengkap
NEXT_PUBLIC_BRIDE_FULL_NAME=Siti Salamah Azzahra  # ← Ubah nama lengkap mempelai wanita
NEXT_PUBLIC_GROOM_FULL_NAME=Adi Sumaryadi         # ← Ubah nama lengkap mempelai pria

# Nama orang tua
NEXT_PUBLIC_BRIDE_PARENTS=Maman & Imas           # ← Ubah nama orang tua mempelai wanita
NEXT_PUBLIC_GROOM_PARENTS=Sumarmo & Kantun       # ← Ubah nama orang tua mempelai pria
```

## 📝 Contoh Perubahan

### Sebelum (file `.env.local`):
```env
NEXT_PUBLIC_BRIDE_NAME=Rara
NEXT_PUBLIC_GROOM_NAME=Adi
NEXT_PUBLIC_BRIDE_FULL_NAME=Siti Salamah Azzahra
NEXT_PUBLIC_GROOM_FULL_NAME=Adi Sumaryadi
```

### Sesudah (file `.env.local`):
```env
NEXT_PUBLIC_BRIDE_NAME=Sari
NEXT_PUBLIC_GROOM_NAME=Budi
NEXT_PUBLIC_BRIDE_FULL_NAME=Sari Indah Lestari
NEXT_PUBLIC_GROOM_FULL_NAME=Budi Santoso
```

## ✅ Yang Akan Berubah Otomatis

Setelah mengubah nama di file `.env.local`, nama akan otomatis berubah di:

- ✅ **Hero Section** - Nama di halaman utama
- ✅ **Invitation Section** - Nama di bagian undangan
- ✅ **Page Title** - Judul halaman browser
- ✅ **Meta Tags** - SEO dan social media sharing
- ✅ **Footer** - Nama di bagian bawah
- ✅ **Semua komponen** yang menggunakan nama pasangan

## 🚀 Cara Testing

1. **Buat file `.env.local`** di root project
2. **Copy isi dari `env.template`** ke `.env.local`
3. **Edit nama** di file `.env.local`
4. **Restart development server** (`npm run dev`)
5. **Refresh browser**
6. Nama akan berubah di seluruh website

## 💡 Tips

- Gunakan nama panggilan yang pendek untuk `brideName` dan `groomName`
- Gunakan nama lengkap untuk `brideFullName` dan `groomFullName`
- Pastikan nama orang tua sesuai dengan format yang diinginkan
- Setelah mengubah, test di browser untuk memastikan semua berubah dengan benar

## 🔄 Reset ke Default

Jika ingin kembali ke nama default, edit file `.env.local`:

```env
NEXT_PUBLIC_BRIDE_NAME=Rara
NEXT_PUBLIC_GROOM_NAME=Adi
NEXT_PUBLIC_BRIDE_FULL_NAME=Siti Salamah Azzahra
NEXT_PUBLIC_GROOM_FULL_NAME=Adi Sumaryadi
NEXT_PUBLIC_BRIDE_PARENTS=Maman & Imas
NEXT_PUBLIC_GROOM_PARENTS=Sumarmo & Kantun
```

## ⚠️ Penting!

- **File `.env.local`** tidak akan di-commit ke Git (sudah ada di `.gitignore`)
- **Restart server** setelah mengubah environment variables
- **Gunakan prefix `NEXT_PUBLIC_`** untuk variabel yang bisa diakses di client-side
