const capitalizeProperty = (arr, prop) => 
    arr.map(obj => ({
        ...obj, // копіюємо всі інші властивості
        [prop]: obj[prop].charAt(0).toUpperCase() + obj[prop].slice(1) // змінюємо тільки потрібну властивість
    }));

const persons = [
    { name: 'john', age: 23, city: 'Boston' },
    { name: 'anna', age: 20, city: 'Kyiv' },
    { name: 'jane', age: 25, city: 'New York' }
];

const newPersons = capitalizeProperty(persons, "name");
console.log(newPersons);