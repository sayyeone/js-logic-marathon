## lv 2

### no 6
```js
console.log('5' + 3) // 1
console.log('5' - 3) // 2
console.log(5 + 3 + '2') // 3
console.log('5' + 3 + 2) // 4
```
1. 53 karena operatornya merupakan penjumlahan yg mana langsung diconcatkan 
2. 2 karena operator pengurangan tidak bisa menggabungkan bentuk string
3. 82
4. 532 karena operatornya penjumlahan maka angka disesudah operand dia digabungkan semuanya menjadi 1

### no 7
```js
let a = 10;
let b = '10';

console.log(a == b); // 1
console.log(a === b); // 2
```
1. true, karena dia hanya membandingkan value saja bukan tipe datanya juga
2. false, karena strict ini membandingkan value dan tipe datanya juga

### no 8
```js
let stock = 0;
Boolean(stock);
```
outputnya false karena 0 merupakan representasi lainnya dari boolean false dan 1 merupakan representasi lainnya dari true

### no 9
```js
typeof (10 + 5) // number
typeof (10 + '5') // string
typeof (true + 1) // number
typeof (null) // object
typeof (undefined) // undefined
```
## Debugging

### Bug 1
```js
const age = 20;
age = 21;
console.log(age);
```
- kode diatas akan menghasilkan error karena variabel age yg harusnya konstan malah dideklarasikan ulang dengan nilai baru
- yg menjadi akar masalah yaitu ketika kita assign ulang age = 21
- yg bener menghapus age = 21, karena jika konstan tidak boleh diassign ulang

### Bug 2
```js
let total = '10';
let discount = 2;

console.log(total - discount);
console.log(total + discount);
```
- kode diatas akan menghasilkan output pertama berupa 8, karena operand di sisi kiri diubah menjadi number terlebih dahulu
- kode diatas akan menghasilkan output kedua berupa 102, karen operasi penjumlahan melakukan konversi terhadap operand kanan yg berarti dia langsung di concat
- yg benar dengan menghapus petik 1 di variabel total = 10, dan operasi number dapat dijalankan dengan benar