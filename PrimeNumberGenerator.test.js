const { test, expect, describe } = require('@jest/globals');
const PrimeNumberGenerator = require('./PrimeNumberGenerator');

const primeNumberGeneratorObj = new PrimeNumberGenerator();

describe('isPrime', () => {
	test('should return false when given a negative number', () => {
		expect(primeNumberGeneratorObj.isPrime(-1)).toBe(false);
	});
});

describe('generate', () => {});
