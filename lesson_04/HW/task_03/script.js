// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function generateArray() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        arr.push(randomNumber);
    }
    return arr;
}

const generatedArray = generateArray();

// 1. Рассчитать сумму элементов этого массива
const sum = generatedArray.reduce((acc, curr) => acc + curr, 0);

// 2. Найти минимальное число
const min = Math.min(...generatedArray);

// 3. Найти есть ли в этом массиве число 3
const hasThree = generatedArray.includes(3) ? 'Да' : 'Нет';

console.log('Сгенерированный массив:', generatedArray);
console.log('Сумма элементов массива:', sum);
console.log('Минимальное число в массиве:', min);
console.log('Наличие числа 3 в массиве:', hasThree);

