// Generally, A class is a blueprint for creating new similar Objects. If you want to create a new class that reuses
// the functionality of an existing class, you need to create the new class that extends the existing class.
// This is called classical inheritance.

// JavaScript does not use classical inheritance. But, it uses prototypal inheritance.
// In prototypal inheritance, one object inherits properties from another object via prototype linkage.

// By default, the JavaScript engine provides you with a built-in Object() function and an anonymous object that can
// be referenced by the Object.prototype

const person = {
  name: "John Doe",
  greet: function () {
    return "Hi, my name is " + this.name;
  },
};

// const teacher = {
//   teach: function (subject = "JavaScript") {
//     return `I can teach ${subject}`;
//   },
// };

//The person object has a link to the anonymous object (Object.prototype) referenced by the Object() function. The [[Prototype]] represents the linkage.

//To access the prototype of the person object, you can use the __proto__ property as follows:
// console.log(person.__proto__);
// console.log(person.__proto__ === Object.prototype); // true
// console.log(person.__proto__ === teacher.__proto__); // true

// **NOTE: IF YOU WANT THE TEACHER OBJECT TO ACCESS ALL THE PROPERTIES OF PERSON OBJECT. SET THE PROTOTYPE OF TEACHER OBJECT TO THE PERSON OBJECT.

// teacher.__proto__ = person;
// console.log(teacher.greet());
// console.log(teacher.teach("Computer Science"));

//-------------------------------------------------------------

// ES5 provided a standard way to work with prototypal inheritance by using the Object.create() method.

const teacher = Object.create(person, {
  name: { value: "Ravi kant" },
  teach: {
    value: function (subject = "JavaScript") {
      return `I can teach ${subject}`;
    },
  },
});

console.log(teacher.greet());
console.log(teacher.teach("Computer Science"));

// **Note that now you should use the newer ES6 'class' and 'extends' keyword to implement inheritance, which is much simpler.
