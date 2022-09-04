// Perfect example for callback
// function getUsers() {
//     let users = [];
//     setTimeout(()=>{
//       users = [
//             {username: "Ravi kant", userId: 101, email: "Ravikant@gmail.com"},
//             {username: "Rohit kumar", userId: 102, email: "Rohit@gmail.com"},
//             {username: "Bhavna", userId: 103, email: "Bhavan@gmail.com"}
//         ]
//     }, 1000)
    
//     return users;
// }

// function findUser(userId) {
//     const users = getUsers();
//     return users.find((user) => user.userId === userId );
// }

// const found = findUser(102);
// console.log(found); // UNDEFINED


// The challenge is how to access the users returned from the getUsers() function after one second. One classical approach is to use the callback.


//=========================================================

function getUsers(callback) {
    let users = [];
    setTimeout(()=>{
      callback([
            {username: "Ravi kant", userId: 101, email: "Ravikant@gmail.com"},
            {username: "Rohit kumar", userId: 102, email: "Rohit@gmail.com"},
            {username: "Bhavna", userId: 103, email: "Bhavan@gmail.com"}
        ])
    }, 1000)
    
    return users;
}

function findUser(userId, callback) {
    getUsers((users) => {
        const user = users.find((user) => user.userId === userId );
        callback(user);
    });  
}

findUser(102, console.log);

//If the number of functions grows, you may end up with the callback hell problem. To resolve this, JavaScript comes up with the concept of promises.
