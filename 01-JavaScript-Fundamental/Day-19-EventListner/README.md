<div align="center">
  <h1> 30 Hari Belajar JavaScript: Event Listeners</h1>
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

[<< Hari 22](../22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md) | [Hari 24 >>](../24_Day_Project_solar_system/24_day_project_solar_system.md)

![Thirty Days Of JavaScript](../images/banners/day_1_23.png)

- [Hari 22](#hari-22)
	- [DOM(Document Object Model)-Hari 3](#domdocument-object-model-day-3)
		- [Event Listener](#event-listeners)
			- [Click](#click)
			- [Double Click](#double-click)
			- [Mouse enter](#mouse-enter)
		- [Mengambil nilai dari elemen input](#getting-value-from-an-input-element)
		- [nilai input](#input-value)
			- [event input dan change](#input-event-and-change)
			- [event blur](#blur-event)
			- [keypress, keydown dan keyup](#keypress-keydow-and-keyup)
	- [Latihan](#latihan)
		- [Latihan: Level 1](#exercise-level-1)

# Hari 22

## DOM(Document Object Model)-Hari 3

### Event Listener

Event HTML yang umum: onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload.
Kita bisa nambahin method event listener ke objek DOM mana pun. Kita pakai method **_addEventListener()_** buat "mendengarkan" berbagai jenis event di elemen HTML. Method _addEventListener()_ butuh dua argumen, yaitu jenis event listener dan sebuah callback function.

```js
selectedElement.addEventListener('eventlistner', function(e) {
  // aktivitas yang kamu mau terjadi setelah event-nya akan ada di sini
})
// atau

selectedElement.addEventListener('eventlistner', e => {
  // aktivitas yang kamu mau terjadi setelah event-nya akan ada di sini
})
```

### Click

Buat memasang event listener ke sebuah elemen, pertama kita pilih dulu elemennya, terus kita pasang method addEventListener-nya. Event listener-nya butuh jenis event dan fungsi callback sebagai argumen.

Berikut ini contoh event tipe click.

**Contoh: click**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>

    <script>
      const button = document.querySelector('button')
      button.addEventListener('click', e => {
        console.log('e gives the event listener object:', e)
        console.log('e.target gives the selected element: ', e.target)
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })
    </script>
  </body>
</html>
```

Event juga bisa dipasang langsung ke elemen HTML-nya sebagai inline script.

**Contoh: onclick**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button onclick="clickMe()">Click Me</button>
    <script>
      const clickMe = () => {
        alert('We can attach event on HTML element')
      }
    </script>
  </body>
</html>
```

#### Double Click

Buat memasang event listener ke sebuah elemen, pertama kita pilih dulu elemennya, terus kita pasang method addEventListener-nya. Event listener-nya butuh jenis event dan fungsi callback sebagai argumen.

Berikut ini contoh event tipe click.
**Contoh: dblclick**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>
    <script>
      const button = document.querySelector('button')
      button.addEventListener('dblclick', e => {
        console.log('e gives the event listener object:', e)
        console.log('e.target gives the selected element: ', e.target)
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })
    </script>
  </body>
</html>
```

#### Mouse enter

Buat memasang event listener ke sebuah elemen, pertama kita pilih dulu elemennya, terus kita pasang method addEventListener-nya. Event listener-nya butuh jenis event dan fungsi callback sebagai argumen.

Berikut ini contoh event tipe click.

**Contoh: mouseenter**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>
    <script>
      const button = document.querySelector('button')
      button.addEventListener('mouseenter', e => {
        console.log('e gives the event listener object:', e)
        console.log('e.target gives the selected element: ', e.target)
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })
    </script>
  </body>
</html>
```

Sampai sini kamu udah familiar sama method addEventListener dan cara memasang event listener. Ada banyak banget jenis event listener. Tapi di tantangan ini kita bakal fokus ke event-event penting yang paling umum dipakai.
Daftar event:

- click - waktu elemennya diklik
- dblclick - waktu elemennya diklik dua kali
- mouseenter - waktu pointer mouse masuk ke elemennya
- mouseleave - waktu pointer mouse keluar dari elemennya
- mousemove - waktu pointer mouse bergerak di atas elemennya
- mouseover - waktu pointer mouse bergerak di atas elemennya
- mouseout - waktu pointer mouse keluar dari elemennya
- input - waktu nilai dimasukkan ke input field
- change - waktu nilai di input field berubah
- blur - waktu elemennya nggak lagi difokuskan
- keydown - waktu sebuah tombol ditekan ke bawah
- keyup - waktu sebuah tombol dilepas
- keypress - waktu kita menekan tombol apa pun
- onload - waktu browser selesai memuat sebuah halaman

Coba tes jenis-jenis event di atas dengan mengganti jenis event-nya di potongan kode di atas.

### Mengambil nilai dari elemen input

Kita biasanya ngisi form, dan form nerima data. Field form dibuat pakai elemen HTML input. Yuk kita bikin aplikasi kecil yang memungkinkan kita menghitung body mass index seseorang pakai dua field input, satu tombol, dan satu tag p.

### nilai input

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Body Mass Index Calculator</h1>

    <input type="text" id="mass" placeholder="Mass in Kilogram" />
    <input type="text" id="height" placeholder="Height in meters" />
    <button>Calculate BMI</button>

    <script>
      const mass = document.querySelector('#mass')
      const height = document.querySelector('#height')
      const button = document.querySelector('button')

      let bmi
      button.addEventListener('click', () => {
        bmi = mass.value / height.value ** 2
        alert(`your bmi is ${bmi.toFixed(2)}`)
        console.log(bmi)
      })
    </script>
  </body>
</html>
```

#### event input dan change

Di contoh di atas, kita berhasil ngambil nilai input dari dua field input dengan cara klik tombol. Gimana kalau kita mau ngambil nilainya tanpa klik tombol? Kita bisa pakai jenis event _change_ atau _input_ buat langsung ambil data dari field input-nya waktu field-nya lagi difokuskan. Yuk kita lihat cara nanganin itu.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Data Binding using input or change event</h1>

    <input type="text" placeholder="say something" />
    <p></p>

    <script>
      const input = document.querySelector('input')
      const p = document.querySelector('p')

      input.addEventListener('input', e => {
        p.textContent = e.target.value
      })
    </script>
  </body>
</html>
```

#### event blur

Berbeda dengan _input_ atau _change_, event _blur_ terjadi waktu field input-nya nggak lagi difokuskan.

```js
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Giving feedback using blur event</h1>

    <input type="text" id="mass" placeholder="say something" />
    <p></p>

    <script>
        const input = document.querySelector('input')
        const p = document.querySelector('p')

        input.addEventListener('blur', (e) => {
            p.textContent = 'Field is required'
            p.style.color = 'red'

        })
    </script>
</body>

</html>
```

#### keypress, keydown dan keyup

Kita bisa mengakses semua kode tombol keyboard pakai berbagai jenis event listener. Yuk kita pakai keypress dan ambil keyCode dari tiap tombol keyboard-nya.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Key events: Press any key</h1>

    <script>
      document.body.addEventListener('keypress', e => {
        alert(e.keyCode)
      })
    </script>
  </body>
</html>
```

---

🌕 Kamu tuh spesial banget, kamu terus berkembang tiap hari. Sekarang, kamu udah tahu cara menangani berbagai macam event DOM. Tinggal tujuh hari lagi menuju kehebatan. Sekarang, kerjain beberapa latihan buat mengasah otak dan ototmu.

## Latihan

### Latihan: Level 1

1. Bikin angka-angka dan tandai bilangan genap, ganjil, dan prima dengan tiga warna yang berbeda. Lihat gambar di bawah ini.

![Number Generator](./../images/projects/dom_min_project_number_generator_day_3.1.gif)

1. Tampilkan kode keyboard pakai event listener. Lihat gambar di bawah ini.

![Keyboard key](./../images/projects/dom_min_project_keycode_day_3.2.gif)

🎉 SELAMAT ! 🎉

[<< Hari 22](../22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md) | [Hari 24 >>](../24_Day_Project_solar_system/24_day_project_solar_system.md)