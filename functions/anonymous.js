// Anonymous function- Anonymous function is a function without the name.
// (function() { // function body })
// It is necessary to put anonymous function inside the parenthesis (), otherwise it will throw
// syntax error. The parenthesis () makes the anonymous function an expression that returns
// a function object.
// An anonymous function is not accessible after its initial creation. So to access it after
// creation, you need to assign it to a variable.

const fn =  function() {
    console.log('Hello world');
}

fn();

// Anonymous functions are used to pass as an argument inside another function.
setTimeout(() => {
    console.log('Execute after 1 second!');
}, 1000);

// NOTE- In case of anonymous function, the function hoisting doesn't work. Because the function declaration
// is assigned to a variable, which is not hoisted.