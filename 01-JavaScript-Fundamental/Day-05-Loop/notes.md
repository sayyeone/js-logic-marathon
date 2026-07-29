# NOTE LOOP

loop adalah cara menyuruh komputer melakukan pekerjaan yg sama berkali-kali, sementara yg berubah hanyalah datanya

*sebuah loop selalu punya 3 komponen: 1. nilai awal (init), 2. kondisi, 3. perubahan*

## while loop
dijalankan selama kondisinya true, jika false langsung keluar dari looping

```js
let angka = 1;
while (angka <= 4) {
    console.log(angka) 
    angka++; // update kondisi angkanya
}
```
- pengunaan => dipakai jika belum tahu pasti perulangan dijalankan berapa kali
- contoh: pengecekan password

## do while
melakukan perulangan yg minimal kodenya dieksekusi setidaknya 1x

```js
do {
    pilihan = Number(prompt(`
    === MENU ===
    1. profil
    2. setting
    3. keluar
    `));
} while (pilihan != 3);
console.log("program selesai");
```

## for loop



