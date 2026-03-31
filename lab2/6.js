function add(a) {
    return function(b) {
        return a + b;
    };
}

const addFive = add(5); // 5
console.log(addFive(10)); // 15
console.log(addFive(3));  // 8

console.log(add(2)(7));   // 9
console.log(add(10)(20)); // 30