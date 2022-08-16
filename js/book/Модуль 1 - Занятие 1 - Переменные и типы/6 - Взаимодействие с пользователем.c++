====== Вывод данных ======
    Для вывода данных есть два метода: console.log() и alert().В круглых скобках указываем имя переменной, значение которой необходимо вывести.
const message = "JavaScript is awesome!";
console.log(message); // JavaScript is awesome!
------
const username = "Mango";
console.log("Username is ", username); // Username is Mango
======
    Метод alert() выводит модальное окно, текст которого соответствует значению переменной(или литерала) которую передадим в скобках.
const message = "JavaScript is awesome!";
alert(message);

====== Получение данных ======
Для получения данных от пользователя есть prompt() и confirm()
confirm() - выводит модальное окно с сообщением, и две кнопки, Ok и Cancel
// Просим клиента подтвердить бронь на отель
// и сохраняем в переменную результат работы confirm
const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);
======
    Важная особенность prompt в том, что не зависимо что ввел пользователь, всегда вернется строка.То есть, если пользователь ввел 5, то вернется не число 5, а строка "5".
const value = prompt("Please enter a number!");
console.log(typeof value); // "string"
console.log(value); // "5"
