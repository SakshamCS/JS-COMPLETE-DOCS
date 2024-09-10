//string methods = allow you to manipulate and work with text (strings)

let userName = '  BroCode  ';

console.log(userName.charAt(0));

console.log(userName.indexOf('o'));

console.log(userName.lastIndexOf('o'));

console.log(userName.length); //not a method but very similar

userName = userName.trim(); //removes any white space or " " this
console.log(userName);

userName = userName.toUpperCase();
console.log(userName);

userName = userName.toLowerCase();
console.log(userName);

userName = userName.repeat(3);
console.log(userName);

let result1 = userName.startsWith(' '); //using a boolean here
console.log(result1);

if (result1) {
  console.log("Your username can't begin with ' '");
} else {
  console.log(userName);
}

// Similar for endsWith()
let result2 = userName.endsWith(' '); //using a boolean here
console.log(result2);
//use and if else if you want here too

//next ->

let result3 = userName.includes(' ');

if (result3) {
  console.log("Your username can't include ' '");
} else {
  console.log(userName);
}

let phoneNumber = '123-456-7890';

phoneNumber = phoneNumber.replaceAll('-', '/');

console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(20, '0');
//pad strings with the character we use until it's length reaches the number of times we tell
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(25, '0');

console.log(phoneNumber);
