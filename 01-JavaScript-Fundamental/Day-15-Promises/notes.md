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
- resolve = prosesnya berhasil dengan status fulfiled

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


