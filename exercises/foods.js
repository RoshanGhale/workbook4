let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];
function total(item) {
  let subTotal = 0;
  for (let index = 0; index < item.length; index += 1) {
    subTotal += item[index].price;
  }
  return subTotal;
}
let totalLunchCost = total(lunch);
console.log("Total cost of lunch item " + totalLunchCost);

let taxRate = 8 / 100;

function totalWithTax(item, taxRate) {
  let totalCost = totalLunchCost(item);

  let taxAmount = subTotal * taxRate;
  return subTotal + taxAmount;
}
 let totalLunchCostWithTax = totalWithTax(item, taxRate);
    console.log(totalLunchCostWithTax);

   
    
 
    