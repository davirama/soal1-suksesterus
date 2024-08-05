const printFishBash = require('../src/no1');
global.console = {
    log: jest.fn()
};

describe('printFishBash', () => {
    beforeEach(() => {
        console.log.mockClear();
    });

    test('should print correct values for n = 15', () => {
        printFishBash(15);

        expect(console.log).toHaveBeenCalledTimes(15);
        expect(console.log).toHaveBeenCalledWith(1);
        expect(console.log).toHaveBeenCalledWith(2);
        expect(console.log).toHaveBeenCalledWith("fish");
        expect(console.log).toHaveBeenCalledWith(4);
        expect(console.log).toHaveBeenCalledWith("bash");
        expect(console.log).toHaveBeenCalledWith("fish");
        expect(console.log).toHaveBeenCalledWith(7);
        expect(console.log).toHaveBeenCalledWith(8);
        expect(console.log).toHaveBeenCalledWith("fish");
        expect(console.log).toHaveBeenCalledWith("bash");
        expect(console.log).toHaveBeenCalledWith(11);
        expect(console.log).toHaveBeenCalledWith("fish");
        expect(console.log).toHaveBeenCalledWith(13);
        expect(console.log).toHaveBeenCalledWith(14);
        expect(console.log).toHaveBeenCalledWith("fish bash");
    });
});
