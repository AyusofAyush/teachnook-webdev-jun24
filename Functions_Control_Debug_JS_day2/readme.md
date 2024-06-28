# Day 2 to Javascript

## Javascript Functions
`
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
`

## Javascript Data structures
- Set
- Map
- WeakSet
- WeakMap
(in the app.js file)


## Javascript DOM
```
Refer the next session
```


## Javascript Form Validation
```
Refer the next session
```


## Javascript OOPs
// check the app.js file 


## Javascript Cookies
```
Refer the next session
```


## Javascript Events
```
Refer the next session
```

## Exception Handling
```
In programming, exception handling is a process or method used for handling the abnormal statements in the code and executing them. It also enables to handle the flow control of the code/program

125 / 0 -> undefined in maths 

Types of Errors
While coding, there can be three types of errors in the code:

Syntax Error: When a user makes a mistake in the pre-defined syntax of a programming language, a syntax error may appear.

Runtime Error: When an error occurs during the execution of the program, such an error is known as Runtime error. The codes which 
create runtime errors are known as Exceptions. Thus, exception handlers are used for handling runtime errors.

Logical Error: An error which occurs when there is any logical mistake in the program that may not produce the desired output, and may terminate abnormally. Such an error is known as Logical error.


How to write try catch in js


try{  
expression; } //code to be written.  
catch(error){  
expression; } // code for handling the error.  


```


## Javascript Misc

### JS this keyword 
// check the app.js file 
// incomplete 

### Hoisting (done)
```
Notes in previous session readme.md
```

### JS closures


### JS Async
- JS Callback
- Promises
- Async Await

### JS JSON (optional)



