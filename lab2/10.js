function callWithLogging(callback, ...args) {
    const time = new Date().toLocaleString(); // дата та час
    const result = callback(...args);

    console.log(`Function name: ${callback.name}`);
    console.log(`Arguments: (${args.length}) [${args.join(", ")}]`);
    console.log(`Time: ${time}`);

    return result;
}

function sum(a, b) {
    return a + b;
}

callWithLogging(sum, 4, 6);