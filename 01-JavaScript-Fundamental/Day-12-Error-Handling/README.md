<div align="center">
  <h1> 30 Hari Belajar JavaScript: Penanganan Error</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Penulis:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Januari, 2020</small>
</sub>

</div>

[<< Hari 13](../13_Day_Console_object_methods/13_day_console_object_methods.md) | [Hari 15>>](../15_Day_Classes/15_day_classes.md)

![Thirty Days Of JavaScript](../images/banners/day_1_14.png)

- [Hari 14](#hari-14)
	- [Penanganan Error](#penanganan-error)
		- [Jenis-jenis Error](#jenis-jenis-error)
	- [Latihan](#latihan)
		- [Latihan: Level 1](#latihan-level-1)
		- [Latihan: Level 2](#latihan-level-2)
		- [Latihan: Level 3](#latihan-level-3)

# Hari 14

## Penanganan Error

JavaScript itu bahasa yang loosely-typed. Kadang kamu bakal ketemu runtime error waktu coba mengakses variabel yang belum didefinisikan atau manggil fungsi yang belum ada, dan lain-lain.

JavaScript, mirip kayak Python atau Java, punya mekanisme penanganan error buat nangkep runtime error pakai blok try-catch-finally.

```js
try {
  // kode yang mungkin melempar error
} catch (err) {
  // kode yang dijalankan kalau terjadi error
} finally {
  // kode yang tetap dijalankan, mau ada error atau enggak
}
```

**try**: bungkus kode yang mencurigakan (yang berpotensi melempar error) di dalam blok try. Pernyataan try memungkinkan kita mendefinisikan blok kode yang akan diuji untuk error selagi dijalankan.

**catch**: tulis kode yang mau dijalankan di blok catch kalau terjadi error. Blok catch bisa punya parameter yang memberi tahu kamu informasi errornya. Blok catch biasa dipakai buat mencatat error atau menampilkan pesan tertentu ke pengguna.

**finally**: blok finally akan selalu dijalankan, mau ada error kejadian atau enggak. Blok finally bisa dipakai buat menyelesaikan tugas yang tersisa atau mereset variabel yang berubah sebelum error terjadi di blok try.

**Contoh:**

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log(err)
}
```

```sh
ReferenceError: fistName is not defined
    at <anonymous>:4:20
```

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err) // kita bisa pakai console.log() atau console.error()
} finally {
  console.log('Gimana pun caranya, aku bakal tetap jalan')
}
```

```sh
ReferenceError: fistName is not defined
    at <anonymous>:4:20
Gimana pun caranya, aku bakal tetap jalan
```
Blok catch menerima satu parameter. Umumnya orang pakai e, err, atau error sebagai nama parameter di blok catch. Parameter ini adalah sebuah objek yang punya key name dan message. Yuk kita coba pakai name dan message-nya.
```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Nama errornya', err.name)
  console.log('Pesan errornya', err.message)
} finally {
  console.log('Gimana pun caranya, aku bakal tetap jalan')
}
```
```sh
Nama errornya ReferenceError
Pesan errornya fistName is not defined
Gimana pun caranya, aku bakal tetap jalan
```
throw: pernyataan throw memungkinkan kita membuat error custom sendiri. Kita bisa melempar string, number, boolean, atau bahkan objek. Pakai pernyataan throw buat melempar exception. Waktu kamu melempar exception, ekspresi yang dipakai menentukan nilai dari exception tersebut. Masing-masing contoh berikut ini melempar sebuah exception:
```js
throw 'Error2' // menghasilkan exception dengan nilai string
throw 42 // menghasilkan exception dengan nilai 42
throw true // menghasilkan exception dengan nilai true
throw new Error('Required') // menghasilkan objek error dengan pesan Required
```
```js
const throwErrorExampleFun = () => {
  let message
  let x = prompt('Masukkan sebuah angka: ')
  try {
    if (x == '') throw 'kosong'
    if (isNaN(x)) throw 'bukan angka'
    x = Number(x)
    if (x < 5) throw 'terlalu kecil'
    if (x > 10) throw 'terlalu besar'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()
```
### Jenis-jenis Error
- ReferenceError: terjadi kalau ada referensi yang tidak sah. ReferenceError dilempar kalau kita memakai variabel yang belum dideklarasikan.
```js
let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName
console.log(fullName)
```
```sh
Uncaught ReferenceError: lastName is not defined
    at <anonymous>:2:35
```
- SyntaxError: terjadi kalau ada kesalahan sintaks
```js
let square = 2 x 2
console.log(square)
console.log('Hello, world")
```
```sh
Uncaught SyntaxError: Unexpected identifier
```
- TypeError: terjadi kalau ada kesalahan tipe data
```js
let num = 10
console.log(num.toLowerCase())
```
```sh
Uncaught TypeError: num.toLowerCase is not a function
    at <anonymous>:2:17
```
Itu tadi beberapa error umum yang mungkin kamu temui waktu nulis kode. Dengan memahami error, kamu jadi tahu kesalahan apa yang kamu buat, dan itu bakal bantu kamu debugging kode dengan lebih cepat.
🌕 Kamu keren banget. Sekarang kamu udah tahu cara menangani error, dan kamu bisa bikin aplikasi yang tangguh yang mampu menangani input pengguna yang nggak terduga. Kamu baru aja menyelesaikan tantangan hari ke-14, dan kamu udah 14 langkah lebih dekat menuju kehebatan. Sekarang, kerjain beberapa latihan buat mengasah otak dan ototmu.
## Latihan
### Latihan: Level 1
Latihan
### Latihan: Level 2
Latihan
### Latihan: Level 3
Latihan
🎉 SELAMAT ! 🎉
[<< Hari 13](../13_Day_Console_object_methods/13_day_console_object_methods.md) | [Hari 15>>](../15_Day_Classes/15_day_classes.md)