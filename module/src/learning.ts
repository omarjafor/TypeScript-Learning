// 1. Basic Types
let basicString: string = "Hello TypeScript";
let basicNumber: number = 42;
let basicBoolean: boolean = true;

// 2. Arrays
let numberArray: number[] = [1, 2, 3];
let stringArray: string[] = ["TypeScript", "is", "fun"];

// 3. Tuple
let tuple: [string, number] = ["age", 25];

// 4. Object Type
type Person = {
    name: string;
    age: number;
    skills: string[];
};

// 5. Function Types
function add(a: number, b: number): number {
    return a + b;
}

// 6. Interface
interface Developer {
    name: string;
    role: string;
    experience: number;
    technologies: string[];
}

// 7. Generic Function
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

// Practice Examples:
const developer: Developer = {
    name: "John",
    role: "Frontend",
    experience: 3,
    technologies: ["TypeScript", "React", "Node"]
};

const numbers = [1, 2, 3, 4, 5];
console.log(firstElement(numbers)); // Will return 1

// Union Types
type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";
