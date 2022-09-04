function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}

let hi = greeting();
hi(); // it can still access the message variable

