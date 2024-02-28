// async function asyncCall() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('resolved!!!');
//         }, 3000);
//     })
// }

// async function exampleAsyncFunction() {
//     const arr = [1, 2, 3];
//     for (let a of arr) {
//         const resolvedValue = await asyncCall();
//         console.log(resolvedValue);
//         console.log('a: ', a);
//     }
// }

// async function exampleAsyncFunction() {
//     const arr = [1, 2, 3];
//     arr.forEach(async (a) => {
//         const resolvedValue = await asyncCall();
//         console.log(resolvedValue);
//         console.log('a: ', a);
//     })
// }

// async function exampleAsyncFunction() {
//     const arr = [1, 2, 3];
//     arr.map(async (a) => {
//         const resolvedValue = await asyncCall();
//         console.log(resolvedValue);
//         console.log('a: ', a);
//     })
// }

// exampleAsyncFunction();

// In this function, forEach is used to iterate over the array arr. 
// However, inside the forEach callback function, an async function is used. 
// This async function is executed for each element of the array. But since 
// forEach does not wait for asynchronous operations to complete, it initiates 
// all async operations simultaneously. As a result, all iterations start 
// concurrently, and you may not get the expected sequential behavior. 
// The forEach method does not wait for async operations to complete 
// before moving to the next iteration.

// Same applied for 'map'. This also does not wait for async operation to complete.

// So, the key difference is that the for...await...of loop ensures that 
// each iteration completes before moving to the next one, while using forEach with an 
// async function initiates all async operations concurrently without waiting for their 
// completion, potentially leading to unexpected behavior or race conditions.


// ##########################################################################################
// SECOND USECASE-

// async function asyncCall() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('resolved!!!');
//         }, 3000);
//     })
// }

// async function exampleAsyncFunction() {
//     const arr = [1, 2, 3];
//     const values = [];
//     for (let a of arr) {
//         const resolvedValue = await asyncCall();
//         values.push(resolvedValue);
//         console.log(resolvedValue);
//         console.log('a: ', a);
//     }
//     console.log(values); 
// }
// OUTPUT: 
// resolved!!!
// a:  1
// resolved!!!
// a:  2
// resolved!!!
// a:  3
// [ 'resolved!!!', 'resolved!!!', 'resolved!!!' ]

// async function exampleAsyncFunction() {
//     const arr = [1, 2, 3];
//     const values = [];
//     arr.forEach(async (a) => {
//         const resolvedValue = await asyncCall();
//         values.push(resolvedValue);
//         console.log(resolvedValue);
//         console.log('a: ', a);
//     })
//     console.log(values);
// }
// OUTPUT:
// []
// resolved!!!
// a:  1
// resolved!!!
// a:  2
// resolved!!!
// a:  3

// async function exampleAsyncFunction() {
//     const arr = [1, 2, 3];
//     const values = [];
//     arr.map(async (a) => {
//         const resolvedValue = await asyncCall();
//         values.push(resolvedValue);
//         console.log(resolvedValue);
//         console.log('a: ', a);
//     })
//     console.log(values);
// }
// OUTPUT: Same behavior as 'forEach loop'
// []
// resolved!!!
// a:  1
// resolved!!!
// a:  2
// resolved!!!
// a:  3


// -------------------------------------------
// async function exampleAsyncFunction() {
//     const arr = [1, 2, 3];
//     const values$ = arr.map((a) => {
//         const resolvedValue = asyncCall();
//         return resolvedValue;
//     })
//     console.log(values$);
//     const values = await Promise.all(values$)
//     console.log(values);
// }
// OUTPUT:
// [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]
// [ 'resolved!!!', 'resolved!!!', 'resolved!!!' ]

// async function exampleAsyncFunction() {
//     const arr = [1, 2, 3];
//     const values = await Promise.all(arr.map((a) => {
//         const resolvedValue = asyncCall();
//         return resolvedValue;
//     }));
//     console.log(values);
// }
// OUTPUT:
// [ 'resolved!!!', 'resolved!!!', 'resolved!!!' ]


// async function exampleAsyncFunction() {
//     const arr = [1, 2, 3];
//     const values$ = [];
//     arr.forEach((a) => {
//         const resolvedValue = asyncCall();
//         values$.push(resolvedValue);
//     })
//     console.log(values$);
//     const values = await Promise.all(values$);
//     console.log(values);
// }
// OUTPUT:
// [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]
// [ 'resolved!!!', 'resolved!!!', 'resolved!!!' ]

// exampleAsyncFunction();



// #########################################################################
// UNDERSTANDING 'for...await...of' loop
// for...of loop: This is a standard loop in JavaScript used to iterate over 
// iterable objects like arrays, strings, maps, sets, etc. It assigns each 
// iterated value to a variable.

// await: This keyword is used to pause the execution of an async function 
// until a Promise is settled (resolved or rejected). It can only be used 
// inside an async function.

// for...await...of: This is an extension of the for...of loop, specifically
// designed to work with asynchronous iterators. It allows you to iterate over 
// asynchronous iterable objects, awaiting each Promise before proceeding to the 
// next iteration.
async function exampleAsyncFunction() {
    const asyncIterable = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
    
    for await (const value of asyncIterable) {
        console.log(value);
    }
}

exampleAsyncFunction();
