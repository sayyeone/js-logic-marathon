<div align="center">
  <h1> 30 Hari Belajar JavaScript: Closures</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Penulis:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Januari, 2020</small>
</sub>

</div>

[<< Hari 18](../18_Day_Promises/18_day_promises.md) | [Hari 20 >>](../20_Day_Writing_clean_codes/20_day_writing_clean_codes.md)

![Thirty Days Of JavaScript](../images/banners/day_1_19.png)
- [Hari 19](#hari-19)
	- [Closure](#closure)
	- [Latihan](#latihan)
		- [Latihan: Level 1](#latihan-level-1)
		- [Latihan: Level 2](#latihan-level-2)
		- [Latihan: Level 3](#latihan-level-3)

# Hari 19

## Closure

JavaScript memungkinkan kita nulis fungsi di dalam fungsi luar (outer function). Kita bisa nulis fungsi dalam (inner function) sebanyak yang kita mau. Kalau fungsi dalam itu mengakses variabel dari fungsi luarnya, itu disebut closure.

```js
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
```

```sh
1
2
3
```

Yuk kita lihat contoh lain dari inner function.

```js
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
```

```sh
1
0
```

🌕 Kamu makin maju. Pertahankan momentumnya, terus semangat ya. Sekarang, kerjain beberapa latihan buat mengasah otak dan ototmu.

## Latihan

### Latihan: Level 1

1. Bikin sebuah closure yang punya satu inner function.

### Latihan: Level 2

1. Bikin sebuah closure yang punya tiga inner function.

### Latihan: Level 3

1. Bikin fungsi luar personAccount. Fungsi ini punya variabel dalam firstname, lastname, incomes, expenses. Fungsi ini juga punya fungsi dalam totalIncome, totalExpense, accountInfo, addIncome, addExpense, dan accountBalance. Incomes adalah kumpulan pemasukan beserta deskripsinya, dan expenses juga kumpulan pengeluaran beserta deskripsinya.

🎉 SELAMAT ! 🎉

[<< Hari 18](../18_Day_Promises/18_day_promises.md) | [Hari 20 >>](../20_Day_Writing_clean_codes/20_day_writing_clean_codes.md)