# CALLBACK
sebuah function yg dikirim sebagai argument ke function lain, kemudian function akan menjalankan callback itu

```js
function B() {
    console.log("B")
}

function C() {
    console.log("C")
}

function A(callback) {
    console.log("A")
    callback() // MENANGKAP SEMUA FUNCTION YG DIBERIKAN DISINI
}

A(B) // menjalankan callback b
A(C) // menjalankan callback c
```
menjalankan function setelah kodenya selesai, kemudian menangkap semua function yg diberikan sesuai dengan parameternya
- function yg **menerima callback** memutuskan kapan callback akan dijalankan

## setTimeout
menjalankan sebuah function setelah waktu tertentu
- bentuk sederhananya
```js
setTimeout(callback, waktu)
```
```js
setTimeout(() => {
    console.log("halo")
}, 2000)
```
- menjalankan halo setelah 2000ms (2 detik)

bentuk lain
```js
const tampilkan = () => {
    console.log("halo")
};

setTimeout(tampilkan, 2000)
```

# PROMISES
sebuah object yg merepresentasikan hasill dari suatu proses yg belum selesai

**problem:**
1. ada proses yg membutuhkan waktu = mengambil data dari server
2. hasil dari proses tidak langsung tersedia
3. program yg dijalankan tidak boleh berhenti hanya karena menunggu

## memiliki 3 keadaan utama
- fulfilled (berhasil)
- rejected (gagal)
- pending (menunggu)

## membuat promise
```js
const promise = new Promise((resolve, reject) => {
    resolve()
})
```
- *resolve dan reject* sebagai parameter yg berisi function diberikan oleh promise, untuk mengubah hasil/state promise

## resolve = prosesnya berhasil dengan status fulfiled
mengirim/menyimpan hasil sebagai hasil sukses dari promise, yg nanti bisa diambil oleh then

```txt
        Promise
           ↓
       melakukan
        proses
           ↓
    ┌──────┴──────┐
    ↓             ↓
 resolve       reject
    ↓             ↓
 berhasil        gagal
```
- contoh
```js
const janji = new Promise((resolve, reject) => {
    resolve("berhasil")
})
```
## then = mengambil hasil resolve
- contoh
```js
const janji = new Promise((resolve, reject) => {
    resolve("berhasil")
})

janji.then((result) => {
    console.log(result)
})
```
- data yg diberikan oleh resolve akan diterima oleh parameter di _.then()_
- parameter didalam then merupakan callback function, dijalankan ketika promise berhasil
- parameter result berasal dari resolve

## catch = menangani error
```js
const janji = new Promise((resolve, reject) => {
    reject("gagal!")
})

janji.catch((error) => {
    console.log(error)
})
```
## PROMISE CHAINING
penggunaan beberapa .then() secara berurutan untuk menjalankan beberapa proses asynchronus secara berantai

- bentuk dasar
```txt
promise
    .then(...)
    .then(...)
    .then(...);
```
disebut chaining karena .then() pertama tersambung ke berikutnya

- contoh
```js
const janji = new Promise((resolve, reject) => {
    resolve("proses A selesai")
})

janji
    .then((result) => {
        console.log(result)
        return "proses B selesai"
    })
    .then((result) => {
        console.log(result)
        return "proses C selesai"
    })
    .then((result) => {
        console.log(result)
    })
```
- then akan mengembalikan promise baru
- nilai didalam resolve bisa dimanipulasi menggunakan then dengan return

*CONTOH*
```js
const proses = Promise.resolve(10) // langsung membuat promise yg berhasil

proses
    .then((angka) => {
        return angka * 2
    })
    .then((hasil) => {
        console.log(hasil)
    })
```

## FETCH
untuk meminta/mengirim data melalui HTTP
- fetch selalu mengembalikan promise
- melakukan request ke server/API

```js
fetch("https://example.com/users")
    .then((response) => {
        console.log(response)
    })
```
- mengembalikan body response sebagai object, bukan json = perlu mengubahnya menjadi json => agar bisa diolah dengan mudah

```js
fetch("https://example.com/users")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
```
### error fetch
ketika server memberikan 404 not found
- fetch() tidak menganggap HTTP 404 sebagai rejected Promise
- promise fetch() masih dianggap berhasil mendapatkan response

```js
fetch("https://example.com/users")
    .then((response) => {
        if(!response.ok) {
            throw new Error("request gagal")
        }
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error.message)
    })
```

## ASYNC
membuat function mengembalikan promise

- contoh tanpa async
```js
function hitung() {
    return 10;
}

const hasil = hitung();
console.log(hasil)
```
mengeluarkan nilai 10 sesuai yg kita returnkan di function hitung tadi

- menggunakan async
```js
async function main() {
    return 10 // MAIN TETAP MENGHASILKAN PROMISE
}
```
hasil tidak menghasilkan angka 10, tetapi sebuah promise

## AWAIT 
menunggu promise selesai dan mengambil hasilnya
```js
async function main() {
    const hasil = await Promise.resolve(10) // promise berhasil dengan nilai 10
    console.log(hasil)
}

main()
```
