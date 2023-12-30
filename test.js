
test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One USD should be 149.03 JPY", function() {
    const { fromDollarToYen } = require('./app.js')
    const dollars = fromDollarToYen(10);
    const expected = 10 * 149.03;
    expect(fromDollarToYen(10)).toBe(1490.3);
})

test("One JPY should be 0.0072 GBP)", function() {
    const { fromYenToPound } = require('./app.js')
    const dollars = fromYenToPound(1000);
    const expected = 1000 * 0.0072;
    expect(fromYenToPound(1000)).toBe(7.2);
})