const { test, expect, describe } = require('@jest/globals');
const validateUserInput = require('./validateUserInput');

test('should return false when given an empty string', () => {
	expect(validateUserInput('')).toBe(false);
});

test('should return true when given a positive integer like 3', () => {
	expect(validateUserInput('3')).toBe(true);
});

test('should return false when given a number with a decimal point like 2.0', () => {
	expect(validateUserInput('2.0')).toBe(false);
});

test('should return false when given a string with letters and numbers like 123abc', () => {
	expect(validateUserInput('123abc')).toBe(false);
});

test('should return false when given a string with only letters like hello', () => {
	expect(validateUserInput('hello')).toBe(false);
});

test('should return false when given a negative integer like -5', () => {
	expect(validateUserInput('-5')).toBe(false);
});

test('should return false when given a negative decimal like -5.2', () => {
	expect(validateUserInput('-5.2')).toBe(false);
});

test('should return false when given a negative number with a decimal point like -2.0', () => {
	expect(validateUserInput('-2.0')).toBe(false);
});
