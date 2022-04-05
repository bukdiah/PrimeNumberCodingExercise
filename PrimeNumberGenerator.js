// JS does not have interfaces
// creating class instead

class PrimeNumberGenerator {
	constructor() {}

	isPrime(num) {
		if (num <= 1) return false;
		if (num === 2) return true;
		if (num % 2 === 0) return false;

		return true;
	}

	generate(startingValue, endingValue) {
		return;
	}
}

module.exports = PrimeNumberGenerator;
