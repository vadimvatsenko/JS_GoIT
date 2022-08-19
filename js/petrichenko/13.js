//alert('hello');
//
// const result = confirm('Are you here?');  // - модально окно;
// console.log(result);// true or false;
//
// const answer = prompt('Are you 18?', '18');// модальное окно с вопросом
// console.log(answer);
// console.log(typeof (answer));// будет строка string, даже если будет введено число
//
// const answer = +prompt('Are you 18?', '18');// плюс приводить значение prompt к числу
// console.log(answer);
// console.log(typeof (answer));// будет число Number
//
const answers = [];// пустой массив для сбора данных от пользователя
answers[0] = prompt("Как ваше имя?", "");// записывает ответ в первую ячейку
answers[1] = prompt("Как ваше Фамилия?", "");
answers[2] = +prompt("Сколько вам лет?", "");
document.write(answers);// ответ на странице браузера
console.log(answers);
//
console.log(typeof (answers));// object - багг
console.log(typeof(null));// object - багг


