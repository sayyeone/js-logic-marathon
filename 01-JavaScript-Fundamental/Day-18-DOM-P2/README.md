<div align="center">
  <h1> 30 Hari Belajar JavaScript: Manipulasi Objek DOM</h1>
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

[<< Hari 21](../21_Day_DOM/21_day_dom.md) | [Hari 23 >>](../23_Day_Event_listeners/23_day_event_listeners.md)

![Thirty Days Of JavaScript](../images/banners/day_1_22.png)
- [Hari 22](#hari-22)
  - [DOM(Document Object Model)-Hari 2](#domdocument-object-model-day-2)
    - [Membuat Elemen](#creating-an-element)
    - [Membuat beberapa elemen](#creating-elements)
    - [Menambahkan child ke elemen parent](#appending-child-to-a-parent-element)
    - [Menghapus elemen child dari sebuah parent node](#removing-a-child-element-from-a-parent-node)
  - [Latihan](#latihan)
    - [Latihan: Level 1](#exercises-level-1)
    - [Latihan: Level 2](#exercises-level-2)
    - [Latihan: Level 3](#exercises-level-3)

# Hari 22

## DOM(Document Object Model)-Hari 2

### Membuat Elemen

Buat bikin elemen HTML, kita pakai nama tag. Bikin elemen HTML pakai JavaScript itu simpel banget dan langsung to the point. Kita pakai method _document.createElement()_. Method ini butuh nama tag elemen HTML sebagai parameter string.

```js
// syntax
document.createElement('tagname')
```

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

    <script>
        let title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '24px'
        title.textContent = 'Creating HTML element DOM Day 2'

        console.log(title)
    </script>
</body>

</html>
```

### Membuat beberapa elemen

Buat bikin beberapa elemen sekaligus, kita harus pakai loop. Pakai loop, kita bisa bikin elemen HTML sebanyak yang kita mau.
Setelah kita bikin elemennya, kita bisa assign nilai ke berbagai properti dari objek HTML-nya.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

    <script>
        let title
        for (let i = 0; i < 3; i++) {
            title = document.createElement('h1')
            title.className = 'title'
            title.style.fontSize = '24px'
            title.textContent = i
            console.log(title)
        }
    </script>
</body>

</html>
```

### Menambahkan child ke elemen parent

Buat bisa lihat elemen yang udah kita buat di dokumen HTML, kita harus nambahin (append) elemen itu ke parent-nya sebagai elemen child. Kita bisa akses body dokumen HTML pakai *document.body*. *document.body* mendukung method *appendChild()*. Lihat contoh di bawah ini.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

    <script>
        // membuat beberapa elemen dan menambahkannya ke elemen parent
        let title
        for (let i = 0; i < 3; i++) {
            title = document.createElement('h1')
            title.className = 'title'
            title.style.fontSize = '24px'
            title.textContent = i
            document.body.appendChild(title)
        }
    </script>
</body>
</html>
```

### Menghapus elemen child dari sebuah parent node

Setelah bikin HTML, kadang kita mau menghapus satu atau beberapa elemen, dan kita bisa pakai method *removeChild()*.

**Contoh:**

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Asabeneh Yetayeh challenges in 2020</h1>
    <ul>
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Done</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        const ul = document.querySelector('ul')
        const lists = document.querySelectorAll('li')
        for (const list of lists) {
            ul.removeChild(list)

        }
    </script>
</body>

</html>
```

Seperti yang udah kita lihat di bagian sebelumnya, ada cara yang lebih bagus buat menghapus semua elemen HTML di dalam atau semua child dari sebuah elemen parent, yaitu pakai properti *innerHTML*.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Asabeneh Yetayeh challenges in 2020</h1>
    <ul>
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Done</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        const ul = document.querySelector('ul')
        ul.innerHTML = ''
    </script>
</body>

</html>
```

Potongan kode di atas berhasil menghapus semua elemen child-nya.

---

🌕 Kamu tuh spesial banget, kamu terus berkembang tiap hari. Sekarang, kamu udah tahu cara menghancurkan elemen DOM yang udah dibuat kalau memang diperlukan. Kamu udah belajar DOM, dan sekarang kamu punya kemampuan buat membangun dan mengembangkan aplikasi. Tinggal delapan hari lagi menuju kehebatan. Sekarang, kerjain beberapa latihan buat mengasah otak dan ototmu.

## Latihan

### Latihan: Level 1

1. Bikin sebuah div container di dokumen HTML dan bikin angka 1 sampai 100 secara dinamis, terus tambahin ke dalam div container-nya.
   - Background angka genap warnanya hijau
   - Background angka ganjil warnanya kuning
   - Background bilangan prima warnanya merah

![Number Generator](./../images/projects/dom_min_project_day_number_generators_2.1.png)

### Latihan: Level 2

1. Pakai array countries buat menampilkan semua nama negaranya. Lihat desainnya.

![World Countries List](./../images/projects/dom_min_project_countries_aray_day_2.2.png)

### Latihan: Level 3

Cek requirement proyek ini dari kedua gambar (jpg dan gif). Semua data dan CSS-nya udah diimplementasikan pakai JavaScript aja. Datanya ada di folder starter project_3. Tombol dropdown-nya dibuat pakai elemen HTML [*details*](https://www.w3schools.com/tags/tag_details.asp).

![Challenge Information](./../images/projects/dom_mini_project_challenge_info_day_2.3.gif)

![Challenge Information](./../images/projects/dom_mini_project_challenge_info_day_2.3.png)

🎉 SELAMAT ! 🎉

[<< Hari 21](../21_Day_DOM/21_day_dom.md) | [Hari 23 >>](../23_Day_Event_listeners/23_day_event_listeners.md)