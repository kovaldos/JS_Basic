// Задание 4 (тайминг 30 минут)
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

const riddles = {
  question: "What has keys but can't open locks?",
  answer: "A piano",
  hints: [
    "It's a musical instrument.",
    "It has black and white keys."
  ],
  attempt: 0,
  maxAttempt: 3,
  askQuestion: function() {
    let userAnswer = prompt(this.question);
    this.attempt++;
    if (userAnswer.toLowerCase() === this.answer.toLowerCase()) {
      console.log("Поздравляем! Вы выиграли!");
    } else {
      console.log("Вы ответили неверно.");
      if (this.attempt < this.maxAttempt) {
        if (this.attempt === 1) {
          console.log(`Первая подсказка: ${this.hints[0]}`);
        } else if (this.attempt === 2) {
          console.log(`Вторая подсказка: ${this.hints[1]}`);
        }
        console.log(`Попробуйте еще раз. У вас осталось ${this.maxAttempt - this.attempt} попыток.`);
        this.askQuestion();
      } else {
        console.log(`К сожалению, вы проиграли. Правильный ответ: ${this.answer}`);
      }
    }
  }
};

riddles.askQuestion();



