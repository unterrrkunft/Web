function callWithContext(obj, callback) {
    callback.call(obj);
}

const person = {
    name: "Anna",
    age: 20
};

function happyBirthday() {
    const date = new Date().toLocaleDateString();
    console.log(`Today is ${date}! Happy birthday ${this.name}.`);
}

callWithContext(person, happyBirthday);