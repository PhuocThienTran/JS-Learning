/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  $pocket_Num: 15,
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

// Accessing Specific Obj's Property: Dot Notation vs. Bracket Notation
/** Dot Notation: Use dot notation when you know the exact name of the property you want to access. 
 * It uses a dot (.) followed by the property name. Example: 
 */
console.log("Backpack's right strap:", backpack.strapLength.right + "cm", 
"Backpack's left strap:", backpack.strapLength.left + "cm")

/** Bracket Notation: Use bracket notation when you have a dynamic or computed property name, 
 * or when the property name contains special characters or spaces. It uses square brackets ([]) 
 * with the property name as a string inside. Example:  
*/
let specialCase = "$pocket_Num";
console.log("Pocket Number Value:", backpack[specialCase])
