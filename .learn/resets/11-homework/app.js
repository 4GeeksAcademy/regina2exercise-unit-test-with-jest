const sum = (a, b) => {
    return a + b;
}

console.log(sum(7, 3));

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * 1.07;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}

module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
