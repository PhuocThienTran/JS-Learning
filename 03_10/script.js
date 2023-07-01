/**
Then how objects can be created from a class is called:
import Backpack from'./Backpack.js';
let greenBackpack = new Backpack(
  ...
);
let bluebBackpack = new Backpack(
  ...
);
console.log(greenbackpack, bluebackpack)
 */

/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

let greenBackpack = new Backpack(
  "Green Backpack",
  35,
  "green",
  15,
  23,
  23,
  false
);

let bluebBackpack = new Backpack(
  "Blue Backpack",
  75,
  "blue",
  20,
  19,
  19,
  false
);

console.log(greenBackpack, bluebBackpack);
