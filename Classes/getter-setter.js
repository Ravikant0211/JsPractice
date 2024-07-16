// class Employ {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const emp1 = new Employ('Sarad Shukla');
// console.log(emp1.name); // Sarad Shukla

// Sometimes, you don't want properties to be accessed like the following-
// 'emp1.name'

// To do that you may come up with pair of methods that manipulate the 'name' property.
// class Employ {
//     constructor(name) {
//         this.setName(name);
//     }

//     getName() {
//         return this.name;
//     }

//     setName(newName) {
//         newName = newName.trim();
//         if (newName === '') {
//             throw 'name can not be empty'
//         }
//         this.name = newName;
//     }
// }

// let employ1 = new Employ('Jane Doe');
// console.log(employ1); // Employ { name: 'Jane Doe' }

// employ1.setName('Jane Smith');
// console.log(employ1); // Employ { name: 'Jane Smith' }


// The getName() and setName() methods are known as getter and setter in other programming languages such as
// Java and C++.
// ES6 provides a specific syntax for defining the getter and setter using the get and set keywords. 
// For example:

class Employ {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name can not be empty';
        }
        this._name = newName;
    }
}

// NOTE- 'name' property is changed to '_name' to avoid name collision with getter and setter.
const employ = new Employ('Jane Doe');
console.log(employ.name); // Jane Doe

employ.name = 'Jane Smith';
console.log(employ.name); // Jane Smith

// To call the getter, we use the following syntax-
let name = employ.name;

// To call the setter, we use the following syntax- 
employ.name = 'Jane Smith';