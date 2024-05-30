let fruits = ['apple', 'orange', 'banana', 'coconut'];

fruits.sort().reverse();

//enhanced for loop
for (let fruit of fruits) {
  console.log(fruit);
}

//SPREAD OPERATOR (...)
// ... allows an iterable such as an array or string to be expanded into seperate elements (unpack the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum);

let username = 'Bro Code';
let letters = [...username].join('-');

console.log(letters);

let vegetables = ['carrots', 'celery', 'potatoes'];
let foods = [...fruits, ...vegetables, 'eggs', 'milk'];
console.log(foods);
