// DOM = DOCUMENT OBJECT MODEL
// Object{} that represents the page you see in the browser and provides the API to interact with it.
// Web browser contructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
// Javascript can access the DOM to dynamically change the content, structure and style of a web page.

document.title = 'My Website';
// document.body.style.backgroundColor = 'hsl(0,0%,15%)';//even if we have no css we can still dynamically change the background color

const username = 'Bro code';

const welcomeMsg = document.getElementById('welcome-msg');

welcomeMsg.textContent += username === '' ? ` Guest` : ` ${username}`;

console.dir(document);
