const add = (x, y) => {
    checkAndThrowIfNotNumbers(x, y);
    return x + y;
}

const subtract = (x, y) => {
    checkAndThrowIfNotNumbers(x, y);
    return x - y;
}

const multiply = (x, y) => {
    checkAndThrowIfNotNumbers(x, y);
    return x * y;
}

const divide = (x, y) => {
    checkAndThrowIfNotNumbers(x, y);
    checkAndThrowIfIsAZero(y);
    return x / y;
}

const checkAndThrowIfNotNumbers = (x, y) => {
    if (!isNumber(x) || !isNumber(y)) {
        throw new TypeError('Can be only numbers');
    }
}

const isNumber = (x) => {
    return typeof(x) === "number";
}

const checkAndThrowIfIsAZero = (y) => {
    if (y === 0) {
        throw new TypeError(`The divisor can't be zero`);
    }
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};
