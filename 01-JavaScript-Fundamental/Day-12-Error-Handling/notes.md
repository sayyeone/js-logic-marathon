## error handling
bagaimana cara kita menangani kondisi ketika program mengalami error

## try... catch
```js
try {
    // kode yg mungkin error
} catch (error){
    // apa yg dilakukan jika kodenya ternyata error
}
```
- jika blok catch dikosongkan maka tidak muncul apa" didalam browser consolenya
- parameter error penamaannya bisa diganti

```js
try {
    console.log(firstName) // akan error karena variabel firstName belum dideklarasikan
} catch(err) {
    console.log("Kodenya error")
}
```
- yg muncul kodenya error, karena mengambil error
- err = parameter yang menerima informasi mengenai error yg terjadi

```js
err.name // mengambil informasi dari errornya yg mana
err.message // menampilkan informasi error lebih jelasnya
```

## finally
```js
try {
    // kode yg kemungkinan error
} catch (err){
    // aksi jika kondisinya error
} finally {
    // baris kode yg SELALU DIJALANKAN
}
```
## throw
digunakan untuk menentukan kapan sebuah error/exception harus terjadi
- ketika terjadi error, maka dilempar keluar dari function dan dicari siapa yg bisa menangkap error yg dihasilkan

*masalah utama*
jika ketentuan dari program mewajibkan user harus berusia minimal 18 tahun => maka membutuhkan (age < 18)
```js
if (age < 18){
    throw "Age is too low"
}
```

```js
try {
    const age = 15
    if (age < 18){
        throw "Age is too low"
    }

    console.log("acc granted")
} catch (err) {
    console.log("acc denied")
}
```
## new error
membuat object error, yg bisa diakses mengunakan **err.name dan err.message**

### function + throw
```js
function checkAge(age) {
    if (age < 18){
        throw new Error("umur belum cukup")
    }
    return "boleh lanjut"
}

try {
    const res = checkAge(15)
    console.log(result)
} catch (err) {
    console.log(err.message)
}
```
- lebih modular dan mudah dibaca

## macam-macam error
- ReferenceError
ketika js mencoba variabel yang belum dideklarasikan

- SyntaxError
cara menulis kode tidak mengikuti aturan syntax javascript

- TypeError
menggunakan tipe data yg tidak sesuai dengan metode tipe datanya

```js
let num = 10
console.log(num.toLowerCase())
```
- ketidaksesuaian antara tipe data num dengan referensi dari method yg dilakukan
