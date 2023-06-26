// Define the backpack object
var backpack = {
  colors: ["red", "blue", "green"],
  sizes: ["small", "medium", "large"],
  width: "15cm",
  straps: 2,
  flatBackArea: true,
  opening: "top",
  open: function () {
    document.getElementById("opening-statement").textContent =
      "The backpack is opened.";
  },
  close: function () {
    document.getElementById("closing-statement").textContent =
      "The backpack is closed.";
  },
};

// Define the pen object
var pen = {
  color: "black",
  length: "15cm",
  write: function () {
    document.getElementById("pen-statement").textContent =
      "The pen is writing.";
  },
};

// Fill in the backpack properties
var backpackPropertiesList = document.getElementById("backpack-properties");
var backpackProperties = [
  "Colors: " + backpack.colors,
  "Sizes: " + backpack.sizes,
  "Width: " + backpack.width,
  "Straps: " + backpack.straps,
  "Flat Back Area: " + backpack.flatBackArea,
  "Opening: " + backpack.opening,
];

backpackProperties.forEach(function (property) {
  var listItem = document.createElement("li");
  listItem.textContent = property;
  backpackPropertiesList.appendChild(listItem);
});

// Output the relationship statements
backpack.open();
pen.write();
