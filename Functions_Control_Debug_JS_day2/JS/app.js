// Day2 in Javascript

// Hoisting in js

// 1. Variable Hoisting
/*
console.log('before intialization:', x); // undefined
var x = 5;
console.log('After intialization: ', x); // 5

// actual scenario
var y; // hoisted variable 
console.log('before intialization:', y); // undefined
y = 5;
console.log('After intialization: ', y); // 
*/

// 2. Function Hoisting
/*
greet(); // Hello World
function greet() {
    console.log('Hello World from Greet function');
}
*/

// 3. Function Expression Hoisting
/*
greet2(); // TypeError: greet2 is not a function
const greet2 = function() {
    console.log('Hello World from Greet2 function');
}
*/



// JS Functions
/*
// 1. Function Declaration
function greet() { // this will be hoisted
    console.log('Hello World');
}

// 2. Function Expression
const greet2 = function() {
    console.log('Hello World');
}
// greet2(); // how to call a function expression

// 3. Arrow Function
const greet3 = () => {
    console.log('Hello World');
}

// 4. Arrow Function with one line
const greet4 = () => console.log('Hello World');

// 5. Arrow Function with one argument
const greet5 = name => console.log(`Hello ${name}`);

// 6. Arrow Function with multiple arguments
const greet6 = (name, time) => console.log(`Good ${time} ${name}`);

// 7. Arrow Function with return statement
const greet7 = (name, time) => {
    return `Good ${time} ${name}`;
}
*/

// --------------------------------------------


// Javascript Data structures

// 1. Array
// 1. Array Declaration
let arr1 = [1, 2, 3, 4, 5];

// 2. Array Declaration with new keyword
let arr2 = new Array(1, 2, 3, 4, 5);

// 3. Array Declaration with size
let arr3 = new Array(5); // [empty x 5]

// 4. Array Declaration with size and fill
let arr4 = new Array(5).fill(0); // [0, 0, 0, 0, 0]

// Arrays methods
// 1. push() - add element at the end
// 2. pop() - remove element from the end
// 3. shift() - remove element from the start
// 4. unshift() - add element at the start
// 5. splice() - add or remove element at any position
// 6. slice() - copy elements of array
// 7. concat() - merge two arrays
// 8. reverse() - reverse the array

// 2. Objects - (custom data type)

// 1. Object Declaration
let obj1 = { name: 'John', age: 25 };

// 2. Object Declaration with new keyword
let obj2 = new Object({ name: 'John', age: 25 });

// 3. Object Declaration with new keyword
let obj3 = new Object();
obj3.name = 'John';
obj3.age = 25;

// 4. Object Declaration with new keyword
let obj4 = new Object();
obj4['name'] = 'John';
obj4['age'] = 25;

// 5. Object Declaration with new keyword
let obj5 = new Object();
obj5[0] = 'John';
obj5[1] = 25;

// 6. Object Declaration with new keyword
let obj6 = new Object();
obj6['0'] = 'John';
obj6['1'] = 25;



// 3. Date
let date = new Date();

// 4. RegExp
let reg = new RegExp(/a-zA-Z0-9/gi);
// if(reg.test('Hello')) {} true / false

// 5. Error
let err = new Error('Error Message');

// 6. Symbol
// let sym = new Symbol('symbol');

// let syma = new Symbol('a');
// let symb = new Symbol('a');

// if(syma === symb) {
//     let x = "hello";
//     console.log('Same');
// } else {
//     console.log('Different');
// }

// 7. String

// 1. String Declaration
let str1 = 'Hello World';

// 2. String Declaration with new keyword
let str2 = new String('Hello World');

// 3. String Declaration with new keyword
let str3 = new String();
str3 = 'Hello World';

// const str = 'Hello 123';
// str = "world";

// valid 
const obj = {name: 'John'};
obj.name = 'Doe';

// --------------------------------------------

// set
// example of set
// let set = new Set();
// set.add(1);

// map
// example of map
// let map = new Map();
// map.set('name', 'John');
// map.get('name') // 'John'

// weakset
// example of weakset
// let weakset = new WeakSet();
// weakset.add({name: 'John'});
// weakset.add({name: 'John'});


// weakmap
// example of weakmap
// let weakmap = new WeakMap();
// weakmap.set({name: 'John'}, 1);
// weakmap.set({name: 'John'}, 2);
// weakmap.get({name: 'John'}); // undefined


// Difference Between Map and WeakMap
// 1. In Map, keys are strong references, which means even if the key is not used, it will not be garbage collected.
// 2. In WeakMap, keys are weak references, which means if the key is not used, it will be garbage collected.
// 3. WeakMap is not iterable.
// you cannot use forEach, keys, values, entries, etc. on WeakMap.
// 4. WeakMap does not have size property.


// Classes in JS

class Employee {
    name; // public accessable 
    age; // public accessable

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }   
}

let emp = new Employee('John', 25);
emp.greet();

Object.prototype.greet2 = function() {  // injected a method in the Objects prototype
    console.log(`Hello ${this.name} from greet2`);
}

// Inheritance in JS
class Manager extends Employee {
    department;

    constructor(name, age, department) {
        super(name, age); // invoking parent class constructor
        this.department = department;
    }

    // overriding it
    greet() {
        console.log(`Hello ${this.name} from ${this.department}`);
    }
}

let manager = new Manager('XYZ', 25, 'IT');
manager.greet();



let manager2 = new Manager('ABC', 25, 'IT');
manager2.greet2();


// -------------------------------------------- 


// Try catch in javascript

try {
    console.log('Hello');
    console.log('World');
    throw new Error('Error Message'); // manually throwing an error
    console.log('After Error');
} catch(err) {
    console.log(err);
} finally {
    console.log('Finally Block');
}

// --------------------------------------------

// this keyword in javascript

// 1. Global Context
console.log(this); // window

// 2. Function Context
function test() {
    console.log(this); // window
}
test();

// 3. Object Context
let obj234 = {
    name: 'John',
    greet: function() {
        console.log(this); // obj
    }
}
obj234.greet();

// 4. Event Context
// document.getElementById('btn').addEventListener('click', function() {
//     console.log(this); // button
// });


// 5. Arrow Function Context
let objError = {
    name: 'John',
    greet: () => {
        console.log(this); // window
    }
}

objError.greet();
// conclusion: arrow function does not have its own this keyword, it uses the parent context this keyword

// --------------------------------------------