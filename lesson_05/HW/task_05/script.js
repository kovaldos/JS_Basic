// **Задание 5**
// Дано 2 массива
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// ```
//
//
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

function combineArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error('Массивы должны иметь одинаковую длину.');
  }

  const combinedArray = {};

  for (let i = 0; i < arr1.length; i++) {
    combinedArray[arr1[i]] = arr2[i];
  }

  return combinedArray;
}

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

try {
  const result = combineArrays(en, ru);
  console.log(result);
} catch (error) {
  console.error(error.message);
}

