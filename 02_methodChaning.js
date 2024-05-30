// Method Chaning = Calling one method after another in one continuous line of code.

//------- NO - METHOD - CHAINING -------

let username = window.prompt('Enter a username');

// username = username.trim();
// //trim to remove white space before and after username
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);

// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

//------- METHOD CHAINING -------

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();

console.log(username);
