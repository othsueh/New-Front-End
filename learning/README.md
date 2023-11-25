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
Before talk about object type, I think you should know what's classical OOP, not JS OOP, here is [ref1](#classic-oop)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet risus non dui placerat egestas. Ut vitae sagittis sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu efficitur leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi aliquet accumsan maximus. Cras magna mauris, interdum ut dolor vitae, tempus placerat arcu. Donec molestie ex id porttitor imperdiet. Nulla maximus elementum tincidunt. Vestibulum congue volutpat risus, luctus luctus eros tempor eu. Nam elit metus, malesuada a tortor at, varius fringilla mi. Maecenas molestie venenatis mauris, nec eleifend enim molestie vitae. Pellentesque vel vestibulum diam, id egestas odio.

Donec egestas eros nec purus auctor, id sagittis quam convallis. Nam dapibus posuere placerat. Donec lacinia pellentesque mauris, eget dignissim sem. Vestibulum mollis massa at euismod elementum. Curabitur a velit ut mauris porttitor faucibus a et lorem. Duis tristique odio non porta egestas. Suspendisse mi velit, pellentesque non volutpat ac, sodales porttitor augue.

Maecenas convallis, ante et semper mollis, metus ex gravida dui, rutrum malesuada enim sem vulputate enim. Duis tincidunt tempus pretium. In consectetur porta nunc, et ultrices ante euismod non. Donec finibus, elit vitae lacinia scelerisque, nisi purus convallis mi, aliquet pharetra sem nibh id tortor. Sed scelerisque at velit consequat pulvinar. Mauris quis volutpat lorem. Aliquam semper felis eu tortor gravida porttitor. Morbi diam mi, condimentum sit amet neque id, sollicitudin tempus libero. Donec pretium ipsum a pharetra dapibus.

In ultricies in ligula vel facilisis. Suspendisse potenti. Donec in tellus eu lacus pulvinar lacinia eu sed neque. Integer rhoncus, purus id ornare consectetur, enim sem mollis augue, ac feugiat turpis leo a dolor. Maecenas nec faucibus metus. Nullam non lacus vel lacus hendrerit interdum. Aliquam viverra commodo mi, et bibendum ligula dapibus ut. Fusce sit amet massa congue, iaculis arcu eu, faucibus ex. Donec ac leo ut massa tempus molestie vel non odio. Aenean vel tincidunt ex. Donec a iaculis mauris. Cras laoreet scelerisque pretium.

Maecenas fermentum, elit ut consequat tempor, nulla dolor tincidunt justo, vitae mollis purus ligula eu lacus. Nam nisi nunc, iaculis at iaculis ac, vehicula eu nisl. Donec enim metus, hendrerit quis vehicula vel, malesuada sed dui. Sed quam velit, fermentum in accumsan nec, maximus ac ante. Donec ligula orci, ornare nec tempor eu, consequat et orci. Proin sed accumsan nisl, tempus commodo nisi. Proin massa turpis, consequat eu odio vel, commodo interdum sem. Sed ac magna in leo fermentum tempus. Aenean erat tellus, vehicula in dui non, eleifend lacinia lectus. Nam mi erat, euismod maximus magna sit amet, suscipit dapibus nisl. Nunc mattis, nisi quis facilisis tincidunt, justo massa aliquet mauris, et facilisis urna erat vitae velit. Sed eget quam ultrices, tincidunt quam eu, consequat eros. Vestibulum quis nisl dictum, sodales nisi id, ornare risus. Duis nec eros eleifend, hendrerit lectus id, elementum enim. Quisque vulputate magna non hendrerit luctus.



## Classic OOP
As an old JS user, I'm familiar with JS OOP, not Classical OOP. So it's time to learn it!  
### Typical OOP


