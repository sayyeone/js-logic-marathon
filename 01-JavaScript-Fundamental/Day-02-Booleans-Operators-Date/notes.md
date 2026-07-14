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

contoh
```js
console.log(false && "Hello");
```
maka mengembalikan false. karena proses tracingnya
1. cek operand disebelah kiri, jika kirinya bukan falsy maka langsung berhenti di false
2. cek operand di sebelah kanan, ternyata nilainya bukan falsy tapi yg dikembalikan tetep nilai dari operand kiri

**operator (||) mencari operand pertama yg truthy**

```js
console.log(false || "Guest")
```
maka mengembalikan Guest. karena proses tracingnya
1. cek operand kiri, jika kirinya bukan truthy, maka lanjut ke pengecekan operand kanan
2. cek operand kanan, jika nilainya truthy, maka langsung mengembalikan falue dari operand kanan