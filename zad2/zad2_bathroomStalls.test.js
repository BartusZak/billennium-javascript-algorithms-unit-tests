
const {
    bathroomStalls
} = require("../index");

test('should output Bathroom Stalls Algorithm data', () => {
    const result = bathroomStalls();
    const expected = [ [ 1, 0 ], [ 1, 0 ], [ 1, 1 ], [ 0, 0 ], [ 500, 499 ] ];

    expect(result).toEqual(expected);
});