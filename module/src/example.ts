// learning function
// normal function or arrow function 

function addSum(num1: number, num2: number): number {
    return num1 + num2;
}
addSum(2, 3);
const number = 2;
const number2 = 3;
// console.log(addSum(number, number2));

const addArrow = (num1: number, num2: number): number => num1 + num2;
// console.log(addArrow(number, number2));

const age2 = 20;
if (age2 >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// object --> function --> method 
const poorUser = {
    name: "John",
    balance: 0,
    addBalance(balance: number): string {
        return `Your balance is ${this.balance + balance}`
    },
};

const arr: number[] = [1, 2, 3, 4, 5];

const newArray: number[] = arr.map((elm: number): number => elm * elm);
// console.log(newArray);

// spread operator, rest operator, destructuring 
const bros1: string[] = ["John", "Doe", "John"];
const bros2: string[] = [...bros1, 'Mizan', 'Rahman'];
// console.log(bros2);

const mentors1 = {
    typescript: 'Mezba',
    react: 'Mizan',
    angular: 'Rahman',
}
const mentors2 = {
    prisma: 'Firoz',
    vue: 'John',
    next: 'Tanmoy'
}
const mentors = { ...mentors1, ...mentors2 };

const greetFiends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
}
// greetFiends('John', 'Doe', 'Mizan', 'Rahman');

const chumUser = {
    id: 1,
    name: {
        firstName: 'John',
        lastName: 'Doe',
    },
    contact: '01482555555',
    address: 'Dhaka, Uganda'
}
const { name: { firstName: fstNam, lastName }, contact, address: adres } = chumUser; //used name alias
// array destructuring 
const myFriends = ['John', 'Doe', 'Mizan', 'Rahman'];
const [, , bestFriend, ...rest] = myFriends;

// type alias 
type Student = {
    id: number,
    name: string,
    age: number,
    gender : string,
    address: string,
    contact?: string,
    grade?: string,
    subject?: string,
    marks?: number[]
}
const student1: Student = {
    id: 1,
    name: 'John',
    age: 25,
    gender: 'male',
    contact: '01482555555',
    address: 'Chittagong, Bangladesh',
}

const student2 : Student = {
    id: 2,
    name: 'Mizan',
    age: 35,
    gender: 'male',
    address: 'Dhaka, Bangladesh',
}

type UserName = string;
type UserAge = number;
const userName : UserName = 'John';
const userAge : UserAge = 25;
type Add = (num1 : number, num2 : number) => number;
const add : Add= (num1, num2) => num1 + num2;

// Union and Intersection Types 