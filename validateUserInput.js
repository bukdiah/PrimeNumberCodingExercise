function validateUserInput(input) {
	const num = Number(input); // convert string to number..empty string returns 0

	// if num is a positive integer
	if (Number.isInteger(num) && num > 0) return true;
	return false;
}

module.exports = validateUserInput;
