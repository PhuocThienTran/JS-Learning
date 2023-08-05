/**
 * Practice: Pass values between functions
 *
 * - Create a basic function declaration
 * - Make a change to an element in the DOM (querySelector, adding a class, and so on)
 * - Call the function declaration
 * - Create a basic function expression
 * - Repeat with an arrow function
 */

// Basic function declaration
function changeElementText() {
  const element = document.querySelector("#myDiv");
  element.textContent = "Text has been changed!"; // change This is a div element. to Text has been changed.
}

// Calling the function declaration
changeElementText();

// Basic function expression
const changeElementColor = function () {
  const element = document.querySelector("#myDiv");
  element.style.color = "blue";
};

// Calling the function expression
changeElementColor();

// Arrow function
const addClassToElement = () => {
  const element = document.querySelector("#myDiv");
  element.classList.add("highlight"); // add a class named highlight into the div with id myDiv
};

// Calling the arrow function
addClassToElement();
