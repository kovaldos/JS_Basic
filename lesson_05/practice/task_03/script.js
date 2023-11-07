// Задание 3 (тайминг 15 минут)
// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// }
// Найдите сумму элементов приведенного объекта.

const obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};

const findObjectSum = (object) => {
  let sum = 0;

  // Перебираем внешние ключи
  for (let key in object) {
    // Перебираем внутренние ключи
    for (let innerKey in object[key]) {
      // Добавляем каждое числовое значение к сумме
      sum += object[key][innerKey];
    }
  }
  return sum;
}

const result = findObjectSum(obj);

console.log("Сумма элементов приведенного объекта:", result);

