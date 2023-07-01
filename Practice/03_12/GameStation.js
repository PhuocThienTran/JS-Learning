/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class GameStation {
  constructor(name, joystickNum, casing, playConfig) {
    this.name = name;
    this.joystickNum = joystickNum;
    this.casing = casing;
    this.playConfig = playConfig;
  }

  togglePortable() {
    this.playConfig.portable = !this.playConfig.portable;
  }
}

export default GameStation;
