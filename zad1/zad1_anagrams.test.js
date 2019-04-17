const {
    genAnagrams
} = require("../index");

test('should output anagrams for BILLE', () => {
    const result = genAnagrams("BILLE").sort().map((x) => { return x.toUpperCase() });

    const expected = ['BILLE', 'BILEL', 'BIELL', 'BLILE', 'BLIEL', 'BLLIE', 'BLLEI', 'BLEIL', 'BLELI', 'BEILL', 'BELIL', 'BELLI', 'IBLLE', 'IBLEL', 'IBELL', 'ILBLE', 'ILBEL', 'ILLBE', 'ILLEB', 'ILEBL', 'ILELB',
        'IEBLL', 'IELBL', 'IELLB', 'LBILE', 'LBIEL', 'LBLIE', 'LBLEI', 'LBEIL', 'LBELI', 'LIBLE', 'LIBEL', 'LILBE', 'LILEB', 'LIEBL', 'LIELB', 'LLBIE', 'LLBEI', 'LLIBE', 'LLIEB', 'LLEBI', 'LLEIB', 'LEBIL', 'LEBLI',
        'LEIBL', 'LEILB', 'LELBI', 'LELIB', 'EBILL', 'EBLIL', 'EBLLI', 'EIBLL', 'EILBL', 'EILLB', 'ELBIL', 'ELBLI', 'ELIBL', 'ELILB', 'ELLBI', 'ELLIB'
    ].sort();

    expect(result).toEqual(expected);
});