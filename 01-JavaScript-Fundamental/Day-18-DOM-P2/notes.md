# DOM lanjutan
membuat elemen baru menggunakan js

## document.createElement()
method milik document yg diunakan untuk membuat element HTML baru menggunakan js
```js
document.createElement('tagname')
```
```js
const title = document.createElement('h1')
```
- js membuat sebuah elemen <h1> baru

*contoh lengkap*
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM</title>
</head>
<body>

<script>
    const title = document.createElement('h1')

    title.className = 'title'
    title.style.fontSize = '24px'
    title.textContent = 'Creating HTML element DOM Day 2'

    console.log(title)
</script>

</body>
</html>
```

**elemen h1 yg sudah dibuat belum ditampilkan di halaman**
dapat dibuat dengan menambahkan child ke parentnya

## appendChild()
untuk menambahkan sebuah element sebagai child ke element parent
```js
parent.appendChild(child)
```
- masukkan child ke dalam parent

### apa itu parent dan child?
```html
<body> 
    <h1>Hello</h1>
</body>
```
- body = parent
- h1 = child

*create element dibuat bukan dengan menggunakan struktur HTML yg lengkap*
membuat element => kemudian diisi => dimasukkan ke body

```js
const title = document.createElement('h1')
document.body.appendChild(title)
```

## removeChild()
menghapus salah satu element child dari parent
```html
<ul>
    <li>30DaysOfPython</li>
    <li>30DaysOfJavaScript</li>
    <li>30DaysOfReact</li>
</ul>
```
- mengambil parent yaitu ul
```js
const ul = document.querySelector('ul')
```
- mengambil semua child <li>
```js
const lists = document.querySelectorAll('li')
```
- melakukan perulangan untuk seluruh ist yg telah ditentukan, karena ada lebih dari 1
```js
for (const list of lists) {
    ul.removeChild(list)
}
```