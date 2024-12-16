// Copy- Copying a variable means that you are copying the values of original variable into the new variable.

// Deep copy- A Deep copy means that all of the values are copid and disconnected from the original variable.

// Shallow copy- A Shallow copy means that all of the values are copied but a certain sub-(values) are still
// connected to the original variable.

// To really understand copying, You have to get into how javascript stores variables.

// 1. PRIMITIVE DATATYPES
// Number- eg. 1
// String- eg. 'Hello'
// Boolean - eg. true
// undefined
// null

// When you create these values, they are tightly coupled to the variable they are assigned to. So basically, while
// copying primitive datatypes in javascript, you don't have to worry about copying. When you make a copy, it will
// be a real copy.

let a = 5;
let b = a; // copy
b = 6;

console.log(a); // 5
console.log(b) // 6

// When you reassign a new value to b, only the value of b changes to 6, but the value of a remains same as 5.

// 2. Composite data types- Objects and Arrays
// In case of Arrays or objects, the values are stored once when those are instantiated. And assiging a variable
// just creates a pointer(reference) that points to the stored value.

const person1 = {
    name: 'Ravi kant',
    age: 27,
    gender: 'Male'
}

const person2 = person1 // trying to make a copy

// Here when we try to change the nested value of person2, the value of person1 also changes. Since both 
// person2 and person1 pointing to the same stored value. 

person2.age = 25;
console.log(person1); // { name: 'Ravi kant', age: 25, gender: 'Male' } 
console.log(person2); // { name: 'Ravi kant', age: 25, gender: 'Male' }

// So the above is the example of shallow copy

// OBJECTS
// There are multiple ways to make copy of objects
// 1. Spread operator- It spreads out all the values of an object into new object.

const emp = {
    name: 'Ravi kant',
    salary: 100,
    age: 27
}

const emp2 = { ...emp };

emp2.name = 'Aman kumar';
emp2.salary = 200;
emp2.age = 25;

console.log(emp); // { name: 'Ravi kant', salary: 100, age: 27 }
console.log(emp2); // { name: 'Aman kumar', salary: 200, age: 25 }

// 2. Object.assign()
// The first argument in the Object.assign() gets modified and returned. So make sure 
// you pass object to copy as the second argument. Normally, you would pass an empty 
// object as the first argument to copy in the values;

const car1 = {
    name: 'Hyundai',
    price: 400,
    engine: 'petrol'
}

const car2 = Object.assign({}, car1);

car2.name = 'Toyota';
car2.price = 800;
car2.engine = 'Diesal';

console.log(car1); // { name: 'Hyundai', price: 400, engine: 'petrol' }
console.log(car2); // { name: 'Toyota', price: 800, engine: 'Diesal' }

// Copying the simple objects without nested structure is okay. But when copying nested objects
// using the above two methods doesn't create perfect copy.

// PITFALL: NESTED OBJECTS
const variable1 = {
    foods: {
        dinner: 'pasta'
    },
    price: 20
}

// const variable2 = { ...variable1 };
const variable2 = Object.assign({}, variable1);
variable2.foods.dinner = 'soup';
variable2.price = 30;

console.log(variable1); // { foods: { dinner: 'soup' }, price: 20 }
console.log(variable2); // { foods: { dinner: 'soup' }, price: 30 }

// As you can see here, changing the value of dinner has changed its value in both variable1 and variable2.
// In conclusion, the above two methods don't make a deep copy in case of nested objects.

// WORK AROUND- spreading each nested objects manually. But the problem is, often we don't know
// level of nesting. In that case, it becomes very tedious to make a deep copy.

// MAKING DEEP COPIES WITHOUT THINKING
const val1 = {
    foods: {
        dinner: 'pasta',
    },
    price: 20,
}

const val2 = JSON.parse(JSON.stringify(val1));
val2.foods.dinner = 'soup';
val2.price = 30;

console.log(val1); // { foods: { dinner: 'pasta' }, price: 20 }
console.log(val2); // { foods: { dinner: 'soup' }, price: 30 }