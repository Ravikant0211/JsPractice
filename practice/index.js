function sum(a, b) {
    return (a + b);
}

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let res = average(5, 3, sum);
console.log('result: ', res);
