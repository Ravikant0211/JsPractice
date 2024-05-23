// // Promise:
// let success = true;
// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(success){
//                 resolve([
//                     { username: 'john', email: 'john@test.com' },
//                     { username: 'jane', email: 'jane@test.com' },
//                 ]);
//             } else {
//                 reject("Failed to access users");
//             }
//         }, 1000);
//     });
// }

// function onFulfilled(users) {
//     console.log(users);
// }

// function onRejected(error) {
//     console.log(error);
// }

// getUser().then(
//     (users) => {console.log(users)},
//     (error) => {console.log(error)}
// )
// getUser() .then(
//     (users) => {console.log(users)}
//     )
//     .catch(
//         (error) => {console.log(error)}
//     )
//     .finally(()=>{
//         anyFunction();
//     })


// ################################################################################ 

// PROMISE CHAINING

let condition = false;
function resolveAfter4Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condition) {
                resolve('promise resolved!');   
            } else {
                reject('Error thrown!');   
            }
        });
    })
}

function asyncCall() {
    console.log('callling');
    const result = resolveAfter4Seconds();
    return result
        .then(
            (res) => { 
                console.log('result1: ', res);
                return `${res}_modified_1`;
                // throw new Error('something went wrong!');
            },
            (err) => { 
                // console.log('error1: ', err) ;
                throw err;
            }
        )
        .then(
            (res) => {
                // console.log('result2: ', res);
                return `${res}_modified_2`
            },
            (err) => {
                // console.log('error2: ', err);
                throw err;
            }
        )
        .then(
            (res) => {
                console.log('result3: ', res);
                return `${res}_modified_3`
            },
            (err) => {
                // console.log('error3: ', err);
                throw err;
            }
        )
        .catch(
            (err) => {
                // console.log('error4: ', err);
                throw err;
            }
        )
}

const result = asyncCall();
result
    .then((res) => {console.log('result4: ', res)})
    .catch((err) => {console.log('error4: ', err)});

// console.log('immediate logging!');


// #########################################################################
// Understanding Promise.all()

// const promise1 = Promise.resolve(3);
// console.log(promise1); // output: Promise { 3 }
// promise1.then((res) => console.log(res)); // output: 3

// const promiseReject = Promise.reject('something went wrong!');
// console.log(promiseReject); // output: Promise { <rejected> 'something went wrong!' } with [UnhandledPromiseRejection] error
// promiseReject.then((res) => console.log(res)); // output: Promise { <rejected> 'something went wrong!' } with [UnhandledPromiseRejection] error
// promiseReject.catch((err) => console.log(err)); // output: something went wrong!

// -------------------------------

// let condition = true;
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (condition) {
//         resolve('foo');
//     } else {
//         reject('something went wrong!');
//     }
//   }, 4000);
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values); // output: [ 3, 42, 'foo' ] , will be appeared after 4 seconds when all
//                        // all the promises are resolved.
// }).catch(err => {
//     console.log(err); // output: something went wrong!
// });

// -------------------------------------

// async function asyncCall() {
//     try {   
//         const p1 = await Promise.all([1, 2, 3]);
//         console.log(p1);
//         const p2 = await Promise.all([1, 2, 3, Promise.resolve(4)]);
//         console.log(p2);
//         const p3 = await Promise.all([1, 2, 3, Promise.reject('Error: 404')]);
//         console.log(p3);
//     }  catch(error) {
//         console.log(error);
//     }
// }
// asyncCall();

// ---------------------------------------

// const p = Promise.all([]); // Will be immediately resolved
// const p2 = Promise.all([1337, "hi"]); // Non-promise values are ignored, but the evaluation is done asynchronously
// console.log(p);
// console.log(p2);
// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p2);
// });


// ######################################################################
// Understanding Promise.allSettled()
// Promise.allSettled() is typically used when you have multiple asynchronous 
// tasks that are not dependent on one another to complete successfully
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'something went wrong!'),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result)),
)
// output: 
// { status: 'fulfilled', value: 3 }
// { status: 'rejected', reason: 'something went wrong!' }