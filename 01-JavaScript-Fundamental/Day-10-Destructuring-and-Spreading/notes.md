## destructuring
membongkar sesuatu menjadi bagian" tertentu
- membaginya kedalam masing" indeksnya

## array destructuring
```js
const numbers = [10, 20, 30]

// menggunakan cara yg lama
const num1 = numbers[0]
const num2 = numbers[1]
const num3 = numbers[2]
```
menggunakan cara manual dengan assign masing" per variabelnya

### *menggunakan destructuring*
```js
const [num1, num2, num3] = numbers
```

### *skip element*
```js
const numbers = [10, 20, 30]

const [first, , third] // ketika tidak ingin menggunakan elemen 20
```

### rest pattern
- rest pattern penempatannya selalu menjadi elemen terakhir

```js
const numbers = [1, 2, 3, 4]

const [first, second, ...rest] = numbers // rest menjadi tempat mengumpulkan sisa elemen menjadi array
```