'use strict';

const sumFunc = () => {
    let result = 0;
    return (value) => {
        result += value;
        return result;
    };
};

const sum = sumFunc();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

const subFunc = () => {
    let result = 0;
    return (value) => {
        result -= value;
        return result;
    };
};

const sub = subFunc();
console.log(sub(3));
console.log(sub(5));
console.log(sub(20));

const mulFunc = () => {
    let result = 1;
    return (value) => {
        result *= value;
        return result;
    };
};

const mul = mulFunc();
console.log(mul(3));
console.log(mul(5));
console.log(mul(2));