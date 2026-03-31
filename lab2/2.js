function values(f, low, high) {
    const result = [];
    for (let i = low; i <= high; i++) {
        result.push(f(i));
    }
    return result;
}

function square(x) {
    return x * x;
}

console.log(values(square, 1, 5));
console.log(values(x => x + 10, 3, 7));