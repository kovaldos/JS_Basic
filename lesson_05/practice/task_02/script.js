// Задание 2 (тайминг 25 минут)

// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
//   const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.

function createObject(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Длины массивов должны совпадать");
  }

  const obj = {};

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
  }

  return obj;
}

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

const result = createObject(arr1, arr2);
console.log(result);

// 2. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.

const obj2 = {x: 1, y: 2, z: 3};

for (let key in obj2) {
  obj2[key] = obj2[key] ** 2;
}

console.log(obj2);

