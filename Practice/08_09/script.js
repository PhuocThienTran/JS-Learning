/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

function createArticleWithContent(content) {
  // *  - Creates new <article> element
  const article = document.createElement('article');
  // *  - Populates <article> with content (see const content below)
  article.innerHTML = content;
  // *  - Returns <article> element to where function is called
  return article;
}

function createImageFigure(imageUrl, imageDescription) {
  // *  - Creates new <figure> element
  const figure = document.createElement('figure');
  // *  - Adds <img> markup pointing to frogpack.image
  const image = document.createElement('img');
  image.src = imageUrl;
  // *  - Adds <figcaption> element with image description
  const figcaption = document.createElement('figcaption');
  figcaption.textContent = imageDescription;
  figure.appendChild(image);
  figure.appendChild(figcaption);
  // *  - Returns <figure> element to where function is called
  return figure;
}



// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

document.addEventListener('DOMContentLoaded', () => {
  const mainElement = document.querySelector('main');
  
  const article = createArticleWithContent(content);
  const imageFigure = createImageFigure(frogpack.image, 'Frog Backpack Image');
  
  mainElement.appendChild(article);
  mainElement.appendChild(imageFigure);
});

