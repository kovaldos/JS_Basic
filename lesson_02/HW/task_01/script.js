// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = +prompt('Enter first number');
let num2 = +prompt('Enter second number');

num1 <= 1 ? console.log('Done') : console.log('Oops! You missed');
num2 >= 3 ? console.log('Done') : console.log('Oops! You missed');
