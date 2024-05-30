// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex. static keyword, encapsulation, inheritance

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const product1 = new Product('Shirt', 19.99);
const product2 = new Product('Pants', 22.5);
const product3 = new Product('Underwear', 100.0);

const salesTax = 0.05;

// product1.displayProduct();
// product2.displayProduct();
product3.displayProduct();
// function Product(name, price) {
//   this.name = name;
//   this.price = price;

//   this.displayproduct;
// }

const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
