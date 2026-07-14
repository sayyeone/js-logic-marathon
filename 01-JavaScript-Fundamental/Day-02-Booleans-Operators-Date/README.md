<div align="center">
  <h1>JavaScript Bootcamp: Boolean, Operator & Date</h1>
  <sub>Day 2 JavaScript Fundamentals</sub>
</div>

[<< Day 1: Variables & Data Types](../Day-01-Variables-DataTypes/README.md) | [Day 3: Conditionals >>](../Day-03-Conditionals/README.md)

---

- [📔 Day 2](#-day-2)
	- [Boolean](#boolean)
	- [Comparison Operator Lebih Dalam](#comparison-operator-lebih-dalam)
	- [Logical Operator dalam Praktik](#logical-operator-dalam-praktik)
	- [Ternary Operator](#ternary-operator)
	- [Date Object](#date-object)
- [💻 Exercises: Day 2](#-exercises-day-2)
	- [Exercises: Level 1](#exercises-level-1)
	- [Exercises: Level 2](#exercises-level-2)
	- [Exercises: Level 3](#exercises-level-3)
- [🐞 Debugging](#-debugging)
- [🚀 Mini Project](#-mini-project)
- [✅ Definition of Done](#-definition-of-done)

# 📔 Day 2

Day 1 udah bahas cara nyimpen dan ngenalin data. Hari ini soal cara ngambil keputusan dari data itu boolean, comparison, dan gimana JavaScript sebenarnya mengevaluasi kondisi di balik layar. Kita juga bahas `Date` object karena ini sering banget dipakai di project nyata.

## Boolean

Boolean cuma punya dua nilai: `true` atau `false`. Biasanya dihasilkan dari perbandingan atau pengecekan logika, bukan diketik langsung.

```js
let isRaining = true
let hasSnow = false

let age = 20
let isAdult = age >= 18 // true, ini boolean hasil dari perbandingan
```

## Comparison Operator Lebih Dalam

Dari Day 1 kita udah tau `===` dan `!==` itu yang harus dipakai. Sekarang kita bahas lebih dalam soal apa artinya "sama" buat tipe data yang beda-beda.

```js
console.log(5 === 5)         // true
console.log('cat' === 'cat') // true
console.log('5' === 5)       // false beda tipe, nggak ada konversi

console.log(NaN === NaN)     // false! NaN nggak pernah sama dengan dirinya sendiri
console.log(Number.isNaN(NaN)) // true ini cara yang benar buat cek NaN
```

Perilaku `NaN` ini sering bikin bingung. Ini jadi pertanyaan interview yang cukup umum justru karena hasilnya nggak intuitif.

```js
console.log(null === undefined) // false beda tipe
console.log(null == undefined)  // true  loose equality menganggap keduanya "cukup mirip"
```

## Logical Operator dalam Praktik

Selain `&&` / `||` / `!` yang sederhana, operator ini sebenarnya mengembalikan salah satu nilai operand-nya, bukan cuma `true`/`false`. Ini sering dipakai di kode nyata.

```js
let username = ''
let displayName = username || 'Guest'
console.log(displayName) // 'Guest', karena '' itu falsy

let user = { name: 'Dist' }
let userName = user && user.name
console.log(userName) // 'Dist', karena user truthy jadi lanjut evaluasi ke user.name
```

Short-circuit evaluation: `&&` berhenti di nilai falsy pertama, `||` berhenti di nilai truthy pertama.

```js
console.log(false && console.log('ini nggak pernah jalan'))
console.log(true || console.log('ini juga nggak pernah jalan'))
```

## Ternary Operator

Cara ringkas buat nulis `if...else` sederhana dalam satu baris.

```js
let age = 20
let status = age >= 18 ? 'dewasa' : 'anak-anak'
console.log(status) // 'dewasa'
```

Sama aja dengan:
```js
let status
if (age >= 18) {
  status = 'dewasa'
} else {
  status = 'anak-anak'
}
```

Cocok buat kasus sederhana. Kalau ada banyak cabang kondisi, `if...else` biasa lebih gampang dibaca ini bakal dibahas lengkap di Day 3.

## Date Object

JavaScript punya built-in `Date` object buat kerja dengan tanggal dan waktu.

```js
const now = new Date()
console.log(now) // tanggal dan waktu sekarang, misal Sun Jul 05 2026 ...

const specificDate = new Date('2026-07-05')
console.log(specificDate)

console.log(now.getFullYear())  // misal 2026
console.log(now.getMonth())     // 0-11, BUKAN 1-12 Januari itu 0
console.log(now.getDate())      // tanggal, 1-31
console.log(now.getDay())       // hari dalam seminggu, 0 (Minggu) - 6 (Sabtu)
console.log(now.getHours())
console.log(now.getMinutes())
```

`getMonth()` yang mengembalikan 0-11 bukan 1-12 itu gotcha klasik penting diingat karena bisa nyebabin bug off-by-one di kode beneran.

```js
const birthDate = new Date('2000-01-15')
const today = new Date()
const ageInMs = today - birthDate // mengurangi dua Date menghasilkan milidetik
const ageInYears = Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 365))
console.log(ageInYears)
```

---

# 💻 Exercises: Day 2

## Exercises: Level 1

1. Buat dua variabel angka. Bandingkan pakai `>`, `<`, `>=`, `<=`, `===`, dan `!==`, cetak masing-masing hasilnya.
2. Buat variabel `temperature`. Tulis ekspresi ternary yang menghasilkan `'panas'` kalau temperature di atas 30, selain itu `'dingin'`.
3. Buat `Date` object untuk hari ini. Cetak full year, bulan, tanggal, dan hari dalam seminggu secara terpisah.
4. Jelaskan (di `notes.md`, nggak perlu kode) kenapa `now.getMonth()` yang menghasilkan `6` untuk bulan Juli bisa nyebabin bug kalau seseorang mengasumsikan bulan itu 1-indexed.

## Exercises: Level 2

5. Tebak dulu outputnya, baru run buat konfirmasi:
   ```js
   console.log(NaN === NaN)
   console.log(null == undefined)
   console.log(null === undefined)
   console.log('' == false)
   console.log('' === false)
   ```
   Tulis alasan tiap baris di `notes.md`.
6. Buat variabel `username = ''`. Pakai `||` buat kasih nilai fallback `'Anonymous'` ke variabel baru `displayName`, tanpa pakai `if`.
7. Buat object `user` dengan property `email`. Pakai `&&`, tulis ekspresi yang cuma mengakses `user.email` kalau `user`-nya sendiri truthy (simulasikan kasus di mana `user` mungkin `null`).
8. Buat `Date` object dari tanggal lahirmu (atau tanggal bebas), lalu hitung berapa hari yang udah berlalu antara tanggal itu dengan hari ini. (Hint: mengurangi dua `Date` object menghasilkan milidetik.)

## Exercises: Level 3 Interview-style

9. **Safe Property Access** Diberikan sebuah variabel yang mungkin `null`, `undefined`, atau object dengan property `name`, tulis ekspresi pakai `&&` yang aman mengembalikan `name` kalau ada, atau `undefined` kalau nggak ada tanpa nge-throw error, dan tanpa pakai `if`.
10. **Age Validator** Tulis function `isEligibleToVote(birthYear)` yang mengembalikan `true` atau `false` berdasarkan apakah orang itu udah berusia 17 tahun atau lebih di tahun ini, pakai `Date` object buat ambil tahun sekarang secara dinamis (jangan hardcode tahunnya).
11. **NaN Trap** Tulis function `safeDivide(a, b)` yang membagi `a` dengan `b`, tapi mengembalikan string `'Invalid operation'` alih-alih `NaN` kalau hasil pembagiannya bukan angka valid (misal membagi dengan nilai bukan angka).

---

# 🐞 Debugging

Trace manual dulu prediksi outputnya, baru run buat cek.

**Bug 1:**
```js
const price = 100
const discount = 100
const hasDiscount = price - discount

if (hasDiscount) {
  console.log('Diskon diterapkan')
} else {
  console.log('Tidak ada diskon')
}
```

**Bug 2:**
```js
const birthMonth = 12 // Desember
const date = new Date(2026, birthMonth, 25)
console.log(date.getMonth()) // bulan apa yang sebenarnya tercetak, dan kenapa?
```

Pertanyaan reflektif untuk tiap bug:
- Apa yang sebenarnya terjadi kalau kode ini dijalankan?
- Apa akar masalahnya?
- Kenapa perbaikanmu itu yang paling tepat, bukan sekadar nempel fix?

---

# 🚀 Mini Project

**Simple Age & Discount Checker**

Buat program yang:
1. Menerima tahun lahir (variabel hardcode boleh)
2. Menghitung umur saat ini pakai `Date` object (jangan hardcode tahun sekarang)
3. Pakai ternary operator buat menentukan apakah orang itu dapat `'diskon lansia'` (60+), `'tanpa diskon'` (18-59), atau `'tiket anak'` (di bawah 18)
4. Cetak pesan yang rapi, misal `"Umur: 25 Kategori: tanpa diskon"`

Syarat: tahun sekarang harus dari `new Date()`, bukan diketik manual program harus tetap benar tahun depan tanpa perubahan kode.

---

# ✅ Definition of Done

- [ ] Semua soal Level 1 selesai dan outputnya sesuai
- [ ] Minimal 3 dari 4 soal Level 2 selesai, dengan alasan ditulis di `notes.md`
- [ ] Minimal 2 dari 3 soal Level 3 dicoba
- [ ] Kedua bug di section Debugging bisa dijelasin sendiri tanpa liat kode
- [ ] Mini project jalan dengan benar untuk minimal 3 tahun lahir yang berbeda
- [ ] `notes.md` sudah diisi minimal 1 insight baru dan 1 hal yang masih bingung

---

[<< Day 1: Variables & Data Types](../Day-01-Variables-DataTypes/README.md) | [Day 3: Conditionals >>](../Day-03-Conditionals/README.md)