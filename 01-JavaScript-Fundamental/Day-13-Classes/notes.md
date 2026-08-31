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

## default value
```js
class Person {
    constructor(
        firstName: "adisty",
        lastName: "ardani"
    ) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person1 = new Person() // kalau default value akan undefined
```
- cara mengisi default value = kita assign kan dengan nialai yg akan kita isi

## method class
function yg menjadi bagian dari class
- untuk melakukan suatu tindakan / perilaku yang berkaitan dengan objek

```js
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() { // MERUPAKAN METHOD
        return this.firstName + " " + this.lastName // MENGEMBALIKAN VARIABEL FIRSTNAME DAN LASTNAME
    }
}

const person1 = new Person("adisty", "ardani") // MENGINISIALISASIKANNYA
person1.getFullName() // MEMANGGIL METHODNYA
```

### method yg menerima parameter
```js

```