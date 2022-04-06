const { test, expect, describe } = require('@jest/globals');
const validateUserInput = require('./validateUserInput');

test('should return false when given an empty string', () => {
	expect(validateUserInput('')).toBe(false);
});
