// JS does not have interfaces
// creating class instead

class PrimeNumberGenerator {
	constructor() {}

	isPrime(num) {
		if (num <= 1) return false;
		else if (num === 2) return true;
		else if (num % 2 === 0) return false;

		// check if number is odd and composite
		for (let i = 3; i <= Math.sqrt(num); i += 2) {
			if (num % i === 0) return false;
		}

		return true;
	}

	generate(startingValue, endingValue) {
		let primesArray = [];

		// if given a backwards (inverse) range (eg. 10, 1)
		if (startingValue >= endingValue) {
			let temp = startingValue;
			startingValue = endingValue;
			endingValue = temp;
		}

		for (let i = startingValue; i <= endingValue; i++) {
			if (this.isPrime(i)) primesArray.push(i);
		}

		return primesArray;
	}
}

module.exports = PrimeNumberGenerator;
