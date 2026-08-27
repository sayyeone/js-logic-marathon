# CLASS
- class merupakan sebuah blueprint sedangkan object merupakan barang nyata hasil blueprint

```js
class Person {
    // kita membuat blueprintnya belum orangnya
}

const person1 = new Person() // membuat object dari blueprintnya
```

## constructor
- menerima argumen dari luar saat objek dibuat: menangkap data dinamis yg dikirimkan lewat new NamaClass(data1, data2)
- inisialisasi nilai awal pada objek: menetapkan *properti* ke dalam this sebelum objek dipakai di tempat lain

**digunakan ketika**
- pakai constructor = jika butuh mengoper parameter/data awal saat memanggil
- tidak perlu = jika class hanya berisi fungsi/nilai variabelnya tidak bergantung pada parameter luar

*KODE SEBELUM PAKAI CONSTRUCTOR*
```js

```


```js
class Person {
    constructor(name, age) { // HANYA DIBUAT 1X AJA
        this.name = name
        this.age = age
    }
}

// membuat object
const person1 = new Person("dist", 20)
```


## this
object yang sedang dibuat/dikerjakan oleh constructor
- cara objek mengakses variabel atau fungsi milik dirinya sendiri

**penggunaan**
- mengakses method (fungsi) lain di objek yg sama
- 