// a
//
// console.log(a);
// script.js:1 Uncaught ReferenceError: a is not defined
//     at script.js:1:1

let a = '2';
let b = '3';
// console.log(a + b); // 23

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');

const SUM = num1 + num2;
const DIFF = num1 - num2;
const MULT = num1 * num2;
const DIVIDE = num1 / num2;
const DIV_REMAINDER = num1 % num2;

if (isNaN(num1) || isNaN(num2)) {
  console.log('Вы ввели не число!');
} else if(DIVIDE === Infinity) {
  console.log('На ноль делить нельзя!')
} else {
  console.log(`Сумма чисел равна ${SUM}`);
  console.log(`Разность чисел равна ${DIFF}`);
  console.log(`Произведение чисел равно ${MULT}`);
  console.log(`Частное чисел равно ${DIVIDE}`);
  console.log(`Остаток от деления чисел равен ${DIV_REMAINDER}`);
}

