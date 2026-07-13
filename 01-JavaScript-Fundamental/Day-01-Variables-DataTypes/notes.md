# NOTES VARIABEL
- deklarasi = membuat alokasi memorinya
- inisialisasi = saat memberikan nilai paling awal
- assigment = memberikan value kepada variabelnya (tidak harus mengubah value dalam variabelnya)

```js
let name #deklarasi
name = "Adis" #assigment
name = "disti" #assigment

let umur = 20 #inisialisasi + deklarasi secara explicit initializer

```
## let, const, var
- var tidak memiliki global scope/local scope seperti let
- penamaan let tidak bisa sama
- *BINDING* = asosiasi diantara sebuah identifier dengan nilai yang dirujuknya dalam suatu scope

## const 
- const bernilai konstan dan tidak bisa diubah valuenya juka di tipe data primitif
- jika merujuk ke objek alamat valuenya sama tetapi nama objek boleh berbeda

```js
const user1 = {
    nama: "Adis"
};

const user2 = user1;

```

logika inti dari kode diatas = kita membuat 2 objek yaitu user1 dan user2 yg mana segala sesuatu yg dimiliki user1 akan dimiliki user2 juga *jika user2 menambahkan atributnya maka user1 juga ikut berubah*

## cara pemilihan let/const
- selalu jadikan default semuanya menjadi const jika belum ada alasan apakah variabelnya akan berubah ubah

## penamaan variabel di JS
variabel bisa diberi nama dengan 2 cara, camel case dan snake case

- js memakai standar camel case
- jika sebuah nilai dianggap sebagai konstanta global, env variabel, dan konfigurasi maka cara penulisannya menjadi
*UPPER_SNAKE_CASE*

```js
const MAX_RETRY = 5;
const API_URL = "...";

```

## penamaan variabel boolean
boolean lebih menjawab ke pertanyaan jika dimasukkan ke pernyataan if statement maupun yg lainnya.
*Usahakan nama variabelnya terdengar seperti pertanyaan.*

**CONTOH DARI PENAMAAN**
is, has, can, should, was, did

```js
const isLoading = true;
const hasError = false;
```
- number = memakai representasi kata pada umumnya
- array = biasa dalam bentuk jamak
- object = bentuk tunggal
- function = kata kerja
- boolean = pertanyaan

## primiteve data types
number, string, boolean, undefined, null, symbol, bigint

- semua angka dalam js disimpan dalam bentuk number, ketika 0.1 + 0.2
maka hasilnya 0.3000004 karena js lansung menampilkan representasi yg dihasilkan tanpa pembulatan

## typeof
untuk mengetahui tipe data apa yg dimiliki oleh variabel tersebut

```js
let age = 20;
console.log(typeof age)

```

- pengecualian ketika variabel yg belum memiliki value maka outputnya undefined
- jika variabel memiliki value null maka outputnya object

## operators
simbol yang meminta js melakukan suatu operasi terhadap satu atau lebih operand

*arithmetic operators*
- penjumlahan (+)
- pengurangan (-)
- perkalian (*)
- modulo (%)
  sisa bagi => 10 dibagi 3 = maka 9 dan masih tersisa 1 lagi
- div (/)
- pangkat (angka**)

## operand
5 + 3 
- angka 5 merupakan operan kiri number
- angka 3 merupakan operan kanan number

*cara berpikirnya*
1. jika operand kiri + kanan = number maka tambah angka langusng
2. jika operand kiri + kanan = string maka gunakan concatenation

## comparision operator
- loose equality (==) hanya membandingkan nilai dari operandnya
- strict equality (===) membandingkan nilai dan tipe data dari kedua operand

*best practice*
pakai strict equality (===)

contoh
```js
0 == "0" // true, karena hanya membandingkan value bukan tipe datanya
0 === "0" //false, membandingkan value beserta tipe datanya
0 === false // false, membandingkan juga sama 
```

*arithmetic operator (-)*
operator ini tidak tahu cara menggabungkan string, sehingga jika ada salah 1 operand yg string maka dia dikonversi menjadi number 

*arithmetic operator (+)*
hanya operand bertipe data string yg tidak diubah dan menjadi concatenation nantinya

- operand yg bertipe data boolean diubah menjadi representasi angka sesuai dengan statusnya

### 💡 Insight

Type coercion di JavaScript tidak memiliki satu aturan yang berlaku untuk semua operator.

Setiap operator memiliki aturan coercion-nya sendiri.

- Operator `+` dapat melakukan penjumlahan atau concatenation.
- Operator matematika lain (`-`, `*`, `/`, `%`, `**`) hanya melakukan operasi numerik, sehingga operand akan dikonversi ke Number jika memungkinkan.

**inti dari operator => jika dia merupakan string maka kita tidak bisa melakukan operasi penjumlahan, maka hasil akhirnya hanya concatenation saja dan mengubahnya menjadi tipe data sesuai dengan operand kiri**

## logical operator
- && = kedua syarat harus terpenuhi
- || = salah satu syarat harus terpenuhi
- ! = kebalikan dari pernyataan yg kita punya

## type conversion (explicit conversion)
diubah oleh programmer yg menulis kodenya nanti

- mengubah tipe data menjadi number
```js
Number("20");
```
maka outputnya akan keluar menjadi 20 dan tipe datanya number

*perlakuan yg sama juga dengan tipe konversi dengan data yg berbeda nantinya*
- String, Boolean, 

### Falsy Values
false
0
""
null
undefined
NaN

### number family
10, 20, 3.14, -8, NaN

### insight
hardcoded = kita langsung menuliskan nilai secara explisit 
contoh
```js
if (password === "admin123") {
  isLogin = true
};
```
bukan best practice karena dia langsung menyimpan password didalam kodingannya