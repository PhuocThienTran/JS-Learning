/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration:
function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

/*
doSomeMath() can be redeclared with the same name, as technically it's a var.
So for example, doSomeMath as a var name can be redeclared and used in another way
*/

// Function expression:
const doMoreMath = function (a = 3, b = 2) {
  let c = a * b;
  return c;
};

/*
doMoreMath() is declared as a const, so it can't be declared in another situation
*/

console.log("Do some math:", doSomeMath(5, 6));
console.log("Do more math:", doMoreMath(5, 6));

/*
var doSomeMath = 5;
var doMoreMath = 2;
console.log(doSomeMath, doMoreMath)
execute this will get Uncaught SyntaxError: Identifier 'doMoreMath' has already been declared (at script.js:31:5)
*/

// Immediately Invoked Function Expression (IIFE)
// (function () {
//   let a = 4;
//   let b = 6;
//   let c = doSomeMath(a, b);
//   console.log(`The sum of a and b is: ${c}`);
// })();
