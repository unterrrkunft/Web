function createTextChecker(array) {
    return function(text) {
        return array.includes(text);
    };
}

const words = ["apple", "banana", "cherry"];
const checkWord = createTextChecker(words);

console.log(checkWord("apple"));
console.log(checkWord("orange"));
console.log(checkWord("cherry"));
console.log(checkWord("grape"));