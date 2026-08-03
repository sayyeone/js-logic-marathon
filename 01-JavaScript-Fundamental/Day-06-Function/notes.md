# FUNCTION NOTE

suatu subprogram yg akan dipanggil didalam subprogram yg lainnya, dan kita membutuhkannya karena usabilitynya

## kategori function
1. built-in function = fungsi yg telah disediakan oleh js. contoh = slice(), split(), toString()
2. user-defined function = fungsi yg kita bikin sendiri

### user-defined function
membutuhkan parameter/argumen
- disimpan didalam ()
- boleh ada/tidak
- dipisahkan oleh koma
- dapat mengembalikan nilai/tidak
- jika tidak mengembalikan nilai maka namanya procedure

*function declaration* => langsung memberi nama functionnya
```js
function sumNumber(a, b) { // INI PARAMETENYA
    let total; // INI MERUPAKAN FUNCTION BODY
    total = a + b;
    return total; // INI RETURN VALUE
}
```

*function expression* => menyimpan function didalam sebuah variabel
```js
var sumNum = function(a, b) {
    let total;
    total = a + b;
    return total;
}
```

## refactoring function
merapikan kode dan membersihkan berberapa variabel / operasi matematika yg tidak perlu lagi

contoh
```js
function sumKubus(a, b) {
    let res1, res2;
    let total = 0;

    res1 = a ** 3;
    res2 = b ** 3;

    total = res1 + res2
    return total;
};
```
*BISA DIREFACTOR MENJADI*
```js
function sumKubes(a, b){
    return (a ** 3 + b ** 3)
}
```
jadi bisa membutuhkan 1 variabel saja atau kita lengsung menggunakan operator aritmatika dengan langsung mengembalikan hasilnya

## parameter
tempat kosong yg menunggu diisi saat functionnya dipanggil / variabel biasa kita deklarasikan

## argument
data yg dikirim ke function

## return
MEMBERIKAN/MENYERAHKAN nilai/data hasil olahan fungsinya agar bisa disimpan di variabel / diolah lagi

*contoh*
```js
function tambah() {
    return 5;
}

console.log(tambah() * 10);
```
jadi functionnya bisa diolah langsung atau disimpan didalam variabel terlebih dahulu


### good to know
function yg baik hanya mengerjakan suatu tugas spesifik saja