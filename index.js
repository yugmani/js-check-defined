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

// Using try/catch

// When accessing a not defined variable, JavaScript throws a reference error

// So… what about wrapping the checked variable in a try block, and try to catch the reference error? If the error is caught, that would mean that the variable is not defined

// let myVar;
// myVar = 500;

try {
  myVar;
  console.log('myVar is defined');
} catch (e) {
  e;
  console.log(e);
  console.log('myVar is not defined');
}

// Output:
// ReferenceError {}
// myVar is not defined

// Note: uncomment line 66 and 67 and see the output.

// Compared to typeof approach, the try/catch is more precise because it determines solely if the variable is not defined, despite being initialized or uninitialized.

// Using window.hasOwnProperty()

// Each global variable is stored as a property on the global object (window in a browser environment, global in NodeJS).
// You can use this idea to determine if the global variable myGlobalVar is defined: simply check the global object for corresponding property existence: window.hasOwnProperty('myGlobalVar').

// For example, here’s how to check if the browser defines an IntersectionObserver variable:

if (window.hasOwnProperty('IntersectionObserver')) {
  console.log('The browser provides IntersectionObserver');
} else {
  console.log("The browser doesn't support IntersectionObserver");
}

// var variables and function declarations, when used in the outermost scope (aka global scope), do create properties on the global object:
var sum = 111;
function sayHello() {
  return 'Hello!';
}

var isSum = window.hasOwnProperty(sum);
console.log(isSum); // true? false

console.log(window.hasOwnProperty('sayHello')); // true ? false (stackblitz result)

// However, be aware that const and let variables, as well as class declarations, do not create properties on the global object:
const temp = 23;
let greet = 'Hello!';

class NewClass {}

console.log(window.hasOwnProperty('temp')); // false
console.log(window.hasOwnProperty('greet')); // false
console.log(window.hasOwnProperty('NewClass')); // false
