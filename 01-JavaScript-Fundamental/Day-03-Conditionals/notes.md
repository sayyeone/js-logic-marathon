# NOTES CONDITIONALS

## if statement
hanya menjalankan blok kode ketika kondisinya terpenuhi, jika tidak maka program yg dijalankan selesai

*contoh*
```js
const age = 20;
if (age >= 18) { // hasilnya sama saja seperti if(true) => merupakan hasil dari pengecekannya
    console.log("dewasa");
}
```
cara kerja kodenya = melakukan pengecekan apakah umurnya >= 18 tahun? jika iya outputkan dewasa

## if-else
untuk melakukan keluaran dari program if yg gagal dijalankan, setidaknya melakukan 1 aksi

*contoh*
```js
if (condition) {
    // dijalankan jika kodisinya = true
} else {
    // dijalankan jika kondisinya = false
}
```
### insight conditionals
- switch hanya membandingkan satu variabel dengan banyak nilai pasti, **tidak ada perhitungan hanya menyocokkan 1 valuenya aja**

