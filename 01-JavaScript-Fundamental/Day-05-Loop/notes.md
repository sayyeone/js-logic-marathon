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

