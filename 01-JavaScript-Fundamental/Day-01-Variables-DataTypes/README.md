<div align="center">
  <h1>JavaScript: Variables & Data Types</h1>
</div>

[<< Roadmap](../../README.md) | [Day 2: Booleans operators date >>](../Day-02-Loop/README.md)

---

- [📔 Day 1](#-day-1)
	- [Variables](#variables)
		- [var, let, const](#var-let-const)
		- [Naming Convention](#naming-convention)
	- [Data Types](#data-types)
		- [Primitive Data Types](#primitive-data-types)
		- [typeof Operator](#typeof-operator)
	- [Operators](#operators)
		- [Arithmetic Operators](#arithmetic-operators)
		- [Assignment Operators](#assignment-operators)
		- [Comparison Operators](#comparison-operators)
		- [Logical Operators](#logical-operators)
	- [Type Conversion](#type-conversion)
- [💻 Exercises: Day 1](#-exercises-day-1)
	- [Exercises: Level 1](#exercises-level-1)
	- [Exercises: Level 2](#exercises-level-2)
	- [Exercises: Level 3](#exercises-level-3)
- [🐞 Debugging](#-debugging)
- [🚀 Mini Project](#-mini-project)
- [✅ Definition of Done](#-definition-of-done)

# 📔 Day 1

Sebelum bisa nyuruh komputer ngapa-ngapain, kita butuh cara buat nyimpen data. Di situlah variabel masuk. Hari ini kita bahas dasar paling awal dari JavaScript: cara nyimpen data, jenis-jenis data yang ada, dan cara ngoperasiin data itu.

## Variables

Variabel itu wadah buat nyimpen nilai, supaya nilai itu bisa dipakai atau diubah lagi nanti.

```js
let name = 'Dist'
let age = 20
const country = 'Indonesia'
```

### var, let, const

JavaScript punya tiga cara buat deklarasi variabel: `var`, `let`, dan `const`. Bedanya ada di scope dan apakah nilainya bisa diubah lagi.

```js
var oldWay = 'jarang dipakai lagi di kode modern'

let score = 10
score = 20 // boleh, karena let bisa diubah

const PI = 3.14
PI = 3.15 // ERROR! const nggak bisa diubah setelah didefinisikan
```

Aturan sederhana yang bisa kamu pegang:
- Pakai `const` sebagai default
- Pakai `let` kalau nilainya memang perlu berubah nanti
- Hindari `var` di kode baru (peninggalan JavaScript lama, punya scope yang membingungkan)

```js
const gravity = 9.8       // nggak akan berubah, jadi const
let temperature = 25      // bisa berubah tergantung cuaca, jadi let
```

### Naming Convention

Nama variabel di JavaScript pakai gaya **camelCase**.

```js
let firstName = 'Dist'
let isLoggedIn = true
let totalPrice = 50000
```

Beberapa aturan penamaan:
- Nggak boleh diawali angka (`1name` salah, `name1` benar)
- Case-sensitive (`age` dan `Age` dianggap dua variabel berbeda)
- Nggak boleh pakai reserved word (`let`, `const`, `function`, dst)
- Nama harus deskriptif `x` nggak bilang apa-apa, `userAge` jelas

## Data Types

### Primitive Data Types

JavaScript punya beberapa tipe data dasar (primitive):

```js
// Number
let age = 20
let price = 19.99

// String
let name = 'Dist'
let greeting = "Halo, dunia!"

// Boolean
let isStudent = true
let isGraduated = false

// Undefined - variabel dideklarasikan tapi belum diisi nilai
let something
console.log(something) // undefined

// Null - sengaja diisi "kosong"
let emptyValue = null
```

### typeof Operator

Buat ngecek tipe data sebuah nilai, pakai `typeof`.

```js
console.log(typeof 20)          // 'number'
console.log(typeof 'Dist')      // 'string'
console.log(typeof true)        // 'boolean'
console.log(typeof undefined)   // 'undefined'
console.log(typeof null)        // 'object' (ini quirk lama JS, bukan bug baru)
```

## Operators

### Arithmetic Operators

```js
let a = 10
let b = 3

console.log(a + b)  // 13 (penjumlahan)
console.log(a - b)  // 7  (pengurangan)
console.log(a * b)  // 30 (perkalian)
console.log(a / b)  // 3.333... (pembagian)
console.log(a % b)  // 1  (modulo sisa bagi)
console.log(a ** b) // 1000 (pangkat)
```

### Assignment Operators

```js
let count = 5
count += 1  // sama dengan: count = count + 1  → 6
count -= 2  // sama dengan: count = count - 2  → 4
count *= 3  // sama dengan: count = count * 3  → 12
count /= 4  // sama dengan: count = count / 4  → 3
```

### Comparison Operators

```js
console.log(5 == '5')   // true  → cuma bandingin nilai, tipe diabaikan
console.log(5 === '5')  // false → bandingin nilai DAN tipe data
console.log(5 != '5')   // false
console.log(5 !== '5')  // true

console.log(10 > 5)   // true
console.log(10 <= 10) // true
```

Selalu pakai `===` dan `!==`, bukan `==` dan `!=`. Ini best practice yang bakal sering ditanya pas interview `==` bisa menyebabkan bug tak terduga karena dia mencoba "menebak" konversi tipe.

```js
console.log(0 == false)   // true  (implicit conversion, membingungkan)
console.log(0 === false)  // false (jelas, karena beda tipe)
```

### Logical Operators

```js
let isLoggedIn = true
let hasPermission = false

console.log(isLoggedIn && hasPermission) // false (AND dua-duanya harus true)
console.log(isLoggedIn || hasPermission) // true  (OR salah satu true, cukup)
console.log(!isLoggedIn)                  // false (NOT kebalikan)
```

## Type Conversion

Kadang kita perlu ubah satu tipe data ke tipe lain secara sengaja.

```js
// String ke Number
console.log(Number('20'))     // 20
console.log(Number('abc'))    // NaN (Not a Number)

// Number ke String
console.log(String(20))       // '20'
console.log((20).toString())  // '20'

// Ke Boolean
console.log(Boolean(0))       // false
console.log(Boolean(''))      // false
console.log(Boolean('halo'))  // true
console.log(Boolean(1))       // true
```

Nilai yang otomatis dianggap `false` kalau dikonversi ke Boolean disebut **falsy values**: `0`, `''` (string kosong), `null`, `undefined`, `NaN`, dan `false` itu sendiri. Semua nilai lain dianggap **truthy**.

---

# 💻 Exercises: Day 1

## Exercises: Level 1

1. Deklarasikan variabel `firstName`, `lastName`, `age`, dan `isStudent` dengan nilai sesuai dirimu sendiri, lalu cetak masing-masing pakai `console.log`.
2. Cetak tipe data dari masing-masing variabel di soal nomor 1 pakai `typeof`.
3. Buat dua variabel angka, lalu cetak hasil dari kelima operator aritmatika (`+`, `-`, `*`, `/`, `%`).
4. Buat variabel `radius` (angka bebas), lalu hitung luas lingkaran (`π × r²`, gunakan `3.14` sebagai π) dan cetak hasilnya.
5. Buat variabel `celsius`, lalu konversi ke Fahrenheit dengan rumus `(celsius * 9/5) + 32`, cetak hasilnya.

## Exercises: Level 2

6. Tebak dulu (jangan run dulu), lalu buktikan dengan kode apa hasil dari:
   ```js
   console.log('5' + 3)
   console.log('5' - 3)
   console.log(5 + 3 + '2')
   console.log('5' + 3 + 2)
   ```
   Tulis di `notes.md` kenapa hasilnya bisa begitu.
7. Buat variabel `a = 10` dan `b = '10'`. Bandingkan keduanya pakai `==` dan `===`, cetak hasil dan jelaskan perbedaannya di `notes.md`.
8. Buat variabel `stock = 0`. Cek apakah `stock` itu truthy atau falsy pakai `Boolean(stock)`, lalu jelaskan kenapa itu penting saat kita bikin kondisi `if (stock)` nanti di logika program (misalnya cek stok barang habis).
9. Tentukan tipe data dari nilai-nilai berikut ini TANPA menjalankan kode dulu (tebak manual), baru cocokkan pakai `typeof`:
   ```js
   typeof (10 + 5)
   typeof (10 + '5')
   typeof (true + 1)
   typeof (null)
   typeof (undefined)
   ```

## Exercises: Level 3 Interview-style

10. **BMI Calculator** Buat program yang menghitung Body Mass Index dari `weight` (kg) dan `height` (meter), pakai rumus `weight / (height ** 2)`. Cetak hasilnya dibulatkan 2 angka desimal (cari tahu sendiri method pembulatan yang cocok di JavaScript).
11. **Swap Tanpa Variabel Ketiga** Diberikan dua variabel:
    ```js
    let x = 5
    let y = 10
    ```
    Tukar nilai `x` dan `y` TANPA menggunakan variabel bantuan ketiga (`temp`). Hint: manfaatkan operator aritmatika atau destructuring.
12. **Truthy/Falsy Checker** Buat sebuah variabel dengan nilai bebas (bisa string, number, atau apapun), lalu tulis kondisi yang mencetak `"truthy"` atau `"falsy"` tergantung nilainya, tanpa memanggil `Boolean()` secara eksplisit cukup manfaatkan sifat implicit conversion dari `if`.

---

# 🐞 Debugging

Trace manual dulu di kepala sebelum run kodenya tulis prediksi outputmu, baru cocokkan dengan hasil run yang sebenarnya.

**Bug 1:**
```js
const age = 20
age = 21
console.log(age)
```

**Bug 2:**
```js
let total = '10'
let discount = 2
console.log(total - discount)
console.log(total + discount)
```

Pertanyaan reflektif untuk tiap bug:
- Apa yang sebenarnya terjadi kalau kode ini dijalankan?
- Baris atau konsep mana yang jadi akar masalahnya?
- Kenapa perbaikanmu itu yang paling tepat, bukan sekadar nempel fix?

---

# 🚀 Mini Project

**Simple Profile Card (Console Version)**

Buat program yang menyimpan data profil kamu sendiri di beberapa variabel (`name`, `age`, `job`, `city`, `isLearningJS`), lalu cetak semuanya dalam format rapi menggunakan template literal, contoh:

```
=== PROFILE CARD ===
Nama   : Dist
Umur   : 20 tahun
Kota   : Cirebon
Status : Sedang belajar JavaScript
```

Syarat: minimal gunakan 1 template literal (`` ` `` backtick), dan minimal satu nilai boolean yang dikonversi jadi teks yang lebih manusiawi (misal `true` → `"Sedang belajar JavaScript"`, bukan tercetak `true` mentah).

---

# ✅ Definition of Done

- [ ] Semua soal Level 1 selesai dan outputnya sesuai
- [ ] Minimal 3 dari 4 soal Level 2 selesai, dan hasil analisisnya ditulis di `notes.md`
- [ ] Minimal 2 dari 3 soal Level 3 selesai
- [ ] Kedua bug di section Debugging bisa dijelaskan sendiri tanpa lihat kode
- [ ] Mini project jalan dan formatnya rapi
- [ ] `notes.md` sudah diisi minimal 1 insight baru dan 1 hal yang masih bingung

---

[<< Roadmap](../../README.md) | [Day 2: Loop >>](../Day-02-Loop/README.md)