// console.log(process.env);

function sum(a, b) {
    process.emitWarning("This function is deprecated, use calc instead.", "DeprecationWarning");

    return a + b;
}

console.log( sum(3, 5) );