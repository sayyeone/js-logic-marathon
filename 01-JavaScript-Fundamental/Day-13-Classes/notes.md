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
- untuk melakukan **suatu tindakan** / perilaku yang berkaitan dengan objek

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
class Person {
    constructor(name) {
        this.name = name
    }

    getName(greeting) {
        return(greeting + " " + this.name)
    }
}

const person1 = new Person("adis")
console.log(person1.getName("halo"))
```

## default value constructor
nilai untuk parameter constructor pada saat object dibuat, parameter tersebut tidak diberikan nilai
```js
class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city

        this.score = 0
        this.skills = []
    }
}
```

## getter
method untuk **mengakses/mengambil** nilai dari objek, saat dipanggil tidak memerlukan ()
- mengambil nilainya dan kita akan melakukan proses perhitungan terlebih dahulu
- tidak menerima parameter

```js
class Person {
    constructor(firstName) {
        this.firstName = firstName
        this.score = score
    }

    get getScore() {
        return this.score
    }
}

console.log(person1.getScore) // CARA MEMANGGIL FUNGSINYA
```

## setter
mengubah nilai properti tertentu
- case: ketika kita ingin menjumlahkan skor yg telah diinisialisasikan, dengan skor terbaru

```js
class Person {
    constructor(name) {
        this.name = name
        this.score = 0
    }

    set setScore(score) { // INI MERUPAKAN SETTER
        this.score += score
    }
}

person1.setScore = 1 // CARA MEMANGGILNYA
```

## static method
method yg dipanggil langsung melalui class, bukan melalui object hasil new
- tidak membutuhkan data dari object tertentu

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Halo, saya ${this.name}`;
    }

    static isValidAge(age) {
        return age >= 0;
    }
}
```

## inheritance
memungkinkan sebuah class mewarisi property dan mewarisi property dan method dari kelas lain

- kita punya Person sebagai parent class
- student sebagai child class

       Person
       /    \
      ↓      ↓
 Student   Teacher

```js
class Student extends Person {
    // artinya buat class student yang mewarisi Person
}
```
- contoh
```js
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

// CLASS YG MEWARISI PERSON
class Student extends Person {

}

const student1 = new Student("Dist", "Fatika")
```

## overriding method
child class membuat implementasi sendiri untuk method yg diwarisi dari parent class

```js
class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city) // MENGGUNAKAN PROPERTI PARENT

        this.gender = gender // MENAMBAHKAN PROPERTI KHUSUS CHILDNYA
    }

getPersonInfo() {
    return `${this.firstName} ${this.lastName}, ${this.age}, ${this.country}, ${this.city}, ${this.gender}`
    }
}
```