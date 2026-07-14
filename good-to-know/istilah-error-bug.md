# Istilah "Error" & "Bug" di Dunia Kerja IT

Catatan biar gak lupa: kenapa gak semua masalah kode itu cukup disebut "error" doang.

---

## 1. Rantai Sebab-Akibat: Error → Bug → Fault → Failure

Analogi: **motor mogok di jalan.**

| Istilah | Analogi Motor | Artinya |
|---|---|---|
| **Error** | Montir salah pasang baut waktu servis | Tindakan **salah** yang dilakukan manusia (developer salah logika, atau user salah input) |
| **Bug** | Baut yang salah pasang itu sendiri, nempel di motor | Kesalahan yang sudah **menetap** di dalam kode akibat error tadi |
| **Fault** | Motor lagi jalan, baut yang salah mulai goyang | Kondisi ketika bug tadi **aktif/ke-trigger** saat sistem sedang berjalan |
| **Failure** | Motor mendadak mogok, penumpang kena dampaknya | Efek yang akhirnya **dirasakan user** |

**Urutan kejadian:**
```
Error (developer salah ketik rumus)
  → Bug (kode salah itu tersimpan di file)
    → Fault (state sistem lagi salah, pas dijalankan)
      → Failure (user lihat total harga keliru)
```

> Simpelnya:
> - **Error** = penyebab awal (aksi manusia)
> - **Bug** = barang buktinya (nempel di kode)
> - **Fault** = pas lagi kejadian (state sistem)
> - **Failure** = akibat yang dirasain user

---

## 2. Jenis Error dari Sisi Teknis (soal KAPAN ketauannya)

| Jenis Error | Analogi | Penjelasan | Contoh Kalimat |
|---|---|---|---|
| **Syntax Error** | Salah nulis alamat di surat, suratnya gak bisa dikirim | Kode gak bisa di-*compile*/*run* sama sekali karena salah penulisan (kurang kurung, titik koma, dll) | "Ada syntax error di line 45, kurang tutup kurung." |
| **Runtime Error** | Surat terkirim, tapi rumah tujuannya kosong | Kode sempat jalan, tapi nabrak sesuatu yang gak terduga di tengah eksekusi | "Kena runtime error (NullPointerException) pas narik data user yang kosong." |
| **Logical Error** | Surat nyampe lancar, tapi isinya salah/gak nyambung | Program jalan mulus tanpa crash, tapi **hasilnya** keliru (gak sesuai ekspektasi bisnis) | "Ada logical error di fungsi diskon, harusnya potong 10% malah dikali." |

---

## 3. Istilah Melaporkan Masalah (soal SEBERAPA GAWAT)

Daripada bilang: *"Fitur login error nih karena ada bug."* coba lebih spesifik:

- **Issue / Ticket** istilah umum untuk masalah/tugas yang harus diselesaikan.
  > "Aku dapet issue baru di Jira buat benerin fitur checkout."
- **Edge Case** masalah yang cuma muncul di kondisi sangat jarang/ekstrem.
  > "Aman buat transaksi normal, tapi ada edge case kalau tombol bayar diklik 5x berturut-turut dalam 1 detik."
- **Blocker / Critical Bug** masalah besar, bikin tim lain gak bisa kerja atau fitur utama mati total.
  > "API Login down, ini blocker buat tim QA yang mau testing siang ini."
- **Glitch / Flaky** masalah kecil, sifatnya sementara/gak konsisten (kadang error, kadang lancar).
  > "Dashboard-nya agak flaky, kadang datanya muncul kadang harus di-refresh dulu."

---

## 4. Cara Menjelaskan ke Atasan (Non-Teknis)

Hindari istilah teknis (`NullPointerException`, `Stack Overflow`, dll) ke Product Manager/Lead yang non-teknis. Pakai template ini:

> **"Ada [masalahnya] di bagian [fitur apa], dampaknya [apa yang dirasakan user]. Sekarang lagi saya investigasi bagian [kemungkinan penyebabnya]."**

**Contoh:**
> "Ada issue di fitur upload dokumen, user gagal submit kalau ukuran file-nya pas 5MB. Dampaknya mereka gagal daftar. Perkiraan saya karena ada salah konfigurasi batas maksimal request di backend."

---

## Ringkasan Cepat

- **Error** → aksi manusia yang salah (penyebab)
- **Bug** → kesalahan yang tersimpan di kode
- **Fault** → kondisi sistem saat bug aktif
- **Failure** → dampak yang dirasakan user
- **Syntax/Runtime/Logical Error** → dikelompokkan berdasarkan **kapan** ketauannya
- **Issue/Edge Case/Blocker/Flaky** → dikelompokkan berdasarkan **tingkat urgensi & cara lapor**
- Ke atasan non-teknis → pakai bahasa dampak, bukan istilah teknis