var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var firstName = "John";
// console.log(firstName);
var favoriteNumber = 42;
// console.log(favoriteNumber);
favoriteNumber = "42";
var car = {
    name: 'Mercedes',
    age: 50
};
var john = {
    name: 'John',
    age: 42,
    preference: 'BMW',
    favoriteNumber: 42
};
// john.name = 'John Doe';
//Cannot assign to 'name' because it is a read-only property.
// console.log(john.favoriteNumber);
var PersonClass = /** @class */ (function () {
    function PersonClass(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonClass.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return PersonClass;
}());
var johnClass = new PersonClass('John', 42);
// johnClass.sayHello();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this);
        console.log("My salary is ".concat(this.salary));
    };
    Employee.prototype.saySalary = function () {
        console.log("My salary is ".concat(this.salary));
    };
    return Employee;
}(PersonClass));
var cathy = new Employee('Cathy', 42, 100000);
// cathy.saySalary();
var fibonacci = [1, 1, 2, 3, 5];
var fibonacci2 = [1, 1, 2, 3, 5];
// console.log(fibonacci.indexOf(1));
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// console.log(mySearch('abc', 'z'));
// function buildName(firstName: string, lastName?: string) {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    if (lastName === void 0) { lastName = 'Cat'; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName(undefined);
var result2 = buildName("Bob", "Adams");
// console.log(result1, result2);
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(123), reverse('hello'));
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
console.log(getLength('hello'), getLength(123));
