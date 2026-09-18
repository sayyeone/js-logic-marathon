// function outerFunction() {
//     let count = 0;

//     function innerFunction() {
//         count++
//         return count
//     }

//     return innerFunction
// }

// const nama = "adis"
// const inner = outerFunction()
// console.log(inner);

// function buatPesan() {
//     function tampilkanPesan() {
//         console.log("pesanan dibuat");
//     }
//     tampilkanPesan()
// }
// buatPesan() // kode ini hanya menjalankan function aja, kalau tampilkan pesan tidal dipanggil maka dia tidak akan pernah dijalankan, hanya dideklarasikan/dibuat
// buatPesan()

// KALAU PAKAI RETURN = mungkin tidak mau tampilkanPesan() dijalankan sekarang, kita mengeluarkan function tampilkanPesan() supaya bisa dipakai dari luar

// function buatCounter() {
//     let count = 0;

//     function tambah() {
//         count++;
//         // return count;
//         console.log(count);
        
//     }

//     return tambah;
// }

// const call = buatCounter()
// call()
// call()
// console.log(call())

// function sapa() {
//     console.log("Halo");
// }

// const hasil = sapa();
// console.log(hasil);

function halo() {
    let mesage = "hello"
    console.log(omg);
    function printMsg() {
        let omg = "adis"
        console.log(mesage);
    }
}