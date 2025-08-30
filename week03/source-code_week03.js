// 1.
function sumArray(numbers) {
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        if (typeof numbers[i] === "number" && Number.isFinite(numbers[i])) {
            total += numbers[i];
    }
    }
    return total;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([1, 2000, 553, "", null, undefined])); // 2554 

// 2.
function toUpperCaseArray(words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toUpperCase();
        word = word.replace(/I/g, "i");
        result.push(word);
    }
    return result
}
console.log(toUpperCaseArray(["vanishaya", "saephu", "configg", "INforMATion"])); // [ 'VANiSHAYA', 'SAEPHU', 'CONFiGG', 'iNFORMATiON' ]

// 3.
let students = [
  { name: "Ann", age: 18 },
  { name: "Beam", age: 20 },
  { name: "Cat", age: 19 },
  { name: "Somchai", age: 12 }
];

function findoldstudents(students) {
    let oldestStudent = students[0]; 
    for (let i = 1; i < students.length; i++) {
        if (students[i].age > oldestStudent.age) {
            oldestStudent = students[i]; 
        }
    }
    return oldestStudent;
}
console.log(findoldstudents(students)); // {name : Beam, age : 20}

// 4.
function containsNumber(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number" && numbers[i] === target) {
      return true;
    }
  }
  return false;
}
console.log(containsNumber([5, 10, 15, 20], 15)); // true
console.log(containsNumber([5, 10, 15, 20], 7));  // false
console.log(containsNumber([5, "15", null, 20], 15)); // false

// 5.
function average(numbers) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
            sum += numbers[i];
            count++;
        }
    }
    return count === 0 ? 0 : sum / count;
}
console.log(average([10, 20, 30, "40", null])); // 20
console.log(average([50, 40, 20, "40", null, 20, 40])); // 34