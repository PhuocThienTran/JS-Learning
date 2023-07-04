class Backpack {
    constructor(id, image, name, volume, color, age, pockets, leftStrapLength, rightStrapLength, lidStatus) {
      this.id = id;
      this.image = image;
      this.name = name;
      this.volume = volume;
      this.color = color;
      this.age = age;
      this.pockets = pockets;
      this.leftStrapLength = leftStrapLength;
      this.rightStrapLength = rightStrapLength;
      this.lidStatus = lidStatus;
    }
  
    updateLeftStrapLength(newLength) {
      this.leftStrapLength = newLength;
    }
  
    updateRightStrapLength(newLength) {
      this.rightStrapLength = newLength;
    }
  
    toggleLidStatus() {
      this.lidStatus = this.lidStatus === 'closed' ? 'open' : 'closed';
    }
  }
  
  // Export the Backpack class
  export default Backpack;
  