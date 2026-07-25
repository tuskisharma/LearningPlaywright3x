// let a =10;
// console.log(++a + a + a++ + a);

// let i=1;
// let result=i++ + ++i;
// console.log(result,i);

// let b=10;
// console.log(++b + ++b);
// console.log(b);

// let a = 100;

// console.log(a++ + ++a +a++ + ++a);

// console.log(a);

// let a = 37;

// console.log(--a + a--);

// console.log(a);

// let a = 5; 
// let b = a-- - --a; 
// console.log(b, a);

// let i = 1; 

// let r = i++ > 1 ? i++ : ++i; 
// console.log(r, i);


const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here
let sides = data.trim().split(" ");
let side1 = sides[0];
let side2 = sides[1];
let side3 = sides[2];

if (side1 === side2 && side1 === side3) {
    console.log("Equilateral");
} else if (side1 === side2 || side2 === side3 || side1===side3) {
    console.log("Isosceles");
} else {
    console.log("Scalene");
}
