const { add, subtract, multiply, divide } = require('../index');

describe('simple arithmetic', () => {
    describe('addition', () => {
        beforeAll(() => {
            expect(() => {
                return add('a', 2)
            }).toThrow();
        })
        it.each([
            {x: 5, y: 5, res: 10},
            {x: 5, y: 6, res: 11},
            {x: 5, y: 1, res: 8},
        ])('expect $x + $y = $res' , ({x, y, res}) => {
            expect(add(x, y)).toEqual(res);
        });
    });

    describe('subtract', () => {
        beforeAll(() => {
            expect(() => {
                return subtract('a', 'b')
            }).toThrow();
        });
        it.each([
            {x: 4, y: 2, res: 2},
            {x: -4, y: 2, res: -6}
        ])('expect $x - $y = $res', ({x, y, res}) => {
            expect(subtract(x, y)).toEqual(res);
        });
    });

    describe('multiply', () => {
        beforeAll(() => {
            expect(() => {
                return multiply('a', 5)
            }).toThrow();
        });
        it.each([
            {x: 4, y: 2, res: 8},
            {x: 8, y: 2, res: 16}
        ])('expect $x * $y = $res', ({x, y, res}) => {
            expect(multiply(x, y)).toEqual(res);
        });
    });

    describe('divide', () => {
        beforeAll(() => {
            describe('No char', () => {
                expect(() => {
                    return divide('b', 2)
                }).toThrow();
            });
            describe('No zero', () => {
                expect(() => {
                    return divide(2, 0)
                }).toThrow();
            });
        });
        it.each([
            {x: 4, y: 2, res: 2},
            {x: 25, y: 5, res: 5}
        ])('expect $x / $y = $res', ({x, y, res}) => {
            expect(divide(x, y)).toEqual(res);
        });
    });
});
