// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
// которая определяет максимальное значение среди этих чисел

const findMaxValue = (num1, num2, num3) => {
  return Math.max(num1, num2, num3);
};

const userInput1 = parseFloat(prompt("Введите первое число:"));
const userInput2 = parseFloat(prompt("Введите второе число:"));
const userInput3 = parseFloat(prompt("Введите третье число:"));

if (!isNaN(userInput1) && !isNaN(userInput2) && !isNaN(userInput3)) {
  const maxValue = findMaxValue(userInput1, userInput2, userInput3);
  console.log(`Максимальное значение: ${maxValue}`);
} else {
  console.log("Одно из введенных значений некорректно. Пожалуйста, введите три числа.");
}
