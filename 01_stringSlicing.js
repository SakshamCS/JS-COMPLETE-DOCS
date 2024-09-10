//string slicing = creating a substring from a portion of another string

//string.slice(start, end)
//ending index is actually exclusive and we don't include it in the new string we make using slice method

const fullName = 'Bro Code';

let firstName = fullName.slice(0, fullName.indexOf(' '));
let lastName = fullName.slice(fullName.indexOf(' ') + 1);
//added + 1 to remove the space
console.log(firstName);
console.log(lastName);

const email = 'saksham1@gmail.com';
let username = email.slice(0, email.indexOf('@'));
let extension = email.slice(email.indexOf('@') + 1);
console.log(username);
console.log(extension);
