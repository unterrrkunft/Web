const [,, operation, arg1, arg2] = process.argv;

const num1 = Number(arg1);
const num2 = Number(arg2);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Both arguments must be numbers.");
    process.exit(1);
}

let result;
switch (operation) {
    case 'add':
        result = num1 + num2;
        break;
    case 'sub':
        result = num1 - num2;
        break;
    case 'mul':
        result = num1 * num2;
        break;
    case 'div':
        if (num2 === 0) {
            console.log("Error: Division by zero.");
            process.exit(1);
        }
        result = num1 / num2;
        break;
    default:
        console.log("Error: Unknown operation.");
        process.exit(1);
}

console.log(`Result = ${result}`);