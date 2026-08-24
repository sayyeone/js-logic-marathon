// const array = [1, 2, 3, 4, 5];

// for (i of array) {
//     console.log(i)
// }

// const [elm1, elm2, elm3, elm4] = array;
// const elm5 = array[4]

// console.log(elm5);


// const products = [
//     ["laptop", 100, 10]
// ]

// for (const [name, price] of products) {
//     console.log(products);
//     console.log(name);
// }


// const person = {
//     username: "Adis",
//     age: 20
// }
// console.log(person.username); // CARA YG LAMA

// const {username, age} = person
// console.log(age);

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
// }

// let{
//     width: w
// } = rectangle

// console.log(w)

const person = {
    username: "adisty",
    education: {
        subject: "compsi"
    }
}

// misalkan ingin mengambil properti subject
const {
    education: {
        subject
    }
} = person

console.log(subject)