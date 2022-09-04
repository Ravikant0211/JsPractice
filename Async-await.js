// ===================================================================================================
// CALLBACK APPROACH: LESS READABLE CODE

// function getUsers(callback) {
//     let users = [];
//     setTimeout(()=>{
//       callback([
//             {username: "Ravi kant", userId: 101, email: "Ravikant@gmail.com"},
//             {username: "Rohit kumar", userId: 102, email: "Rohit@gmail.com"},
//             {username: "Bhavna", userId: 103, email: "Bhavan@gmail.com"}
//         ])
//     }, 1000)

//     return users;
// }

// function findUser(userId, callback) {
//     getUsers((users) => {
//         const user = users.find((user) => user.userId === userId );
//         callback(user);
//     });  
// }

// findUser(102, console.log);

// =====================================================================================================
// PROMISE APPROACH: MORE READABLE CODE

// const authorized = true;

// function findUser(users, username) {
//     const myUser = users.find(user => user.username === username)
//     console.log(myUser);   
// }

// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(!authorized) {
//                 throw new Error("you are not authorized to this info");
//             }

//             resolve([
//                 {username: "Ravi kant", userId: 101, email: "Ravikant@gmail.com"},
//                 {username: "Rohit kumar", userId: 102, email: "Rohit@gmail.com"},
//                 {username: "Bhavna", userId: 103, email: "Bhavan@gmail.com"}
//             ]);
//         }, 1000);
//     })
// }


// getUser()
//     .then((users)=>{ findUser(users, "Rohit kumar")} )
//     .catch((error)=>{ console.log(error)} );

// ===================================================================================================
// ASYNC AWAIT APPROACH: MORE READABLE THEN PROMISE LOOKS LIKE SYNCHRONOUS CODE

async function findUser() {
    try{
        const users = await getUser();
        return users;

    } catch(error) {
        console.log(error);
    }
   
}   

let authorized = false;
function getUser() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            if(!authorized) {
                throw new Error("something went wrong");
            }

            resolve(
                [
                    {username: "Ravi kant", userId: 101, email: "Ravikant@gmail.com"},
                    {username: "Rohit kumar", userId: 102, email: "Rohit@gmail.com"},
                    {username: "Bhavna", userId: 103, email: "Bhavan@gmail.com"}
            ])
        })
   })
}

findUser().then((users)=>{console.log(users)});

// ===================================================================
// ASYNC AWAIT

// async function name() {
//     console.log("Async function")
//     return Promise.resolve(4);
// }
// name().then(res=> res)
//         .then(res => res * 2)
//         .then(res => res * 2)
//         .then(res => {console.log(res * 2)})


// a promise
// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved")
//     }, 4000);
// })
// // asynchronous function 
// async function asyncFunc() {

//     console.log("first");
//     // wait untill the promise get resolves
//     let result = await promise;

//     console.log(result);
//     console.log("hello");
// }

// // calling async function
// asyncFunc();
    

// PROMISES ARE USEFUL WHEN THERE ARE MULTIPLE PROMISES TO WORK WITH
// let promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("one")
//     },2000)
// })

// let promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("two")
//     },5000)
// })

// let promise3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("three")
//     },8000)
// })


// async function getCount() {
//     let res1 = await promise1;
//     console.log(res1);
//     let res2 = await promise2;
//     console.log(res2);
//     let res3 = await promise3;
//     console.log(res3);
// }

// getCount();

