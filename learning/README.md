# Typescript
![](./asset/typescript.png)

## Origin Data Type
- boolean
- number
- string
- null
- undefined
- Symbol (ES6)

> [!CAUTION]
> If you use build function, it create Object type, not origin data type.
> ```tsc
> let createByNewString: string = new String('string');
> //return Error
> //Type 'String' is not assignable to type 'string'.
> ```