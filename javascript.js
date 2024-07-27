//What is JavaScript?
//JavaScript is a high-level, dynamic, and interpreted programming language that is primarily used for client-side.


/* 
 What are the data types in JavaScript?
 JavaScript supports multiple data types, which are devided into primitive and non-primitive types. The primitive data types include:Number,String,Boolean,Null,Undefined,Symbol.

1. Number
The number type in JavaScript contains both integer and floating-point numbers. Besides regular numbers, there are also some special numbers: Infinity, -Infinity, and NaN. Infinity represents the mathematical infinity, NaN denotes a computational error.

let num = 2; // Integer
let num2 = 1.3; // Floating point number
let num3 = Infinity; // Infinity
let num4 = 'something here too'/2; // NaN

2. String
A String in JavaScript is a series of characters that are surrounded by quotes. There are three types of quotes in JavaScript: single quotes, double quotes, and backticks. Backticks provide extra functionality, allowing you to embed variables inside them.

let str = "Hello There";
let str2 = 'Single quotes works fine';
let phrase = `can embed ${someVariable}`;


3. Boolean
The boolean type has only two values: true and false. This data type is used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

let isCoding = true; // yes
let isOld = false;      // no

4. Null
A special value that represent the absence of any object value.

let age = null;

5. Undefined
Undefined makes its own type. The meaning of undefined is ‘value is not assigned’.

let x;
console.log(x);  // undefined

6. Symbol
In JavaScript, a Symbol is a primitive data type introduced in ECMAScript 2015 (ES6). It is a unique and immutable value that can be used as a property key in an object.

The non-primitive types include Object, Array, and Function.

Note that BigInt is also a primitive type in JavaScript, which is used to represent big integers more accurately.

 */

/*
What is the difference between null and undefined?
Undefined

undefined is a type that represents an uninitialized or non-existent variable. It is the default value of a variable that has not been assigned a value.
let x;
console.log(x); // undefined

Null

null, on the other hand, is a value that represents the absence of any object value. It is a deliberate assignment of "no value" to a variable.
let x = null;
console.log(x); // null


*/


/*
What is the DOM in JavaScript?
The Document Object Model (DOM) is a programming interface for HTML and XML documents. in easy language by the help of dom javascript access the values and properties of html and xml and also can manupilate.
By understanding the DOM, developers can create dynamic, interactive web pages that respond to user input and provide a rich user experience.

// Get the element with the id "myElement"
const myElement = document.getElementById('myElement');

// Change the text content of the element
myElement.innerHTML = 'New text content!';

*/


