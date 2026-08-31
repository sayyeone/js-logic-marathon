<div align="center">
  <h1> 30 Hari Belajar JavaScript: JSON</h1>
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

[<< Hari 15](../15_Day_Classes/15_day_classes.md) | [Hari 17 >>](../17_Day_Web_storages/17_day_web_storages.md)

![Thirty Days Of JavaScript](../images/banners/day_1_16.png)

- [Hari 16](#hari-16)
	- [JSON](#json)
		- [Mengubah JSON jadi JavaScript Object](#converting-json-to-javascript-object)
			- [JSON.parse()](#jsonparse)
		- [Pakai fungsi reviver dengan JSON.parse()](#using-a-reviver-function-with-jsonparse)
		- [Mengubah Object jadi JSON](#converting-object-to-json)
		- [Pakai Filter Array dengan JSON.stringify](#using-a-filter-array-with-jsonstringify)
	- [Latihan](#latihan)
		- [Latihan Level 1](#latihan-level-1)
		- [Latihan Level 2](#latihan-level-2)
		- [Latihan Level 3](#latihan-level-3)

# Hari 16

## JSON

JSON itu singkatan dari JavaScript Object Notation. Sintaks JSON diturunkan dari sintaks object notation JavaScript, tapi format JSON itu cuma teks atau string aja. JSON adalah format data yang ringan buat menyimpan dan mengirim data. JSON paling sering dipakai waktu data dikirim dari server ke client. JSON adalah alternatif yang lebih gampang dipakai dibanding XML.

**Contoh:**

```js
{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}
```

Contoh JSON di atas nggak beda jauh sama objek biasa. Terus, apa bedanya? Bedanya adalah key dari objek JSON harus pakai tanda kutip dua, alias harus berupa string. JavaScript Object dan JSON itu sangat mirip, sampai-sampai kita bisa mengubah JSON jadi Object dan Object jadi JSON.

Yuk kita lihat contoh di atas lebih detail. Dimulai dengan kurung kurawal. Di dalam kurung kurawal itu, ada key "users" yang nilainya berupa array. Di dalam array itu ada beberapa objek, dan tiap objek punya key, dan tiap key itu harus pakai tanda kutip dua. Contohnya, kita pakai "firstName" (bukan cuma firstName tanpa kutip), sedangkan di objek biasa kita pakai key tanpa tanda kutip dua. Ini bedanya paling utama antara objek dan JSON. Yuk kita lihat contoh JSON lainnya.

**Contoh:**

```js
{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
```

### Mengubah JSON jadi JavaScript Object

Biasanya kita ambil data JSON dari HTTP response atau dari sebuah file, tapi kita juga bisa nyimpen JSON sebagai string, terus diubah jadi Object buat keperluan demonstrasi. Di JavaScript, keyword _JSON_ punya method _parse()_ dan _stringify()_. Kalau kita mau ubah JSON jadi objek, kita parse JSON-nya pakai _JSON.parse()_. Kalau kita mau ubah objek jadi JSON, kita pakai _JSON.stringify()_.

#### JSON.parse()

```js
JSON.parse(json[, reviver])
// json atau text , datanya
// reviver adalah callback function opsional
/* JSON.parse(json, (key, value) => {

})
*/
```

```js
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, undefined, 4)
console.log(usersObj)
```

### Pakai fungsi reviver dengan JSON.parse()

Buat pakai fungsi reviver sebagai formatter, kita masukin key yang mau kita format, yaitu nilai first name dan last name. Anggap aja kita mau memformat firstName dan lastName dari data JSON-nya.

```js
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj)
```

_JSON.parse()_ itu sangat gampang dipakai. Kamu nggak harus masukin parameter opsional, kamu bisa langsung pakai dengan parameter yang wajib aja dan itu udah cukup buat banyak keperluan.

### Mengubah Object jadi JSON

Kalau kita mau ubah objek jadi JSON, kita pakai _JSON.stringify()_. Method stringify butuh satu parameter wajib dan dua parameter opsional. Replacer dipakai sebagai filter, dan space itu buat indentasi. Kalau kita nggak mau filter key apa pun dari objeknya, kita bisa masukin undefined aja.

```js
JSON.stringify(obj, replacer, space)
// json atau text , datanya
// reviver adalah callback function opsional
```

Yuk kita ubah objek berikut jadi string. Pertama, kita pertahankan semua key-nya, dan kita pakai indentasi 4 spasi.

```js
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt) // txt artinya JSON- karena json adalah bentuk string dari sebuah objek.
```

```sh
{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
```

### Pakai Filter Array dengan JSON.stringify

Sekarang, yuk kita pakai replacer sebagai filter. Objek user punya daftar key yang panjang, tapi kita cuma butuh beberapa aja. Kita masukin key yang mau kita pertahankan ke dalam array, seperti di contoh, dan pakai itu di posisi replacer.

```js
const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30
}

const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
console.log(txt)
```

```sh
{
    "firstName": "Asabeneh",
    "lastName": "Yetayeh",
    "country": "Finland",
    "city": "Helsinki",
    "age": 250
}
```

🌕 Kamu luar biasa. Sekarang kamu udah tahu format data ringan yang bisa kamu pakai buat nyimpen data atau ngirim ke HTTP server. Kamu udah 16 langkah lebih dekat menuju kehebatan. Sekarang, kerjain beberapa latihan buat mengasah otak dan ototmu.

## Latihan

```js
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
```

### Latihan Level 1

1. Ubah array skills jadi JSON pakai JSON.stringify()
1. Stringify variabel age
1. Stringify variabel isMarried
1. Stringify objek student

### Latihan Level 2

1. Stringify objek students, tapi cuma dengan properti firstName, lastName, dan skills aja

### Latihan Level 3

1. Parse JSON dari variabel *txt* jadi objek.
2. Cari user yang punya skill paling banyak dari variabel yang tersimpan di *txt*.

🎉 SELAMAT ! 🎉

[<< Hari 15](../15_Day_Classes/15_day_classes.md) | [Hari 17 >>](../17_Day_Web_storages/17_day_web_storages.md)