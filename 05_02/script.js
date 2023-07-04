/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

/**
Accessing elements in DOM via JS's querySelector() and querySelectorAll(): 

querySelector(): returns the first Element within the HTML document that matches the specified selector 
or its group. For example: 
domElement = document.querySelector("main") // returns the entire <main>...</main> tag 

querySelectorAll(): returns a list of the document's elements that match the specified group of selectors. 
For example: domElement = document.querySelectorAll("ul li") // returns all the unordered list items. 

They use CSS queries to look through the DOM tree and find the specified elements. As a result, 
they return a pure JS object. 
The elements can be anything including a class - i.e.: document.querySelector(".backpack__color"). 
These methods allow access to any elements in the DOM and modify them.
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const main = document.querySelector(".maincontent");

const content = `
  <article class="backpack" id="everyday">
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="backpack__color">Color:<span> ${everydayPack.color}</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  </article>
`;

main.innerHTML = content;
