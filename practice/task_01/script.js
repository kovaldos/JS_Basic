// 1.
const greetingsUserWithAge = (userName, userLastName, userAge) => `Hello ${userName} ${userLastName} with age ${userAge}`;

console.log(greetingsUserWithAge('Ivan', 'Petrov', 17));

// 2.
const numberToSquare = (number) => number ** 2;

console.log(numberToSquare(11));

// 3.
const positiveOrNegativeNumber = (num) => console.log(num > 0 ? '+++' : '---');

positiveOrNegativeNumber(5);
