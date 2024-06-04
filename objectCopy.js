// There are 3 ways to copy an object in javascript
// 1. using spread operator (...)
// 2. using Object.assign({}, object) method
// 3. using JSON.parse() and JSON.stringify() methods

// let person = {
//     firstname: 'ravi',
//     lastname: 'kant'
// }

// let p1 = { ...person }; // creates shallow copy

// let p2 = Object.assign({}, person); // creates shallow copy

// let p3 = JSON.parse(JSON.stringify(person)); // creates deep copy

// ------------------------------------------------------------------

// Direct Assignment
// A variable is used to store the reference or primitive values
// in the case of primitive, the value of the source primitive also changed on changing
// the value of asignee variable.
// let count = 1;
// let newCount = count;
// newCount = 2;
// console.log(count)// 2 

//  While if you use the assignment operator for a reference value, it will not copy the value.
//  Instead, both variables will reference the same object in the memory:
// let p = {
//     firstname: 'Ravi',
//     lastname: 'kant'
// }
// const newP = p;
// newP.firstname = 'Shashi';
// console.log(p); // { firstname: 'Shashi', lastname: 'kant' }

// ------------------------------------------------------------------------------------

// Shallow vs Deep copy

// Example of Shallow Copy-
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     }
// };
// const copiedPerson = Object.assign({}, person);
// const copiedPerson = {...person};

// copiedPerson.firstName = 'Jane'; // disconnected

// copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
// copiedPerson.address.city = 'Mountain View'; // connected

// console.log(person);
// {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//       street: 'Amphitheatre Parkway',
//       city: 'Mountain View',
//       state: 'CA',
//       country: 'USA'
//     }
// }

// console.log(copiedPerson);
// {
//   firstName: 'Jane',
//   lastName: 'Doe',
//   address: {
//     street: 'Amphitheatre Parkway',
//     city: 'Mountain View',
//     state: 'CA',
//     country: 'USA'
//   }
// }

//---------------------------------------------------------------------------
// Example of Deep Copy
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway';
copiedPerson.address.city = 'Mountain View';
console.log(person);
// {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//       street: 'North 1st street',
//       city: 'San Jose',
//       state: 'CA',
//       country: 'USA'
//     }
// }
