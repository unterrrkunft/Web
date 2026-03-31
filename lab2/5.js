function getGreeting() {
    let lastName = null;
    let lastGreeting = null;

    return function(name) {
        if (name === lastName) {
            return lastGreeting;
        } else {
            lastName = name;
            lastGreeting = `Hello ${name}`;
            return lastGreeting;
        }
    };
}

const greet = getGreeting();

console.log(greet("John"));
console.log(greet("Anna"));
console.log(greet("Anna")); //взято з кешу