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
