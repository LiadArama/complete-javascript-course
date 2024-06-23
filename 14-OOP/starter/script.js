'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// //Output: Person {firstName: "Jonas", birthYear: 1991}

// // The "this" keyword is set to the new empty object that is created when the function is called with the "new" keyword - basically the "this" keyword is the current object that is being constructed

// // 1. New empty object {} is created
// // 2. Function is called, this = the empty project we just created {}
// // 3. {} linked to prototype
// // 4. Function automatically returns empty object {}

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// console.log(Person.prototype);
// //Output: {calcAge: ƒ, constructor: ƒ}

// jonas.calcAge();
// //Output: 46

// Person.prototype.species = 'Homo Sapiens';
// console.log(Person.prototype);
// // Output: {calcAge: ƒ, species: 'Homo Sapiens', constructor: ƒ}
// console.log(jonas.species);
// // Output: Homo Sapiens

// console.log(jonas.hasOwnProperty('species')); // false
// console.log(jonas.hasOwnProperty('firstName')); // true

// console.log(jonas.__proto__);
// // Output: {calcAge: ƒ, species: 'Homo Sapiens', constructor: ƒ}
// console.log();

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return this.calcAge();
  }

  set setFirstName(firstName) {
    this.firstName = firstName;
  }
}

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movemnet) {
    this.movements.push(movemnet);
  },
};
console.log(account.latest);
// Output: 300

account.latest = 50;
console.log(account.movements);
// Output: [200, 530, 120, 300, 50]

const person = new Person('jonas', 2020);
person.age;
// Output: 17
person.setFirstName = 'new jonas name';
console.log(person.firstName);
// Output: new jonas name
