<div align="center">
  <h1>JavaScript Bootcamp: Scope & Object</h1>
  <sub>Day 7 JavaScript Fundamentals</sub>
</div>

[<< Day 6: Function](../Day-06-Function/README.md) | [Day 8: Higher Order Function >>](../Day-08-Higher-Order-Function/README.md)

---

- [📔 Day 7](#-day-7)
	- [Scope](#scope)
		- [Global Scope](#global-scope)
		- [Local Scope (Function & Block)](#local-scope-function--block)
		- [var vs let/const dalam Scope](#var-vs-letconst-dalam-scope)
	- [Object](#object)
		- [Membuat Object](#membuat-object)
		- [Mengambil Nilai dari Object](#mengambil-nilai-dari-object)
		- [Object Method dan `this`](#object-method-dan-this)
		- [Mengubah dan Menambah Property](#mengubah-dan-menambah-property)
		- [Object.keys, Object.values, Object.entries](#objectkeys-objectvalues-objectentries)
		- [Object.assign Menyalin Object](#objectassign--menyalin-object)
		- [hasOwnProperty](#hasownproperty)
- [💻 Exercises: Day 7](#-exercises-day-7)
- [🐞 Debugging](#-debugging)
- [🚀 Mini Project](#-mini-project)
- [✅ Definition of Done](#-definition-of-done)

# 📔 Day 7

Sebelum masuk ke Object, kita perlu paham dulu konsep **scope** di mana sebuah variabel bisa "dilihat" dan diakses. Ini penting banget karena nanti pas kita bikin object method, ada kata kunci `this` yang perilakunya berhubungan langsung sama scope dan cara function itu dipanggil.

## Scope

Scope adalah area di kode tempat sebuah variabel bisa diakses. Variabel bisa bersifat **global** (bisa diakses di mana aja) atau **local** (cuma bisa diakses di area tertentu).

### Global Scope

Variabel yang dideklarasikan di luar semua function bisa diakses dari mana pun dalam file itu.

```js
let a = 'JavaScript'
let b = 10

function tampilkan() {
  console.log(a, b) // JavaScript 10 bisa diakses meski dideklarasikan di luar function
}

tampilkan()
console.log(a, b) // JavaScript 10
```

### Local Scope (Function & Block)

Variabel yang dideklarasikan di dalam function atau blok kode (`{}`) cuma bisa diakses di dalam function/blok itu.

```js
let a = 'JavaScript'
let b = 10

function tampilkan() {
  console.log(a, b) // JavaScript 10, masih bisa akses variabel global

  if (true) {
    let a = 'Python' // ini variabel BARU, cuma ada di dalam blok if ini
    let b = 100
    console.log(a, b) // Python 100
  }

  console.log(a, b) // JavaScript 10 balik ke nilai luar, karena a dan b di dalam if sudah "hilang"
}

tampilkan()
```

Variabel `a` dan `b` di dalam blok `if` itu berbeda dengan `a` dan `b` di luar mereka cuma "menutupi" (shadow) sementara, nggak mengubah nilai aslinya.

### var vs let/const dalam Scope

Ini salah satu perbedaan paling penting antara `var` dengan `let`/`const`. `var` hanya terikat pada **scope function**, sementara `let`/`const` terikat pada **scope block** (kurung kurawal manapun `if`, `for`, dll).

```js
if (true) {
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity) // 9.81 var "bocor" keluar dari blok if!

for (var i = 0; i < 3; i++) {
  console.log(i) // 0 1 2
}
console.log(i) // 3 var i masih bisa diakses di luar loop!
```

Bandingkan dengan `let`:

```js
if (true) {
  let gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity) // ERROR! gravity is not defined let benar-benar terkurung di dalam blok

for (let i = 0; i < 3; i++) {
  console.log(i) // 0 1 2
}
console.log(i) // ERROR! i is not defined
```

Ini salah satu alasan kenapa kita selalu pakai `let`/`const`, bukan `var` perilaku `var` yang "bocor" ini sering jadi sumber bug yang sulit dilacak.

## Object

Object adalah kumpulan data dalam bentuk **key-value pair** (pasangan kunci dan nilai). Kalau array itu koleksi data yang urut (pakai index angka), object itu koleksi data yang diberi nama (pakai key).

### Membuat Object

```js
// Object kosong
const person = {}

// Object dengan nilai
const rectangle = {
  length: 20,
  width: 10
}

const student = {
  firstName: 'Dist',
  lastName: 'Wijaya',
  age: 20,
  city: 'Cirebon',
  skills: ['HTML', 'CSS', 'JavaScript'],
  isEnrolled: true
}
```

Nilai property dalam object boleh berupa tipe data apapun string, number, boolean, array, object lain, bahkan function.

### Mengambil Nilai dari Object

Ada dua cara mengakses nilai dalam object: **dot notation** (pakai titik) dan **bracket notation** (pakai kurung siku).

```js
const person = {
  firstName: 'Dist',
  age: 20,
  'phone number': '08123456789' // key dengan spasi HARUS pakai bracket notation
}

// Dot notation
console.log(person.firstName) // 'Dist'
console.log(person.age)        // 20

// Bracket notation
console.log(person['firstName']) // 'Dist'
console.log(person['age'])        // 20

// Key yang mengandung spasi WAJIB pakai bracket notation
console.log(person['phone number']) // '08123456789'
// console.log(person.phone number) // ERROR! nggak valid syntax-nya

console.log(person.city) // undefined property yang nggak ada
```

Bracket notation juga berguna kalau nama key-nya disimpan dalam variabel:

```js
const key = 'firstName'
console.log(person[key]) // 'Dist' dot notation nggak bisa dipakai untuk kasus ini
```

### Object Method dan `this`

Function yang disimpan sebagai property object disebut **object method**. Di dalam method, kata kunci `this` merujuk ke object itu sendiri.

```js
const person = {
  firstName: 'Dist',
  lastName: 'Wijaya',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName()) // 'Dist Wijaya'
```

Penting: **jangan pakai arrow function untuk object method** kalau kamu butuh `this` merujuk ke object-nya. Arrow function nggak punya `this` sendiri dia "meminjam" `this` dari lingkungan di luarnya, yang biasanya bukan object-nya.

```js
const person = {
  firstName: 'Dist',
  // JANGAN begini kalau butuh this merujuk ke object:
  getFullNameSalah: () => {
    return this.firstName // this di sini BUKAN merujuk ke person!
  },
  // BENAR:
  getFullNameBenar: function () {
    return this.firstName // this merujuk ke person
  }
}
```

### Mengubah dan Menambah Property

Object itu **mutable** bisa diubah setelah dibuat, meskipun dideklarasikan dengan `const`.

```js
const person = {
  firstName: 'Dist',
  age: 20
}

person.age = 21              // mengubah nilai yang sudah ada
person.city = 'Cirebon'      // menambah property baru
person.skills = ['JavaScript']

console.log(person) // { firstName: 'Dist', age: 21, city: 'Cirebon', skills: ['JavaScript'] }
```

### Object.keys, Object.values, Object.entries

Tiga method ini sering dipakai buat "membongkar" isi object jadi array, supaya bisa diiterasi pakai loop.

```js
const person = {
  firstName: 'Dist',
  age: 20,
  city: 'Cirebon'
}

console.log(Object.keys(person))
// ['firstName', 'age', 'city']

console.log(Object.values(person))
// ['Dist', 20, 'Cirebon']

console.log(Object.entries(person))
// [['firstName', 'Dist'], ['age', 20], ['city', 'Cirebon']]
```

`Object.entries()` sering dipadukan dengan `for...of` buat iterasi key dan value sekaligus:

```js
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`)
}
// firstName: Dist
// age: 20
// city: Cirebon
```

### Object.assign Menyalin Object

Karena object itu mutable, kalau kamu langsung assign object ke variabel baru, keduanya sebenarnya nunjuk ke data yang sama (ini konsep reference akan dibahas lebih dalam nanti). `Object.assign()` dipakai buat bikin **salinan** object tanpa mengubah yang asli.

```js
const person = {
  firstName: 'Dist',
  age: 20
}

const copyPerson = Object.assign({}, person)
copyPerson.age = 99

console.log(person.age)     // 20 tidak berubah
console.log(copyPerson.age) // 99 cuma salinannya yang berubah
```

### hasOwnProperty

Mengecek apakah sebuah key benar-benar ada di dalam object.

```js
const person = { firstName: 'Dist', age: 20 }

console.log(person.hasOwnProperty('firstName')) // true
console.log(person.hasOwnProperty('email'))       // false
```

Ini lebih aman dibanding cuma cek `person.email !== undefined`, karena bisa aja suatu saat property-nya memang sengaja diisi `undefined`.

---

# 💻 Exercises: Day 7

## Level 1

1. Buat object kosong `dog`, lalu tambahkan property `name`, `legs`, `color`, dan method `bark` yang me-*return* string `'Woof woof!'`. Cetak hasil `dog.bark()`.
2. Buat object `rectangle` dengan property `length` dan `width`. Tambahkan method `getArea` (pakai `function`, bukan arrow function) yang menghitung luasnya pakai `this`.

## Level 2

3. Diberikan object `product` berikut:
   ```js
   const product = {
     name: 'Laptop',
     price: 8500000,
     stock: 5,
     category: 'Electronics'
   }
   ```
   Pakai `Object.keys()`, `Object.values()`, dan `Object.entries()` masing-masing sekali untuk menampilkan isi object ini dengan cara berbeda. Lalu pakai `for...of` + `Object.entries()` buat mencetak setiap key dan value dalam format `"key: value"`.
4. Buat object `original` dengan beberapa property bebas. Salin object itu ke variabel `copy` pakai `Object.assign()`, ubah salah satu property di `copy`, lalu buktikan `original` nggak ikut berubah dengan mencetak keduanya.

## Level 3 Interview-style

5. **Find Person with Most Skills** Diberikan object berikut, tulis kode yang menemukan nama orang dengan jumlah skill terbanyak (pakai `Object.entries()` dan loop, bukan hardcode):
   ```js
   const users = {
     Alex: { skills: ['HTML', 'CSS', 'JavaScript'] },
     Asab: { skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB'] },
     Brook: { skills: ['HTML', 'CSS'] }
   }
   ```

---

# 🐞 Debugging

Trace manual dulu prediksi outputnya, baru run buat cek.

```js
const person = {
  firstName: 'Dist',
  greet: () => {
    console.log(`Halo, saya ${this.firstName}`)
  }
}

person.greet()
```

Pertanyaan reflektif:
- Apa yang sebenarnya terjadi kalau kode ini dijalankan? (Hint: bukan `'Halo, saya Dist'`.)
- Apa akar masalahnya?
- Kenapa perbaikanmu itu yang paling tepat?

---

# 🚀 Mini Project

**Simple Contact Card**

Buat object `contact` yang merepresentasikan kartu kontak, dengan:

1. Property: `name`, `phone`, `email`, `city`
2. Method `getContactInfo()` (pakai `function`, bukan arrow) yang mengembalikan string informasi kontak dalam format rapi, menggunakan `this` untuk mengakses semua property
3. Function terpisah `updateContact(contact, key, value)` yang menerima object contact, sebuah key, dan value baru, lalu mengembalikan **salinan baru** dari contact dengan property itu ter-update (pakai `Object.assign()`, jangan ubah object aslinya langsung)
4. Buktikan `updateContact` nggak mengubah object original dengan mencetak keduanya

Syarat: minimal gunakan satu dari `Object.keys()`/`Object.values()`/`Object.entries()` di suatu bagian program, dan `Object.assign()` di function `updateContact`.

---

# ✅ Definition of Done

- [ ] Kedua soal Level 1 selesai dan outputnya sesuai
- [ ] Kedua soal Level 2 selesai
- [ ] Soal Level 3 dicoba
- [ ] Bug di section Debugging bisa dijelasin sendiri tanpa liat kode termasuk kenapa arrow function bermasalah sebagai object method
- [ ] Mini project jalan dan `updateContact` terbukti nggak mengubah object original
- [ ] `notes.md` sudah diisi minimal 1 insight baru dan 1 hal yang masih bingung

---

[<< Day 6: Function](../Day-06-Function/README.md) | [Day 8: Higher Order Function >>](../Day-08-Higher-Order-Function/README.md)