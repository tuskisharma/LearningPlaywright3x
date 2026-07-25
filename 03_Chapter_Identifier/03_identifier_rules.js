// JavaScript Identifiers and Literals

// 1) What is an identifier?
// An identifier is the name we give to variables, functions, classes, or parameters.

let userName = "Alice";
const PI = 3.14;
function greetUser() {
  console.log("Hello!");
}

// 2) Rules for writing identifiers
// Rule 1: It can contain letters, digits, underscore (_) and dollar sign ($)
let firstName = "John";
let user_1 = 10;
let $amount = 100;

// Rule 2: It must start with a letter, underscore (_) or dollar sign ($)
let name = "Sam";
let _count = 5;
let $price = 20;

// Invalid examples:
// let 1name = "x";      // cannot start with a digit
// let my-name = "x";    // hyphen is not allowed
// let my name = "x";    // spaces are not allowed

// Rule 3: JavaScript is case-sensitive
let age = 20;
let Age = 30;
console.log(age); // 20
console.log(Age); // 30

// Rule 4: It cannot be a reserved keyword
// Invalid examples:
// let let = 5;          // 'let' is a reserved keyword
// let const = 10;       // 'const' is a reserved keyword
// let if = true;         // 'if' is a reserved keyword

// Rule 5: It should be meaningful and descriptive
let studentName = "Ravi";
let totalMarks = 450;

// 3) Literals
// A literal is a fixed value written directly in the code.

let message = "Hello";       // string literal
let numberValue = 25;        // number literal
let isActive = true;         // boolean literal
let emptyValue = null;       // null literal
let fruits = ["apple", "banana"]; // array literal
let person = { name: "Alice" };   // object literal

// 4) Difference between identifier and literal
// identifier -> name of something (example: person, message, totalMarks)
// literal -> actual value written directly (example: "Hello", 25, true)

let score = 100; // score is an identifier, 100 is a literal

// 5) Summary
// Identifiers are names used for variables, functions, etc.
// Literals are direct values.
// Good identifier names should follow the naming rules and be clear.
