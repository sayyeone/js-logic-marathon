# NOTE LOOP

loop adalah cara menyuruh komputer melakukan pekerjaan yg sama berkali-kali, sementara yg berubah hanyalah datanya

_sebuah loop selalu punya 3 komponen: 1. nilai awal (init), 2. kondisi, 3. perubahan_

## while loop

dijalankan selama kondisinya true, jika false langsung keluar dari looping

```js
let angka = 1;
while (angka <= 4) {
  console.log(angka);
  angka++; // update kondisi angkanya
}
```

- pengunaan => dipakai jika belum tahu pasti perulangan dijalankan berapa kali
- contoh: pengecekan password

## do while

melakukan perulangan yg minimal kodenya dieksekusi setidaknya 1x

```js
do {
  pilihan = Number(
    prompt(`
    === MENU ===
    1. profil
    2. setting
    3. keluar
    `),
  );
} while (pilihan != 3);
console.log("program selesai");
```

## for loop

digunakan ketika kita tahu kapan berhentinya dari perulangan tersebut

- let i = 1 => kondisi
- i <= 3 => kondisi berhentinya
- i++ => kondisi penambahannya

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// kondisi yg salah
for (;;) {
  console.log(1);
}
```

- kondisi salah masih dianggap benar oleh js karena for loop dengan kondisi, inisialisasi, dan increment kosong akan dianggap true

## for loop array

```js
const makanan = ["🍔", "🍟", "🥐"];

for (let i = 0; i < makanan.length; i++) {
  console.log(makanan[i]);
}
```

akses menggunakan pengecekan array.length untuk mengecek panjang dari arraynya

- i artinya indeks yang nilainya disimpan didalam variabel i

## nested loop
dalam satu perulangan, menjalankan perulangan yg lainnya (biasanya maks 3x perulangan)
```js
for (let baris = 1; baris <= 3; baris++) {
    for (let kolom = 1; kolom <= 3; kolom++) {
        console.log(baris, kolom)
    }
}
```
analogi =
lantai 1
    kamar 1
    kamar 2
lantai 2
    kamar 1
    kamar 2

=> tracing masing" mulai dari lantai 1 -> kamar 1, kamar 2 dst


