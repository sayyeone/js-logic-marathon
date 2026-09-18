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


## mengambil elemen bedasarkan tag
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
