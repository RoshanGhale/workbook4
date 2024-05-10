"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Starburst", price: 4.79 },
  { product: "Kit Kat", price: 3.89 },
  { product: "Sour Patch", price: 1.89 },
  { product: "Jelly Belly", price: 2.79 },
  { product: "Milky Way", price: 5.99 },
  { product: "Hershey Kiss", price: 8.89 },
  { product: "Skittles", price: 2.59 },
  { product: "Snickers", price: 2.79 },
  { product: "Gummy Bears", price: 5.79 },
  { product: "Twix", price: 3.89 },
];

// Which candies costs less than $4.00?
const candiesUnderFour = [];

for (let index = 0; index < products.length; index++) {
  const productsName = products[index];
  if (products[index].price < 4) {
    candiesUnderFour.push(products[index]);
  }
}
console.log("These are the products that cost less than $4");
console.log(candiesUnderFour);

//console.log(candiesUnderFour);
// Which candies has "M&M" its name?

// Do we carry "Swedish Fish"?
