// constructor = special method for defining the properties and methods of objects

// const car1 = {
//   make: 'Ford',
//   model: 'Mustang',
//   year: 2024,
//   color: 'red',
//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
// };

function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color),
    (this.drive = function () {
      console.log(`You drive this ${this.model}`);
    });
}

//Real Syntax
// function Car(make, model, year, color) {
//     this.make = make,
//       this.model = model,
//       this.year = year,
//       this.color = color,
//       this.drive = function () {
//         console.log(`You drive this ${this.model}`);
//       }
//   }
const car1 = new Car('Ford', 'Mustang', 2024, 'red');

const car2 = new Car('Chevrolet', 'Camaro', 2025, 'blue');

const car3 = new Car('Dodge', 'Charger', 2026, 'silver');

console.log(car2.make);
console.log(car2.model);
car3.drive();
