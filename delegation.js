// EVENT DELEGATION:- 
// Event delegation is a concept of handeling events efficiently. Instead of adding an event
// listener to each and every similar element, we can add an event listener to the parent element
// and call an event on a particular target using the .target property of the event object.

const list = document.getElementById("ul-list");

const listHandler = (e) => {
    console.log(e.target.textContent);
}

// for(let i = 0; i < 5; i++) {
//     const element = document.createElement("li");
//     element.textContent = `This is ${i + 1}th li list`;
//     element.addEventListener("click", listHandler);
//     list.appendChild(element);
// }



// Here delegation is happening
// Now we have lost the access to individual li element. so to resolve this
// issue we use a technique called event delegation
// The event object has a special property called .target which will help access
// the individual li element we click on.

// STEPS:- When we click on a particular <li> element-
// 1. <ul> element is clicked
// 2. The event goes in the capturing phase
// 3. It reaches the target (<li> in our case)
// 4. It switches to the bubbling phase.
// 5. When it hits the <ul> element, it runs the event listener.
// 6. Inside the listener function event.target represents the element that was clicked.
// 7. In this way event.target provides us access to the <li> element that wat clicked.
//    and in this way event delegation works.

for(let i = 0; i < 5; i++) {
    const element = document.createElement("li");
    element.textContent = `This is ${i + 1}th li list`;
    list.appendChild(element);
}
list.addEventListener("click", listHandler);