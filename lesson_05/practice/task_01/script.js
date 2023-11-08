// Задание 1 (тайминг 20 минут)
// Текст задания
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”

const daysOfWeek = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье',
}

console.log(daysOfWeek[2]);

const {2: tuesday} = daysOfWeek;
console.log(tuesday);

// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.

const user = {
  name: 'Andrew',
  surname: 'Serkis',
  age: 59,
}

console.log(`${user.surname}-${user.name}-${user.age}`);



// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры

user.patronymic = prompt('Введите ваше отчество');

console.log(`${user.surname}-${user.name}-${user.patronymic}-${user.age}`);

// 4. Удалите свойство surname

delete user.surname;

console.log(user);

