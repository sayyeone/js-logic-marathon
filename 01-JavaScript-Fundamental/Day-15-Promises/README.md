<div align="center">
  <h1> 30 Hari Belajar JavaScript: Promises</h1>
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

[<< Hari 17](../17_Day_Web_storages/17_day_web_storages.md) | [Hari 19>>](../19_Day_Closures/19_day_closures.md)

![Thirty Days Of JavaScript](../images/banners/day_1_18.png)

- [Hari 18](#hari-18)
	- [Promise](#promise)
	- [Callback](#callbacks)
		- [Promise constructor](#promise-constructor)
	- [Fetch API](#fetch-api)
	- [Async dan Await](#async-and-await)
	- [Latihan](#latihan)
		- [Latihan: Level 1](#latihan-level-1)
		- [Latihan: Level 2](#latihan-level-2)
		- [Latihan: Level 3](#latihan-level-3)

# Hari 18

## Promise

Kita sebagai manusia sering kasih atau nerima janji buat melakukan sesuatu di suatu waktu. Kalau kita menepati janji, kita bikin orang lain senang, tapi kalau kita nggak menepati, bisa bikin kekecewaan. Promise di JavaScript punya kemiripan sama contoh di atas.

Promise adalah cara buat menangani operasi asinkron di JavaScript. Promise memungkinkan handler buat menangani nilai keberhasilan atau alasan kegagalan dari sebuah aksi asinkron. Ini bikin method asinkron bisa mengembalikan nilai kayak method sinkron: alih-alih langsung mengembalikan nilai final, method asinkron mengembalikan sebuah promise buat menyediakan nilainya di suatu waktu nanti.

Promise itu berada di salah satu dari state berikut:

- pending: state awal, belum fulfilled maupun rejected.
- fulfilled: artinya operasinya berhasil diselesaikan.
- rejected: artinya operasinya gagal.

Promise yang pending bisa jadi fulfilled dengan sebuah nilai, atau rejected dengan sebuah alasan (error). Waktu salah satu dari kedua hal ini terjadi, handler terkait yang udah antre lewat method then dari promise-nya akan dipanggil. (Kalau promise-nya udah fulfilled atau rejected duluan sebelum handler-nya dipasang, handler-nya tetap akan dipanggil, jadi nggak ada race condition antara operasi asinkron yang selesai dengan handler-nya yang dipasang.)

Karena method Promise.prototype.then() dan Promise.prototype.catch() mengembalikan promise, keduanya bisa dirangkai (chained).

## Callback

Buat memahami promise dengan baik, yuk kita pahami callback dulu. Yuk kita lihat callback berikut ini. Dari blok kode berikut, kamu bakal ngeh bedanya antara callback dan promise.

- callback
  Yuk kita lihat sebuah fungsi callback yang bisa nerima dua parameter. Parameter pertama adalah err dan yang kedua adalah result. Kalau parameter err-nya false, berarti nggak ada error, kalau enggak, dia bakal ngembaliin sebuah error.

Di kasus ini, err punya nilai, jadi dia bakal ngembaliin blok err-nya.

```js
//Callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback)
```

```sh
// setelah 2 detik akan mencetak
It did not go well
```

Di kasus ini, err-nya false, jadi dia bakal ngembaliin blok else-nya, yaitu result-nya.

```js
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(false, skills)
  }, 2000)
}

doSomething((err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
})
```

```sh
// setelah 2 detik akan mencetak skills-nya
["HTML", "CSS", "JS"]
```

### Promise constructor

Kita bisa bikin sebuah promise pakai Promise constructor. Kita bisa bikin promise baru pakai keyword `new` diikuti kata `Promise` dan diikuti tanda kurung. Di dalam kurung itu, ada sebuah fungsi `callback`. Fungsi callback promise ini punya dua parameter, yaitu fungsi _`resolve`_ dan _`reject`_.

```js
// syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
```

```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))
```

```sh
["HTML", "CSS", "JS"]
```

Promise di atas udah settled dengan resolve.
Yuk kita lihat contoh lain waktu promise-nya settled dengan reject.

```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.includes('Node')) {
      resolve('fullstack developer')
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error(error))
```

```sh
Something wrong has happened
```

## Fetch API

Fetch API menyediakan sebuah interface buat mengambil resource (termasuk lewat jaringan). Ini bakal terasa familiar buat siapa pun yang pernah pakai XMLHttpRequest, tapi API baru ini menyediakan fitur yang lebih powerful dan fleksibel. Di tantangan ini kita bakal pakai fetch buat request url dan API. Selain itu, yuk kita lihat contoh penggunaan promise dalam mengakses resource jaringan pakai fetch API.

```js
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // mengakses data API sebagai JSON
  .then(data => {
    // mendapatkan datanya
    console.log(data)
  })
  .catch(error => console.error(error)) // menangani error kalau ada yang salah
```

## Async dan Await

Async dan await adalah cara yang elegan buat menangani promise. Gampang dipahami dan bersih waktu ditulis.

```js
const square = async function (n) {
  return n * n
}

square(2)
```

```sh
Promise {<resolved>: 4}
```

Kata _async_ di depan sebuah fungsi artinya fungsi itu bakal mengembalikan sebuah promise. Fungsi square di atas, alih-alih ngembaliin sebuah nilai, malah ngembaliin sebuah promise.

Terus, gimana caranya kita ngakses nilai dari promise-nya? Buat ngakses nilai dari promise, kita bakal pakai keyword _await_.

```js
const square = async function (n) {
  return n * n
}
const value = await square(2)
console.log(value)
```

```sh
4
```

Sekarang, seperti yang kamu lihat dari contoh di atas, nulis async di depan sebuah fungsi bikin sebuah promise, dan buat dapetin nilai dari promise-nya kita pakai await. Async dan await itu berpasangan, yang satu nggak bisa ada tanpa yang lain.

Yuk kita ambil data API pakai method promise dan method async-await.

- promise

```js
const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
```

- async dan await

```js
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()
```

🌕 Kamu keren dan kamu udah menepati janjimu buat sampai di hari ke-18. Terus tepati janjimu, dan selesaikan tantangannya dengan resolve. Kamu udah 18 langkah lebih dekat menuju kehebatan. Sekarang, kerjain beberapa latihan buat mengasah otak dan ototmu.

## Latihan

```js
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
```

### Latihan: Level 1

1. Baca countries API pakai fetch, terus cetak nama negara, ibu kota, bahasa, populasi, dan luas wilayahnya.

### Latihan: Level 2

1. Cetak semua nama kucing ke dalam variabel catNames.

### Latihan: Level 3

1. Baca cats API dan cari rata-rata berat kucing dalam satuan metrik.
2. Baca countries API dan cari 10 negara terbesar.
3. Baca countries API dan hitung total jumlah bahasa resmi yang dipakai di seluruh dunia.

🎉 SELAMAT ! 🎉

[<< Hari 17](../17_Day_Web_storages/17_day_web_storages.md) | [Hari 19>>](../19_Day_Closures/19_day_closures.md)