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
- tidak bisa dihentikan menggunakan break
- tidak bisa membuat array baru

```js
const angka = [1, 2, 3, 4, 5, 6, 7];

angka.forEach((item) => console.log(item)) // merupakan anonymus function
```
- bentuk dari anonymus function argumennya hanya 3, item, index, dan data dari arraynya

## map
mengubah setiap elemen **menjadi nilai baru** dan mengembalikan array baru
- return callback dipakai menjadi isi array barunya
- wajib memakai return
- kita wajib menyimpannya terlebih dahulu, mis: di const

```js
const arrayBaru = arrayAsli.map(function(elemen, indeks, arrayAsliLengkap)) {
    // 1. kode logikanya
    // 2. wajib mengembalikan nilai baru, dalam bentuk arraw function/yg lainnya
}
```

```js
const num = [1, 2, 3];

const res = num.map(x => x + 1)
console.log(res)
```

## filter
menyaring elemen di dalam array bedasarkan kondisi tertentu
- hasilnya = array baru yg berisi elemen yg lolos seleksi saja
- jika true => elemen tersebut diloloskan => dimasukkan ke array baru
- jika false => elemen tidak diloloskan => tidak dimasukkan ke array baru

```js
const arrayBaru = arrayAsli.filter((elemen, indeks, arrayAsliLengkap) => {
    return kondisiPengujian;
})
```
- elemen (wajib) = nilai elemen yg diperiksa
- indeks (opsional) = posisi indeks elemen saat ini
- arrayAsliLengkap (opsional) = referensi ke seluruh array asal

```js
// mencari angka ganjil / genap

const num = [1, 2, 3]

const hasil = num.filter(n => n % 2 === 0);
console.log(hasil)
```
- yg direturn merupakan kondisi true/false dari setiap elemen yg dicek

## find




## reduce

