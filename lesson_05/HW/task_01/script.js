// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
//
// const numbers = {
//   keyin1: 1,
//   keyin2: 2,
//   keyin3: 3,
//   keyin4: 4,
//   keyin5: 5,
//   keyin6: 6,
//   keyin7: 7,
// }

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

function printValuesGreaterThanThree(obj) {
  for (const key in obj) {
    if (obj[key] >= 3) {
      console.log(obj[key]);
    }
  }
}

printValuesGreaterThanThree(numbers);
