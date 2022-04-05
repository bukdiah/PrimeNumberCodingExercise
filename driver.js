const PrimeNumberGenerator = require('./PrimeNumberGenerator');

let primeNumberGeneratorObj = new PrimeNumberGenerator();

let commandLineArgs = process.argv;

if (commandLineArgs.length < 4) {
	console.log(
		'Missing arguments. The proper usage is: node driver.js [startingValue] [endingValue]'
	);
	process.exitCode = 0;
} else {
	let startingValue = parseInt(commandLineArgs[2]);
	let endingValue = parseInt(commandLineArgs[3]);

	console.log(
		primeNumberGeneratorObj.generate(startingValue, endingValue).join(', ')
	);
}
