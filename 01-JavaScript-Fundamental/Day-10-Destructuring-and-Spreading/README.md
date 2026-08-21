<div align="center">
  <h1>JavaScript Bootcamp: Destructuring and Spreading</h1>
  <sub>Day 10 JavaScript Fundamentals</sub>
</div>

[<< Day 9: Sets and Maps](../Day-09-Sets-and-Maps/README.md) | [Day 11: Regular Expressions >>](../Day-11-Regular-Expressions/README.md)

---

- [📔 Day 10](#-day-10)
	- [Destructuring Array](#destructuring-array)
	- [Skip Elemen saat Destructuring](#skip-elemen-saat-destructuring)
	- [Default Value saat Destructuring](#default-value-saat-destructuring)
	- [Rest Pattern pada Destructuring Array](#rest-pattern-pada-destructuring-array)
	- [Destructuring saat Iterasi](#destructuring-saat-iterasi)
	- [Destructuring Object](#destructuring-object)
	- [Rename saat Destructuring Object](#rename-saat-destructuring-object)
	- [Object sebagai Parameter Function](#object-sebagai-parameter-function)
	- [Spread Operator Copy Array](#spread-operator--copy-array)
	- [Spread Operator Copy Object](#spread-operator--copy-object)
	- [Spread Operator pada Function](#spread-operator-pada-function)
- [💻 Exercises: Day 10](#-exercises-day-10)
- [🐞 Debugging](#-debugging)
- [🚀 Mini Project](#-mini-project)
- [✅ Definition of Done](#-definition-of-done)

# 📔 Day 10

Destructuring adalah cara **membongkar** array atau object jadi variabel-variabel terpisah dalam satu baris, tanpa perlu akses satu-satu pakai index atau key. Spread operator (`...`) adalah kebalikannya cara **menyebarkan** isi array/object ke tempat lain. Dua fitur ini bakal sering banget kamu pakai nanti, terutama pas kerja dengan React.

## Destructuring Array

```js
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree) // 1 2 3
```

Urutan variabel di kiri harus sesuai urutan elemen di array variabel pertama otomatis dapat elemen index 0, dan seterusnya.

```js
const fullStack = [
  ['HTML', 'CSS', 'JS'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd) // ['HTML', 'CSS', 'JS']
console.log(backEnd)   // ['Node', 'Express', 'MongoDB']
```

## Skip Elemen saat Destructuring

Kalau ada elemen yang nggak kamu butuhkan, cukup kosongkan slot-nya dengan koma tambahan.

```js
const numbers = [1, 2, 3]
let [numOne, , numThree] = numbers // elemen index 1 (angka 2) sengaja dilewati

console.log(numOne, numThree) // 1 3
```

## Default Value saat Destructuring

Kalau nilai di posisi itu `undefined`, kita bisa kasih nilai default sebagai fallback.

```js
const names = [undefined, 'Brook', 'David']
let [firstPerson = 'Guest', secondPerson, thirdPerson] = names

console.log(firstPerson, secondPerson, thirdPerson) // Guest Brook David
```

## Rest Pattern pada Destructuring Array

Kalau kamu cuma butuh beberapa elemen pertama dan sisanya digabung jadi array, pakai rest pattern (`...`) konsep yang sama seperti rest parameter di function (Day 6).

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3) // 1 2 3
console.log(rest)               // [4, 5, 6, 7, 8, 9, 10]
```

Rest pattern harus selalu ada di posisi **terakhir**.

## Destructuring saat Iterasi

Ini pattern yang bakal sering kamu pakai destructuring langsung di dalam `for...of`, mirip yang udah kita lakukan waktu iterasi Map di Day 9.

```js
const countryCapitals = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

for (const [country, capital] of countryCapitals) {
  console.log(country, capital)
}
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo
```

## Destructuring Object

Untuk object, nama variabel yang dipakai harus **sama persis** dengan nama key-nya (beda dengan array yang bebas urutan berdasarkan posisi).

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}

let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter) // 20 10 200 undefined
```

Key `perimeter` nggak ada di object-nya, jadi hasilnya `undefined` bukan error.

## Rename saat Destructuring Object

Kalau kamu mau nama variabelnya beda dari nama key aslinya, pakai sintaks `key: newName`.

```js
const rectangle = { width: 20, height: 10 }

let { width: w, height: h } = rectangle

console.log(w, h) // 20 10
```

Ini bisa dikombinasikan dengan default value:

```js
let { width: w, perimeter: p = 60 } = rectangle
console.log(w, p) // 20 60
```

## Object sebagai Parameter Function

Ini salah satu pattern paling penting dan sering dipakai destructuring langsung di parameter function.

```js
// TANPA destructuring
const calculatePerimeterV1 = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height)
}

// DENGAN destructuring lebih ringkas dan jelas apa yang dibutuhkan function ini
const calculatePerimeterV2 = ({ width, height }) => {
  return 2 * (width + height)
}

const rect = { width: 20, height: 10 }
console.log(calculatePerimeterV1(rect)) // 60
console.log(calculatePerimeterV2(rect)) // 60
```

Keuntungan destructuring di parameter: dari signature function-nya aja, kita langsung tau property apa yang sebenarnya dipakai, tanpa perlu baca seluruh isi function-nya.

## Spread Operator Copy Array

Spread operator (`...`) dipakai buat menyalin isi array ke array baru, atau menggabungkan beberapa array.

```js
const evens = [0, 2, 4]
const copyEvens = [...evens]
console.log(copyEvens) // [0, 2, 4] salinan baru, bukan reference yang sama

const odds = [1, 3, 5]
const combined = [...evens, ...odds]
console.log(combined) // [0, 2, 4, 1, 3, 5]
```

## Spread Operator Copy Object

Sama seperti array, spread juga dipakai buat menyalin object.

```js
const user = {
  name: 'Dist',
  role: 'Student',
  city: 'Cirebon'
}

const copyUser = { ...user }
console.log(copyUser) // { name: 'Dist', role: 'Student', city: 'Cirebon' }
```

Kita juga bisa sekaligus **mengubah** salah satu property saat menyalin:

```js
const updatedUser = { ...user, role: 'Developer' }
console.log(updatedUser) // { name: 'Dist', role: 'Developer', city: 'Cirebon' }
console.log(user.role)    // 'Student' object asli tetap tidak berubah
```

Pattern `{ ...original, key: newValue }` ini bakal sering banget kamu pakai nanti, terutama di React buat update state tanpa mutasi langsung.

## Spread Operator pada Function

Kita udah sentuh ini di Day 6 sebagai rest parameter spread operator di posisi parameter function menangkap semua argument jadi array.

```js
const sumAllNums = (...args) => {
  let sum = 0
  for (const num of args) {
    sum += num
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4, 5)) // 15
```

---

# 💻 Exercises: Day 10

## Level 1

1. Diberikan `const constants = [2.72, 3.14, 9.81, 37, 100]`, destructure jadi variabel `e`, `pi`, `gravity`, `bodyTemp`, `boilingTemp`.
2. Diberikan `const rectangle = { width: 20, height: 10, area: 200 }`, destructure jadi variabel sesuai nama key-nya, lalu buat satu lagi versi dengan rename (`width` jadi `w`, `height` jadi `h`).

## Level 2

3. Diberikan array `const student = ['David', ['HTML', 'CSS', 'JS'], [98, 85, 90]]`, destructure dalam SATU baris jadi variabel `name`, `skills`, dan `scores`.
4. Diberikan `const original = { name: 'Dist', role: 'Student', level: 1 }`, buat salinan `updated` dengan `role` diubah jadi `'Developer'` pakai spread operator, tanpa mengubah object `original`. Buktikan `original` tetap utuh dengan mencetak keduanya.

## Level 3 Interview-style

5. **Convert Array to Object** Buat function `convertArrayToObject(students)` yang menerima array seperti soal Level 2 nomor 3 (banyak siswa), dan mengembalikan array of object dengan struktur `{ name, skills, scores }` untuk setiap siswa. Manfaatkan destructuring di parameter function.

---

# 🐞 Debugging

Trace manual dulu prediksi outputnya, baru run buat cek.

```js
const original = { name: 'Dist', skills: ['HTML', 'CSS'] }
const copy = { ...original }

copy.name = 'Budi'
copy.skills.push('JavaScript')

console.log(original.name)
console.log(original.skills)
```

Pertanyaan reflektif:
- Apa yang sebenarnya terjadi kalau kode ini dijalankan? Kenapa `name` dan `skills` berperilaku beda?
- Apa akar masalahnya? (Hint: ini berhubungan dengan konsep "shallow copy" spread cuma menyalin satu lapis, bukan sampai ke dalam-dalam.)
- Kalau kamu cuma boleh pakai spread, gimana caranya `skills` juga ikut ter-copy secara aman?

---

# 🚀 Mini Project

**Student Report Formatter**

Diberikan data siswa dalam format array yang "kurang enak dibaca" (pattern umum dari data mentah/API):

```js
const rawStudents = [
  ['Dist', ['JavaScript', 'HTML', 'CSS'], [90, 85, 88]],
  ['Budi', ['Python', 'SQL'], [75, 80]]
]
```

Buat program yang:

1. Menggunakan `convertArrayToObject` dari soal Level 3 untuk mengubah `rawStudents` jadi array of object yang rapi
2. Menambahkan property baru `average` ke setiap object (rata-rata dari `scores`), TANPA mengubah object asli pakai spread operator buat bikin object baru
3. Mencetak hasil akhirnya dalam format: `"Dist: rata-rata 87.67"`

Syarat: gunakan destructuring di parameter function minimal sekali, dan spread operator untuk object minimal sekali.

---

# ✅ Definition of Done

- [ ] Kedua soal Level 1 selesai dan outputnya sesuai
- [ ] Kedua soal Level 2 selesai
- [ ] Soal Level 3 dicoba
- [ ] Bug di section Debugging bisa dijelasin sendiri tanpa liat kode termasuk konsep shallow copy
- [ ] Mini project jalan dan menghitung rata-rata dengan benar
- [ ] `notes.md` sudah diisi minimal 1 insight baru dan 1 hal yang masih bingung

---

[<< Day 9: Sets and Maps](../Day-09-Sets-and-Maps/README.md) | [Day 11: Regular Expressions >>](../Day-11-Regular-Expressions/README.md)