// function b() {
//     console.log("b dijalankan");
// }

// function c() {
//     console.log("c dijalankan");
// }

// function a(callback) {
//     console.log("a dijalankan");
//     callback()
// }

// a(b)
// a(c)

// CALLBACK V2
const callbackAngka = (angka) => console.log(angka);

const A = (callback) => {
    const angka = 10
    callback(angka)
}

A(callbackAngka)
