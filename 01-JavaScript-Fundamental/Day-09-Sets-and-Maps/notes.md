# NOTE SETS & MAP

## set
set hanya menerima kumpulan nilai yg unik saja
- hanya fokus pada valuenya
- bedanya dengan array adalah
```js
const array = [1, 2, 3, 3] // masih diperbolehkan
const set = [1, 2, 3] // hanya diambil pasangan unik
```
### cara membuat set
```js
const student = new Set();
```

### cara memasukkan data
*.add()*

```js
const students = new Set();

students.add("Adis");
students.add("Fatika");
students.add("Ardani");
```
jika mencoba memasukkan nama yg sama maka hasil dari set nya tetap tidak dimasukkan

### menghapus data
```js
students.delete("Fatika");

students.clear(); // untuk menghapus semuanya
students.size // mengetahui jumlah item dalam set
students.has() // mengecek apakah suatu nilai ada/tidak
```

## operasi pada set
mengabungkan diantara 2 kelompok set, misal kelompok A dan kelompok B

### union
menggabungkan semua anggota dari dua set, tetapi menghilangkan duplikat










### perbedaan diantara 3 nya
                 DATA
                   │
          ┌────────┴────────┐
          │                 │
    Satu entity?        Kumpulan data?
          │                 │
        Object          ┌────┴────┐
                       │         │
                 Butuh unik?   KEY → VALUE?
                       │         │
                      Set       Map
