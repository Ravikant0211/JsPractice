import { message } from "./message.js";

const h1 = document.createElement("h1");
h1.textContent = message;

document.body.append(h1);

// ES6 Modules:
// ES6 module is just a javaScript file which executes in strict mode. That means
// the functions or the variables declared inside a module will not be automatically
// added to the global scope.

// to use the functions and variables of a module, first, we need to export them from the module
// and then import them whereever we want to use them.
