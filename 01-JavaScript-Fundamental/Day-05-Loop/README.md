<div align="center">
  <h1>JavaScript Bootcamp: Loop</h1>
  <sub>Day 5 JavaScript Fundamentals</sub>
</div>

[<< Day 4: Array](../Day-04-Array/README.md) | [Day 6: Function >>](../Day-06-Function/README.md)

---

- [📔 Day 5](#-day-5)
	- [for Loop](#for-loop)
	- [while Loop](#while-loop)
	- [do...while Loop](#dowhile-loop)
	- [for...of Loop](#forof-loop)
	- [break](#break)
	- [continue](#continue)
	- [Nested Loop](#nested-loop)
- [💻 Exercises: Day 5](#-exercises-day-5)
- [🐞 Debugging](#-debugging)
- [🚀 Mini Project](#-mini-project)
- [✅ Definition of Done](#-definition-of-done)

# 📔 Day 5

Sebagian besar hal yang kita lakukan itu repetitif. Daripada nulis `console.log()` puluhan kali, kita pakai loop buat ngulang tugas yang sama secara otomatis. JavaScript punya beberapa jenis loop, masing-masing punya kegunaan sendiri.

## for Loop

Loop yang paling sering dipakai kalau kamu tau berapa kali harus iterasi.

```js
for (let i = 0; i <= 5; i++) {
  console.log(i)
}
// 0 1 2 3 4 5
```

Bisa juga mundur:

```js
for (let i = 5; i >= 0; i--) {
  console.log(i)
}
// 5 4 3 2 1 0
```

`for` loop juga sering dipakai buat iterasi array pakai index:

```js
const fruits = ['apple', 'banana', 'mango']

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
// apple banana mango
```

Pattern yang sering dipakai: loop untuk **memproses array lama dan menghasilkan array baru**. Ini pattern penting nanti pas masuk Higher Order Function (`.map()`, `.filter()`), konsepnya sama persis, cuma ditulis lebih ringkas.

```js
const countries = ['finland', 'sweden', 'norway']
const upperCountries = []

for (let i = 0; i < countries.length; i++) {
  upperCountries.push(countries[i].toUpperCase())
}

console.log(upperCountries) // ['FINLAND', 'SWEDEN', 'NORWAY']
```

Loop juga dipakai buat mengakumulasi nilai, misal menjumlahkan semua elemen array:

```js
const numbers = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

console.log(sum) // 15
```

## while Loop

Dipakai kalau kondisi berhentinya nggak selalu jelas dari awal loop jalan terus selama kondisi masih `true`.

```js
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
// 0 1 2 3 4 5
```

Kalau lupa nulis `i++`, loop ini nggak akan pernah berhenti (infinite loop). Ini beda sama `for` loop yang increment-nya "dipaksa" ada di deklarasi.

## do...while Loop

Mirip `while`, tapi badan loop-nya dijalankan **minimal sekali** dulu sebelum kondisi dicek.

```js
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)
// 0 1 2 3 4 5
```

Bedanya kelihatan kalau kondisi awal udah `false`:

```js
let i = 10
while (i <= 5) {
  console.log(i) // nggak pernah jalan
  i++
}

let j = 10
do {
  console.log(j) // jalan sekali, cetak 10
  j++
} while (j <= 5)
```

## for...of Loop

Cara paling ringkas buat iterasi array kalau kamu nggak butuh index-nya, cuma butuh nilainya.

```js
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}
// 1 2 3 4 5

let sum = 0
for (const num of numbers) {
  sum += num
}
console.log(sum) // 15
```

`for...of` juga bisa dipakai buat transform array, sama seperti `for` biasa:

```js
const webTechs = ['HTML', 'CSS', 'JavaScript']
const upperTechs = []

for (const tech of webTechs) {
  upperTechs.push(tech.toUpperCase())
}

console.log(upperTechs) // ['HTML', 'CSS', 'JAVASCRIPT']
```

## break

Menghentikan loop sepenuhnya, keluar dari loop di titik itu juga.

```js
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    break
  }
  console.log(i)
}
// 0 1 2
```

## continue

Melewati satu iterasi tertentu, tapi loop-nya lanjut ke iterasi berikutnya (nggak berhenti total kayak `break`).

```js
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue
  }
  console.log(i)
}
// 0 1 2 4 5
```

## Nested Loop

Loop di dalam loop. Loop luar jalan satu kali, loop dalam jalan penuh, baru loop luar lanjut ke iterasi berikutnya. Ini dasar buat bikin pola 2 dimensi dan buat iterasi nested array (dari Day 4).

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(j)
  }
}
// 1
// 1 2
// 1 2 3
```

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
]

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j])
  }
}
// 1 2 3 4 5 6
```

---

# 💻 Exercises: Day 5

## Level 1

1. Iterasi angka 1 sampai 10 pakai `for`. Ulangi pakai `while`.
2. Diberikan `const fruits = ['apple', 'banana', 'mango', 'lemon']`, cetak semua isinya pakai `for...of`, lalu ulangi pakai `for` biasa (pakai index).

## Level 2

3. Diberikan `const countries = ['finland', 'sweden', 'norway', 'denmark']`, buat array baru `upperCountries` berisi semua nama negara dalam huruf kapital, pakai loop (bukan method array langsung).
4. Cetak pola segitiga bintang pakai nested loop:
   ```
   *
   **
   ***
   ****
   *****
   ```

## Level 3 Interview-style

5. **FizzBuzz** Cetak angka 1-30. Kelipatan 3 → `"Fizz"`. Kelipatan 5 → `"Buzz"`. Kelipatan keduanya → `"FizzBuzz"`. (Soal klasik interview coba sendiri dulu sebelum googling.)

---

# 🐞 Debugging

Trace manual dulu prediksi outputnya, baru run buat cek.

```js
let i = 0
while (i <= 5) {
  console.log(i)
}
```

Pertanyaan reflektif:
- Apa yang sebenarnya terjadi kalau kode ini dijalankan?
- Apa akar masalahnya?
- Kenapa perbaikanmu itu yang paling tepat?

---

# 🚀 Mini Project

**Number Pattern Generator**

Buat function `printPattern(n)` yang menerima jumlah baris `n`, lalu mencetak pola segitiga angka berikut dinamis sesuai input, bukan hardcode:

```
printPattern(3)
1
1 2
1 2 3
```

Syarat: gunakan nested loop, dan function harus tetap benar untuk `n` berapa pun (coba minimal 2 nilai berbeda).

---

# ✅ Definition of Done

- [ ] Kedua soal Level 1 selesai dan outputnya sesuai
- [ ] Kedua soal Level 2 selesai
- [ ] Soal Level 3 dicoba
- [ ] Bug di section Debugging bisa dijelasin sendiri tanpa liat kode
- [ ] Mini project jalan dengan benar untuk minimal 2 nilai `n` berbeda
- [ ] `notes.md` sudah diisi minimal 1 insight baru dan 1 hal yang masih bingung

---

[<< Day 4: Array](../Day-04-Array/README.md) | [Day 6: Function >>](../Day-06-Function/README.md)