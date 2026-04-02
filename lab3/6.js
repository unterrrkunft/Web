function logCall(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback();

            const time = new Date().toLocaleTimeString();
            console.log("Time:", time);

            resolve();
        }, 1000);
    });
}

let count = 0;

function makeCall() {
    count++;
    console.log(`Call ${count}`);
}

logCall(makeCall)
    .then(() => logCall(makeCall))
    .then(() => logCall(makeCall))
    .then(() => logCall(makeCall))
    .then(() => console.log("All calls finished"));