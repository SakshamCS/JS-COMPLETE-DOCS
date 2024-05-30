// destructuring = extract values from arrays and objects, then assign them to variables in a convienient way
// [] = to perform array destructuring
// {} = to perform object destructuring
// 5 examples

// ------- Example 1 -------
// SWAP THE VALUES OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b);

//------- Example 2 -------
const colors = ['red', 'green', 'blue', 'black', 'white'];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// ------- Example 3 -------
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// ------- Example 4 -------
// EXTRACT VALUES FROM OBJECTS

const Person1 = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  age: 30,
  job: 'Fry Cook',
};

const Person2 = {
  firstName: 'Patrick',
  lastName: 'Star',
  age: 34,
};

const { firstName, lastName, age, job = 'Unemployed' } = Person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ------- Example 5 -------
// EXTRACT VALUES FROM FUNCTION PARAMETERS

function displayPerson({ firstName, lastName, age, job = 'Unemployed' }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

displayPerson(Person2);
