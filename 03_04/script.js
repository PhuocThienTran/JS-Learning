/**
 * Object's declarations:
const: Use const when you want to declare a variable that won't be reassigned.
The value assigned to a const variable cannot be changed, but properties of objects or 
arrays assigned to a const variable can be modified.

let: Use let when you want to declare a variable that can be reassigned.
The value assigned to a let variable can be changed.
 */

/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
