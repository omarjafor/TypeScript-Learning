"use strict";
// learning function
// normal function or arrow function 
var _a, _b;
function addSum(num1, num2) {
    return num1 + num2;
}
addSum(2, 3);
const number = 2;
const number2 = 3;
// console.log(addSum(number, number2));
const addArrow = (num1, num2) => num1 + num2;
// console.log(addArrow(number, number2));
// object --> function --> method 
const poorUser = {
    name: "John",
    balance: 0,
    addBalance(balance) {
        return `Your balance is ${this.balance + balance}`;
    },
};
const arr = [1, 2, 3, 4, 5];
const newArray = arr.map((elm) => elm * elm);
// console.log(newArray);
// spread operator, rest operator, destructuring 
const bros1 = ["John", "Doe", "John"];
const bros2 = [...bros1, 'Mizan', 'Rahman'];
// console.log(bros2);
const mentors1 = {
    typescript: 'Mezba',
    react: 'Mizan',
    angular: 'Rahman',
};
const mentors2 = {
    prisma: 'Firoz',
    vue: 'John',
    next: 'Tanmoy'
};
const mentors = Object.assign(Object.assign({}, mentors1), mentors2);
const greetFiends = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
// greetFiends('John', 'Doe', 'Mizan', 'Rahman');
const chumUser = {
    id: 1,
    name: {
        firstName: 'John',
        lastName: 'Doe',
    },
    contact: '01482555555',
    address: 'Dhaka, Uganda'
};
const { name: { firstName: fstNam, lastName }, contact, address: adres } = chumUser; //used name alias
// array destructuring 
const myFriends = ['John', 'Doe', 'Mizan', 'Rahman'];
const [, , bestFriend, ...rest] = myFriends;
const student1 = {
    id: 1,
    name: 'John',
    age: 25,
    gender: 'male',
    contact: '01482555555',
    address: 'Chittagong, Bangladesh',
};
const student2 = {
    id: 2,
    name: 'Mizan',
    age: 35,
    gender: 'male',
    address: 'Dhaka, Bangladesh',
};
const userName = 'John';
const userAge = 25;
const adds = (num1, num2) => num1 + num2;
// Union and Intersection Types
// Union Types (|) - can be one of several types
let code;
code = '123';
code = 123;
code = true;
// console.log(code);
// Union type with array
const myArray = ['123', 123, 'Hello', 456];
const color = 'red';
// Union type in function parameters
function display(id, name) {
    console.log(`ID is ${id}, Name is ${name}`);
}
const manager = {
    name: 'John',
    age: 35,
    employeeId: 123,
    department: 'Sales'
};
// Type narrowing with union types
function getLength(str) {
    if (typeof str === 'string') {
        console.log(str.length);
    }
    else if (typeof str === 'number') {
        console.log(str.toString().length);
    }
}
const age2 = 20;
if (age2 >= 18) {
    console.log("You are an adult");
}
else {
    console.log("You are a minor");
}
const isAdult = age2 >= 18 ? 'Adult' : 'Minor';
const aunthenticate = undefined;
const isAuth = aunthenticate !== null && aunthenticate !== void 0 ? aunthenticate : 'Guest';
const richUser = (_b = (_a = chumUser === null || chumUser === void 0 ? void 0 : chumUser.name) === null || _a === void 0 ? void 0 : _a.firstName) !== null && _b !== void 0 ? _b : 'No Balance';
console.log(richUser);
// nullable types 
let name1 = 'John';
let age1 = 25;
