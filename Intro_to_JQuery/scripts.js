/*
*> `call` method -> ek function ko turant ek specific `this` value aur individual arguments ke sath call kar sakte hain.

?> Syntax:** `func.call(thisArg, arg1, arg2, ...)`

?> Example:
*/
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person1 = { name: 'Alice' };

greet.call(person1, 'Hello', '!');  // Output: "Hello, Alice!"

// --------------------------------------

/*
*> `apply` Method -> bhi `call` ke jaisa hai, lekin yeh arguments ko array (ya array-like object) ke roop mein leta hai.

?> Syntax:** `func.apply(thisArg, [argsArray])`

?> Example:
*/

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person2 = { name: 'Alice' };

greet.apply(person2, ['Hello', '!']);  // Output: "Hello, Alice!"

// --------------------------------------

/*
*> `bind` Method -> ek naya function create karta hai jo, jab call kiya jata hai, uska `this` value specified hota hai aur kuch initial arguments bhi ho sakte hain.

?> Syntax:** `func.bind(thisArg, arg1, arg2, ...)`

?> Example:
*/

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person3 = { name: 'Alice' };

const boundGreet = greet.bind(person3, 'Hello');
boundGreet('!');  // Output: "Hello, Alice!"

// --------------------------------------

// --------- xxxxxxxx ----------

$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });



