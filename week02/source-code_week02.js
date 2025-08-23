// 1. object literals
let obj0 = {x: 10, y: 15}
let obj1 = {x: 510, y: 568}
console.log(obj0); // { x: 10, y: 15 }
console.log(obj1); // { x: 510, y: 568 }

// 2. constructor functions
function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
} 
let p1 = new Person('Vanishaya', 19, "Female")
let p2 = new Person('Somchai', 69, "Male")
console.log(p1); // Person { name: 'Vanishaya', age: 19, sex: 'Female' }
console.log(p2); // Person { name: 'Somchai', age: 69, sex: 'Male' }

// 3. function shallow equality
let student1 = {
    id: 101,
    name: "Alice",
    courses: ["Math", "Science"],
    address: { city: "Bangkok", zip: 10200 }
};

let student2 = {
    id: 101,
    name: "Alice",
    courses: ["Math", "Science"],
    address: { city: "Bangkok", zip: 10200 }
};

let student3 = {
    id: 101,
    name: "Alice",
    courses: ["Math", "English"],
    address: { city: "Bangkok", zip: 10200 }
};

function shallowEquality(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}

console.log(shallowEquality(student1, student2)); // false
console.log(shallowEquality(student1, student3)); // false

// 4. Object Destructuring
let student = {
    id: 35,
    name: "Vanishaya",
    age: 19,
    major: "Information Technology"
};

let { name, age } = student;
console.log(name); // "Vanishaya"
console.log(age);  // 19

let { major: field } = student;
console.log(field); // "Information Technology"

let { university = "KMUTT" } = student;
console.log(university); // KMUTT

