/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


const mouseEnterState = document.querySelector(".grid");
const mouseHoverState = document.querySelectorAll(".cell")

mouseEnterState.addEventListener("mouseenter", () => {
    mouseEnterState.style.outline = "1rem solid red";
})

mouseHoverState.forEach((eachCell) => {
    eachCell.addEventListener("mouseover", () => {
        eachCell.style.outline = "1rem solid blue"
    })

    eachCell.addEventListener("click", () => {
        eachCell.style.backgroundColor = "green"
    })    

    eachCell.addEventListener("mouseout", () => {
        eachCell.style.outline = ""
    })
})

const body = document.body;

body.addEventListener("keydown", (keyboardKey) => {
    if(keyboardKey.code === "KeyB"){
        body.style.backgroundColor = "black"
    } else if(keyboardKey.code === "KeyW"){
        body.style.backgroundColor = "white"
    }
})