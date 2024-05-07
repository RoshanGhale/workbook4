let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];
function total(item) {
  let subTotal = 0;
  for (let index = 0; index < lunch.length; index += 1) {
    subTotal += lunch[index].price;
  }
  return subTotal;
}
let totalLunchCost = total(lunch);
console.log("Total cost of lunch item " + totalLunchCost);

let taxRate = 8 / 100;

function totalWithTax() {
  let taxAmount = totalLunchCost * taxRate;
  return taxAmount;
}

console.log(totalWithTax());

let tipRate = 18 / 100;
function totalWithTips() {
  let tipAmount = totalLunchCost * tipRate;
  return tipAmount;
}
console.log(totalWithTips());

let totalDue = totalLunchCost + totalWithTax() + totalWithTips();
console.log(totalDue);
