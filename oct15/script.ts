let isDone: boolean = false;
let decLiteral: number = 6;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
let hello: string = "Hello World!";
let number: string = `The number is ${infinityNumber}`;
function alertName(): void{
    alert("My name is Tom");
}
// alertName();
let unusable: void = undefined;
let u: void;
//subtopic : error
// let num: number = u;
let randomtype: any = 4;
// console.log(randomtype);
randomtype = "hello";
// console.log(randomtype);
// randomtype = true;
// console.log(randomtype);
// console.log(randomtype.myName);
// console.log(randomtype.myName.firstName);
// randomtype.setName("Jerry");
// randomtype.setName("Jerry").sayHello();
// randomtype.myName.setFirstName("Cat");
let myfavoriteNumber: string | number;
myfavoriteNumber = 7;
myfavoriteNumber = "seven";
function getLength(something : string | number): string{
    return something.toString();
}
console.log(getLength(myfavoriteNumber));

interface Person{
    name: string;
    age: number;
}
let car: Person = {
    name: "machine",
    age: 18
}