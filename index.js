// Import stylesheets
import './style.css';

// 3 Ways to Check if a Variable is Defined in JavaScript
// Dmitri Pavlutin, Posted November 17, 2020

// A variable is defined when it has been declared in the current scope using a declaration statement.

// defined vs undefined
const name = 'Andrew'; // defined
let result; // defined

window.message = 'Hi!';
message; // message is defined

// salary;    // after uncommenting you see: salary is not defined
// lastName;  // after uncommenting you see: lastName is not defined

// initialized vs uninitialized;

// A variable is initialized when the declared variable has been assigned with an initial value.
let num = 7; // num is initialized;
let firstName;
firstName = 'Gurung'; // firstName is initialized

// a variable is uninitialized when the declared variable has not been assigned with an initial value.
let score; // score is uninitialized

let city; // city is uninitialized

// The value of an uninitialized variable is always undefined:

// Checking if a Variable is Defined in JavaScript

// Using typeof
console.log(typeof score); // undefined

console.log(typeof num); // number
console.log(typeof firstName); // string

let isEaten = true;
console.log(typeof isEaten); // boolean;

console.log(typeof buzz); // undefined; doesn't throw reference error

// Be aware that typeof buzz === 'undefined' evaluates to true when buzz is not defined, but also when defined and uninitialized. All because accessing a defined but uninitialized variable evaluates to undefined.

if (typeof buzz === 'undefined') {
  console.log('"buzz" is not defined OR defined but uninitialized');
} else {
  console.log('"buzz" is defined AND initialized');
}

// Of course, if the variable is defined and has a value, typeof fuzz === 'undefined' evaluates to false:

const fuzz = 100;
console.log(typeof fuzz === 'undefined'); // false
