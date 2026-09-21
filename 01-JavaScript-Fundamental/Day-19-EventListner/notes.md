- sandhika galih ver

# event listener
event = suatu kejadian/aksi yg terjadi pada halaman atau elemen HTML
*contohnya:*
- user mengeklik tombol
- mouse masuk ke elemen
- user mengetik di input
- browser selesai memuat halaman

mekanisme yg membuat js "mendengarkan" suatu event pada element

# addEventListener()
memasang event listener pada sebuah element DOM

```js
element.addEventListener('event', callback)
```

*contoh*
```js
button.addEventListener('click', () => {
    console.log('button diklik')
})
```
function tidak langsung dijalankan ketika kode dibaca, jika terjadi click baru jalankan

- element bisa disimpan melalui querySelector atau kita bisa menyimpannya di const

## event object e
ketika sebuah event terjadi, js membuat sebuah object yg berisi informasi tentang event tersebut

menangkap object menggunakan parameter = **e**

*contoh*
```js
button.addEventListener('click', (e) => {
    console.log(e) // bisa menggunakan nama parameter yg berbeda
})
```

