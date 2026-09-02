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


# PROMISES
