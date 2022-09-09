const inputBox = document.querySelector("form input[type='text']");
const todo_container = document.getElementById("todo-container");

document.getElementById("form")
        .addEventListener('submit', (e) => {
            e.preventDefault();
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${inputBox.value}</span>
                <button id="remove">Remove</button>
            `;

            todo_container.appendChild(li);
            inputBox.value = '';
        });


todo_container.addEventListener('click', event => {
    if(event.target.id === "remove") {
        const target = event.target.parentNode;
        target.remove();
    }
});