// Promise:
let success = true;
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success){
                resolve([
                    { username: 'john', email: 'john@test.com' },
                    { username: 'jane', email: 'jane@test.com' },
                ]);
            } else {
                reject("Failed to access users");
            }
        }, 1000);
    });
}

function onFulfilled(users) {
    console.log(users);
}

function onRejected(error) {
    console.log(error);
}

getUser().then(
    (users) => {console.log(users)},
    (error) => {console.log(error)}
)
// getUser() .then(
//     (users) => {console.log(users)}
//     )
//     .catch(
//         (error) => {console.log(error)}
//     )
//     .finally(()=>{
//         anyFunction();
//     })