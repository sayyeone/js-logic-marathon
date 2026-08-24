<div align="center">
  <h1> 30 Hari Belajar JavaScript: Metode Objek Console</h1>
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

[<< Hari 12](../12_Day_Regular_expressions/12_day_regular_expressions.md) | [Hari 14 >>](../14_Day_Error_handling/14_day_error_handling.md)

![Thirty Days Of JavaScript](../images/banners/day_1_13.png)

- [Hari 13](#hari-13)
	- [Metode Objek Console](#metode-objek-console)
		- [console.log()](#consolelog)
		- [console.warn()](#consolewarn)
		- [console.error()](#consoleerror)
		- [console.table()](#consoletable)
		- [console.time()](#consoletime)
		- [console.info()](#consoleinfo)
		- [console.assert()](#consoleassert)
		- [console.group()](#consolegroup)
		- [console.count()](#consolecount)
		- [console.clear()](#consoleclear)
	- [Latihan](#latihan)
		- [Latihan: Level 1](#latihan-level-1)
		- [Latihan: Level 2](#latihan-level-2)
		- [Latihan: Level 3](#latihan-level-3)

# Hari 13

## Metode Objek Console

Pada bagian ini, kita akan membahas tentang console dan metode-metode objek console. Pemula biasanya belum tahu mana yang sebaiknya dipakai: console.log(), document.write(), atau document.getElementById.

Kita menggunakan metode objek console untuk menampilkan output di console browser, sedangkan document.write digunakan untuk menampilkan output di dokumen (viewport) browser. Kedua metode ini hanya digunakan untuk keperluan pengujian dan debugging. Metode console adalah alat pengujian dan debugging paling populer di browser. Kita menggunakan document.getElementById() ketika ingin berinteraksi dengan DOM menggunakan JavaScript. DOM akan kita bahas di bagian lain.

Selain metode console.log() yang terkenal, objek console menyediakan beberapa metode lain.

### console.log()

Kita menggunakan console.log() untuk menampilkan output di console browser. Kita bisa menyisipkan nilai (substitution) dan juga mengatur gaya tampilan log menggunakan %c.

- Menampilkan output di console browser

```js
console.log('30 Days of JavaScript')
```

```sh
30 Days of JavaScript
```

- Substitusi

```js
console.log('%d %s of JavaScript', 30, 'Days')
```

```sh
30 Days of JavaScript
```

- CSS

Kita bisa mengatur gaya pesan log menggunakan css. Salin kode berikut dan tempelkan di console browser untuk melihat hasilnya.

```js
console.log('%c30 Days Of JavaScript', 'color:green') // hasil log berwarna hijau
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // hasil log berwarna hijau, merah, dan kuning
```

### console.warn()

Kita menggunakan console.warn() untuk menampilkan peringatan di browser. Misalnya untuk memberi tahu atau memperingatkan tentang versi paket yang sudah usang (deprecated) atau praktik yang kurang baik. Salin kode berikut dan tempelkan di console browser untuk melihat pesan peringatan.

```js
console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')
```

### console.error()

Metode console.error() menampilkan pesan error.

```js
console.error('This is an error message')
console.error('We all make mistakes')
```

### console.table()

Metode console.table() menampilkan data dalam bentuk tabel di console. Console.table() menampilkan data tabular sebagai tabel. Metode ini membutuhkan satu argumen wajib berupa data, yang harus berupa array atau objek, dan satu parameter tambahan opsional yaitu columns.

Mari kita mulai dengan array sederhana. Kode di bawah ini menampilkan tabel dengan dua kolom: kolom indeks untuk menampilkan index, dan kolom value untuk menampilkan nama.

```js
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)
```

Mari kita lihat juga hasil dari sebuah objek. Ini akan membuat tabel dengan dua kolom: kolom indeks berisi key, dan kolom value berisi value dari objek tersebut.

```js
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
console.table(user)
```

Coba juga contoh-contoh berikut dengan menyalin dan menempelkannya di console browser.

```js
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries)
```

```js
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]
console.table(users)
```

### console.time()

Memulai timer yang bisa kita gunakan untuk melacak berapa lama sebuah operasi berjalan. Setiap timer diberi nama unik, dan kita bisa menjalankan hingga 10.000 timer sekaligus dalam satu halaman. Ketika kita memanggil console.timeEnd() dengan nama yang sama, browser akan menampilkan waktu (dalam milidetik) yang telah berlalu sejak timer dimulai.

```js
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')
```

```sh
Finland Helsinki
Sweden Stockholm
Norway Oslo
Regular for loop: 0.34716796875ms
Finland Helsinki
Sweden Stockholm
Norway Oslo
for of loop: 0.26806640625ms
Finland Helsinki
Sweden Stockholm
Norway Oslo
forEach loop: 0.358154296875ms
```

Berdasarkan output di atas, perulangan for biasa lebih lambat dibandingkan for of maupun forEach.

### console.info()

Menampilkan pesan informasi di console browser.

```js
console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')
```

### console.assert()

Metode console.assert() menuliskan pesan error ke console jika hasil assertion bernilai false. Jika assertion bernilai true, tidak akan terjadi apa-apa. Parameter pertama adalah ekspresi assertion. Jika ekspresi ini bernilai false, pesan error "Assertion failed" akan ditampilkan.

```js
console.assert(4 > 3, '4 is greater than 3') // tidak ada hasil
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}
```

### console.group()

console.group() bisa membantu mengelompokkan beberapa grup log. Salin kode berikut dan tempelkan di console browser untuk melihat pengelompokannya.

```js
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()
```

### console.count()

Menampilkan berapa kali console.count() dipanggil. Metode ini menerima parameter berupa label string. Sangat berguna untuk menghitung berapa kali sebuah fungsi dipanggil. Pada contoh berikut, console.count() akan dijalankan sebanyak tiga kali.

```js
const func = () => {
  console.count('Function has been called')
}
func()
func()
func()
```

```sh
Function has been called: 1
Function has been called: 2
Function has been called: 3
```

### console.clear()

console.clear() membersihkan console browser.

🌕 Pertahankan kerja bagusmu. Terus semangat, langit adalah batasnya! Kamu baru saja menyelesaikan tantangan hari ke-13, dan kini kamu selangkah lebih dekat menuju kehebatan. Sekarang kerjakan beberapa latihan untuk mengasah otak dan ototmu.

## Latihan

### Latihan: Level 1

1.  Tampilkan array countries sebagai tabel
2.  Tampilkan objek countries sebagai tabel
3.  Gunakan console.group() untuk mengelompokkan log

### Latihan: Level 2

1. 10 > 2 \* 10 gunakan console.assert()
2. Tulis pesan peringatan menggunakan console.warn()
3. Tulis pesan error menggunakan console.error()

### Latihan: Level 3

1. Periksa perbedaan kecepatan antara perulangan berikut: while, for, for of, forEach

🎉 SELAMAT! 🎉

[<< Hari 12](../12_Day_Regular_expressions/12_day_regular_expressions.md) | [Hari 14 >>](../14_Day_Error_handling/14_day_error_handling.md)