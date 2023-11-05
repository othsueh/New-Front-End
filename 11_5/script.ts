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
console.log(john.favoriteNumber);

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
johnClass.sayHello();

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
cathy.saySalary();

let fibonacci: number[] = [1, 1, 2, 3, 5];
interface NumberArray {
    [index: number]: number;
}
let fibonacci2: NumberArray = [1, 1, 2, 3, 5];
console.log(fibonacci.indexOf(1));