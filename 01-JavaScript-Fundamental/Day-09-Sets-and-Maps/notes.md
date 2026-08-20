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

```js
const classA = new Set([
      "adis", "budi", "tika"
])

const classB = new Set([
      "tika", "denis"
])
```
requirtment: "saya ingin mendapatkan semua mhs dari class A dan class B, tetapi mahasiswa yg sama tidak boleh muncul 2x"

- maka kita membuat union
```js
const union = new Set([
      ...classA, ...classB
])

console.log(union)
```

*memakai built-in union*
```js
const gabungan = classA.union(classB)
console.log(gabungan)
```

### intersection
mengambil elemen yg sama dari kedua set

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter(num => B.has(num))
```
kita menggunakan array variabel a untuk dilakukan filter yg mana kondisinya adalah apakah variabel a memiliki angka yg sama dengan set B?

### HAS VS INCLUDES
- has melakukan pengecekan set secara langsung, jadi bukan dicek kedalam elemennya 1 per 1 => metodenya khusus untuk set
- includes melakukan pengecekan array dengan mengecek elemennya 1 per 1

*memakai built-in*
```js
// intersection()

const bothClasses = classA.intersection(classB)
console.log(bothClasses)
```






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
