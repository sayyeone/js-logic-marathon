<div align="center">
  <h1> 30 Hari Belajar JavaScript: Classes</h1>
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

[<< Hari 14](../14_Day_Error_handling/14_day_error_handling.md) | [Hari 16>>](../16_Day_JSON/16_day_json.md)

![Thirty Days Of JavaScript](../images/banners/day_1_15.png)

- [Hari 15](#hari-15)
	- [Classes](#classes)
		- [Mendefinisikan sebuah class](#mendefinisikan-sebuah-class)
		- [Instansiasi Class](#instansiasi-class)
		- [Constructor Class](#constructor-class)
		- [Nilai default dengan constructor](#nilai-default-dengan-constructor)
		- [Method class](#method-class)
		- [Properti dengan nilai awal](#properti-dengan-nilai-awal)
		- [getter](#getter)
		- [setter](#setter)
		- [Static method](#static-method)
	- [Inheritance (Pewarisan)](#inheritance)
		- [Override method](#overriding-methods)
	- [Latihan](#latihan)
		- [Latihan Level 1](#latihan-level-1)
		- [Latihan Level 2](#latihan-level-2)
		- [Latihan Level 3](#latihan-level-3)

# Hari 15

## Classes

JavaScript adalah bahasa pemrograman berorientasi objek. Semua hal di JavaScript adalah objek, lengkap dengan properti dan method-nya. Kita bikin class buat bikin objek. Class itu ibarat konstruktor objek, atau "cetak biru" (blueprint) buat bikin objek. Kita instansiasi sebuah class buat membuat objek. Class mendefinisikan atribut dan perilaku dari objek, sedangkan objek sendiri merepresentasikan class-nya.

Sekali kita bikin class, kita bisa bikin objek darinya kapan pun kita mau. Bikin objek dari sebuah class disebut instansiasi class.

Di bagian objek, kita udah lihat cara bikin object literal. Object literal itu singleton. Kalau kita mau punya objek yang mirip, kita harus nulis ulang. Nah, class memungkinkan kita bikin banyak objek. Ini membantu mengurangi jumlah kode dan pengulangan kode.

### Mendefinisikan sebuah class

Buat mendefinisikan sebuah class di JavaScript, kita butuh keyword _class_, nama class dalam format **CamelCase**, dan blok kode (dua kurung kurawal). Yuk kita bikin class bernama Person.

```sh
// syntax
class ClassName {
    //  code goes here
}

```

**Contoh:**

```js
class Person {
  // code goes here
}
```

Kita udah bikin class Person, tapi belum ada isinya sama sekali.

### Instansiasi Class

Instansiasi class artinya membuat objek dari sebuah class. Kita butuh keyword _new_, dan kita panggil nama class-nya setelah kata new.

Yuk kita bikin objek dog dari class Person kita.

```js
class Person {
  // code goes here
}
const person = new Person()
console.log(person)
```

```sh
Person {}
```

Seperti yang kamu lihat, kita udah bikin objek person. Karena class-nya belum punya properti apa-apa, objeknya juga masih kosong.

Yuk kita pakai class constructor buat memasukkan berbagai properti ke dalam class.

### Constructor Class

Constructor adalah fungsi bawaan yang memungkinkan kita membuat cetak biru buat objek kita. Fungsi constructor dimulai dengan keyword constructor diikuti tanda kurung. Di dalam kurung itu kita masukkan properti-properti objek sebagai parameter. Kita pakai keyword _this_ buat menempelkan parameter constructor ke class.

Constructor class Person berikut ini punya properti firstName dan lastName. Properti-properti ini ditempelkan ke class Person pakai keyword _this_. _This_ merujuk ke class itu sendiri.

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Cek hasilnya di sini
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person()

console.log(person)
```

```sh
Person {firstName: undefined, lastName:undefined}
```

Semua key objeknya masih undefined. Setiap kali kita instansiasi, kita harus memasukkan nilai untuk properti-propertinya. Yuk sekarang kita masukkan nilainya waktu instansiasi class.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh')

console.log(person1)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
```

Seperti yang udah kita bilang di awal, sekali kita bikin class, kita bisa bikin banyak objek pakai class itu. Sekarang, yuk kita bikin beberapa objek person pakai class Person.

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Cek hasilnya di sini
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person1)
console.log(person2)
console.log(person3)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
Person {firstName: "Lidiya", lastName: "Tekle"}
Person {firstName: "Abraham", lastName: "Yetayeh"}
```

Pakai class Person, kita udah bikin tiga objek person. Seperti yang kamu lihat, class kita belum punya banyak properti, yuk kita tambahin lebih banyak properti ke class-nya.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    console.log(this) // Cek hasilnya di sini
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(person1)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
```

### Nilai default dengan constructor

Properti fungsi constructor bisa punya nilai default, sama seperti fungsi biasa lainnya.

```js
class Person {
  constructor(
    firstName = 'Asabeneh',
    lastName = 'Yetayeh',
    age = 250,
    country = 'Finland',
    city = 'Helsinki'
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person() // ini akan pakai nilai default
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1)
console.log(person2)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
Person {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Espoo"}
```

### Method class

Constructor di dalam sebuah class adalah fungsi bawaan yang memungkinkan kita membuat cetak biru buat objek. Di dalam class, kita bisa bikin method class. Method itu fungsi JavaScript yang ada di dalam class. Yuk kita bikin beberapa method class.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName())
console.log(person2.getFullName())
```

```sh
Asabeneh Yetayeh
test.js:19 Lidiya Tekle
```

### Properti dengan nilai awal

Waktu kita bikin class, beberapa properti mungkin punya nilai awal. Contohnya, kalau kamu lagi main game, skor awal kamu biasanya nol. Jadi, kita bisa punya starting score atau score yang nilainya nol. Di sisi lain, kita mungkin punya skill awal, dan kita akan dapat skill tambahan seiring waktu.

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
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
```

```sh
0
0
[]
[]
```

Method itu bisa berupa method biasa, getter, atau setter. Yuk kita lihat getter dan setter.

### getter

Method get memungkinkan kita mengakses nilai dari objek. Kita nulis method get pakai keyword _get_ diikuti sebuah fungsi. Alih-alih mengakses properti langsung dari objek, kita pakai getter buat mengambil nilainya. Lihat contoh di bawah ini.

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
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getScore) // Kita nggak butuh tanda kurung buat manggil method getter
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
```

```sh
0
0
[]
[]
```

### setter

Method setter memungkinkan kita mengubah nilai dari properti tertentu. Kita nulis method setter pakai keyword _set_ diikuti sebuah fungsi. Lihat contoh di bawah ini.

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
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
```

```sh
1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
```

Jangan bingung soal beda antara method biasa sama getter. Kalau kamu udah tahu cara bikin method biasa, kamu udah oke. Yuk kita tambahin method biasa bernama getPersonInfo di class Person.

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
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.getScore)
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
console.log(person3.getSkills)

console.log(person1.getPersonInfo())
console.log(person2.getPersonInfo())
console.log(person3.getPersonInfo())
```

```sh
1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
[]
Asabeneh Yetayeh is 250. He lives Helsinki, Finland. He knows HTML, CSS and JavaScript
Lidiya Tekle is 28. He lives Espoo, Finland. He knows Planning, Managing and Organizing
John Doe is 50. He lives Mars city, Mars.
```

### Static method

Keyword static mendefinisikan sebuah static method untuk class. Static method tidak dipanggil dari instance class. Sebaliknya, static method dipanggil langsung dari class itu sendiri. Static method biasanya dipakai sebagai fungsi utilitas, misalnya fungsi buat membuat atau meng-clone objek. Contoh static method adalah _Date.now()_. Method _now_ dipanggil langsung dari class-nya.

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
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

console.log(Person.favoriteSkill())
console.log(Person.showDateTime())
```

```sh
Node
15.1.2020 23:56
```

Static method adalah method yang bisa dipakai sebagai fungsi utilitas.

## Inheritance (Pewarisan)

Pakai inheritance, kita bisa mengakses semua properti dan method dari parent class. Ini mengurangi pengulangan kode. Kalau kamu inget, kita punya parent class Person, dan kita akan bikin child class darinya. Child class kita bisa berupa student, teacher, dan lain-lain.

```js
// syntax
class ChildClassName extends {
 // code goes here
}
```

Yuk kita bikin child class Student dari parent class Person.

```js
class Student extends Person {
  saySomething() {
    console.log('I am a child of the person class')
  }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())
```

```sh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
I am a child of the person class
Asabeneh Yetayeh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
Asabeneh Yetayeh is Finland. He lives Helsinki, 250.
```

### Override method

Seperti yang kamu lihat, kita berhasil mengakses semua method di class Person dan kita pakai di child class Student. Kita bisa mengkustomisasi method dari parent, dan kita bisa nambahin properti tambahan ke child class. Kalau kita mau kustomisasi method dan nambah properti ekstra, kita perlu pakai fungsi constructor juga di child class-nya. Di dalam fungsi constructor itu, kita panggil fungsi super() buat mengakses semua properti dari parent class. Class Person tadinya nggak punya gender, tapi sekarang yuk kita kasih properti gender buat child class Student. Kalau nama method yang sama dipakai di child class, method parent-nya akan di-override.

```js
class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const s1 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())
```

```sh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
I am a child of the person class
Asabeneh Yetayeh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
Asabeneh Yetayeh is 250. He lives in Helsinki, Finland. He knows HTML, CSS and JavaScript
I am a child of the person class
Lidiya Tekle
Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
Lidiya Tekle is 28. She lives in Helsinki, Finland. He knows Planning, Managing and Organizing
```

Sekarang, method getPersonInfo udah di-override dan bisa mengenali apakah orangnya laki-laki atau perempuan.

🌕 Kamu makin jago aja. Sekarang kamu udah paham class dan kamu punya kekuatan buat mengubah segalanya jadi objek. Kamu udah sampai di setengah jalan menuju kehebatan. Sekarang, kerjain beberapa latihan buat mengasah otak dan ototmu.

## Latihan

### Latihan Level 1

1. Bikin class Animal. Class-nya punya properti name, age, color, legs, dan bikin beberapa method yang berbeda.
2. Bikin child class Dog dan Cat dari class Animal.

### Latihan Level 2

1. Override method yang kamu bikin di class Animal.

### Latihan Level 3

1. Yuk kita coba bikin program yang menghitung ukuran pemusatan data (mean, median, mode) dan ukuran variabilitas (range, variance, standard deviation) dari sebuah sample. Selain itu, cari juga min, max, count, percentile, dan distribusi frekuensi dari sample-nya. Kamu bisa bikin class bernama Statistics dan bikin semua fungsi perhitungan statistik itu sebagai method dari class Statistics. Cek contoh output di bawah ini.

```JS
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
```

```sh
// hasil output kamu harusnya kayak gini
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
```

1. Bikin class bernama PersonAccount. Class-nya punya properti firstname, lastname, incomes, expenses, dan punya method totalIncome, totalExpense, accountInfo, addIncome, addExpense, dan accountBalance. Incomes adalah kumpulan pemasukan beserta deskripsinya, dan expenses juga kumpulan pengeluaran beserta deskripsinya.

🎉 SELAMAT ! 🎉

[<< Hari 14](../14_Day_Error_handling/14_day_error_handling.md) | [Hari 16>>](../16_Day_JSON/16_day_json.md)