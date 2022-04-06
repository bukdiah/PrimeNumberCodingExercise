# PrimeNumberCodingExercise

This program was written using version 14.5.1 of NodeJS and uses the Jest JavaScript Testing Framework.

## Task

Your task is to use test driven development to implement a prime number generator that returns an ordered list of all prime numbers in a given range (inclusive of the endpoints).

*In mathematics, a prime number (or a prime) is a natural number which has exactly two distinct natural
number divisors: 1 and itself. The first twenty-six prime numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101*

*[Natural numbers](https://www.cuemath.com/numbers/natural-numbers/) are a part of the number system, including all the positive integers from 1 to infinity. Natural numbers are also called counting numbers because they do not include zero or negative numbers. They are a part of real numbers including only the positive integers, but not zero, fractions, decimals, and negative numbers.*

## Instructions to install program locally

1. Install [NodeJS](https://nodejs.org/en/download/) on your machine.
2. Run `git clone https://github.com/bukdiah/PrimeNumberCodingExercise.git`
3. `cd` into the newly created PrimeNumberCodingExercise folder/directory
4. Run `npm ci` to install dependencies (should install Jest Testing Framework) 

## How run program via Command Line Interface

1. `cd` into PrimeNumberCodingExercise folder/director
2. Run `node driver.js [startingValue] [endingValue]` where [startingValue] is the natural number you start at and [endingValue] is the natural number you end at for the prime number range.

## Instructions to run unit tests

Run `npm test` to execute ALL unit tests (eg. files with .test. in their name)

Run `npx jest FILE_NAME` eg. `npx jest PrimeNumberGenerator.test.js` to execute unit tests for the specified file

Run `npx jest --coverage FILE_NAME` eg. `npx jest --coverage PrimeNumberGenerator.test.js` to execute unit tests and display code coverage for specified file
