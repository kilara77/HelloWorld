const { TestResult } = require('@jest/types');
const { returnText } = require('./util');
const { addArray } = require('./util');

test('Should return string with name and age', () => {
    const text = returnText('Mike', 20);
    expect(text).toBe('Mike is 20 years old.');
});

test('Should return string with no name or age', () => {
    const text = returnText('', null);
    expect(text).toBe(' is null years old.');
});

test('Should return sum of all values in array', () => {
    const array = [2, 3, 4, 5, 6, 7];
    const sumArray = addArray(array);
    expect(sumArray).toBe(27);
});

test('Should return 0', () => {
    const array = [];
    const sumArray = addArray(array);
    expect(sumArray).toBe(0);
})