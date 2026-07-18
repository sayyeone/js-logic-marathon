<div align="center">
  <h1>JavaScript Bootcamp: Array</h1>
  <sub>Day 4 JavaScript Fundamentals</sub>
</div>

[<< Day 3: Conditionals](../Day-03-Conditionals/README.md) | [Day 5: Loop >>](../Day-05-Loop/README.md)

---

- [📔 Day 4](#-day-4)
  - [Apa itu Array](#apa-itu-array)
  - [Cara Membuat Array](#cara-membuat-array)
  - [Membuat Array dari String (split)](#membuat-array-dari-string-split)
  - [Index dan Panjang Array](#index-dan-panjang-array)
  - [Mengubah Array](#mengubah-array)
  - [push, pop, shift, unshift](#push-pop-shift-unshift)
  - [slice vs splice](#slice-vs-splice)
  - [concat Menggabungkan Array](#concat--menggabungkan-array)
  - [join dan toString](#join-dan-tostring)
  - [reverse dan sort](#reverse-dan-sort)
  - [Mengecek Isi Array](#mengecek-isi-array)
  - [Array Bersarang (Nested Array)](#array-bersarang-nested-array)
- [💻 Exercises: Day 4](#-exercises-day-4)
- [🐞 Debugging](#-debugging)
- [🚀 Mini Project](#-mini-project)
- [✅ Definition of Done](#-definition-of-done)

# 📔 Day 4

Sejauh ini kita cuma nyimpen satu nilai per variabel. Tapi gimana kalau kita punya banyak data yang saling terkait misalnya daftar nama, daftar nilai ujian? Di situlah array masuk. Array itu salah satu struktur data paling sering dipakai di JavaScript, jadi penting untuk beneran paham method-methodnya, bukan cuma hafal syntax dasar.

## Apa itu Array

Array adalah struktur data yang menyimpan banyak nilai dalam satu variabel, berurutan, dan bisa diubah (mutable).

```js
const fruits = ["apple", "banana", "mango"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["Dist", 20, true, { role: "student" }]; // array boleh isi tipe data campuran
```

## Cara Membuat Array

```js
// Array kosong cara yang direkomendasikan
const arr = [];

// Array kosong pakai constructor (jarang dipakai, tapi perlu tau)
const arr2 = Array();

// Array dengan panjang tertentu tapi kosong isinya
const emptySlots = Array(5);
console.log(emptySlots); // [empty x 5]

// Mengisi array dengan nilai yang sama di semua slot
const filled = Array(5).fill(0);
console.log(filled); // [0, 0, 0, 0, 0]
```

`Array(5).fill(0)` ini kepake banget kalau butuh bikin array placeholder dengan ukuran tertentu sebelum diisi lewat loop.

## Membuat Array dari String (split)

`split()` mengubah string jadi array, dipecah berdasarkan separator yang kamu kasih.

```js
const sentence = "JavaScript adalah bahasa pemrograman";
const words = sentence.split(" ");
console.log(words); // ['JavaScript', 'adalah', 'bahasa', 'pemrograman']

const csv = "apple,banana,mango";
const fruits = csv.split(",");
console.log(fruits); // ['apple', 'banana', 'mango']

const word = "Halo";
const letters = word.split("");
console.log(letters); // ['H', 'a', 'l', 'o']
```

Ini bakal sering kepake nanti pas kerja dengan data mentah dari API atau input user.

## Index dan Panjang Array

Setiap elemen array punya posisi (index), dimulai dari **0**, bukan 1.

```js
const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // 'apple'
console.log(fruits[2]); // 'mango'
console.log(fruits[3]); // undefined index-nya nggak ada

console.log(fruits.length); // 3
console.log(fruits[fruits.length - 1]); // 'mango' cara ambil elemen terakhir
```

Index dimulai dari 0 ini sumber bug klasik (off-by-one) kalau lupa.

## Mengubah Array

Array itu **mutable** isinya bisa diubah langsung meskipun dideklarasikan dengan `const`.

```js
const fruits = ["apple", "banana", "mango"];
fruits[1] = "orange";
console.log(fruits); // ['apple', 'orange', 'mango']

// fruits = ['new', 'array'] // ERROR! ini baru melanggar aturan const
```

`const` mencegah kamu **assign ulang** variabelnya ke array baru, tapi nggak mencegah kamu **mengubah isi** array yang sama.

## push, pop, shift, unshift

Method dasar buat nambah/hapus elemen di array.

```js
const numbers = [1, 2, 3];

numbers.push(4); // tambah di akhir → [1, 2, 3, 4]
numbers.pop(); // hapus dari akhir → [1, 2, 3]
numbers.unshift(0); // tambah di awal → [0, 1, 2, 3]
numbers.shift(); // hapus dari awal → [1, 2, 3]

console.log(numbers); // [1, 2, 3]
```

`push`/`pop` bekerja di akhir array (lebih cepat), `unshift`/`shift` bekerja di awal (lebih lambat karena semua index harus digeser).

## slice vs splice

Dua method ini namanya mirip tapi fungsinya beda sering ketuker, jadi perlu dipahami betul.

**`slice(start, end)`** mengambil sebagian array **tanpa mengubah array aslinya**. Posisi `end` tidak ikut disertakan.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice(1, 4)); // [2, 3, 4] index 1 sampai sebelum index 4
console.log(numbers.slice(0, 2)); // [1, 2]
console.log(numbers); // [1, 2, 3, 4, 5] array asli tidak berubah
```

**`splice(start, deleteCount, ...itemsToAdd)`** **mengubah array aslinya langsung**, bisa menghapus dan/atau menyisipkan elemen.

```js
const numbers = [1, 2, 3, 4, 5];

numbers.splice(1, 2); // mulai dari index 1, hapus 2 elemen
console.log(numbers); // [1, 4, 5] array asli BERUBAH

const letters = ["a", "b", "c", "d"];
letters.splice(1, 1, "x", "y"); // di index 1, hapus 1 elemen, sisipkan 'x' dan 'y'
console.log(letters); // ['a', 'x', 'y', 'c', 'd']
```

Aturan sederhana buat mengingat: `slice` = "iris tanpa merusak yang asli", `splice` = "operasi langsung ke array aslinya".

## concat Menggabungkan Array

```js
const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack); // ['HTML', 'CSS', 'JavaScript', 'Node', 'Express', 'MongoDB']
console.log(frontEnd); // tidak berubah concat tidak mengubah array asli
```

## join dan toString

`join()` menggabungkan semua elemen array jadi satu string, dengan separator yang bisa kamu tentukan.

```js
const names = ["Dist", "Budi", "Ani"];

console.log(names.join()); // 'Dist,Budi,Ani' default pakai koma
console.log(names.join(" ")); // 'Dist Budi Ani'
console.log(names.join(", ")); // 'Dist, Budi, Ani'
console.log(names.join(" - ")); // 'Dist - Budi - Ani'

console.log(names.toString()); // 'Dist,Budi,Ani' mirip join() tanpa argumen
```

## reverse dan sort

```js
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

numbers.sort();
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

numbers.reverse();
console.log(numbers); // [9, 6, 5, 4, 3, 2, 1, 1]
```

Hati-hati: `sort()` secara default mengurutkan berdasarkan **string**, bukan angka. Ini nyebabin hasil aneh buat angka bertingkat dua digit atau lebih.

```js
const nums = [10, 2, 33, 4];
nums.sort();
console.log(nums); // [10, 2, 33, 4] BUKAN [2, 4, 10, 33]! karena dibandingkan sebagai string: '10' < '2'
```

Cara benerin ini bakal kita bahas lebih lanjut pas masuk materi Higher Order Function (`sort` dengan callback function).

## Mengecek Isi Array

```js
const fruits = ["apple", "banana", "mango"];

console.log(fruits.includes("banana")); // true
console.log(fruits.indexOf("mango")); // 2
console.log(fruits.indexOf("grape")); // -1, artinya nggak ketemu
console.log(Array.isArray(fruits)); // true cara cek apakah sesuatu itu array
```

## Array Bersarang (Nested Array)

Array bisa berisi array lain di dalamnya.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0]); // [1, 2, 3]
console.log(matrix[0][1]); // 2 baris ke-0, kolom ke-1
console.log(matrix[2][2]); // 9
```

Ini konsep yang bakal sering muncul lagi nanti pas kita gabungin dengan nested loop.

---

# 💻 Exercises: Day 4

## Level 1

1. Buat array `webTechs` berisi minimal 5 teknologi web. Cetak elemen pertama, elemen terakhir (pakai `.length`, jangan hardcode index-nya), dan total panjang array-nya.
2. Diberikan `const sentence = 'Aku sedang belajar JavaScript setiap hari'`, ubah jadi array kata-kata pakai `split()`, lalu cetak jumlah katanya.

## Level 2

3. Diberikan `const numbers = [1, 2, 3, 4, 5, 6, 7, 8]`. Pakai `slice()` untuk mengambil 3 elemen di tengah array (index 2-4) tanpa mengubah array aslinya. Buktikan array aslinya masih utuh dengan mencetaknya setelah `slice()`.
4. Diberikan dua array `const frontEnd = ['HTML', 'CSS', 'JavaScript']` dan `const backEnd = ['Node', 'Express']`. Gabungkan keduanya jadi satu array `fullStack` pakai `concat()`, lalu ubah jadi string dengan separator `' | '` pakai `join()`.

## Level 3 Interview-style

5. **Sort Angka yang Benar** Diberikan `const nums = [40, 100, 1, 5, 25, 10]`, buktikan dulu kalau `sort()` biasa menghasilkan urutan yang salah untuk array ini (jelaskan kenapa di `notes.md`). Kamu belum perlu benerin pakai callback function (itu topik Day nanti) cukup identifikasi dan jelaskan akar masalahnya.

---

# 🐞 Debugging

Trace manual dulu prediksi outputnya, baru run buat cek.

```js
const numbers = [1, 2, 3, 4, 5];

const firstThree = numbers.splice(0, 3);
console.log(firstThree);
console.log(numbers);
```

Pertanyaan reflektif:

- Apa yang sebenarnya terjadi kalau kode ini dijalankan?
- Kalau kamu ganti `splice` jadi `slice`, apa bedanya hasilnya? Kenapa?
- Kapan sebaiknya pakai `slice`, kapan sebaiknya pakai `splice`?

---

# 🚀 Mini Project

**Simple Shopping List Manager**

Buat program yang mengelola daftar belanja dalam sebuah array, dengan fungsi-fungsi berikut:

1. `addItem(list, item)` menambahkan item baru ke akhir daftar (pakai `push`)
2. `removeItem(list, item)` menghapus item tertentu dari daftar kalau ada (cari index-nya dulu pakai `indexOf`, baru hapus pakai `splice`)
3. `hasItem(list, item)` mengecek apakah item tertentu ada di daftar (pakai `includes`)
4. `printList(list)` mencetak daftar belanja dalam format rapi pakai `join(', ')`

Syarat: gunakan minimal 4 method array yang berbeda dari materi hari ini.

---

# ✅ Definition of Done

- [ ] Kedua soal Level 1 selesai dan outputnya sesuai
- [ ] Kedua soal Level 2 selesai
- [ ] Soal Level 3 dicoba, dengan penjelasan di `notes.md`
- [ ] Bug di section Debugging bisa dijelasin sendiri tanpa liat kode termasuk beda `slice` dan `splice`
- [ ] Mini project jalan dengan benar untuk minimal 3 operasi berurutan (tambah-tambah-hapus, dst)
- [ ] `notes.md` sudah diisi minimal 1 insight baru dan 1 hal yang masih bingung

---

[<< Day 3: Conditionals](../Day-03-Conditionals/README.md) | [Day 5: Loop >>](../Day-05-Loop/README.md)
