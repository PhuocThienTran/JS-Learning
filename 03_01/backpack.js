// Use ES6 syntax to define the backpack object
const backpack = {
  colors: ["red", "blue", "green"],
  sizes: ["small", "medium", "large"],
  width: "15cm",
  straps: 2,
  flatBackArea: true,
  opening: "top",
  open() {
    document.getElementById("opening-statement").textContent =
      "The backpack is opened.";
  },
  close() {
    document.getElementById("closing-statement").textContent =
      "The backpack is closed.";
  },
};

// Use ES6 syntax to define the pen object
const pen = {
  color: "black",
  length: "15cm",
  write() {
    document.getElementById("pen-statement").textContent =
      "The pen is writing.";
  },
};

// Use ES6 template literals to fill in the backpack properties
const backpackPropertiesList = document.getElementById("backpack-properties");
const backpackProperties = [
  `Colors: ${backpack.colors}`,
  `Sizes: ${backpack.sizes}`,
  `Width: ${backpack.width}`,
  `Straps: ${backpack.straps}`,
  `Flat Back Area: ${backpack.flatBackArea}`,
  `Opening: ${backpack.opening}`,
];

// Use a for...of loop to iterate over the backpack properties
for (const property of backpackProperties) {
  const listItem = document.createElement("li");
  listItem.textContent = property;
  backpackPropertiesList.appendChild(listItem);
}

// Output the relationship statements
backpack.open();
pen.write();
