<div align="center">
  <h1> 30 Hari Belajar JavaScript: Document Object Model(DOM)</h1>
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

[<< Hari 20](../20_Day_Writing_clean_codes/20_day_writing_clean_codes.md) | [Hari 22 >>](../22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md)

![Thirty Days Of JavaScript](../images/banners/day_1_21.png)

- [Hari 21](#hari-21)
	- [Document Object Model (DOM) - Hari 1](#document-object-model-dom---day-1)
		- [Mengambil Elemen](#getting-element)
			- [Mengambil elemen berdasarkan nama tag](#getting-elements-by-tag-name)
			- [Mengambil elemen berdasarkan nama class](#getting-elements-by-class-name)
			- [Mengambil elemen berdasarkan id](#getting-an-element-by-id)
			- [Mengambil elemen pakai method querySelector](#getting-elements-by-using-queryselector-methods)
		- [Menambahkan atribut](#adding-attribute)
			- [Menambahkan atribut pakai setAttribute](#adding-attribute-using-setattribute)
			- [Menambahkan atribut tanpa setAttribute](#adding-attribute-without-setattribute)
			- [Menambahkan class pakai classList](#adding-class-using-classlist)
			- [Menghapus class pakai remove](#removing-class-using-remove)
		- [Menambahkan Teks ke elemen HTML](#adding-text-to-html-element)
			- [Menambahkan Teks pakai textContent](#adding-text-content-using-textcontent)
			- [Menambahkan Teks pakai innerHTML](#adding-text-content-using-innerhtml)
				- [Text Content](#text-content)
				- [Inner HTML](#inner-html)
		- [Menambahkan style](#adding-style)
			- [Menambahkan Warna Style](#adding-style-color)
			- [Menambahkan Warna Background Style](#adding-style-background-color)
			- [Menambahkan Ukuran Font Style](#adding-style-font-size)
	- [Latihan](#latihan)
		- [Latihan: Level 1](#exercise-level-1)
		- [Latihan: Level 2](#exercise-level-2)
		- [Latihan: Level 3](#exercise-level-3)
			- [DOM: Mini project 1](#dom-mini-project-1)

# Hari 21

## Document Object Model (DOM) - Hari 1

Dokumen HTML terstruktur sebagai sebuah JavaScript Object. Setiap elemen HTML punya berbagai properti berbeda yang bisa membantu kita memanipulasinya. Kita bisa mengambil, membuat, menambahkan (append), atau menghapus elemen HTML pakai JavaScript. Cek contoh-contoh di bawah ini. Memilih elemen HTML pakai JavaScript itu mirip sama memilih pakai CSS. Buat memilih elemen HTML, kita pakai nama tag, id, nama class, atau atribut lainnya.

### Mengambil Elemen

Kita bisa mengakses elemen atau beberapa elemen yang udah dibuat pakai JavaScript. Buat mengakses atau ngambil elemen, kita pakai berbagai method. Kode di bawah ini punya empat elemen _h1_. Yuk kita lihat berbagai method buat mengakses elemen _h1_ ini.

```html
<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Document Object Model</title>
    </head>
    <body>

     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>

    </body>
  </html>
```

#### Mengambil elemen berdasarkan nama tag

**_getElementsByTagName()_**: menerima nama tag sebagai parameter string, dan method ini mengembalikan sebuah objek HTMLCollection. HTMLCollection adalah objek mirip array yang berisi elemen-elemen HTML. Properti length memberitahu ukuran koleksinya. Setiap kali kita pakai method ini, kita mengakses masing-masing elemennya pakai index atau lewat loop pada tiap item-nya. HTMLCollection nggak support semua method array, jadi kita harus pakai for loop biasa, bukan forEach.

```js
// syntax
document.getElementsByTagName('tagname')
```

```js
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // mencetak setiap elemen di dalam HTMLCollection
}
```

#### Mengambil elemen berdasarkan nama class

Method **_getElementsByClassName()_** mengembalikan sebuah objek HTMLCollection. HTMLCollection adalah daftar mirip array yang berisi elemen-elemen HTML. Properti length memberitahu ukuran koleksinya. Kita bisa loop lewat semua elemen HTMLCollection-nya. Lihat contoh di bawah ini.

```js
//syntax
document.getElementsByClassName('classname')
```

```js
const allTitles = document.getElementsByClassName('title')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // mencetak setiap elemen di dalam HTMLCollection
}
```

#### Mengambil elemen berdasarkan id

**_getElementsById()_** menargetkan satu elemen HTML tertentu. Kita masukin id-nya tanpa tanda # sebagai argumen.

```js
//syntax
document.getElementById('id')
```

```js
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>
```

#### Mengambil elemen pakai method querySelector

Method _document.querySelector_ bisa memilih satu atau beberapa elemen HTML berdasarkan nama tag, id, atau nama class.

**_querySelector_**: bisa dipakai buat memilih elemen HTML berdasarkan nama tag, id, atau class-nya. Kalau yang dipakai adalah nama tag, ini cuma memilih elemen pertama aja.

```js
let firstTitle = document.querySelector('h1') // memilih elemen h1 pertama yang tersedia
let firstTitle = document.querySelector('#first-title') // memilih id dengan first-title
let firstTitle = document.querySelector('.title') // memilih elemen pertama yang tersedia dengan class title
```

**_querySelectorAll_**: bisa dipakai buat memilih elemen HTML berdasarkan nama tag atau class-nya. Method ini mengembalikan sebuah nodeList, yaitu objek mirip array yang support method-method array. Kita bisa pakai **_for loop_** atau **_forEach_** buat loop lewat setiap elemen nodeList-nya.

```js
const allTitles = document.querySelectorAll('h1') # memilih semua elemen h1 yang tersedia di halaman

console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))
const allTitles = document.querySelectorAll('.title') // caranya sama kalau memilih pakai class
```

### Menambahkan atribut

Atribut ditambahkan di dalam opening tag HTML, dan memberi informasi tambahan tentang elemennya. Atribut HTML yang umum: id, class, src, style, href, disabled, title, alt. Yuk kita tambahin id dan class buat judul keempat.

```js
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'
```

#### Menambahkan atribut pakai setAttribute

Method **_setAttribute()_** mengatur atribut HTML apa pun. Method ini butuh dua parameter, yaitu jenis atribut dan nama atributnya.
Yuk kita tambahin atribut class dan id buat judul keempat.

```js
const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')
```

#### Menambahkan atribut tanpa setAttribute

Kita bisa pakai cara pengaturan objek biasa buat mengatur atribut, tapi ini nggak berlaku buat semua elemen. Beberapa atribut adalah properti objek DOM dan bisa diatur langsung. Contohnya id dan class.

```js
//cara lain buat mengatur atribut
titles[3].className = 'title'
titles[3].id = 'fourth-title'
```

#### Menambahkan class pakai classList

Method classList adalah cara yang bagus buat menambahkan class tambahan. Ini nggak menimpa class asli kalau memang udah ada class-nya, malah nambahin class tambahan buat elemen itu.

```js
//cara lain buat mengatur atribut: menambahkan class, nggak menimpa
titles[3].classList.add('title', 'header-title')
```

#### Menghapus class pakai remove

Mirip kayak menambahkan, kita juga bisa hapus class dari sebuah elemen. Kita bisa hapus class tertentu dari sebuah elemen.

```js
//cara lain buat mengatur atribut: menambahkan class, nggak menimpa
titles[3].classList.remove('title', 'header-title')
```

### Menambahkan Teks ke elemen HTML

HTML itu terdiri dari opening tag, closing tag, dan sebuah text content. Kita bisa nambahin text content pakai properti _textContent_ atau \*innerHTML.

#### Menambahkan Teks pakai textContent

Properti _textContent_ dipakai buat nambahin teks ke elemen HTML.

```js
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'
```

#### Menambahkan Teks pakai innerHTML

Kebanyakan orang suka bingung antara _textContent_ dan _innerHTML_. _textContent_ ditujukan buat nambahin teks ke elemen HTML, sedangkan innerHTML bisa nambahin teks atau elemen HTML (atau beberapa elemen) sebagai child.

##### Text Content

Kita assign properti objek HTML *textContent* ke sebuah teks.

```js
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'
```

##### Inner HTML

Kita pakai properti innerHTML waktu kita mau mengganti atau nambahin konten child yang benar-benar baru ke sebuah elemen parent.
Nilai yang kita assign bakal berupa string dari elemen-elemen HTML.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul></ul>
    </div>
    <script>
    const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
  const ul = document.querySelector('ul')
  ul.innerHTML = lists
    </script>
  </body>
</html>
```

Properti innerHTML juga memungkinkan kita buat menghapus semua child dari sebuah elemen parent. Alih-alih pakai removeChild(), aku lebih menyarankan cara berikut ini.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
    <script>
  const ul = document.querySelector('ul')
  ul.innerHTML = ''
    </script>
  </body>
</html>
```

### Menambahkan style

#### Menambahkan Warna Style

Yuk kita tambahin sedikit style ke judul-judul kita. Kalau elemennya punya index genap, kita kasih warna hijau, kalau enggak, merah.

```js
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // semua judul bakal punya ukuran font 24px
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})
```

#### Menambahkan Warna Background Style

Yuk kita tambahin sedikit style ke judul-judul kita. Kalau elemennya punya index genap, kita kasih warna hijau, kalau enggak, merah.

```js
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // semua judul bakal punya ukuran font 24px
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.backgroundColor = 'red'
  }
})
```

#### Menambahkan Ukuran Font Style

Yuk kita tambahin sedikit style ke judul-judul kita. Kalau elemennya punya index genap, kasih 20px, kalau enggak, 30px.

```js
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // semua judul bakal punya ukuran font 24px
  if (i % 2 === 0) {
    title.style.fontSize = '20px'
  } else {
    title.style.fontSize = '30px'
  }
})
```

Kayak yang udah kamu perhatiin, properti CSS waktu dipakai di JavaScript bakal ditulis dalam format camelCase. Properti CSS berikut ini berubah dari background-color jadi backgroundColor, font-size jadi fontSize, font-family jadi fontFamily, margin-bottom jadi marginBottom.

---

🌕 Sekarang, kamu udah dipenuhi kekuatan super, kamu udah menyelesaikan bagian paling penting dan paling menantang dari tantangan ini, dan secara umum di JavaScript. Kamu udah belajar DOM, dan sekarang kamu punya kemampuan buat membangun dan mengembangkan aplikasi. Sekarang, kerjain beberapa latihan buat mengasah otak dan ototmu.

## Latihan

### Latihan: Level 1

1. Bikin file index.html dan taruh empat elemen p seperti di atas: Ambil paragraf pertama pakai **_document.querySelector(tagname)_** dan nama tag.
2. Ambil masing-masing paragraf pakai **_document.querySelector('#id')_** berdasarkan id-nya.
3. Ambil semua elemen p sebagai nodeList pakai **_document.querySelectorAll(tagname)_** berdasarkan nama tag-nya.
4. Loop lewat nodeList-nya dan ambil text content dari tiap paragraf.
5. Set text content buat paragraf keempat jadi **_Fourth Paragraph_**.
6. Set atribut id dan class buat semua paragraf pakai berbagai cara pengaturan atribut yang berbeda.

### Latihan: Level 2

1. Ubah style masing-masing paragraf pakai JavaScript (misalnya color, background, border, font-size, font-family).
1. Pilih semua paragraf dan loop lewat masing-masing elemen, kasih paragraf pertama dan ketiga warna hijau, dan paragraf kedua dan keempat warna merah.
1. Set text content, id, dan class buat tiap paragraf.

### Latihan: Level 3

#### DOM: Mini project 1

1. Kembangkan aplikasi berikut ini, pakai elemen-elemen HTML berikut buat mulai. Kamu bakal dapetin kode yang sama di folder starter. Terapkan semua style dan fungsionalitasnya pakai JavaScript aja.

   - Warna tahunnya berubah setiap 1 detik
   - Warna background tanggal dan waktunya berubah setiap detik
   - Tantangan yang udah selesai punya background hijau
   - Tantangan yang lagi berjalan punya background kuning
   - Tantangan yang akan datang punya background merah

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
  </body>
</html>
```

![Project 1](../images/projects/dom_min_project_challenge_info_day_1.1.gif)

![Project 2](../images/projects/dom_min_project_challenge_info_day_1.1.png)

🎉 SELAMAT ! 🎉

[<< Hari 20](../20_Day_Writing_clean_codes/20_day_writing_clean_codes.md) | [Hari 22 >>](../22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md)