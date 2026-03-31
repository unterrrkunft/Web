function cacheLastCall(fn) {
    let lastArg;
    let lastResult;
    let timer;

    return function(arg) {
        // Якщо аргумент та час кешу ще дійсний, повертаємо кеш
        if (arg === lastArg && timer) {
            console.log("Повернення кешованого результату");
            return lastResult;
        }

        // Викликаємо функцію і зберігаємо результат
        lastArg = arg;
        lastResult = fn(arg);
        console.log("Обчислення нового результату");

        // Скидаємо кеш через 10 секунд
        clearTimeout(timer);
        timer = setTimeout(() => {
            lastArg = undefined;
            lastResult = undefined;
            timer = null;
        }, 10000);

        return lastResult;
    };
}

function square(x) {
    return x * x;
}

const cachedSquare = cacheLastCall(square);

console.log(cachedSquare(5));
console.log(cachedSquare(5));

setTimeout(() => console.log(cachedSquare(5)), 11000); 