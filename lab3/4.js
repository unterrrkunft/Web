const users = [
    { id: 0, name: 'John', age: 23, city: 'Boston' },
    { id: 1, name: 'Anna', age: 20, city: 'Kyiv' },
    { id: 2, name: 'Jane', age: 25, city: 'New York' },
    { id: 3, name: 'Sam', age: 22, city: 'Seoul' }
];

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(u => u.id === id);

            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found'));
            }
        }, 1000);
    });
}

getUser(1)
    .then(user => console.log(user))
    .catch(error => console.log(error.message));

getUser(5)
    .then(user => console.log(user))
    .catch(error => console.log(error.message));