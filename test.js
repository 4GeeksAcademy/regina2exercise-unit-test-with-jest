const { fromDollarToYen, fromYenToPound } = require('./app.js');

test("One dollar should be around 146.26 yen", function() {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected);
});

test("1000 yen should be around 5.56 pounds", function() {
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected);
});
