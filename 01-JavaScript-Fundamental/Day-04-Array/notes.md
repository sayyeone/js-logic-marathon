# NOTES ARRAY

## array
menyimpan banyak value dalam satu struktur data *bukan menimpan banyak variabel, tetapi menyimpan banyak elemen*
- setiap elemen pada array berada di lokasi memori yg berbeda

## index
posisi (alamat) setiap elemen di dalam array

*contoh*
```js
const campur = ["Halo", 2, true]; // cara mendeklarasikan array 1
const binatang = []; // cara mendeklarasikan array 2
binatang = ['Ayam', 'Sapi', 'Kuda'];
console.log(binatang[2]); // mengakses value dari key/indeks array binatang 2
```

- key = index pada array dengan tipe integer yg dimulai dari 0
- array bertipe object
- memiliki fungsi/method, salah satu contohnya = mengecek panjang dari arraynya, mengecek apakah terdapat suatu value yg dimaksud di array tersebut
- jumlah length sesuai dengan jumlah valuenya dan indeksnya -1

*isi dari array bukan tipe data saja, dapat menyimpan bentuk function juga*

## mengakses value dari array
jika langsung print variabel yg menyimpan array maka keluarannya bentuk objek

```js
const arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
    console.log('Angka ke-' + (i+1) + '' + arr[i]);
}
```

## method dalam array

### join
menggabungkan semua array menjadi satu tipe data string
- bisa mengubah dari separator sebelumnya yg (,) menjadi bentuk tanda apapun yg diinginkan

*contoh*
```js
const num = [1, 2, 3, 4];
console.log(num.join("-")); // penggunaan dengan separatornya juga
```

### push
memasukan value baru ke dalam indeks akhir disebuah array
- dapat sekalian multi value yg dimasukkan didalam arraynya
```js
num.push(3)

const panjang = fruits.push("mango");
console.log(panjang); // mengembalikan length terbaru
```

### pop
menghapus value yg berada di indeks terakhir array
```js
num.pop()

const hasil = fruits.pop();
console.log(hasil); // mengembalikan elemen yg dihapus
```

### unshift
menambahkan elemen baru didalam array di indeks pertama
- dengan menggeser seluruh elemen yg berada di setelah indeks yg ditambahkan
- biaya komputasiaonal sangat mahal karena mengeser setiap elemennya O(n)

```js
num.unshift(8)
```

### shift
menghilangkan elemen pertama didalam array
- dengan menggeser seluruh elemen yg berada di setelah indeks yg ditambahkan
- biaya komputasiaonal sangat mahal karena mengeser setiap elemennya O(n)

```js
num.shift()
```

### slice
digunakan untuk mengambil berberapa bagian dari indeks arraynya, untuk menjadi array yg baru

```js
const z = [5, 6, 4, 10];
z.slice(1,2)
```

### splice
menyambung/menambah array di indeks yg dipilih

*dengan cara = splice(index yg diinginkan, mau dihapus berapa item setelah indeks?, tambahkan elemen baru (bisa lebih dari 1 elemen))*

```js
const b = [1, 2, 5]; // 0 = 1 ; 1 = 2 ; 2 = 5
b.splice(2, 0, 99, 99);
```