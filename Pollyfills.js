// call apply bind

// function func(val1) {
//     return +this.a + +this.b + val1;
// }

// const obj = {
//     a: 1,
//     b: 2
// }

// let sum = func.bind(obj, 3);
// let sum = func.myBind(obj, 3);
// console.log(sum());

//======================================================================

// Pollyfills
//=============

// 1. myBind
//=============

// function func(val1, val2, val3) {
//     console.log(+this.a + +this.b + val1 + val2 + val3);
// }

// const obj = {
//     a: 1,
//     b: 2
// }

// Function.prototype.myBind = function(...arguments) {

//     let functionToBeExecuted = this;

//     const objToBind = arguments[0];
//     const parameters = arguments.slice(1);

//     console.log(functionToBeExecuted);

//     return function() {
//         functionToBeExecuted.call(objToBind, ...parameters)
//     };
// }

// let sum = func.myBind(obj, 3, 1, 4);
// sum();

//=======================================================================

// myCall
//========

// function func(val1, val2, val3) {
//     console.log(+this.a + +this.b + val1 + val2 + val3);
// }

// const obj = {
//     a: 1,
//     b: 2,
//     myFunc: function (val1, val2, val3) {
//         console.log(+this.a + +this.b + val1 + val2 + val3);
//     }
// }

// Function.prototype.myCall = function (...arguments) {

//     let functionToBeExecuted = this;
//     const objToBind = arguments[0];
//     let parameters = arguments.slice(1);

//     objToBind.myFunc = functionToBeExecuted;
//     objToBind.myFunc(parameters);
// }

// func.myCall(2, 3, 4);

//=====================================================================

// myApply
//=========

// function func(val1, val2, val3) {
//     console.log(+this.a + +this.b + val1 + val2 + val3);
// }

// const obj = {
//     a: 1,
//     b: 2,
//     myFunc: function (val1, val2, val3) {
//         console.log(+this.a + +this.b + val1 + val2 + val3);
//     }
// }

// Function.prototype.myApply = function (obj, arguments) {

//     let functionToBeExecuted = this;
//     const objToBind = obj;

//     objToBind.myFunc = functionToBeExecuted;
//     objToBind.myFunc(arguments);

// }

// func.myApply(obj, [1,2,3]);

// =============XXXXXXXXXXXXXXXXXXXXX====================
// SETINTERVAL
// let id = setInterval(() => {
//     console.log("Inside function");
// }, 1000);

// setTimeout(() => {
//     clearInterval(id);
// },5000);

function windowPollyFill() {
  var intervalMap = {};
  var id = 0;

  //register the id,
  // looping output through the time.
  function mySetInterval(callback, delay) {
    function loop() {
      intervalMap[id] = setTimeout(() => {
        callback();
        if (intervalMap[id]) {
          loop();
        }
      }, delay);
    }

    loop();
    return id;
  }

  // clearTimeout
  function myClearInterval(id) {
    delete intervalMap(id);
  }
  return id;
}

mySetInterval(func, 1000);
