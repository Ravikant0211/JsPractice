// const root = document.getElementById("root");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   root.textContent = "Hello, this is Ravi kant";
// });

//===================================================================

// Difference between == and ===
// console.log(5 == "5"); // true
// console.log(5 === "5"); // false

// console.log(false == 0); //true
// console.log(true == 1); //true

// console.log(false === 0); //false
// console.log(true === 1); //false

// console.log("hello world" == new String("hello world")); // true
// console.log("hello world" === new String("hello world")); // false

//=====================================================================

// Difference between null & undefined
// null and undefined are premitive data types in js
//Both null and undefined are falsy values in JS
// console.log(null == undefined); //true
// console.log(null === undefined); //false

// let a = undefined;
// console.log(a);
// a = null;
// console.log(a);

// console.log(typeof null); //object
// console.log(typeof undefined); //undefined

// ================================================================================
// What is NaN?
// console.log(typeof NaN); // number
// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false
// console.log(10 + 0 / 0); // NaN
// console.log(parseInt("X101")); // NaN
// console.log(10 + 1 / NaN); // NaN
// console.log(undefined + 2); //NaN
// console.log(Math.sqrt(-2)); // NaN
// console.log(isNaN(undefined + 2)); // true
// console.log(NaN == undefined); // false

//================================================================================
// Difference between let, var and const

// 1.) Scope;
// let a = 15;
// {
//   let a = 10;
//   console.log(a); // 10
// }
// console.log(a); // 15

// const b = 100;
// {
//   const b = 20;
//   console.log(b);
// }
// console.log(b);

// function fn() {
//   var a = 10;
// }
// fn();
// console.log(a); // ReferenceError: a is not defined

//===========================================
// 2.) Hoisting:- defining a variable before its declaration
// -variable defined using var keywords are hoisted
// -variable defined using let and const keywords are not hoisted

// x = 10;
// console.log(x);
// var x;

// ===========================================
// 3.) Reassign the value
// -Reassigning the value is possible to the variables that are defined using let and var keywords.
// -but not possible in variables that are defined using const keywords
// let a = 10;
// a = 5;
// console.log(a);

// var b = 19;
// b = 29;
// console.log(b);

// const c = 25;
// c = 29;
// console.log(c); // TypeError: Assignment to constant variable

//======================================================
// 4.) Redeclaration of the variable
//     Redeclaration means declaring the variable again.
//    -Redeclaration is only possible of the variables that are defined using var keyword
//    -Not possible in case of let and const
// var v1 = 15;
// var v1 = 25;
// console.log(v1); // 25

// let l1 = 15;
// let l1 = 13; // can't redclare block scope variables
// const c1 = 12;
// const c1 = 19; // can't redclare block scope variables

//==========================================================

// Difference between let and const
// 1. let variables can be defined after declaration but const variables must be
//    defined at the same time they are declared.
// 2. Reassignment of value is possible in let variables, but its not possible in
//    const variables
