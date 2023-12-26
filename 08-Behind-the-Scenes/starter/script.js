'use strict';

// var firstName = 'Matilda';

// const liadObject = {
//     firstName: "Liad",
//     year: 2023,
//     calcAge: function () {
//         console.log(2037 - this.year)
//         const isMillenial = () => {
//             console.log(this.year >= 1981 && this.year <= 1996); // Looks up the scope chains (lexical binding) and uses the parent (calcAge) this keyword, which is the liadObject we need.
//         }
//         isMillenial();
//     },

//     greet: () => console.log(`Hi, ${this.firstName}`)
// }


// liadObject.calcAge();
// // Output: false 
// // Because year = 2023 and is not matching the conditions 





// liadObject.greet();
// // Output: Hi, undefined

// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }

// addExpr(2, 5);
// // Output: Arguments(2) [2, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// addExpr(2, 5, 8, 12);
// // Output: Arguments(4) [2, 5, 8, 12, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// addArrow(2, 5);
// // Output: Uncaught ReferenceError: arguments is not defined

// addArrow(2, 5, 8);
// // Output: Uncaught ReferenceError: arguments is not defined


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Liad',
    age: 30
}

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);


const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
}

const marriedJessica = jessica2;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica2);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
}

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica);
console.log('After marriage:', jessicaCopy);
// Output: Before Marriage last name: Williams, After marriage last name: Davis'

// But the family array is the same for both objects, because Object.assign() only creates a shallow copy of the object, and not a deep clone.
