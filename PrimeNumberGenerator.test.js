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

	test('should return false when argument is 1', () => {
		expect(primeNumberGeneratorObj.isPrime(1)).toBe(false);
	});

	test('should return false when argument is 0', () => {
		expect(primeNumberGeneratorObj.isPrime(0)).toBe(false);
	});

	test('should return false when argument is an even number that is NOT 2', () => {
		expect(primeNumberGeneratorObj.isPrime(6)).toBe(false);
	});

	test('should return true when argument is 7', () => {
		expect(primeNumberGeneratorObj.isPrime(7)).toBe(true);
	});
});

describe('generate', () => {});
