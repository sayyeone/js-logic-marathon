<div align="center">
  <h1>JavaScript Bootcamp: Higher Order Function</h1>
  <sub>Day 8 JavaScript Fundamentals</sub>
</div>

[<< Day 7: Scope & Object](../Day-07-Object/README.md) | [Day 9: Sets and Maps >>](../Day-09-Sets-and-Maps/README.md)

---

- [📔 Day 8](#-day-8)
	- [Apa itu Higher Order Function](#apa-itu-higher-order-function)
	- [Callback](#callback)
	- [Function yang Mengembalikan Function](#function-yang-mengembalikan-function)
	- [setInterval dan setTimeout](#setinterval-dan-settimeout)
	- [forEach](#foreach)
	- [map](#map)
	- [filter](#filter)
	- [reduce](#reduce)
	- [every](#every)
	- [some](#some)
	- [find](#find)
	- [findIndex](#findindex)
	- [sort dengan Callback](#sort-dengan-callback)
- [💻 Exercises: Day 8](#-exercises-day-8)
- [🐞 Debugging](#-debugging)
- [🚀 Mini Project](#-mini-project)
- [✅ Definition of Done](#-definition-of-done)

# 📔 Day 8

Ini salah satu topik paling penting di seluruh bootcamp ini. Higher Order Function adalah dasar dari **functional programming** di JavaScript cara nulis kode yang lebih ringkas dan deklaratif dibanding loop manual yang udah kita pelajari di Day 5. Setelah hari ini, sebagian besar kode yang kita tulis buat memproses array bakal pakai method-method ini, bukan `for` loop lagi.

## Apa itu Higher Order Function

Higher Order Function adalah function yang **menerima function lain sebagai parameter**, atau **mengembalikan function** sebagai hasilnya (atau keduanya).

```js
// callback bisa nama apa aja
const callback = (n) => {
  return n ** 2
}

// function yang menerima function lain sebagai parameter -> Higher Order Function
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3)) // 27 -> (3^2) * 3
```

## Callback

Callback adalah function yang dikirim sebagai argument ke function lain. Kita udah nyentuh konsep ini secara nggak langsung, tapi sekarang kita bahas eksplisit karena ini pattern inti dari semua method array yang bakal kita pelajari hari ini.

```js
const numbers = [1, 2, 3, 4, 5]

const sumArray = (arr) => {
  let sum = 0
  const callback = function (element) {
    sum += element
  }
  arr.forEach(callback)
  return sum
}

console.log(sumArray(numbers)) // 15
```

Biasanya callback ditulis langsung inline, nggak perlu dipisah jadi variabel:

```js
const sumArray = (arr) => {
  let sum = 0
  arr.forEach(function (element) {
    sum += element
  })
  return sum
}

console.log(sumArray([1, 2, 3, 4])) // 10
```

## Function yang Mengembalikan Function

Higher Order Function juga bisa mengembalikan function lain, bukan cuma menerima.

```js
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatever = (t) => {
      return 2 * n + 3 * m + t
    }
    return doWhatever
  }
  return doSomething
}

console.log(higherOrder(2)(3)(10)) // 2*2 + 3*3 + 10 = 23
```

Pattern ini nggak terlalu sering dipakai langsung di kode sehari-hari sebagai pemula, tapi penting dipahami konsepnya karena ini fondasi dari closure (topik yang bakal kita bahas nanti).

## setInterval dan setTimeout

Dua Higher Order Function bawaan JavaScript buat menjadwalkan eksekusi kode.

**`setTimeout`** menjalankan function sekali, setelah menunggu durasi tertentu (dalam milidetik).

```js
function sayHello() {
  console.log('Halo')
}

setTimeout(sayHello, 2000) // 'Halo' muncul setelah menunggu 2 detik
```

**`setInterval`** menjalankan function berulang kali, dengan jeda tertentu di antara setiap eksekusi.

```js
function sayHello() {
  console.log('Halo')
}

setInterval(sayHello, 1000) // 'Halo' muncul setiap 1 detik, terus-menerus
```

`setInterval` akan terus jalan sampai dihentikan manual pakai `clearInterval()` ini di luar cakupan hari ini, tapi penting diketahui biar nggak kaget kalau kodenya "nggak berhenti-berhenti".

## forEach

Iterasi setiap elemen array, menjalankan callback untuk masing-masing elemen. Nggak mengembalikan apa-apa (return `undefined`) cuma buat menjalankan efek samping seperti `console.log`.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.forEach((num) => console.log(num))
// 1 2 3 4 5

let sum = 0
numbers.forEach((num) => (sum += num))
console.log(sum) // 15
```

Callback `forEach` sebenarnya bisa menerima tiga parameter: elemen, index, dan array itu sendiri.

```js
const countries = ['Finland', 'Sweden', 'Norway']
countries.forEach((country, index) => {
  console.log(index, country)
})
// 0 Finland
// 1 Sweden
// 2 Norway
```

## map

Iterasi array dan **mengembalikan array baru** hasil transformasi tiap elemen. Ini pattern yang sama seperti loop-dengan-push yang udah kita bahas di Day 5, cuma jauh lebih ringkas.

```js
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare) // [1, 4, 9, 16, 25]

const names = ['Asabeneh', 'Mathias', 'Elias']
const upperNames = names.map((name) => name.toUpperCase())
console.log(upperNames) // ['ASABENEH', 'MATHIAS', 'ELIAS']
```

`map` bisa dirangkai (chained) dengan method string/array lain:

```js
const countries = ['Albania', 'Bolivia', 'Canada']
const firstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
console.log(firstThreeLetters) // ['ALB', 'BOL', 'CAN']
```

## filter

Menyaring elemen array berdasarkan kondisi, mengembalikan array baru berisi elemen yang memenuhi kondisi itu.

```js
const countries = ['Finland', 'Sweden', 'Ireland', 'Norway']
const containingLand = countries.filter((country) => country.includes('land'))
console.log(containingLand) // ['Finland', 'Ireland']

const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 }
]
const highScores = scores.filter((s) => s.score > 80)
console.log(highScores) // [{ name: 'Asabeneh', score: 95 }]
```

## reduce

Method paling fleksibel "mereduksi" seluruh array jadi satu nilai tunggal (bisa angka, string, object, apapun). Callback-nya menerima `accumulator` (nilai yang terus terbawa antar iterasi) dan `current` (elemen saat ini).

```js
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum) // 15
```

Parameter kedua (`0` di atas) adalah **nilai awal** dari accumulator. Sangat disarankan selalu diisi kalau nggak diisi, accumulator otomatis mulai dari elemen pertama array, dan kalau array-nya kosong, JavaScript bakal error.

```js
const words = ['Halo', 'dunia', 'JavaScript']
const sentence = words.reduce((acc, cur) => acc + ' ' + cur)
console.log(sentence) // 'Halo dunia JavaScript'
```

## every

Mengecek apakah **semua** elemen memenuhi kondisi. Return boolean.

```js
const names = ['Asabeneh', 'Mathias', 'Elias']
const allStrings = names.every((name) => typeof name === 'string')
console.log(allStrings) // true

const numbers = [2, 4, 6, 7]
const allEven = numbers.every((n) => n % 2 === 0)
console.log(allEven) // false, karena 7 ganjil
```

## some

Mengecek apakah **minimal satu** elemen memenuhi kondisi. Return boolean.

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const someAreLong = names.some((name) => name.length > 7)
console.log(someAreLong) // true, karena 'Asabeneh' dan 'Mathias' panjangnya lebih dari 7
```

Beda `every` dan `some`: `every` butuh **semua** elemen cocok baru `true`, `some` cukup **satu aja** yang cocok udah `true`.

## find

Mengembalikan **elemen pertama** yang memenuhi kondisi. Kalau nggak ketemu, return `undefined`.

```js
const ages = [24, 22, 25, 32, 18]
const youngAge = ages.find((age) => age < 20)
console.log(youngAge) // 18

const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 }
]
const found = scores.find((s) => s.score > 90)
console.log(found) // { name: 'Asabeneh', score: 95 }
```

## findIndex

Sama seperti `find`, tapi mengembalikan **posisi index**-nya, bukan elemennya. Kalau nggak ketemu, return `-1`.

```js
const names = ['Asabeneh', 'Mathias', 'Elias']
const index = names.findIndex((name) => name.length > 7)
console.log(index) // 0

const notFound = names.findIndex((name) => name === 'Zzz')
console.log(notFound) // -1
```

## sort dengan Callback

Kita udah nyentuh `sort()` di Day 4 dan tau kalau default-nya mengurutkan sebagai string, yang salah buat angka. Sekarang kita benerin masalah itu pakai **compare function** sebagai callback.

Compare function menerima dua elemen (`a` dan `b`), dan aturannya:
- Return **negatif** → `a` diurutkan sebelum `b`
- Return **positif** → `a` diurutkan setelah `b`
- Return **0** → urutan keduanya tetap

```js
const numbers = [9.81, 3.14, 100, 37]

// Ascending (kecil ke besar)
numbers.sort((a, b) => a - b)
console.log(numbers) // [3.14, 9.81, 37, 100]

// Descending (besar ke kecil)
numbers.sort((a, b) => b - a)
console.log(numbers) // [100, 37, 9.81, 3.14]
```

Untuk mengurutkan array of object, kita bandingkan berdasarkan salah satu key-nya:

```js
const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Elias', age: 22 }
]

users.sort((a, b) => a.age - b.age)
console.log(users)
// [{ name: 'Elias', age: 22 }, { name: 'Brook', age: 50 }, { name: 'Asabeneh', age: 150 }]
```

`sort()` **mengubah array aslinya langsung** (mutable), sama seperti yang udah kita bahas soal `splice()` di Day 4 kalau butuh array asli tetap utuh, salin dulu sebelum sort.

---

# 💻 Exercises: Day 8

## Level 1

1. Diberikan `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, pakai `map` untuk membuat array baru berisi kuadrat dari setiap angka, lalu pakai `filter` untuk mengambil cuma yang hasilnya lebih dari 20.
2. Diberikan `const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']`, jelaskan (di `notes.md`) perbedaan `find` dan `findIndex`, lalu buktikan dengan kode: cari nama pertama yang panjangnya lebih dari 6 huruf pakai `find`, lalu cari posisinya pakai `findIndex`.

## Level 2

3. Diberikan array berikut:
   ```js
   const products = [
     { product: 'banana', price: 3 },
     { product: 'mango', price: 6 },
     { product: 'avocado', price: 8 },
     { product: 'coffee', price: 10 }
   ]
   ```
   Cari total harga semua produk dengan cara **chaining** minimal dua method (`map`, `filter`, atau `reduce`) dalam satu ekspresi.
4. Diberikan `const ages = [24, 22, 25, 32, 35, 18]`, urutkan dari yang termuda ke tertua pakai `sort` dengan compare function. Buktikan dulu (di `notes.md`) kenapa `sort()` tanpa compare function bakal menghasilkan urutan yang salah untuk array ini.

## Level 3 Interview-style

5. **every vs some** Diberikan `const scores = [85, 90, 78, 92, 88]`, tulis dua ekspresi: satu pakai `every` untuk mengecek apakah SEMUA nilai lulus (≥75), satu lagi pakai `some` untuk mengecek apakah ADA nilai sempurna (100). Jelaskan di `notes.md` kenapa hasilnya beda meskipun sama-sama mengecek kondisi pada array yang sama.

---

# 🐞 Debugging

Trace manual dulu prediksi outputnya, baru run buat cek.

```js
const numbers = [10, 5, 40, 25, 1]

const sorted = numbers.sort()
console.log(sorted)
```

Pertanyaan reflektif:
- Apa yang sebenarnya terjadi kalau kode ini dijalankan? Urutannya bakal seperti apa?
- Apa akar masalahnya?
- Kenapa perbaikanmu itu yang paling tepat?

---

# 🚀 Mini Project

**Student Score Analyzer**

Diberikan data berikut:

```js
const students = [
  { name: 'Dist', score: 88 },
  { name: 'Budi', score: 65 },
  { name: 'Ani', score: 92 },
  { name: 'Citra', score: 70 },
  { name: 'Deni', score: 55 }
]
```

Buat program yang, menggunakan method-method hari ini (bukan `for` loop manual):

1. Menghasilkan array nama-nama siswa yang lulus (skor ≥ 70) pakai `filter` + `map`
2. Menghitung rata-rata skor seluruh siswa pakai `reduce`
3. Mencari siswa dengan skor tertinggi pakai `sort` (jangan ubah array `students` asli salin dulu)
4. Mengecek apakah SEMUA siswa lulus pakai `every`, dan apakah ADA yang mendapat nilai di atas 90 pakai `some`
5. Cetak semua hasil dengan format yang rapi

Syarat: minimal gunakan 5 dari 8 method yang dipelajari hari ini (`forEach`, `map`, `filter`, `reduce`, `every`, `some`, `find`, `sort`).

---

# ✅ Definition of Done

- [ ] Kedua soal Level 1 selesai dan outputnya sesuai
- [ ] Kedua soal Level 2 selesai, dengan penjelasan di `notes.md`
- [ ] Soal Level 3 dicoba, dengan penjelasan every vs some di `notes.md`
- [ ] Bug di section Debugging bisa dijelasin sendiri tanpa liat kode
- [ ] Mini project jalan dan menggunakan minimal 5 method berbeda
- [ ] `notes.md` sudah diisi minimal 1 insight baru dan 1 hal yang masih bingung

---

[<< Day 7: Scope & Object](../Day-07-Object/README.md) | [Day 9: Sets and Maps >>](../Day-09-Sets-and-Maps/README.md)