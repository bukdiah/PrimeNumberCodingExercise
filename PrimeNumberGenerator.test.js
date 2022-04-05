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

	test('should return false when argument is 15', () => {
		expect(primeNumberGeneratorObj.isPrime(15)).toBe(false);
	});
});

describe('generate', () => {
	test('should return [2,3,5,7] for generate(1,10)', () => {
		const desiredResult = [2, 3, 5, 7];
		expect(primeNumberGeneratorObj.generate(1, 10)).toEqual(desiredResult);
	});

	test('should return [2,3,5,7] for generate(10,1)', () => {
		const desiredResult = [2, 3, 5, 7];
		expect(primeNumberGeneratorObj.generate(10, 1)).toEqual(desiredResult);
	});
});
