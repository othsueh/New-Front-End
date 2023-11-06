let firstName: string = "John";
// console.log(firstName);

let favoriteNumber: string | number = 42;
// console.log(favoriteNumber);
favoriteNumber = "42";
// console.log(favoriteNumber);


interface Person {
    readonly name: string;
    age: number;
    preference?: string;
    [propName: string]: any;
}

let car: Person = {
    name: 'Mercedes',
    age: 50
}
let john: Person = {
    name: 'John',
    age: 42,
    preference: 'BMW',
    favoriteNumber: 42
}
// john.name = 'John Doe';
//Cannot assign to 'name' because it is a read-only property.
// console.log(john.favoriteNumber);

class PersonClass {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let johnClass = new PersonClass('John', 42);
// johnClass.sayHello();

class Employee extends PersonClass {
    salary: number;
    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }
    sayHello() {
        super.sayHello();
        console.log(`My salary is ${this.salary}`);
    }
    saySalary() {
        console.log(`My salary is ${this.salary}`);
    }
}

let cathy = new Employee('Cathy', 42, 100000);
// cathy.saySalary();

let fibonacci: number[] = [1, 1, 2, 3, 5];
interface NumberArray {
    [index: number]: number;
}
let fibonacci2: NumberArray = [1, 1, 2, 3, 5];
// console.log(fibonacci.indexOf(1));

function sum(x: number, y: number): number {
    return x + y;
}
console.log(sum(1, 2));
let mySum = function (x: number, y: number): number {
    return x + y;
};
// console.log(mySum(1, 3));
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
}
// console.log(mySearch('abc', 'z'));
// function buildName(firstName: string, lastName?: string) {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
function buildName(firstName: string = 'Tom', lastName: string = 'Cat') {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName(undefined);
let result2 = buildName("Bob", "Adams");
// console.log(result1, result2);

function push(array: any[], ...items: any[]){
    items.forEach(function(item: any) {
        array.push(item);
    });
}
let a: number[] = [];
push(a, 1, 2, 3);
// console.log(a);
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(123),reverse('hello'));

function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else{
        return something.toString().length;
    }
}
console.log(getLength('hello'), getLength(123));