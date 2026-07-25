const readline = require('readline');

function classifyTriangle(side1, side2, side3) {
    if (side1 === side2 && side1 === side3) {
        return 'Equilateral';
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return 'Isosceles';
    }
    return 'Scalene';
}

function processInput(input) {
    const sides = input.trim().split(/\s+/);
    if (sides.length < 3) {
        console.error('Please enter three side values separated by spaces.');
        process.exit(1);
    }

    const side1 = sides[0];
    const side2 = sides[1];
    const side3 = sides[2];
    console.log(classifyTriangle(side1, side2, side3));
}

if (process.stdin.isTTY) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Enter three side lengths separated by spaces: ', answer => {
        processInput(answer);
        rl.close();
    });
} else {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', chunk => { data += chunk; });
    process.stdin.on('end', () => processInput(data));
}
