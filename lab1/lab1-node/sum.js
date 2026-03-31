const args = process.argv.slice(2);

const numbers = args.map(Number);

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(`Sum = ${sum}`);