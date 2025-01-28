"use strict";
// 1. Basic Types
let basicString = "Hello TypeScript";
let basicNumber = 42;
let basicBoolean = true;
// 2. Arrays
let numberArray = [1, 2, 3];
let stringArray = ["TypeScript", "is", "fun"];
// 3. Tuple
let tuple = ["age", 25];
// 5. Function Types
function add(a, b) {
    return a + b;
}
// 7. Generic Function
function firstElement(arr) {
    return arr[0];
}
// Practice Examples:
const developer = {
    name: "John",
    role: "Frontend",
    experience: 3,
    technologies: ["TypeScript", "React", "Node"]
};
const numbers = [1, 2, 3, 4, 5];
console.log(firstElement(numbers)); // Will return 1
let userStatus = "active";
