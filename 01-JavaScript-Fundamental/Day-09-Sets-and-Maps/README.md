<div align="center">
  <h1> 30 Hari JavaScript: Set dan Map</h1>
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

[<< Hari 9](../09_Day_Higher_order_functions/09_day_higher_order_functions.md) | [Hari 11>>](../11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)

![Hari 10](../images/banners/day_1_10.png)

- [Hari 10](#hari-10)
	- [Set](#set)
		- [Membuat set kosong](#membuat-set-kosong)
		- [Membuat set dari array](#membuat-set-dari-array)
		- [Menambahkan elemen ke dalam set](#menambahkan-elemen-ke-dalam-set)
		- [Menghapus elemen dari set](#menghapus-elemen-dari-set)
		- [Memeriksa elemen dalam set](#memeriksa-elemen-dalam-set)
		- [Mengosongkan set](#mengosongkan-set)
		- [Gabungan (Union) dari set](#gabungan-union-dari-set)
		- [Irisan (Intersection) dari set](#irisan-intersection-dari-set)
		- [Selisih (Difference) dari set](#selisih-difference-dari-set)
	- [Map](#map)
		- [Membuat Map kosong](#membuat-map-kosong)
		- [Membuat Map dari array](#membuat-map-dari-array)
		- [Menambahkan nilai ke dalam Map](#menambahkan-nilai-ke-dalam-map)
		- [Mengambil nilai dari Map](#mengambil-nilai-dari-map)
		- [Memeriksa key dalam Map](#memeriksa-key-dalam-map)
	- [Latihan](#latihan)
		- [Latihan: Level 1](#latihan-level-1)
		- [Latihan: Level 2](#latihan-level-2)
		- [Latihan: Level 3](#latihan-level-3)

# Hari 10

## Set

Set adalah kumpulan dari elemen-elemen. Set hanya dapat berisi elemen yang unik (tidak ada duplikat).
Mari kita lihat cara membuat set pada bagian di bawah ini.

### Membuat set kosong

```js
const companies = new Set()
console.log(companies)
```

```sh
Set(0) {}
```

### Membuat set dari array

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
```

```sh
Set(4) {"English", "Finnish", "French", "Spanish"}
```

Set merupakan objek yang dapat diiterasi (iterable), dan kita dapat melakukan iterasi pada setiap elemennya.

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)

for (const language of setOfLanguages) {
  console.log(language)
}
```

```sh
  English
  Finnish
  French
  Spanish
```

### Menambahkan elemen ke dalam set

```js
const companies = new Set() // membuat set kosong
console.log(companies.size) // 0

companies.add('Google') // menambahkan elemen ke dalam set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elemen dalam set
console.log(companies)
```

```sh
Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}
```

Kita juga bisa menggunakan loop untuk menambahkan elemen ke dalam set.

```js
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
```

```sh
Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

```

### Menghapus elemen dari set

Kita dapat menghapus sebuah elemen dari set menggunakan method delete.

```js
console.log(companies.delete('Google'))
console.log(companies.size) // tersisa 4 elemen dalam set
```

### Memeriksa elemen dalam set

Method has dapat membantu untuk mengetahui apakah sebuah elemen tertentu ada di dalam set.

```js
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true
```

### Mengosongkan set

Method ini menghapus semua elemen dari sebuah set.

```js
companies.clear()
console.log(companies)
```

```sh
Set(0) {}
```

Lihat contoh di bawah ini untuk mempelajari cara menggunakan set.

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)
```

```js
[
  { lang: 'English', count: 3 },
  { lang: 'Finnish', count: 1 },
  { lang: 'French', count: 2 },
  { lang: 'Spanish', count: 1 },
]
```

Contoh penggunaan lain dari set. Misalnya untuk menghitung jumlah item unik dalam sebuah array.

```js
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)
```

```sh
Set(5) {5, 3, 2, 9, 4}
```

### Gabungan (Union) dari set

Untuk mencari gabungan (union) dari dua set dapat dilakukan menggunakan spread operator. Mari kita cari gabungan dari set A dan set B (A U B)

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)
```

```sh
Set(6) {1, 2, 3, 4, 5,6}
```

### Irisan (Intersection) dari set

Untuk mencari irisan (intersection) dari dua set dapat dilakukan menggunakan filter. Mari kita cari irisan dari set A dan set B (A ∩ B)

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)
```

```sh
Set(3) {3, 4, 5}
```

### Selisih (Difference) dari set

Untuk mencari selisih (difference) antara dua set dapat dilakukan menggunakan filter. Mari kita cari selisih dari set A dan set B (A \ B)

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C)
```

```sh
Set(2) {1, 2}
```

## Map

### Membuat Map kosong

```js
const map = new Map()
console.log(map)
```

```sh
Map(0) {}
```

### Membuat Map dari array

```js
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)
```

```sh
Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
3
```

### Menambahkan nilai ke dalam Map

```js
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)
```

```sh
Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
3
```

### Mengambil nilai dari Map

```js
console.log(countriesMap.get('Finland'))
```

```sh
Helsinki
```

### Memeriksa key dalam Map

Periksa apakah sebuah key ada dalam map menggunakan method _has_. Method ini akan mengembalikan nilai _true_ atau _false_.

```js
console.log(countriesMap.has('Finland'))
```

```sh
true
```

Mengambil semua nilai dari map menggunakan loop

```js
for (const country of countriesMap) {
  console.log(country)
}
```

```sh
(2) ["Finland", "Helsinki"]
(2) ["Sweden", "Stockholm"]
(2) ["Norway", "Oslo"]
```

```js
for (const [country, city] of countriesMap){
 console.log(country, city)
}
```

```sh
Finland Helsinki
Sweden Stockholm
Norway Oslo
```

🌕 Kamu telah mencapai sebuah tonggak besar, kamu luar biasa. Teruslah maju! Kamu baru saja menyelesaikan tantangan hari ke-10 dan kamu sudah 10 langkah lebih maju menuju kesuksesan. Sekarang kerjakan beberapa latihan untuk mengasah otak dan ototmu.

## Latihan

### Latihan: Level 1

```js
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
```

1. Buat sebuah set kosong
2. Buat sebuah set yang berisi angka 0 sampai 10 menggunakan loop
3. Hapus sebuah elemen dari set
4. Kosongkan sebuah set
5. Buat sebuah set berisi 5 elemen string dari array
6. Buat sebuah map berisi nama negara dan jumlah karakter dari nama negara tersebut

### Latihan: Level 2

1. Cari gabungan (union) a dengan b
2. Cari irisan (intersection) a dengan b
3. Cari selisih (difference) a dengan b

### Latihan: Level 3

1. Berapa banyak bahasa yang terdapat dalam file objek countries.

1. \*\*\* Gunakan data countries untuk mencari 10 bahasa yang paling banyak digunakan:

```js
   // Output kamu seharusnya terlihat seperti ini
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Output kamu seharusnya terlihat seperti ini
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
```

🎉 SELAMAT ! 🎉

[<< Hari 9](../09_Day_Higher_order_functions/09_day_higher_order_functions.md) | [Hari 11 >>](../11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)