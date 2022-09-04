// Synchronous callbacks :- this is the callback which executes with the execution of
// higher order function.

//============================================================
// function isOdd(number) {
//     return number % 2 != 0;
// }

// function isEven(number) {
//     return number % 2 == 0;
// }

// function filter(numbers, callback) {
//     let result = [];
//     for(let number of numbers) {
//         if(callback(number)) {
//             result.push(number);
//         }
//     }
//     return result;   
// }

// const numbers = [1, 2, 4, 6, 7, 3, 9, 10];
// console.log(filter(numbers, isOdd));
// console.log(filter(numbers, isEven));

//=======================================================

// A callback can be a anonymous function 

function filter(numbers, callback) {
    let result = [];
    for(let number of numbers) {
        if(callback(number)) {
            result.push(number);
        }
    }
    return result;   
}

const numbers = [1, 2, 4, 6, 7, 3, 9, 10];

console.log(filter(numbers, function (number) {
    return number % 2 != 0;
}));

console.log(filter(numbers, 
    function (number) {
        return number % 2 == 0;
    }));