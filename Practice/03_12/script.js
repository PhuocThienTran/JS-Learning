/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import GameStation from "./GameStation.js";
let nintendoSwitch = new GameStation(
    "Nintendo Switch",
    2,
    true,
    {
      tv: true,
      portable: true
    }
);

let ps5 = new GameStation(
    "PS5",
    9,
    true,
    {
      tv: true,
      portable: true
    }
);

console.log(nintendoSwitch, ps5)

nintendoSwitch.togglePortable();
console.log("Switch Config: ", nintendoSwitch.playConfig.portable); // off

ps5.togglePortable();
console.log("PS5 Config: ", ps5.playConfig.portable); // off

nintendoSwitch.togglePortable();
console.log("Switch Config: ", nintendoSwitch.playConfig.portable); // on

ps5.togglePortable();
console.log("PS5 Config: ", ps5.playConfig.portable); // on