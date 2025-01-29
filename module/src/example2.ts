// type assersion

let some: any = "this is a string";

some = 'this is a string';
(some as string).split(' ');

some = 123;
(some as number).toFixed

const kgToGram = (value : string | number) => {
    if(value === 'string'){
        const convertedValue = parseFloat(value)*1000;
        return `The converted value is : ${convertedValue}`
    }
    if ( typeof value === 'number'){
        return value*1000;
    }
}

const result = kgToGram(1000) as number;
const result2 = kgToGram(1000) as string;

// interface and type vs interface

type Animal = {
    name : string
}
// merging interface, you can't do it by type
interface Animal2 {
    name : string
}
interface Animal2 {
    age : number,
    mark : number
}
// extends in interface / using $ { } in types
type User = {
    name : string
}
type User2 = {
    status : string
}
type UserData = User & { age : 20 } & User2 ;

const student : UserData = {
    name : 'john',
    age : 20,
    status : 'Job'
}