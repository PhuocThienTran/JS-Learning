/**
 * Functions inside an object is a method. How a method is organised:
let backpack = {
  lidOpen: false,
  ...
  toggleLid: function (lidStatus){
    this.lidOpen = lidStatus;
  },
  ...
};
lidOpen is a bool property for backpack that checks if lid is opened/not. 
In toggleLid which is a function, there is a parameter called lidStatus that updates 
the lid being opened/not. The lidStatus parameter is used to update the current instance of lidOpen.

If we want to make call to the function and if the function has parameters, simply call that 
function then add add data/value in where that parameter is. 
For example: console.log(backpack.toggleLid(true)). 
This modifies lidOpen as true. 
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

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);
