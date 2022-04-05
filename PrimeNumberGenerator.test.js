const { test, expect, describe } = require('@jest/globals');
const PrimeNumberGenerator = require('./PrimeNumberGenerator');

const primeNumberGeneratorObj = new PrimeNumberGenerator();

describe('isPrime', () => {
	test('should return false when given a negative number', () => {
		expect(primeNumberGeneratorObj.isPrime(-1)).toBe(false);
	});

	test('should return true when argument is 2', () => {
		expect(primeNumberGeneratorObj.isPrime(2)).toBe(true);
	});
});

describe('generate', () => {});
