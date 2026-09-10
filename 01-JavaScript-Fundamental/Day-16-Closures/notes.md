# CLOSURE
inner function tetap bisa mengakses variabel dari outer function

## function didalam function
```js
function outerFunction() {
    function innerFunction() {
        consloe.log("halo")
    }
}
```
- outerFunction = outer function karena fungsinya berada di luar
- innerFunction = inner function karena berada di dalam outerFunction

## inner function bisa mengakses variabel outer function
```js
function outerFunction() {
    let name = "disty"
    
    function innerFunction() {
        console.log(name)
    }

    innerFunction() // MEMANGIL FUNCTION DISINI KARENA TIDAK BISA LANGSUNG DIPANGGIL DILUAR FUNCTION
}

outerFunction()
```

## contoh closure
```js
function outerFunction() {
    let count = 0
    function innerFunction() {
        count++
        return count
    }
    return innerFunction
}

const inner = outerFunction() // membuat variabel baru yg menjalankan function outernya
console.log(inner())
console.log(inner())
```