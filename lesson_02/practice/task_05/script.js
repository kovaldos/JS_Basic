let userAge = +prompt('Ваш возраст?');
if (userAge <= 0) {
  alert('Ввели неверное значение');
} else if (userAge === 1) {
  alert(`Вам ${userAge} год`);
} else if (userAge >= 2 && userAge <= 4) {
  alert(`Вам ${userAge} года`);
} else {
  alert(`Вам ${userAge} лет`);
}

let userName = prompt('Ваше имя?');
alert(`Добро пожаловать на сайт, ${userName}`);
