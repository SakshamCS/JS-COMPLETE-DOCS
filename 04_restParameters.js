//rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array

//spread = expands an array into seperate elements rest = bundles seperate elements into an array

//Example 1 -
function openFridge(...foods) {
  console.log(...foods);
}
function getFood(...foods) {
  return foods;
}
const food1 = 'pizza';
const food2 = 'hamburger';
const food3 = 'hotdog';
const food4 = 'sushi';
const food5 = 'ramen';

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

function sum(...numbers) {
  let result = 0;
  //   for (let i = 0; i < numbers.length; i++) {}
  for (let number of numbers) {
    result += number;
  }
  return result;
}

//Example 2
const total = sum(1, 2, 3, 4, 5);
console.log(`Your total is ${total}`);

function getAverage(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const average = getAverage(75, 100, 85, 90, 50);
console.log(`Your average is ${average}`);

//Example 3 -

function combineString(...strings) {
  return strings.join(' ');
}
const fullName = combineString('Mr.', 'Spongebob', 'Squarepants', 'III');

console.log(fullName);
