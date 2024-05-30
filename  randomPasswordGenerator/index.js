'use strict';

//Random Password Generator
// const btnClick = document.querySelector('.btn--click');

const passwordlength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

// function generatePassword() {}
const randomPasswordGenerator = function (
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-=';

  let allowedChars = '';
  let password = '';

  allowedChars += includeLowerCase ? lowercaseChars : '';
  allowedChars += includeUpperCase ? uppercaseChars : '';
  allowedChars += includeNumbers ? numberChars : '';
  allowedChars += includeSymbols ? symbolChars : '';

  // console.log(allowedChars);

  if (length <= 0) {
    return `(password length must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    return `(At least 1 set of charcters need to be selected)`;
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
};
const password = randomPasswordGenerator(
  passwordlength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);

// btnClick.addEventListener('click', randomPasswordGenerator);
console.log(`Generated password: ${password}`);
