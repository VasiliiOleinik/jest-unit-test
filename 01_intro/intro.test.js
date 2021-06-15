const { sum, nativeNull } = require('./intro');


describe('Sum function:', () => {
    test('should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4); // Число которое мы должны получить должно быть равно 4
        expect(sum(1, 3)).toEqual(4); // Число которое мы должны получить должно быть равно 4
    });

    test('should retirn value correctly comparing to other values', () => {
        expect(sum(2, 3)).toBeGreaterThan(4); // Число которое мы должны получить должно быть больше чем 4
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5); // Число которое мы должны получить должно быть больше или равно 5
        expect(sum(2, 3)).toBeLessThan(10);  // Число которое мы должны получить должно быть меньше чем 10
        expect(sum(2, 3)).toBeLessThanOrEqual(5); // Число которое мы должны получить должно быть меньше либо равно 5
    });

    test('should sum 2 float values correctly', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3); // Число должно быть близко к результату
    });

});


describe('Native null:', () => {
    test('should return false value null', () => {
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull(); // Результат должен быть null
        // expect(nativeNull()).toBeNaN();  // Результат должен быть NaN
        expect(nativeNull()).toBeFalsy(); // Результат должен быть фолси (falsy values)
        expect(nativeNull()).toBeDefined(); // Ожидаем, что значение было определено
        expect(nativeNull()).not.toBeTruthy(); // Результат должен быть НЕ фолси (falsy values)
        expect(nativeNull()).not.toBeUndefined(); // Не должен быть undefined
    });
});
