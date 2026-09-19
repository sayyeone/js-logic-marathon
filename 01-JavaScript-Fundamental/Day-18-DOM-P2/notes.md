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