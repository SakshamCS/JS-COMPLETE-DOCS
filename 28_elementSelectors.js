// element selectors = Methods used to target and manipulate HTML elements They allow you to select one or multiple HTML elements from the DOM(Document Object Model)

// 1. document.getElementById() // ELEMENT OR NULL
// 2. document.getElementClassName() // HTML COLLECTION
// 3. document.getElementByTagName() // HTML COLLECTION
// 4. document.querySelector() // ELEMENT OR NULL
// 5. document.querySelectorAll() // NODELIST

// Example 1
const myHeading = document.getElementById('my-heading');

myHeading.style.backgroundColor = 'yellow';
myHeading.style.textAlign = 'center';

console.log(myHeading);

// Example 2

const fruits = document.getElementsByClassName('fruits');

console.log(fruits);

// fruits[0].style.backgroundColor = 'yellow';
// for (let fruit of fruits) {
//   fruit.style.backgroundColor = 'yellow';
// }

Array.from(fruits).forEach(fruit => {
  fruit.style.backgroundColor = 'yellow';
});

// Example 3

const h4Elements = document.getElementsByTagName('h4');
const liElements = document.getElementsByTagName('li');
console.log(h4Elements);

// h4elements[0].style.backgroundColor = 'yellow';

// for (let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = 'yellow';
// }

// for (let liElement of liElements) {
//   liElement.style.backgroundColor = 'lightgreen';
// }

Array.from(h4Elements).forEach(h4Element => {
  h4Element.style.backgroundColor = 'yellow';
});

Array.from(liElements).forEach(liElement => {
  liElement.style.backgroundColor = 'lightgreen';
});

//Example 4

const element1 = document.querySelector('.fruits');
//selects the first match
element1.style.backgroundColor = 'yellow';
const element2 = document.querySelector('.ol');
console.log(element2);
//will return null

//Example 5
//returns the NodeList
//similar to html collection but has built-in methods like arrays
//nodelist are static don't update in dom automatically, html collections are live will update in dom automatically

const foods = document.querySelectorAll('li');

console.log(foods);
//NodeLists have a built-in foreach method let's use that

foods.forEach(food => {
  food.style.backgroundColor = 'yellow';
});
