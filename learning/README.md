# Typescript
![](./asset/typescript.png)
---
## Origin Data Type
- boolean
- number
- string
- null
- undefined
- Symbol (ES6)

> [!CAUTION]
> If you use build function, it create Object type, not origin data type.
> origin type: `true/false` or `Boolean(1/0)`  
> object type: `new Boolean(1/0)`
```typescript
let createByNewString: string = new String('string');
//error: Type 'String' is not assignable to type 'string'.
```

### number
Can be express in below way:
- decimal
- heximal `0x`
- binary  `0b`
- oct `0o`

Other useful number:
- `NaN`
- `Infinty`

### void
It's a empty value, which means you can only assign below value to it:
- `undefined`
- `null`

> [!NOTE]
> - `undefined`
> - `NaN`  
> They are subset of every type. Which means you can assign to any type.
---
## Any type and Type inference
In typescript, it still support dynamic type variable. And you can also set more than one type to a variable.  
### Any 
```typescript
let anything: any = 123;
//anything now 123
anything = "abc";
//anything now "abc"
```
Also it's ok when you access attribute or call method of the any type object.  
Except this, you can also init it without a type just like below:
```typescript
let anyThing;
anyThing = 7;
anyThing = 'hello';
```
> [!CAUTION]
> If you want to set any type variable, follow above way, or it will cause type inference.
### Type inference
If you init a variable and assign a value to it simultaneously, but without typing the type.  
Typescript will automatically detect the type of variable.
```typescript
let number = 7;
console.log(typeof number);
//number
number = 'seven';
//error TS2322: Type 'string' is not assignable to type 'number'.
```
And back to the `any` type init problem, since we don't assign any value.  
So it will be inference to `any` type.

---
## Other type
- Unino type
- Object type
- Array type
- Function type

### Union type
Union type can let variable have many types, but it only have a type in one time, since it still need to be inferenced.  
Here is how we modify the type inference problem with union type:
```typescript
let seven: number | string = 7;
console.log(typeof seven);
//number
seven = 'seven';
//string, no return error.
```
> [!CAUTION]
> when you want to access attribtue or call method of union type variable, you can only use attribute or method wihch all variable's type have.

### Object type
Before talk about object type, I think you should know what's classical OOP, not JS OOP, here is [ref1](#classic-oop).  
Interface define all the rules, which means you can only implement justify things from rule, not less than rule.
> [!NOTE]
> But in class, you can define more things than rule!
```typescript
interface Person {
    name: string;
    age: number;
}
//justify
let tom: Person = {
    name: 'Tom',
    age: 25,
};
//error
let tom: Person = {
    name: 'Tom'
};
//error
let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
```
But sometimes we don't want the "justify", so we use choosable attribute.
```typescript
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};
```
And If we want more attributes than interface, we can use `class`.  

And there is one thing to be done, the `readonly` attribute, it can be only assign value when build the object.
```typescript
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom.id = 9527;
// error: Cannot assign to 'id' because it is a constant or a read-only property.
```
> [!NOTE]
> When name a interface, we usually use capital 'I' to represent interface.
```typescript
interface IPerson {
  [prop: string]: string;
  name: string;
  age: number;
}
```
### Array Type
The basic array type implement is simple, like below:
```typescript
let fibonacci: number[] = [1,1,2,3,5]
```
And you can also use [generic](#generic) to define this:
```typescript
let fibonacci: Array<number> = [1,1,2,3,5]
```
> [!CAUTION]
> All the rules in original data type also need to be followed in array type.

You can also use `any` in array type to store any types of data in one array.
```typescript
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
```
### Function type
In JS we have function declaration and function expression, also in TS! If you forget what's the [difference](#expression-&-declaration)

---
## Expression & Declaration
在 TypeScript（和 JavaScript）中，函數聲明（Function Declaration）和函數表達式（Function Expression）有幾個主要區別：

1. **提升（Hoisting）**：
   - 函數聲明會被提升，意味著你可以在聲明之前調用它。
   - 函數表達式不會被提升，因此只能在定義之後使用。

2. **匿名與命名**：
   - 函數表達式可以是匿名的或命名的。
   - 函數聲明則必須有一個名稱。

3. **語法**：
   - 函數聲明的語法類似於 `function functionName() {}`。
   - 函數表達式的語法類似於 `const functionName = function() {}` 或使用箭頭函數 `const functionName = () => {}`。

這些差異影響了函數如何在代碼中被組織和調用。
---
## Generic
Generic is a useful tool, it makes your code more facile.  
What Generic do is pass the type of variable as argument to functions or class, let them can handle different types of data.
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);
```

## Classic OOP
As an old JS user, I'm familiar with JS OOP, not Classic OOP. So it's time to learn it!  
### Classic OOP
Classic OOP has three elements need to define.
1. Interface: The rule of the blueprint, decide "What must be implement"(Such as attributes, methods), not "How to implement".
2. Class: The blueprint, decide "How to implement", contains all the rule from interface.
3. Implement:  Clearly define what's the attributes, what methods behave.
```typescript
interface IShape {
  width: number;
  height: number;
  getArea(): number;
}

class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }
}

const square = new Square(5);
console.log(square.getArea()); // Outputs: 25
```
### JavaScript OOP
JS OOP is not that clear to understand, since it lies on function and it's prototype to implement OOP.  
Every function has its prototype, and prototype contains all attributes and methods can be build by the function.  
Below shows how complex to implement oop in javascript:
```javascript
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};

function Square(side) {
    Rectangle.call(this, side, side);
}

// Inheriting from Rectangle
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

const square = new Square(5);
console.log(square.getArea()); // Outputs: 25
```
### Conclusion
Give up JS OOP, use TS instead!
