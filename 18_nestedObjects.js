// Nested objects = Objects inside other objects
// Allows you to represent more complex data structures
// Child objects is enclosed by a Parent object

// Person {Address{}, ContactInfo{}}
// ShoppingCart {keyBoard{}, Mouse{}, Monitor{}}

const person = {
  fullName: 'Spongebob Squarepants',
  age: 30,
  job: 'fry cook',
  isStudent: true,
  hobbies: ['karate', 'jellyfishing', 'cooking'],
  address: {
    street: '124 Conch St.',
    city: 'Bikini Bottom',
    country: 'Int. Water',
  },
};

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.country);

//To loop through the property in nested objects
for (const property in person.address) {
  console.log(person.address[property]);
}

//EXAMPLE 2 -
class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}
//here Address is a child object of the person object
class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  'Spongebob',
  30,
  '124 Conch St.',
  'Bikini Bottom',
  'Int. Water'
);

const person2 = new Person(
  'Patrick',
  37,
  '128 Conch St.',
  'Bikini Bottom',
  'Int. Water'
);

const person3 = new Person(
  'Squidward',
  45,
  '126 Conch St.',
  'Bikini Bottom',
  'Int. Water'
);

console.log('EXAMPLE 2 - Console:');
console.log(person2.address.street);
console.log(person3.name);
