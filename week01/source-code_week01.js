// 1. Array literals
let arr = [true, 'hello', 89.45, null,
    {id: 1, name: 'Program'},
    {id: 2, name: 'JavaScript'}
]
console.log(arr); //[ true, 'hello', 89.45, null, { id: 1, name: 'Program' }, { id: 2, name: 'JavaScript' }]

// 2.Array() Construtor
let numbers0 = new Array(1, 2, 3, 4, 5);
let numbers1 = new Array(10);
let numbers2 = new Array();
console.log(numbers0); // [1, 2, 3, 4, 5]
console.log(numbers1); // [ <10 empty items> ]
console.log(numbers2); // []

// 3. Spread operator(...)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = ['hello program number'];
let combined = [...arr1,,...arr3, ...arr2];
console.log(combined); // [ 1, 2, 3, <1 empty item>, 'hello program number', 4, 5, 6 ]

// 4. Array.of()
let letters0 = Array.of('a', 'b', 'c', 'd');
let letters1 = Array.of(5);
let letters2 = Array.of();
console.log(letters0); // [ 'a', 'b', 'c', 'd' ]
console.log(letters1); // [ 5 ]
console.log(letters2); // []

// 5. Array.from()
let str = "HELLO";
let charArray = Array.from(str);
console.log(charArray); // [ 'H', 'E', 'L', 'L', 'O' ]

// 6.
let names = ["Anna", "Bob", "Charlie"];
names = [...names, "David"];
console.log(names); // ["Anna", "Bob", "Charlie", "David"]

for (let i = 0; i < names.length; i++) {
    console.log(`Index ${i}: ${names[i]}`);
}
// Index 0: Anna
// Index 1: Bob
// Index 2: Charlie
// Index 3: David

let indexCharlie = names.indexOf("Charlie");
if (indexCharlie !== -1) {
    names[indexCharlie] = "Chuck";
}
console.log(names); // ["Anna", "Bob", "Chuck", "David"]

names.shift();
console.log(names); // ["Bob", "Chuck", "David"]

// 7. for loop
let scores = [70, 80, 90, 100];
let doubledScores = [];
for (let i = 0; i < scores.length; i++) {
    doubledScores.push(scores[i] * 12);
}
console.log(doubledScores); // [ 840, 960, 1080, 1200 ]

// 8. Reading and Writing
let colors = ["red", "green", "blue"];
console.log(colors[colors.length - 1]); // "blue"
colors[1] = "yellow";
console.log(colors); // ["red", "yellow", "blue"]

// 9. Adding and Deleteing
let pets = ["dog", "cat"];
pets.push("rabbit");
console.log(pets); // ["dog", "cat", "rabbit"]
pets.unshift("hamster");
console.log(pets); // ["hamster", "dog", "cat", "rabbit"]
pets.shift();
console.log(pets); // ["dog", "cat", "rabbit"]
pets.pop();
console.log(pets); // ["dog", "cat"]