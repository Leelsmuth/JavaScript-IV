/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

TASK 1
function Person(name, age) {
  this.name = name;
  this.age = Number(age);
  this.greet = `${this.name} ${this.age}`;
  this.eatEdible = 'I eat I eat I eat...Muah HaHa';
  this.stomach = [];
}
Person.prototype.eating = function (food) {
  return this.stomach.push(food);
}

Person.prototype.pooping = function () {
  return this.stomach= [];
}

var femi = new Person('Oluwafemi', '29');
femi.eating('eba');
console.log(femi.stomach)
femi.eating('Rice');
console.log(femi.stomach)
femi.pooping();
console.log(femi.stomach)


TASK 2.
function Car (modelName, carMake) {
  this.model = modelName;
  this.make = carMake;
  this.drive = true;
  this.crash = true;
  this.repair = true;
  this.odometer = 0;
}
Car.prototype.driveDistance = function () {
  return this.odometer += 50;
}
Car.prototype.carCrashed = function () {
  if (this.crash === true)  {
    console.log(`I crashed at ${this.driveDistance()} miles!`);
    return this.drive = false
  }
  return this.drive = true;
}
Car.prototype.carRepaired = function () {
  if (this.repair === true) {
    console.log(`You have fixed your ${this.model}. Take it for a spin!!!`)
    return this.drive;
  }
  return this.drive = false;
}
var vehicle = new Car('Toyota', 'Sedan');

TASK 3

function Baby (name, age,) {
  Person.call(this, name, age);
  this.play = `a-ga, a-ba, a-da`;
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.playBaby = function () {
  return `Baby likes to play.. Baby likes to play`;
}
var baby = new Baby('Jamie', 1, 'trains');

TASK 4

function Life(name, placeOfBirth, death) {
  this.name = name;
  this.place = placeOfBirth;
  this.death = Number(death);
  this.college = true;
  this.goodLife = `${this.name}, I guess you lived a good Life.`;
  this.justOK = `${this.name}, life did nt turn out how you planned it. At least you still enjoyed your old age. I guess you can't complain too much`
  this.notJustOk = `${this.name}, Hmmmmmmmmmmmmmmmm`
}
Life.prototype.checkLife = function () {
  if (this.death < 50) {
    return this.notJustOk;
  } else if (this.death < 70 ) {
    return this.justOK;
  } else {
    return this.goodLife;
  }  
}

var james = new Life('James', 'Nigeria', '80')


2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// TASK 1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = Number(age);
        this.eat = name.eat;
        this.stomach = [];
    }
    greet() {
        return `${this.name} ${this.age}`;
    }
    eating(food) {
        return this.stomach.push(food);
    }
    pooping() {
        return this.stomach= [];
    }
}

var femi = new Person('Oluwafemi', '29');

femi.eating('eba');
console.log(femi.stomach)
femi.eating('Rice');
console.log(femi.stomach)
femi.pooping();
console.log(femi.stomach)

// TASK 2

class Car {
    constructor(modelName, carMake) {
        this.model = modelName;
        this.make = carMake;
        this.drive = true;
        this.crash = true;
        this.repair = true;
        this.odometer = 0;
        this.distance = Number();
    }
    driveDistance() {
        return this.odometer += this.distance;
    }
    carCrashed() {
        if (this.crash === true)  {
            console.log(`I crashed at ${this.driveDistance()} miles!`);
            return this.drive = false
        }
        return this.drive = true;
    }
    carRepaired() {
        if (this.repair === true) {
            console.log(`You have fixed your ${this.model}. Take it for a spin!!!`)
            return this.drive;
        }
        return this.drive = false;
    }
}

var vehicle = new Car('Toyota', 'Sedan');

// TASK 3

class Baby extends Person {
    constructor(name, age, play) {
        super(name, age);
        this.play = play;
    }
    playBaby() {
        return `Baby likes to play.. Baby likes to play`;
    }
}

  var baby = new Baby('Jamie', 1, 'trains');

//   TASK 4

class Life {
    constructor(name, placeOfBirth, death) {
        this.name = name;
        this.place = placeOfBirth;
        this.death = Number(death);
        this.college = true;
        this.goodLife = `${this.name}, I guess you lived a good Life.`;
        this.justOK = `${this.name}, life did nt turn out how you planned it. At least you still enjoyed your old age. I guess you can't complain too much`
        this.notJustOk = `${this.name}, Hmmmmmmmmmmmmmmmm`
    }
    checkLife() {
        if (this.death < 50) {
            return this.notJustOk;
          } else if (this.death < 70 ) {
            return this.justOK;
          } else {
        return this.goodLife;
        }  
    }
     
}

var james = new Life('James', 'Nigeria', '80')