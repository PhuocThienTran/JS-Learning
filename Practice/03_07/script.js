/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


let gameStation = {
    name: "Nintendo Switch",
    joystickNum: 2,
    casing: true,
    // modify between the properties' bool values to get different outcomes in the if condition
    playConfig: {
        tv: Boolean(),
        portable: Boolean(true),
    },
};

let playSituation = "playConfig";
if(gameStation[playSituation].tv === true){
    gameStation[playSituation].portable === false
    console.log(gameStation[playSituation])
} else {
    gameStation[playSituation].portable === true
    console.log(gameStation[playSituation])
}
