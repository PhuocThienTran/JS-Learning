import backpacks from "./backpackObj.js";

const backpacksContent = backpacks.map((backpack) => `
    <article class="backpack" id="${backpack.id}">
        <figure class="backpack__image">
            <img src="../../assets/images/${backpack.image}.svg" alt="" loading="lazy" />
        </figure>
        <h1 class="backpack__name">${backpack.name}</h1>
        <ul class="backpack__features">
            <li class="feature backpack__volume">Volume:<span> ${backpack.volume}</span></li>
            <li class="feature backpack__color">Color:<span> ${backpack.color}</span></li>
            <li class="feature backpack__age">Age:<span> ${backpack.age} days old</span></li>
            <li class="feature backpack__pockets">Number of pockets:<span> ${backpack.pockets}</span></li>
            <li class="feature backpack__strap" data-side="left">
                Left strap length: <span>${backpack.leftStrapLength} inches</span>
                <form class="leftlength" data-children-count="1">
                    <input type="number" name="leftLength" placeholder="New left length" />
                    <button>Update</button>
                </form>
            </li>
            <li class="feature backpack__strap" data-side="right">
                Right strap length: <span>${backpack.rightStrapLength} inches</span>
                <form class="rightlength" data-children-count="1">
                    <input type="number" name="rightLength" placeholder="New right length" />
                    <button>Update</button>
                </form>
            </li>
            <li class="feature backpack__lid">Lid status: <span>${backpack.lidStatus}</span></li>
        </ul>
        <button class="lid-toggle">Open lid</button>
    </article>
`).join("");

document.querySelector(".maincontent").innerHTML += backpacksContent;
document.querySelectorAll(".backpack__features").forEach((backpackFeatures) => {
    backpackFeatures.style.backgroundColor = "lightgray";
});
