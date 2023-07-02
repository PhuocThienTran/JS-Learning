/**
 * 
 "global objects" in JavaScript refers to a set of predefined objects that are built into the 
JavaScript language. These objects provide a range of functionality and are available globally 
in any JavaScript environment.
 */

class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge() {
    let now = new Date(); // assign the Date global obj to the now variable, making it the Date obj
    let acquired = new Date(this.dateAcquired); // assign acquired to the Date global obj with the argument of dateAcquired
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    // A fun little if condition to test if daysSinceAcquired > 1000 then return its value else return current date
    if (daysSinceAcquired > 1000){
      return daysSinceAcquired;
    } else {
      return now;
    }
  }
}

export default Backpack;

/**
Argument vs. Parameter:
Parameters are the variables defined in the function declaration. They act as placeholders.
Arguments are the actual values passed to the function when it is called. They provide the actual values to be used within the function.

Parameters:
function greet(name) {
  console.log("Hello, " + name + "!");
}
Arguments:
new Date(this.dateAcquired);
 */