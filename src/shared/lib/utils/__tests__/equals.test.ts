import { equals } from '../equals';

describe('equals function', () => {
    it('should return true for equal primitive values', () => {
        expect(equals(5, 5)).toBe(true);
        expect(equals('hello', 'hello')).toBe(true);
        expect(equals(true, true)).toBe(true);
    });

    it('should return false for different primitive values', () => {
        expect(equals(5, 10)).toBe(false);
        expect(equals('hello', 'world')).toBe(false);
        expect(equals(true, false)).toBe(false);
    });

    it('should return true for equal objects', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 2 } };

        expect(equals(obj1, obj2)).toBe(true);
    });

    it('should return false for different objects', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 3 } };

        expect(equals(obj1, obj2)).toBe(false);
    });

    it('should handle arrays correctly', () => {
        const arr1 = [1, 2, [3, 4]];
        const arr2 = [1, 2, [3, 4]];
        const arr3 = [1, 2, [3, 5]];

        expect(equals(arr1, arr2)).toBe(true);
        expect(equals(arr1, arr3)).toBe(false);
    });

    it('should handle null and undefined correctly', () => {
        expect(equals(null, null)).toBe(true);
        expect(equals(undefined, undefined)).toBe(true);
        expect(equals(null, undefined)).toBe(false);
    });

    it('should handle NaN', () => {
        expect(equals(NaN, NaN)).toBe(true);
        expect(equals(NaN, 1)).toBe(false);
    });
});
