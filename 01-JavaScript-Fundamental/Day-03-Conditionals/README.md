<div align="center">
  <h1>JavaScript Bootcamp: Conditionals</h1>
  <sub>Day 3 JavaScript Fundamentals</sub>
</div>

[<< Day 2: Boolean, Operator & Date](../Day-02-Booleans-Operators-Date/README.md) | [Day 4: Array >>](../Day-04-Array/README.md)

---

- [📔 Day 3](#-day-3)
	- [if Statement](#if-statement)
	- [if...else](#ifelse)
	- [if...else if...else](#ifelse-ifelse)
	- [Nested Conditionals](#nested-conditionals)
	- [switch Statement](#switch-statement)
	- [Kapan Pakai if vs switch vs ternary](#kapan-pakai-if-vs-switch-vs-ternary)
- [💻 Exercises: Day 3](#-exercises-day-3)
	- [Exercises: Level 1](#exercises-level-1)
	- [Exercises: Level 2](#exercises-level-2)
	- [Exercises: Level 3](#exercises-level-3)
- [🐞 Debugging](#-debugging)
- [🚀 Mini Project](#-mini-project)
- [✅ Definition of Done](#-definition-of-done)

# 📔 Day 3

Day 2 udah bahas boolean dan ternary buat kondisi sederhana. Hari ini kita masuk ke cara program bikin keputusan yang lebih kompleks beberapa cabang kondisi, kondisi bersarang, dan alternatif lain selain `if...else` yaitu `switch`.

## if Statement

Bentuk paling dasar jalankan blok kode hanya kalau kondisinya `true`.

```js
const age = 20

if (age >= 18) {
  console.log('Kamu sudah dewasa')
}
```

Kalau kondisinya `false`, blok kode di dalam `if` dilewati begitu aja, nggak ada yang dijalankan.

## if...else

Nambahin jalur alternatif kalau kondisinya `false`.

```js
const age = 15

if (age >= 18) {
  console.log('Kamu sudah dewasa')
} else {
  console.log('Kamu masih di bawah umur')
}
```

## if...else if...else

Buat lebih dari dua kemungkinan hasil.

```js
const score = 75

if (score >= 90) {
  console.log('Grade: A')
} else if (score >= 80) {
  console.log('Grade: B')
} else if (score >= 70) {
  console.log('Grade: C')
} else {
  console.log('Grade: D')
}
// Grade: C
```

Urutan kondisi itu penting. JavaScript mengecek dari atas ke bawah dan berhenti di kondisi pertama yang `true`.

```js
const score = 95

// SALAH urutan kebalik
if (score >= 70) {
  console.log('Grade: C') // ini yang kecetak, padahal score-nya 95!
} else if (score >= 90) {
  console.log('Grade: A') // nggak pernah sampai ke sini
}
```

## Nested Conditionals

`if` di dalam `if`. Berguna kalau ada kondisi yang cuma relevan setelah kondisi lain terpenuhi.

```js
const age = 20
const hasTicket = true

if (age >= 18) {
  if (hasTicket) {
    console.log('Boleh masuk')
  } else {
    console.log('Beli tiket dulu')
  }
} else {
  console.log('Belum cukup umur')
}
```

Nested conditional yang terlalu dalam bikin kode susah dibaca. Biasanya bisa disederhanakan pakai `&&`:

```js
if (age >= 18 && hasTicket) {
  console.log('Boleh masuk')
}
```

## switch Statement

Alternatif buat `if...else if` yang panjang, ketika kita membandingkan satu variabel dengan banyak kemungkinan nilai spesifik.

```js
const day = 3

switch (day) {
  case 1:
    console.log('Senin')
    break
  case 2:
    console.log('Selasa')
    break
  case 3:
    console.log('Rabu')
    break
  default:
    console.log('Hari nggak dikenal')
}
// Rabu
```

`break` itu penting kalau lupa, eksekusi bakal "jatuh" (fall through) ke `case` berikutnya meskipun kondisinya nggak cocok.

```js
const day = 2

switch (day) {
  case 1:
    console.log('Senin')
  case 2:
    console.log('Selasa') // ini jalan
  case 3:
    console.log('Rabu')   // ini JUGA jalan, karena nggak ada break!
    break
  default:
    console.log('Hari nggak dikenal')
}
// Selasa
// Rabu
```

Fall-through ini kadang memang disengaja (misal beberapa `case` share logic yang sama), tapi kalau nggak sengaja, ini jadi sumber bug yang sering luput.

## Kapan Pakai if vs switch vs ternary

- **Ternary**: satu kondisi, dua hasil, sederhana cocok buat assignment langsung
- **if...else if**: kondisi berdasarkan range atau ekspresi boolean kompleks
- **switch**: satu variabel dibandingkan dengan banyak nilai spesifik yang diketahui

---

# 💻 Exercises: Day 3

## Exercises: Level 1

1. Buat variabel `temperature`. Tulis `if...else` yang mencetak `'Panas'` kalau di atas 30, `'Dingin'` kalau di bawah 15, `'Normal'` untuk selain itu.
2. Buat variabel `day` (angka 1-7). Pakai `switch` buat mencetak nama harinya (Senin-Minggu).

## Exercises: Level 2

3. Tebak dulu, baru buktikan apa output dari kode `switch` di bawah ini, dan kenapa:
   ```js
   const value = 2
   switch (value) {
     case 1:
       console.log('satu')
     case 2:
       console.log('dua')
     case 3:
       console.log('tiga')
       break
     case 4:
       console.log('empat')
   }
   ```
4. Buat dua variabel boolean `isRaining` dan `hasUmbrella`. Tulis satu kondisi (pakai `&&`, tanpa nested `if`) buat menentukan apakah orang itu `'basah'` atau `'kering'`.

## Exercises: Level 3 Interview-style

5. **Leap Year Checker** Tulis function `isLeapYear(year)` yang menentukan apakah sebuah tahun adalah tahun kabisat. Aturan: habis dibagi 4, TAPI kalau habis dibagi 100 harus juga habis dibagi 400. (Contoh: 2000 kabisat, 1900 bukan kabisat, 2024 kabisat.)

---

# 🐞 Debugging

Trace manual dulu prediksi outputnya, baru run buat cek.

```js
const score = 85

if (score >= 70) {
  console.log('Grade: C')
} else if (score >= 80) {
  console.log('Grade: B')
} else if (score >= 90) {
  console.log('Grade: A')
}
```

Pertanyaan reflektif:
- Apa yang sebenarnya terjadi kalau kode ini dijalankan?
- Apa akar masalahnya?
- Kenapa perbaikanmu itu yang paling tepat?

---

# 🚀 Mini Project

**Simple Grading System**

Buat program yang:
1. Menyimpan beberapa nilai siswa dalam variabel terpisah (misal `mathScore`, `scienceScore`, `englishScore`)
2. Untuk masing-masing nilai, tentukan grade-nya (A/B/C/D) pakai `if...else if`
3. Hitung rata-rata dari ketiga nilai tersebut
4. Berdasarkan rata-rata, tentukan status kelulusan: `'Lulus dengan pujian'` (rata-rata 85+), `'Lulus'` (rata-rata 60-84), atau `'Tidak lulus'` (di bawah 60)
5. Cetak semua hasil dalam format yang rapi

Syarat: minimal gunakan satu `if...else if...else` dan satu operator logika (`&&` atau `||`) di suatu bagian program.

---

# ✅ Definition of Done

- [ ] Kedua soal Level 1 selesai dan outputnya sesuai
- [ ] Kedua soal Level 2 selesai
- [ ] Soal Level 3 dicoba (minimal ada percobaan kode yang bisa ditrace bareng kalau stuck)
- [ ] Bug di section Debugging bisa dijelasin sendiri tanpa liat kode
- [ ] Mini project jalan dengan benar untuk minimal 2 kombinasi nilai berbeda
- [ ] `notes.md` sudah diisi minimal 1 insight baru dan 1 hal yang masih bingung

---

[<< Day 2: Boolean, Operator & Date](../Day-02-Booleans-Operators-Date/README.md) | [Day 4: Array >>](../Day-04-Array/README.md)