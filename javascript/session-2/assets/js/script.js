// ---------------------------------Q1
let list1 = [1, 4, 7, 12, 13, 19, 18];
let odds = [];

for (let i = list1.length - 1; i >= 0; i--) {
    if (list1[i] % 2 !== 0) {
        odds.push(list1[i]);
        list1.splice(i, 1);
    }
}
console.log("Odds :", odds.reverse(),"  |  ","Evens : ", list1);
// ---------------------------------Q2
let list2 = [5, 0, 2, 0, 8, 1];

for (let j = list2.length - 1; j >= 0; j--) {
    if (list2[j] === 0) {
        list2.push(list2[j]);
        list2.splice(j, 1);
    }
}
console.log("Sorted List :", list2);
// ---------------------------------Q3
let price = [50, 1200, 300, 80, 1500, 500];
let new_price_off;
let total = 0;
for (let counter = price.length - 1; counter >= 0; counter--) {
    if (price[counter] <= 100) {
        price.splice(counter, 1);
    } else if (price[counter] >= 1000) {
        new_price_off = price[counter] * 0.8;
        price.splice(counter, 1, new_price_off);
    }
}
for (let calcute = 0; calcute <= price.length - 1; calcute++) {
    total += price[calcute];
}
console.log("SUM Of New Price: ", total);
// ---------------------------------Q4
let items = [10, 20, 10, 30, 20, 40];
let items_reverse = [];
for (let k = items.length - 1; k >= 0; k--) {
    items_reverse.push(items[k]);
    items.pop(items[k]);
}
console.log("List Items Reverse : ", items_reverse);
// ---------------------------------Q5
let numbers = [10, 20, 10, 30, 20, 40];
for (let z = numbers.length - 1; z >= 0; z--) {
    for (let y = z - 1; y >= 0; y--) {
        if (numbers[z] === numbers[y]) {
            numbers.splice(z, 1);
        }
    }
}
console.log("Delete Repeat Items: ",numbers);