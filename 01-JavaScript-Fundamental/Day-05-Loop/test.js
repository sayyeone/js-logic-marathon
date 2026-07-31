for (let i = 1; i <= 2; i++) {
let res = 0;
    console.log("Masuk Outer", i);
    res += i;
    console.log(res);

    for (let j = 1; j <= 3; j++) {
        res += j;
        console.log("Masuk Inner", j);
        console.log(res);
    }
    console.log(res);
}

