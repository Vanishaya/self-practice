// 1.
let ingredients = [
  { name: "flour", quantity: 500 },
  { name: "sugar", quantity: 200 },
  { name: "butter", quantity: 100 },
  { name: "eggs", quantity: 4 }
];
let increased = ingredients.map(item => {
  return { ...item, quantity: item.quantity * 1.5 };
});
console.log(increased); 
/* [
  { name: 'flour', quantity: 750 },
  { name: 'sugar', quantity: 300 },
  { name: 'butter', quantity: 150 },
  { name: 'eggs', quantity: 6 }
]*/

let filtered = ingredients.filter(item => item.quantity > 150);
console.log(filtered); // [ { name: 'flour', quantity: 500 }, { name: 'sugar', quantity: 200 } ]

let totalQuantity = ingredients.reduce((sum, item) => sum + item.quantity, 0);
console.log(totalQuantity); // 804

// 2.
let players = ["Alice", "Bob", "Charlie"];

players.push("Dave");   
console.log(players); // [ 'Alice', 'Bob', 'Charlie', 'Dave' ]

let lastPlayer = players.pop(); 
console.log(lastPlayer); // Dave
console.log(players); // [ 'Alice', 'Bob', 'Charlie' ]

players.unshift("Zoe"); 
console.log(players); // [ 'Zoe', 'Alice', 'Bob', 'Charlie' ]

let firstPlayer = players.shift(); 
console.log(firstPlayer); // Zoe
console.log(players); // [ 'Alice', 'Bob', 'Charlie' ]

// 3.
let nums = [5, 10, 15, 20, 25, 30];
let subArray = nums.slice(1, 4);
console.log(subArray); // [10, 15, 20]

nums.splice(3, 2, 18, 22); 
console.log(nums); // [5, 10, 15, 18, 22, 30]

// 4. 
let scores = [85, 92, 78, 90, 88];
console.log(scores.indexOf(90)); // 3

console.log(scores.includes(95)); // false

scores.sort((a, b) => b - a);
console.log(scores); // [92, 90, 88, 85, 78]

// 5. 
let countries = ["Thailand", "Japan", "Brazil", "Canada"];
console.log(countries.join(" | ")); // Thailand | Japan | Brazil | Canada

console.log(countries.toString()); // Thailand,Japan,Brazil,Canada
