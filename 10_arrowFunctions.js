//arrow functions = a concise way to write function expressions good for simple functions that you only use once (parameters) => some code;
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(element => Math.pow(element, 2));

const evenNums = numbers.filter(element => element % 2 === 0);

console.log(squares);
console.log(evenNums);
