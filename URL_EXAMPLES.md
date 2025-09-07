# URL Examples untuk Testing

Berikut adalah contoh URL yang bisa digunakan untuk testing fitur query parameters:

## Format URL:
```
http://localhost:3000/?kepada=[NAMA_TAMU]&di=[LOKASI]
```

## Contoh URL:

### 1. Tamu dari Jakarta:
```
http://localhost:3000/?kepada=Budi%20dan%20Ani&di=Jakarta
```

### 2. Tamu dari Bandung:
```
http://localhost:3000/?kepada=Siti%20dan%20Ahmad&di=Bandung
```

### 3. Tamu dari Surabaya:
```
http://localhost:3000/?kepada=Maria%20dan%20Joko&di=Surabaya
```

### 4. Tamu dari Yogyakarta:
```
http://localhost:3000/?kepada=Rina%20dan%20Budi&di=Yogyakarta
```

### 5. Tamu dari Medan:
```
http://localhost:3000/?kepada=Lisa%20dan%20Andi&di=Medan
```

## Cara Menggunakan:

1. Jalankan development server:
   ```bash
   npm run dev
   ```

2. Buka browser dan akses salah satu URL di atas

3. Website akan menampilkan nama tamu dan lokasi sesuai dengan query parameters

## Catatan:

- Gunakan `%20` untuk spasi dalam URL
- Nama dan lokasi akan otomatis di-decode dari URL
- Jika tidak ada query parameters, akan menggunakan data default dari config
- URL encoding akan otomatis ditangani oleh browser
