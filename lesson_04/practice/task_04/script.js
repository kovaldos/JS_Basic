// 1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

const arr = [2, 5, 9, 15, 1, 4];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}

// 2. Найдите сумму четных чисел от 2 до 100.

let sum = 0;

for (let i = 2; i <= 100; i += 2) {
    sum += i;
}

console.log("Сумма четных чисел от 2 до 100:", sum);

// 3. Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.

const findArraySum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

const array = [2, 5, 9, 3, 1, 4];
const sum2 = findArraySum(array);
console.log("Сумма элементов массива:", sum2);

// 4.С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

const generateString = () => {
    let result = '-';
    for (let i = 1; i <= 9; i++) {
        result += i + '-';
    }
    return result;
};

const generatedString = generateString();
console.log(generatedString);

// 5. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
// который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0.
// После этого цикл должен завершить свою работу.

const printArrayUntilZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            break;
        }
        console.log(arr[i]);
    }
};

const array2 = [2, 5, 9, 0, 3, 1, 4];
printArrayUntilZero(array2);




