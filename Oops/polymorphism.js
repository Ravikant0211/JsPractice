// Example of Dynamic Polymorphism (Method overriding)
class Animal {
    makeNoise() {
        console.log('Animal is making noise');
    }
}

class Lion extends Animal {
    makeNoise() { // method overriding
        console.log('Lion is roaring');
    }
}

const animal = new Lion();
animal.makeNoise();


// example of Static Polymorphism (Method overlaoding)
class Sum {
    addition (a, b, c = 0) {
        return a + b + c;
    }
}

const sum = new Sum();
console.log(sum.addition(5, 5));
console.log(sum.addition(5, 5, 5));


class Area {
    calculateArea(length, breadth = -1) {
        if (breadth != -1) {
            return length * breadth;
        } else {
            return length * length;
        }
    }
}

let area = new Area;
console.log('Area of rectangle = ' + area.calculateArea(3, 4));
console.log('Area of square = ' + area.calculateArea(6));