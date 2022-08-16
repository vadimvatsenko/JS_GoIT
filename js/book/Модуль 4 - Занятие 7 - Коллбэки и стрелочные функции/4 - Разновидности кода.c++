===Императивный vs декларативный==
Рассмотрим разницу подходов на примере базовой операции фильтрации коллекции. Напишем код перебора и фильтрации массива чисел по какому-то критерию.
// Императивный подход
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log(filteredNumbers); // [4, 5]
// Декларативный подход
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
console.log(filteredNumbers); // [4, 5]