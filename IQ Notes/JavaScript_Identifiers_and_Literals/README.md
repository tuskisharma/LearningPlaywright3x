# JavaScript Identifiers and Literals

## 1. Identifiers
An identifier is the name given to a variable, function, class, or parameter so that it can be referred to later in the program.

### Rules for identifiers
- Must start with a letter, underscore (_), or dollar sign ($)
- Can contain letters, digits, underscore, or dollar sign
- Cannot start with a digit
- JavaScript is case-sensitive, so `name` and `Name` are different
- Avoid using reserved keywords such as `let`, `const`, `if`, `function`

### Examples
```javascript
let userName = "Alice";
const PI = 3.14;
function greetUser() {
  console.log("Hello!");
}
```

In the above example, `userName`, `PI`, and `greetUser` are identifiers.

## 2. Literals
A literal is a fixed value written directly in the code. It represents a value itself rather than a name.

### Common JavaScript literals
- String literals: `"Hello"`, `'World'`, `` `Hi` ``
- Number literals: `10`, `3.14`, `1e5`
- Boolean literals: `true`, `false`
- Null literal: `null`
- Array literal: `[1, 2, 3]`
- Object literal: `{ name: "Alice" }`
- RegExp literal: `/abc/`

### Examples
```javascript
let message = "Hello";   // string literal
let age = 25;            // number literal
let isReady = true;      // boolean literal
let person = { name: "Alice" }; // object literal
```

## 3. Difference between Identifier and Literal
- An identifier is a name used to refer to something.
- A literal is the actual value written directly in the code.

### Example
```javascript
let score = 100;
```

- `score` is an identifier
- `100` is a literal

## 4. Summary
- Identifiers are names given to program elements.
- Literals are direct values used in the program.
- Both are basic building blocks of JavaScript code.
