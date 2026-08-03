<div align="center">
  <h1>JavaScript Bootcamp: Function</h1>
  <sub>Day 6 — JavaScript Fundamentals</sub>
</div>

[<< Day 5: Loop](../Day-05-Loop/README.md) | [Day 7: Object >>](../Day-07-Object/README.md)

---

- [📔 Day 6](#-day-6)
	- [Apa itu Function](#apa-itu-function)
	- [Function Declaration](#function-declaration)
	- [Parameter dan Argument](#parameter-dan-argument)
	- [Function dengan Parameter Array](#function-dengan-parameter-array)
	- [Return Value](#return-value)
	- [Function Expression](#function-expression)
	- [Arrow Function](#arrow-function)
	- [Default Parameter](#default-parameter)
	- [Rest Parameter (Parameter Tak Terbatas)](#rest-parameter-parameter-tak-terbatas)
- [💻 Exercises: Day 6](#-exercises-day-6)
- [🐞 Debugging](#-debugging)
- [🚀 Mini Project](#-mini-project)
- [✅ Definition of Done](#-definition-of-done)

# 📔 Day 6

Sejauh ini kita udah nulis kode yang jalan sekali dari atas ke bawah. Function itu cara buat bikin blok kode yang bisa dipakai ulang berkali-kali, dengan input yang berbeda-beda. Ini konsep paling penting di seluruh pemrograman — hampir semua kode nyata dibangun dari kumpulan function kecil yang saling manggil.

Function bikin kode:
- Lebih rapi dan gampang dibaca
- Bisa dipakai ulang (reusable), nggak perlu copy-paste logic yang sama
- Lebih gampang di-test dan di-debug, karena logic-nya terisolasi

## Apa itu Function

Function adalah blok kode yang bisa dipanggil berkali-kali. Function dideklarasikan sekali, dipanggil (invoke) berapa kali pun dibutuhkan.

```js
function sayHello() {
  console.log('Halo!')
}

sayHello() // memanggil function
sayHello() // bisa dipanggil lagi
sayHello() // dan lagi
```

Kalau function-nya cuma dideklarasikan tapi nggak dipanggil, kodenya nggak akan pernah jalan.

## Function Declaration

Cara paling umum buat mendeklarasikan function.

```js
function functionName() {
  // kode di sini
}

functionName() // dipanggil pakai nama function + tanda kurung
```

Contoh tanpa parameter:

```js
function printFullName() {
  let firstName = 'Dist'
  let lastName = 'Wijaya'
  console.log(firstName + ' ' + lastName)
}

printFullName() // 'Dist Wijaya'
```

## Parameter dan Argument

Parameter adalah "slot input" yang didefinisikan saat bikin function. Argument adalah nilai sebenarnya yang dikirim saat function dipanggil.

```js
function greet(name) { // 'name' adalah parameter
  console.log(`Halo, ${name}!`)
}

greet('Dist') // 'Dist' adalah argument
// Halo, Dist!
```

Function bisa punya lebih dari satu parameter:

```js
function addTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}

addTwoNumbers(10, 20) // 30
```

## Function dengan Parameter Array

Salah satu parameter yang sering dipakai adalah array itu sendiri. Function menerima satu array, lalu isinya diproses pakai loop di dalam function tersebut — ini pattern yang bakal sering banget kamu pakai.

```js
function sumArrayValues(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

const numbers = [1, 2, 3, 4, 5]
console.log(sumArrayValues(numbers)) // 15
```

```js
function printArrayItems(arr) {
  for (const item of arr) {
    console.log(item)
  }
}

printArrayItems(['apple', 'banana', 'mango'])
// apple
// banana
// mango
```

Bedanya dengan rest parameter (`...args`) yang kita bahas di bawah: di sini kita **secara eksplisit mengirim satu array** sebagai argument (`sumArrayValues(numbers)`), bukan mengirim banyak nilai terpisah yang otomatis "ditangkap" jadi array oleh function-nya.

## Return Value

Kalau function nggak punya `return`, hasilnya `undefined` walaupun di dalamnya ada `console.log`. `return` itu yang bikin nilai dari dalam function bisa "dibawa keluar" dan dipakai di tempat lain.

```js
// TANPA return — cuma cetak, nilainya nggak bisa dipakai lagi
function addTwoNumbersV1(a, b) {
  console.log(a + b)
}
let result1 = addTwoNumbersV1(2, 3) // 5 tercetak, tapi...
console.log(result1) // undefined!

// DENGAN return — nilainya bisa disimpan dan dipakai lagi
function addTwoNumbersV2(a, b) {
  return a + b
}
let result2 = addTwoNumbersV2(2, 3)
console.log(result2) // 5 — ini benar-benar tersimpan
```

Begitu `return` dieksekusi, function langsung berhenti — kode setelah `return` di dalam function itu nggak akan pernah jalan.

```js
function example() {
  return 'selesai'
  console.log('ini nggak akan pernah tercetak')
}
```

## Function Expression

Function yang disimpan ke dalam variabel. Function-nya sendiri nggak punya nama (anonymous), tapi diakses lewat nama variabelnya.

```js
const square = function (n) {
  return n * n
}

console.log(square(4)) // 16
```

Bedanya dengan function declaration: function expression **nggak bisa dipanggil sebelum baris deklarasinya** (function declaration bisa, karena ada proses "hoisting" — ini bakal dibahas lebih detail nanti).

## Arrow Function

Cara alternatif nulis function, sintaksnya lebih ringkas. Sering banget dipakai di kode modern.

```js
// Function declaration biasa
function square(n) {
  return n * n
}

// Arrow function — versi penuh
const square2 = (n) => {
  return n * n
}

// Arrow function — versi ringkas (kalau isinya cuma satu baris return, bisa dihilangkan return dan kurung kurawalnya)
const square3 = (n) => n * n

console.log(square(4), square2(4), square3(4)) // 16 16 16
```

Contoh dengan array (pattern yang udah kita sentuh di Day 5):

```js
const upperCaseAll = (arr) => {
  const newArr = []
  for (const item of arr) {
    newArr.push(item.toUpperCase())
  }
  return newArr
}

const countries = ['finland', 'sweden', 'norway']
console.log(upperCaseAll(countries)) // ['FINLAND', 'SWEDEN', 'NORWAY']
```

## Default Parameter

Parameter bisa dikasih nilai default, yang dipakai kalau argument-nya nggak diisi saat function dipanggil.

```js
function greetings(name = 'Guest') {
  return `${name}, selamat datang!`
}

console.log(greetings())        // 'Guest, selamat datang!'
console.log(greetings('Dist'))  // 'Dist, selamat datang!'
```

```js
function calculateAge(birthYear, currentYear = 2026) {
  return currentYear - birthYear
}

console.log(calculateAge(2000))       // 26 — pakai currentYear default
console.log(calculateAge(2000, 2030)) // 30 — currentYear di-override
```

## Rest Parameter (Parameter Tak Terbatas)

Kadang kita nggak tau berapa banyak argument yang bakal dikirim ke function. Rest parameter (`...`) menangkap semua argument jadi satu array.

```js
const sumAll = (...numbers) => {
  let sum = 0
  for (const num of numbers) {
    sum += num
  }
  return sum
}

console.log(sumAll(1, 2, 3))         // 6
console.log(sumAll(1, 2, 3, 4, 5))   // 15
console.log(sumAll(10))               // 10
```

`...numbers` di sini menangkap semua argument yang dikirim jadi satu array bernama `numbers`, jadi function-nya bisa nerima berapa pun jumlah argumentnya.

---

# 💻 Exercises: Day 6

## Level 1

1. Buat function `areaOfRectangle(length, width)` yang menghitung luas persegi panjang (`length x width`).
2. Buat function `convertCelsiusToFahrenheit(celsius)` yang mengonversi suhu Celsius ke Fahrenheit, rumus: `(celsius * 9/5) + 32`.

## Level 2

3. Buat function `sumArrayValues(arr)` yang menerima array angka sebagai parameter, lalu mengembalikan total penjumlahan semua isinya (pakai loop di dalam function).
4. Buat function `calculateBMI(weight, height)` yang menghitung BMI (`weight / (height * height)`), lalu berdasarkan hasilnya kembalikan kategori: `'Underweight'` (di bawah 18.5), `'Normal'` (18.5-24.9), `'Overweight'` (25-29.9), atau `'Obese'` (30 ke atas). Tulis sebagai arrow function.

## Level 3 — Interview-style

5. **Find Max Tanpa Math.max** — Buat function `findMax(a, b, c)` yang mengembalikan nilai terbesar dari tiga angka, TANPA menggunakan `Math.max()`.

---

# 🐞 Debugging

Trace manual dulu — prediksi outputnya, baru run buat cek.

```js
function multiplyByTwo(num) {
  console.log(num * 2)
}

const result = multiplyByTwo(5)
console.log(result + 10)
```

Pertanyaan reflektif:
- Apa yang sebenarnya terjadi kalau kode ini dijalankan?
- Apa akar masalahnya?
- Kenapa perbaikanmu itu yang paling tepat?

---

# 🚀 Mini Project

**Simple Calculator**

Buat beberapa function kalkulator sederhana:

1. `add(a, b)`, `subtract(a, b)`, `multiply(a, b)`, `divide(a, b)` — masing-masing melakukan operasi dasarnya dan `return` hasilnya
2. `divide(a, b)` harus menangani kasus pembagian dengan 0 — kembalikan string `'Tidak bisa dibagi dengan 0'` alih-alih `Infinity`
3. Buat satu function `calculate(operator, a, b)` yang menerima operator (`'+'`, `'-'`, `'*'`, `'/'`) sebagai string, lalu memanggil function yang sesuai berdasarkan operator itu

Syarat: minimal satu function ditulis sebagai arrow function, semua function harus `return` nilai (bukan cuma `console.log`), dan `calculate(operator, a, b, ...)` boleh kamu desain supaya bisa nerima lebih dari dua angka sekaligus pakai rest parameter — coba eksplorasi sendiri.

---

# ✅ Definition of Done

- [ ] Kedua soal Level 1 selesai dan outputnya sesuai
- [ ] Kedua soal Level 2 selesai
- [ ] Soal Level 3 dicoba
- [ ] Bug di section Debugging bisa dijelasin sendiri tanpa liat kode — termasuk kenapa `return` itu penting
- [ ] Mini project jalan untuk semua operator, termasuk kasus pembagian dengan 0
- [ ] `notes.md` sudah diisi — minimal 1 insight baru dan 1 hal yang masih bingung

---

[<< Day 5: Loop](../Day-05-Loop/README.md) | [Day 7: Object >>](../Day-07-Object/README.md)