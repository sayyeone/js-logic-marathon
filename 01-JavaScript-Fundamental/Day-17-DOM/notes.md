# DOM Document Object Model
representasi dokumen HTML sebagai object yg bisa dimanipulasi menggunakan javascript

## document
objek yg merepresentasikan dokumen HTML yg sedang dibuka di browser

## properti
- informasi/data yg dimiliki oleh sebuah objek DOM
```js
document.title
element.textContent
element.id
element.className
collection.length
```

## method
- function yg dimiliki object DOM dan digunakan untuk melakukan suatu operasi/tindakan
```js
document.getElementById("judul");
```


## get element by tag name
kode html
```html
<h1>First Title</h1>
<h1>Second Title</h1>
<h1>Third Title</h1>
<h1>Fourth Title</h1>
```
ambil semua elemen <h1>
dengan cara: 
```js
const allTitels = document.getElementByTagName('h1') // hanya mengambil elemen pertama dari dokumen html nya
```
- cari semua elemen yg tag-nya <h1> di halaman ini
_document_ => seluruh halaman HTML

**cara mengambil seluruh elemen**
```js
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) // output = HTMLCollections
console.log(allTitles.length) // output = 4

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i])
}
```
## get element by class name
method untuk mengambil elemen html bedasarkan nama class
```js
document.getElementByClassName('classname')
```

*contoh HTML*
```html
<h1 class="title">First Title</h1>
<h1 class="title">Second Title</h1>
<h1 class="title">Third Title</h1>
```
```js
const titles = document.getElementsByClassName('title')
```

## get element by id
method untuk mengambil satu elemen HTML bedasarkan id-nya
```js
document.getElementById('id')
```

*contoh HTML*
```html
<h1 id="first-title">First Title</h1>
<h1 id="second-title">Second Title</h1>
<h1 id="third-title">Third Title</h1>
```
```js
const firstTitle = document.getElementById('first-title')
```

## query selector
method untuk memilih satu elemen HTML bedasarkan CSS selector
```js
document.querySelector('selector')
```

*contoh HTML*
```html
<h1 id="first-title" class="title">First Title</h1>
<h1 class="title">Second Title</h1>
<h1 class="title">Third Title</h1>
```
### bedasarkan tag
```js
document.querySelector('h1')
```
- cari elemen <h1> tapi hanya mengambil elemen pertama

### bedasarkan id
```js
document.querySelector('#first-title')
```

### bedasarkan class
```js
document.querySelector('.title')
```

## query selector all
method yg digunakan untuk memilih semua elemen yg cocok dengan CSS selector

*contoh HTML*
```html
<h1 class="title">First</h1>
<h1 class="title">Second</h1>
<h1 class="title">Third</h1>
```
```js
const titles = document.querySelectorAll('.title')
```
 