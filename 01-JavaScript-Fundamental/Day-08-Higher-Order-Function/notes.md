# NOTE FUNCTION

## callback
function yg parameternya berisi function
- function yg memanggil function itu sendiri

1. function sapa
2. function halo
3. function selamat tinggal

```js
function halo() {
    console.log("halo!");
}

function sapa(a, nama) {
    a()
    console.log(nama)
}

sapa(halo, "adis")
```
### cara menyimpan function
1. dengan menyimpan functionnya tapi tidak memanggil functionnya bagaimana

```js
function halo() {
    console.log("halo!")
}
const x = halo
```
jika dioutputkan hasilnya [function: halo!]

2. dengan cara langsung memanggil dan menggunnakannya
```js
halo()
```
menggunakan functionnya secara langsung, dengan diberi tanda kurung

## forEach
mencetak semua elemen dalam sebuah array *khusus array*
- foreach melakukan looping => setiap looping mengambil satu elemen => elemennya dikirim ke callback

```js
const angka = [1, 2, 3, 4, 5, 6, 7];

angka.forEach((item) => console.log(item)) // merupakan anonymus function
```
- bentuk dari anonymus function argumennya hanya 3, item, index, dan data dari arraynya


