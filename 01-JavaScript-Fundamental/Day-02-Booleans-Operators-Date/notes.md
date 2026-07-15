# NOTES BOOLEAN
boolean adalah hasil evaluasi suatu kondisi, penamaan dari boolean biasanya memakai awalan kata kerja bantu (is / has / should + kata kunci)

*contoh*
```js
if (stock){
    ...
};
// SAMA SAJA MELAKUKAN PENGECEKKAN
Boolean(stock);
```

### insight NaN
**NaN merupakan nilai yg tidak valid kebenarannya** tetapi NaN merupakan sebuah value
*contoh*
```js
const result = Number("abc");
console.log(result);
```
outputnya Nan, dan variabel result tetap menyimpan sebuah nilai yaitu NaN

### melakukan pengecekan apakah sebuah variabel bernilai NaN?
```js
const value = Number("abc");
console.log(Number.isNaN(value));
```
*fun-fact NaN === NaN hasilnya akan false, karena nilainya tidak valid*

## logical operator
**operator (&&) mencari operand pertama yg falsy, jika tidak ada maka mengembalikan operand terakhir** 

*contoh 1*
```js
console.log(false && "Hello");
```
maka mengembalikan false. karena proses tracingnya
1. cek operand disebelah kiri, jika kirinya bukan falsy maka langsung berhenti di false
2. tidak perlu cek operand di sebelah kanan, karena jika kirinya falsy maka dipastikan pernyataan selanjutnya juga false.

*contoh 2*
```js
console.log(true && "hello")
```
maka mengembalikan hello. proses trace
1. cek operand disebelah kiri, karena bernilai truthly maka dia lompat ke operand setelahnya
2. cek operand selanjutnya, karena bernilai hello maka dia **mereturn operand terakhir** 


**operator (|| / ??) mencari operand pertama yg truthy**

```js
console.log(false || "Guest") // langsung mengembalikan guest
const port = process.env.PORT || 3000 // jika env tidak ada maka mengembalikan port 3000
```
maka mengembalikan Guest. karena proses tracingnya
1. cek operand kiri, jika kirinya bukan truthy, maka lanjut ke pengecekan operand kanan
2. cek operand kanan, jika nilainya truthy, maka langsung mengembalikan falue dari operand kanan

### insight dari logical operator
- default value pattern = mencegah aplikasi dari crash atau menampilkan teks aneh seperti null / undefined. ketika data yg diterima dari database / api ternyata kosong dengan menyediakan nilai cadangan.

## ternary operator
untuk menjalankan satu kondisi true dan false saja, bukan digunakan untuk kondisi yg terlalu banyak **hanya menghasilkan satu nilai**

*penulisan = kondisi ? nilai jika true : nilai jika false*
contoh
```js
let status = age >= 18 ? "Dewasa" : "Anak - anak";
```
logikanya hampir sama dengan if-else

### insight dari operator
kalau kondisi yg dituliskan hanya mengembalikan nilai true/false maka cukup menembalikan hasilnya saja jika tidak mengoutputkan pesan

