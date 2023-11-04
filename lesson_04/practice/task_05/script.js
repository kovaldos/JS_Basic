// 1. Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа,
// которые делятся на 2, возведем в квадрат и выведем в консоль, а числа,
// которые делятся на 3, возведем в куб и выведем в консоль.

const manipulateArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            const squared = arr[i] * arr[i];
            console.log(`Число ${arr[i]} квадрат: ${squared}`);
        }
        if (arr[i] % 3 === 0) {
            const cubed = arr[i] ** 3;
            console.log(`Число ${arr[i]} куб: ${cubed}`);
        }
    }
};

const array = [2, 3, 5, 6, 8, 9, 10, 12, 15, 18];
manipulateArray(array);

// 2. С помощью двух вложенных циклов выведите на экран следующую строку:
// [[1, 2, 3], [4, 5, 6]]

const createNestedArray = () => {
    let result = [];
    let counter = 1;
    for (let i = 0; i < 2; i++) {
        let subArray = [];
        for (let j = 0; j < 3; j++) {
            subArray.push(counter);
            counter++;
        }
        result.push(subArray);
    }
    return result;
};

// Вызов функции для создания вложенного массива
const nestedArray = createNestedArray();
console.log(nestedArray);


// 3. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; Подсчитайте количество цифр 3 в этом массиве.

const countDigitThree = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            count++;
        }
    }
    return count;
};

// Пример использования функции
const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
const result = countDigitThree(arr);
console.log("Количество цифр 3 в массиве:", result);

// 4. Дан следующий массив: [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

const transformArray = (arr) => {
    arr.splice(1, 2);
    return arr;
};

let array2 = [1, 2, 3, 4, 5];
array2 = transformArray(array2);
console.log(array2);
