const checkReverseWord = require('../src/no3');

describe('checkReverseWord', () => {
    test('should return true for reverse word', () => {
        expect(checkReverseWord("nababan")).toBe(true);
    });

    test('should return false for non reverse word', () => {
        expect(checkReverseWord("javascript")).toBe(false);
    });
});
