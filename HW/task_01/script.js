// Задание 1
// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const findNumberCube = (number) => Math.pow(number, 3);

const findNumberCubeSum = (num1, num2) => (findNumberCube(num1) + findNumberCube(num2));
console.log(findNumberCubeSum(2, 3));


