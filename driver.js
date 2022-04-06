const PrimeNumberGenerator = require('./PrimeNumberGenerator');
const validateUserInput = require('./validateUserInput');

let primeNumberGeneratorObj = new PrimeNumberGenerator();

let commandLineArgs = process.argv;

if (commandLineArgs.length < 4) {
	console.log(
		'Missing arguments. The proper usage is: node driver.js [startingValue] [endingValue]'
	);
	process.exitCode = 0;
} else {
	let startingValue = commandLineArgs[2];
	let endingValue = commandLineArgs[3];

	// if startingValue or endingValue arguments are invalid
	if (!validateUserInput(startingValue) || !validateUserInput(endingValue)) {
		console.log(
			'One or both of your arguments are invalid.\nThe program only accepts natural numbers which includes positive integers, but not zero, fractions, decimals, and negative numbers.'
		);
		process.exitCode = 0;
	} else {
		console.log(
			primeNumberGeneratorObj
				.generate(parseInt(startingValue), parseInt(endingValue))
				.join(', ')
		);
	}
}
