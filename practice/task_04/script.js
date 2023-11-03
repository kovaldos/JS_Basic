// 1.
const getDayOfWeek = (num) => {
  switch (+num) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 7:
      return "Воскресенье";
    default:
      return "Некорректное значение. Введите число от 1 до 7.";
  }
};

let day = 5;

const result = getDayOfWeek(day);
console.log(result);

// 2.
const greetingByTime = (name, time) => {
  let greeting;
  if (time >= 6 && time < 12) {
    greeting = "Доброе утро";
  } else if (time >= 12 && time < 18) {
    greeting = "Добрый день";
  } else if (time >= 18 && time < 24) {
    greeting = "Добрый вечер";
  } else if (time >= 0 && time < 6) {
    greeting = "Доброй ночи";
  } else {
    return "Некорректное время. Введите время от 0 до 23.";
  }
  return `${greeting}, ${name}!`;
};

let name = "Yaroslav";
const currentTime = new Date().getHours(); // текущее время в часах

const result2 = greetingByTime(name, currentTime);
console.log(result2);


