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