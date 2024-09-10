// Ninja game
function Ninja (name) {
    this.name = name;
    this.points = 100;
}

Ninja.prototype.punch = function (otherNinja) {
    if (this.points > 0 && otherNinja.points > 0) {
        otherNinja.points -= 20;
        return `${otherNinja.name}'s points are ${otherNinja.points}`;
    } else {
        return `Can't punch ${otherNinja.name}`;
    }
}

Ninja.prototype.kick = function (otherNinja) {
    if (this.points > 0 && otherNinja.points > 0) {
        otherNinja.points -= 50;
        return `${otherNinja.name}'s points are ${otherNinja.points}`;
    } else {
        return `Can't kick ${otherNinja.name}`;
    }
}

var ninja1 = new Ninja('Ninja1')
var ninja2 = new Ninja('Ninja2')

console.log(ninja1.kick(ninja2))
console.log(ninja2.punch(ninja1))
console.log(ninja1.kick(ninja2))
console.log(ninja1.punch(ninja2)) 
console.log(ninja2.kick(ninja1))

// Ninja2's points are 50
// Ninja1's points are 80
// Ninja2's points are 0 
// Can't punch Ninja2    
// Can't kick Ninja1 