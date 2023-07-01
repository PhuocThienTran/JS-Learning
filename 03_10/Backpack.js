/**
Class: a template for an object, where every time a new object is created based on a class, 
that object gets all the properties and methods from that class. Useful for when changing a 
method or property from a class, then that change apply to every instance of that class. 

Constructor: is a method that first defines each of the properties' parameters, then defines 
the properties and set their values to the parameters that was passed from the class. 
Basically declare the parameters first then populate the properties with them. 

In a class, methods can be added. The methods will then be applied to all objects created from that 
class. Methods can only be added after the constructor(//parameters){//properties}. How a class is 
organised:

class Backpack {
  constructor(
    // Defines parameters i.e.: name <- name is the parameter
  ) {
    // Define properties i.e.: this.name = name <- this.property = parameter
  }
   // Add methods like normal functions:
}
export default Backpack;
 */

/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

export default Backpack;
