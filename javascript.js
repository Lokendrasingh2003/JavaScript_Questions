//What is JavaScript?
//JavaScript is a high-level, dynamic, and interpreted programming language that is primarily used for client-side.


/* 
------------------------------------------------------------------------------
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
----------------------------------------------------------------------------
 */

/*
-----------------------------------------------------------------------------------------
What is the difference between null and undefined?
Undefined

undefined is a type that represents an uninitialized or non-existent variable. It is the default value of a variable that has not been assigned a value.
let x;
console.log(x); // undefined

Null

null, on the other hand, is a value that represents the absence of any object value. It is a deliberate assignment of "no value" to a variable.
let x = null;
console.log(x); // null
-------------------------------------------------------------------------------------

*/


/*
--------------------------------------------------------------------------------------
What is the DOM in JavaScript?
The Document Object Model (DOM) is a programming interface for HTML and XML documents. in easy language by the help of dom javascript access the values and properties of html and xml and also can manupilate.
By understanding the DOM, developers can create dynamic, interactive web pages that respond to user input and provide a rich user experience.

// Get the element with the id "myElement"
const myElement = document.getElementById('myElement');

// Change the text content of the element
myElement.innerHTML = 'New text content!';
------------------------------------------------------------------------------------------
*/



/* 
-------------------------------------------------------------------------------------
What is an event in JavaScript?

Events in JavaScript

In simple terms, an event in JavaScript is like a notification that something has happened on a web page. It's like a message that says, "Hey, something just happened! Do something about it!"

What triggers an event?

Events are triggered by user interactions, such as:

Clicking a button: When you click a button, an event is triggered.
Typing in a form: When you type something in a form field, an event is triggered.
Hovering over an image: When you move your mouse over an image, an event is triggered.
Loading a page: When a web page finishes loading, an event is triggered.
What happens when an event is triggered?

When an event is triggered, JavaScript code can be executed in response to that event. This code is called an event handler or event listener.

Think of it like a recipe:

Event: Something happens on the web page (e.g., a button is clicked).
Event handler: JavaScript code is executed in response to the event (e.g., a message is displayed).
Example code

Here's an example of an event handler that displays a message when a button is clicked:
// Get the button element
const button = document.getElementById('myButton');

// Add an event listener to the button
button.addEventListener('click', function() {
  // Display a message when the button is clicked
  alert('Button clicked!');
});

Common events

Here are some common events in JavaScript:

click: Triggered when an element is clicked.
hover: Triggered when an element is hovered over.
submit: Triggered when a form is submitted.
load: Triggered when a page finishes loading.
scroll: Triggered when a page is scrolled.
Conclusion

In summary, events in JavaScript are like notifications that something has happened on a web page. By using event handlers, you can write code that responds to these events and creates interactive web pages.
-----------------------------------------------------------------------------

*/


/* 
---------------------------------------------------------
What is an anonymous function in JavaScript?

Anonymous Functions in JavaScript

In simple terms, an anonymous function in JavaScript is a function that doesn't have a name. Yeah, you read that right - no name!

What's the purpose of an anonymous function?

Anonymous functions are used when you need to create a function that's only used once or temporarily. They're like a one-time-use function that's not meant to be reused.

How do you create an anonymous function?

You create an anonymous function by defining a function without giving it a name. Here's an example:
function() {
  console.log('Hello, world!');
}

How do you use an anonymous function?

Anonymous functions are often used as:

Event handlers: You can pass an anonymous function as an event handler to respond to an event, like a button click.
Callback functions: You can pass an anonymous function as a callback to a function that needs to execute some code after completing a task.
Immediately Invoked Function Expressions (IIFE): You can use an anonymous function as an IIFE, which is a function that runs immediately after it's defined.

Example code

Here's an example of using an anonymous function as an event handler:
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log('Button clicked!');
});

In this example, the anonymous function is defined inline and passed as an event handler to the addEventListener method.

Why use anonymous functions?

Anonymous functions are useful when:

You need a one-time-use function: You don't need to reuse the function, so there's no need to give it a name.
You want to keep code concise: Anonymous functions can make your code more concise and easier to read.
You need to create a closure: Anonymous functions can create a closure, which is a function that has access to its own scope and the outer scope.

--------------------------------------------------------

*/



/* 
----------------------------------------------------------
What are closures in JavaScript?
A closure is a special type of function in JavaScript that has access to its own scope and the scope of its parent functions.

here is an example of it.
function outer() {
  let secret = "I'm a secret!"; // Parent scope variable

  function inner() { // Closure function
    console.log(secret); // Access parent scope variable
  }

  return inner;
}

const myClosure = outer();
myClosure(); // Output: I'm a secret!
----------------------------------------------------------

*/



  /* 
  -------------------------------------------------------
  What is the difference between == and === in JavaScript?
  In JavaScript, there are two types of equality operators: == (loose equality) and === (strict equality). Understanding the difference between them is crucial for writing accurate and reliable code.

  Loose Equality (==)

  The == operator checks if the values of two variables are equal, but it doesn't care about the data type. 

  Strict Equality (===)

  The === operator checks if the values and data types of two variables are identical. 
  --------------------------------------------------------
  */


  /* 
  --------------------------------------------------------
  What is hoisting in JavaScript?
  Hoisting is a mechanism in JavaScript where variables and functions are moved to the top of their scope, regardless of where they're actually declared.

  Variables Hoisting-

  When you declare a variable using var, JavaScript "hoists" it to the top of its scope, but only the declaration, not the assignment. This means that the variable is moved to the top, but its value is still undefined until the assignment is reached.
  console.log(x); // Output: undefined
  var x = 10;


  Functions Hoisting-

  Functions, on the other hand, are hoisted entirely, including their declarations and definitions. This means that you can call a function before it's actually declared.

  Here's an example:
  hello(); // Output: "Hello, World!"

  function hello() {
    console.log("Hello, World!");
  }
------------------------------------------------------
  */


/* 
----------------------------------------------------------
What is the this keyword in JavaScript?
In simple terms, this refers to the current object that the code is being executed in.
here is the example.
const person = {
  name: "John",
  sayHello: function() {
    console.log(this); // Output: person object
    console.log(`Hello, my name is ${this.name}!`);
  }
};

person.sayHello();
----------------------------------------------------------
*/

/* 
----------------------------------------------------------
What are the different ways to define a function in JavaScript?
In JavaScript, there are several ways to define a function. Don't worry, I'll break them down in simple terms!

1. Function Declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}
This is the most common way to define a function. You use the function keyword, followed by the function name, parameters in parentheses, and the function body in curly braces.

2. Function Expression
const greet = function(name) {
  console.log(`Hello, ${name}!`);
};
This is similar to a function declaration, but you assign the function to a variable (in this case, greet). The function is defined as an expression, and the variable holds a reference to the function.

3. Arrow Function (ES6+ only)
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
Arrow functions are a concise way to define small, single-expression functions. They're often used for simple, one-line functions. Note that arrow functions don't have their own this context, so be careful when using them.

4. Method Definition (inside an object)
const person = {
  greet: function(name) {
    console.log(`Hello, ${name}!`);
  }
};
When you define a function inside an object, it becomes a method of that object. You can call the method using the object's property, like person.greet("John").

5. Constructor Function (with new keyword)
function Person(name) {
  this.name = name;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name}!`);
  };
}
const john = new Person("John");
john.greet(); // Output: Hello, my name is John!
Constructor functions are used to create objects with a specific structure. When you use the new keyword, a new object is created, and the constructor function is called to initialize it.

6. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("Hello, world!");
})();
An IIFE is a self-invoking function that runs immediately after it's defined. It's often used to create a scope for variables or to execute code once, without polluting the global namespace.

That's it! These are the different ways to define a function in JavaScript. Each has its own use cases and advantages, so it's essential to understand when to use each one.
------------------------------------------------------------
*/


/* 
--------------------------------------------------------------
What is the purpose of the let keyword in JavaScript?
In simple terms, let is used to declare a variable that has a limited scope, meaning it's only accessible within a specific block of code.
-----------------------------------------------------------

*/

/* 
--------------------------------------------------------------
What is the purpose of the const keyword in JavaScript?
The const keyword in JavaScript is used to declare a constant variable, which means its value cannot be changed after it's assigned.

Think of it like a label on a box that's glued shut. Once you've put a value in the box, you can't open it again to change the value.

Here are some key points about const:

Constant value: A variable declared with const must be assigned a value at the time of declaration, and that value cannot be changed later.

Block scope: Like let, const variables are block-scoped, meaning they're only accessible within the block they're declared in.

Reassignment allowed: You can reassign a new value to a const variable, but only if it's a reference to an object or array. The properties of the object or elements of the array can still be changed.

Use cases:

Immutable data: Use const to declare variables that should not be changed, such as configuration settings or constants in mathematics.
Object references: Use const to declare variables that reference objects or arrays, and ensure that the reference itself doesn't change.
Example:
const PI = 3.14; // PI is a constant value
console.log(PI); // Output: 3.14

PI = 3; // Error: PI is a constant value

const obj = { x: 10 }; // obj is a constant reference to an object
obj.x = 20; // OK: changing the property of the object
console.log(obj); // Output: { x: 20 }

obj = { y: 30 }; // Error: obj is a constant reference
-------------------------------------------------------------
*/

/* 
------------------------------------------------------------------------
What are template literals in JavaScript?
Template literals are a way to create strings in JavaScript that are more readable and easier to maintain. They were introduced in ECMAScript 2015 (ES6) as a replacement for traditional string concatenation.

Template literals use backticks (``) to define a string, and ${} to insert expressions.

Benefits of Template Literals
Readability: Template literals make your code more readable by allowing you to embed expressions directly within the string.
Conciseness: You don't need to use the + operator to concatenate strings, making your code more concise.
Flexibility: Template literals support multiline strings and can be used with various data types, including numbers, booleans, and objects.
----------------------------------------------------------------------
*/

/*
-------------------------------------------------------------------------
What are JavaScript promises?
JavaScript promises are a way to handle asynchronous operations in a more manageable and readable way. They help you write code that's easier to understand and maintain, even when dealing with complex asynchronous tasks.

Promises to the Rescue
A promise is like a contract that says: "I'll do this task, and when I'm done, I'll let you know." You can think of it like ordering food at a restaurant:

You order food (make a request)
The restaurant promises to prepare your food (creates a promise)
When the food is ready, the restaurant notifies you (resolves the promise)
Here's a simple example:

const promise = new Promise((resolve, reject) => {
  // Do some asynchronous work (e.g., boil water)
  setTimeout(() => {
    // When the work is done, resolve the promise
    resolve("Coffee is ready!");
  }, 2000);
});

// When the promise is resolved, log the result
promise.then((result) => {
  console.log(result); // Output: "Coffee is ready!"
});
-------------------------------------------------------------------------
 */

/*
--------------------------------------------------------------------------
What is the async/await syntax in JavaScript?
The async/await syntax is a way to write asynchronous code in JavaScript that's easier to read and maintain. It's built on top of promises, but it makes your code look and feel more like synchronous code.

Key Concepts
Async: A function marked with the async keyword can contain await expressions.
Await: The await keyword pauses the execution of the async function until the promise is resolved or rejected.
Try/Catch: You can use try/catch blocks to handle errors in async functions.

How It Works
When you call an async function, it returns a promise. When the function encounters an await expression, it pauses execution and waits for the promise to be resolved or rejected. When the promise is resolved, the function resumes execution with the resolved value.
---------------------------------------------------------------------
 */

/* 
--------------------------------------------------------------------------
What are arrow functions in JavaScript?
*/
