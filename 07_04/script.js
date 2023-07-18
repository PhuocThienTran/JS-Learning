/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


// Build an array with 8 items
let items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Pineapple', 'Cherry', 'Strawberry'];

// Remove the last item
items.pop();

// Add the last item as the first item on the array
const lastItem = items[items.length - 1];
items.unshift(lastItem);

// Sort the items by alphabetical order
items.sort();

// Use the find() method to find a specific item in the array
const foundItem = items.find(item => item === 'Mango');
console.log(foundItem)

// Remove the item you found using the find method from the array
if (foundItem) {
  const index = items.indexOf(foundItem);
  items.splice(index, 1);
}

console.log(items);
