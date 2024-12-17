// 1. Functions are primarily used to avoid writing repeatable code.
// In javascript functions are declared using 'function' keyword followed by 
// the function name. 

// 2. Parameters vs Arguments
// Parameters are specified when declaring a function, whereas arguments are passed 
// when invoking a function.

// 3. Arguments inside a function
// to access the named arguments of a function, you can use 'arguments' object that
// behaves like an array though it is not an instance of the array type.
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2, 3)); // 6

// 4. Function hoisting
// Function hoisting is a mechanism in javascript, in which javascript engine physically 
// moves the function declaration to the top of the code before executing it.
// And this way, it allows to invoke a function before declaring it.
showMe();

function showMe() {
    console.log('An hoisting example');
}