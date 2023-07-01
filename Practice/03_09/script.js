/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
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
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  modifyBackpackProperties: function(
    updateName, 
    updateVolume, 
    updateColor, 
    updatePocketNum){
      this.name = updateName;
      this.volume = updateVolume;
      this.color = updateColor;
      this.pocketNum = updatePocketNum;
  }
};

console.log("Old Backpack: ", backpack.name, backpack.volume, backpack.color, backpack.pocketNum);
backpack.modifyBackpackProperties("New Backpack", 23, "black", 23)
console.log("New Backpack: ", backpack.name, backpack.volume, backpack.color, backpack.pocketNum);