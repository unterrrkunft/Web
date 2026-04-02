function invokeAfterDelay(fn, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fn());
        }, delay);
    });
}

function getRandomNumber() {
    return Math.floor(Math.random() * 11);
}

function produceRandomAfterDelay(delay) {
    return invokeAfterDelay(getRandomNumber, delay);
}

Promise.all([
    produceRandomAfterDelay(2000),
    produceRandomAfterDelay(3000)
])
.then(results => {
    const sum = results[0] + results[1];
    console.log("Numbers:", results);
    console.log("Sum:", sum);
});