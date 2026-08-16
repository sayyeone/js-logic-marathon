# NOTE SETS & MAP

## set
set hanya menerima kumpulan nilai yg unik saja
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
```

