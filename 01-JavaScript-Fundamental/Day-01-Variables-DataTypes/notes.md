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


