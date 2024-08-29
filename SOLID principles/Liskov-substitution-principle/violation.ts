// class Bird {
//     makeSound(): void {
//         console.log('Birds are making sound');
//     }

//     fly(): void {
//         console.log('Birds are flying');
//     }
// }

// class Sparrow extends Bird {
//     fly(): void {
//         console.log('Sparrow is flying');
//     }

//     makeSound(): void {
//         console.log('Sparrow is making sound');
//     }
// }

// class Panguin extends Bird {
//     fly(): void {
//         throw new Error('Panguin can not fly');
//     }

//     makeSound(): void {
//         console.log('Panguin making sound');
//     }
// }

// const bird = new Bird();
// bird.fly(); // Sparrow is flying

// This is violation of LCP principle since we are not able to replace superclass 'Bird' with 
// the subclass 'Panguin'
// const panguin = new Panguin();
// panguin.fly();  // Error: Panguin can not fly