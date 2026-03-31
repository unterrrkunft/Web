function average(...numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

console.log(average(5, 10, 15));
console.log(average(2, 4, 6, 8, 10));
console.log(average(7, 3));