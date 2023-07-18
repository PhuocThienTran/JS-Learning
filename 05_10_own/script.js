const links = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

// Create a new navigation menu element
const newNavMenu = document.createElement("nav");
newNavMenu.classList.add("nav-menu");

// Create an unordered list with five links
const newList = document.createElement("ul");
newList.innerHTML = links;
newNavMenu.append(newList);

document.querySelector(".siteheader").append(newNavMenu);
