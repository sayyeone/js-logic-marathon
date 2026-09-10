function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}

const nama = "adis"
const inner = outerFunction()
console.log(inner);
