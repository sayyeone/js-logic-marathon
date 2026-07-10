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

representasi model =
user1
   │
   ▼
┌──────────────┐
│ nama: Adis   │
└──────────────┘
   ▲
   │
user2

logika inti dari kode diatas = kita membuat 2 objek yaitu user1 dan user2 yg mana segala sesuatu yg dimiliki user1 akan dimiliki user2 juga *jika user2 menambahkan atributnya maka user1 juga ikut berubah*

## cara pemilihan let/const
- selalu jadikan default semuanya menjadi const jika belum ada alasan apakah variabelnya akan berubah ubah
