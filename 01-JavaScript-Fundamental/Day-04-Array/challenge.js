const campur = ["Halo", 2, true];
console.log(campur.length);

// array method
const num = [1, 2, 3];
const c = num.push(4);

console.log(num.join("-"));
console.log(c);

const b = [1, 2, 5, 100, 110, 200]; // 0 = 1 ; 1 = 2 ; 2 = 5
b.splice(2, 2, 99, 99); // mengakses dengan indeks yg diinginkan
console.log(b);
console.log(b[99]);

const arr1 = [5, 10, 15];
arr1.length = 4;
console.log(arr1);


