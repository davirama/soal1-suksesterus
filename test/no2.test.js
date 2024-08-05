const { sortAscending, sortDescending } = require('../src/no2');

describe('sortAscending', () => {
    test('should sort the array in ascending order', () => {
        const array = [8, 3, 7, 4, 2, 6, 10];
        const sortedArray = sortAscending(array);
        expect(sortedArray).toEqual([2, 3, 4, 6, 7, 8, 10]);
    });

    test('should handle an already sorted array', () => {
        const array = [1, 2, 3, 4, 5];
        const sortedArray = sortAscending(array);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
    });
});

describe('sortDescending', () => {
    test('should sort the array in descending order', () => {
        const array = [8, 3, 7, 4, 2, 6, 10];
        const sortedArray = sortDescending(array);
        expect(sortedArray).toEqual([10, 8, 7, 6, 4, 3, 2]);
    });

    test('should handle an already sorted array', () => {
        const array = [5, 4, 3, 2, 1];
        const sortedArray = sortDescending(array);
        expect(sortedArray).toEqual([5, 4, 3, 2, 1]);
    });
});
