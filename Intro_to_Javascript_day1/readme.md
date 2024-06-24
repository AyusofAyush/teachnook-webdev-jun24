# Introduction to Javascript

[Javascript Roadmap](https://roadmap.sh/javascript)

## What is Javascript ?
```
JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser.
```

## Features of Javascript ?

There are following features of JavaScript:

1. All popular web browsers support JavaScript as they provide built-in execution environments.
2. JavaScript follows the syntax and structure of the C programming language. Thus, it is a structured programming language.
3. JavaScript is a weakly typed language, where certain types are implicitly cast (depending on the operation).
4. JavaScript is an object-oriented programming language that uses prototypes rather than using classes for inheritance.
5. It is a light-weighted and interpreted language.
6. It is a case-sensitive language.
7. JavaScript is supportable in several operating systems including, Windows, macOS, etc.
8. It provides good control to the users over the web browsers.


## Basic Application of JS (Basic)

- Client-side validation,
- Dynamic drop-down menus,
- Displaying date and time,
- Displaying pop-up windows and dialog boxes (like an alert dialog box, confirm dialog box and prompt dialog box),
- Displaying clocks etc.
etc..


## Places to put JS Code in HTML
```
3 Places to put JavaScript code
1. Between the body tag of html
2. Between the head tag of html
3. In .js file (external javaScript)
```

## Pros/Cons of Using External JS file
```
Pros:
- reusability of code
- code readability
- time-efficient as web browsers can cache the external js
- devs can work with html and js files parallelly

Cons:
- the two files are dependent on each other if one goes wrong may affect another
- additional HTTP call to get js file
- code needs to be checked for code duplication 
- takes more time when debugging from multiple js files

```


## What is Hoisting in JS?

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and call functions before they are actually declared in your code.

For example, consider the following code:

```javascript
console.log(x); // Output: undefined
var x = 5;
```

In this code, even though the variable `x` is declared and assigned a value later in the code, the `console.log` statement does not throw an error. Instead, it prints `undefined`. This is because during hoisting, the variable declaration `var x` is moved to the top of its scope, but the assignment `x = 5` remains in its original position. So, when the `console.log` statement is executed, `x` exists but has not yet been assigned a value, resulting in `undefined` being printed.

It's important to note that only the declarations are hoisted, not the initializations. So, if you try to access a variable before it is declared, you will get a `ReferenceError`.

```javascript
console.log(y); // Output: ReferenceError: y is not defined
let y = 10;
```

In this code, the `console.log` statement throws a `ReferenceError` because the variable `y` is declared using `let`, which does not hoist the variable declaration to the top of its scope. Therefore, `y` is not defined before the `console.log` statement.

Hoisting also applies to function declarations. Consider the following code:

```javascript
sayHello(); // Output: Hello!

function sayHello() {
    console.log("Hello!");
}
```

In this code, the `sayHello` function is called before it is actually declared. However, due to hoisting, the function declaration is moved to the top of its scope, allowing the function to be called successfully.

In conclusion, hoisting is a JavaScript behavior that allows you to use variables and call functions before they are declared in your code. However, it's important to understand how hoisting works to avoid unexpected behavior and potential bugs in your code.


## JS Topics

- JS Comments
// this is a comment 
/* 
    multi line comment
*/
- JS Variable
var, let, const

var -> older way of writting varabiles (generally avoid it)
let -> block scope 
const -> but value should not change throughout 

- JS Global Variable
- JS Data Types
- JS Operator
- JS If else statement
- JS Switch Case
- JS Loop

### JS Objects

- Object
- Array
- String
- Date
- Math
- Number
- Boolean

`All the examples are in the scripts.js`

--------------------------------------------------