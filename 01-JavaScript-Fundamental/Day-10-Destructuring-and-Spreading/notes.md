## destructuring
membongkar sesuatu menjadi bagian" tertentu
- membaginya kedalam masing" indeksnya

## array destructuring
```js
const numbers = [10, 20, 30]

// menggunakan cara yg lama
const num1 = numbers[0]
const num2 = numbers[1]
const num3 = numbers[2]
```
menggunakan cara manual dengan assign masing" per variabelnya

### *menggunakan destructuring*
```js
const [num1, num2, num3] = numbers
```

### *skip element*
```js
const numbers = [10, 20, 30]

const [first, , third] // ketika tidak ingin menggunakan elemen 20
```

### rest pattern
- rest pattern penempatannya selalu menjadi elemen terakhir

```js
const numbers = [1, 2, 3, 4]

const [first, second, ...rest] = numbers // rest menjadi tempat mengumpulkan sisa elemen menjadi array
```

### destructuring iteration
```js
const products = [
    ["laptop", 100]
]

for (const [name, price] of products) {
    console.log(name, price)
}
```

### destructuring object
```js

const person = {
    username: "Adis",
    age: 20
}
console.log(person.username); // CARA YG LAMA

const {username, age} = person
console.log(age);
```
### rename objectnya
- menganti nama dari objeknya

```js
const { namaKey: namaVariabelBaru } = object
```

```js
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}

let{
    width: w
} = rectangle

console.log(w)
```
- nested renaming
```js
const person = {
    username: "adisty",
    education: {
        subject: "compsi"
    }
}

// misalkan ingin mengambil properti subject
const {
    education: {
        subject
    }
} = person

console.log(subject)
```
### object sebagai parameter function
```js
const square = {
    width: 10,
    height: 20
};

const area = square => square.width * square.height;

console.log(area(square))
```

- kalau di destructuring langsung dimasukkan melalui parametr di functionnya
- membantu menyatakan data apa saja yg dibutuhkan oleh function

```js
const area = square => square.width * square.height; // SEBELUMNYA

const area = ( {width, height} ) => width * height // SESUDAH
```

### spread operator
untuk menyebarkan seluruh isi dari sebuah array/object ke tempat yg baru

```js
const numbers = [1, 2, 3]

// jika ingin membuat array baru yg isinya sama
const copy = [...numbers]
console.log(copy)
```
- digunakan untuk menggabungkan array
```js
const fe = ["html", "css"]
const be = ["node", "express"]

// mengabungkan kedua array diatas
const fullstack = [...fe, ...be]
```
### spread operator object
```js
const user = {
    name: "dist",
    role: "student"
}

// MEMBUAT COPY BARU DENGAN OBJECT YG ISINYA SAMA
const copy = {...user}
```
- jika mengupdate versi objectnya

```js
role = "dev"

// MEMAKAI CARA
const updated = {
    ...user,
    role: "dev"
}
```

### spread operator function
```js
const sum = (a, b, c) => {
    return a + b + c
}

sum(10, 20, 30)
```
kalau angka yg ingin dimasukkan ke parameter sudah didefinisikan di array seperti
```js
const numbers = [10, 20, 30]

// maka kita memakai spread operator
sum(...numbers)
```