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

invokeAfterDelay(getRandomNumber, 2000)
    .then(result => {
        console.log("Random number:", result);
    });