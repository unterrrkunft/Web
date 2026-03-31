function createCounter() {
    let value = 0;

    return {
        increment: function() {
            value++;
        },
        getValue: function() {
            return value;
        }
    };
}

const counter = createCounter();

console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());