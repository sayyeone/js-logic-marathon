// LV 1

// 1
let a = 12;
let b = 10;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === b);
console.log(a != b);

// 2
let temperature = 31;
let kondisi = temperature > 30 ? "panas" : "dingin";
console.log(kondisi);

// 3
let now = new Date;
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());

// LV 2

// 6
let username = '';
let displayname = username || 'Anonymous'; // cari operand pertama yg nilainya truthy
console.log(displayname);

// 7
const user = {
    email: "adisty@mail.com"
};
let tampilNama = user.email || "Guest";
console.log(tampilNama);

// 8
const sekarang = new Date;
const birthday = new Date("2006-07-22");
const selisih = sekarang - birthday;
const diff = selisih / (24 * 60 * 60 * 1000); // mengubah per satuan waktunya dari ms ke harinya
console.log(Math.floor(diff / 365));





