class Circle {
    constructor(radius = 0) {
        this.radius = radius;
        this.pi = 3.14;
    }

    getArea() {
        return this.pi * Math.pow(this.radius, 2);
    }

    getParemeter() {
        return 2 * this.pi * this.radius;
    }
}

const circle = new Circle(5);
console.log(circle.getArea().toFixed(2));
console.log(circle.getParemeter().toFixed(2));