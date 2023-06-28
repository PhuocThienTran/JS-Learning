/**
 * Object pseudo-coding:

let objectExample; //Declaration of objectExample
objectExample = {
  stringPropertyExample: "string property",
  valuePropertyExample: 23,
  arrayPropertyExample: {
    name: "Backpack",
    volume: 30,
  },
  booleanPropertyExample: false,
  methodPropertyExample: function (methodParametersExample){
    this.booleanPropertyExample = methodParametersExample;
  },
};
 */

/**
 * Create a Backpack object.
 */

let backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  /**
   * method determining if backpack is open or not
   * @param {boolean} lidStatus 
   */
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  /**
   * method changing how long the strap lengths are
   * @param {value} lengthLeft 
   * @param {value} lengthRight 
   */
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
