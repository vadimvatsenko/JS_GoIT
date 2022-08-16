const fnA = function (message) {
    console.log(message);
}
fnA('qwerty');
//
const fnA = function (message, callback) {
    console.log(message);
    console.log(callback);
};
const fnB = function () {
    console.log('Это лог при вызове fnB');
};
fnA('qwerty', fnB);
// //
const fnA = function (message, callback) {
    console.log(message);
    console.log(callback);
    callback();// вызов fnB
};
const fnB = function () {
    console.log('Это лог при вызове fnB');
};
fnA('qwerty', fnB);
// //
// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback);
//     callback(100);// вызов fnB
// };
// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// };
// fnA('qwerty', fnB);

// // функция doMath (a,b, callback);
// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// };
// const add = function (x, y) {
//     return x + y;
// };
// doMath(2, 3, add);
// //
// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// };
// const add = function (x, y) {
//     return x + y;
// };
// const sub = function (x, y) {
//     return x - y;
// };
// doMath(2, 3, add);
// doMath(10, 8, sub);
// //литерал массива
// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// };
// doMath(2, 3, function (x, y) {//литерал массива
//     return x + y;
// });
// doMath(10, 8, function (x, y) {//литерал массива
//     return x - y;
// });
//отложенный вызов регистрация событий
// const buttonRef = document.querySelector('.js-button');
// const handelBtnClick = function () {
//     console.log('click on button');
// };
// buttonRef.addEventListener('click', handelBtnClick);

//отложенный вызов геолокация
// const onGetPositionSuccess = function (position) {
//     console.log(position);
// };
// const onGetPositionError = function (error) {
//     console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError);
//
// Отложеный вызов: интервалы
// const callback = function () {
//     console.log('через 3 секунды внутри колбека в таймауте');
// };
// console.log('В коде перед таймаутом');
// setTimeout(callback, 2000);
// console.log('в коде после таймаута');
//
//отложенный вызов http запрос
// const onRequestSeccess = function (response) {
//     console.log('Вызов функции onRequetSeccsess после успешного ответа бекенда');
//     console.log(response);
// };
// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSeccess);
//
// Фильтр
// const filter = function (array, test) {
//     const filteredArray = [];
//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);
//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;

// };
// const callback1 = function (value) {
//     return value >= 3;
// };
// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//     return value <= 4;
// });
// console.log(r2);
//
// const filter = function (array, test) {
//     const filteredArray = [];
//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);
//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;

// };
    
// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'apples', quantity: 100, isFresh: false },
// ];
// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 200;
// };
// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);
//
//замыкание
// const fnA = function (parametr) {
//     const innerVariable = 'значение внутренней переменной функции fnA';
//     const innerFunction = function () {
//         console.log(parametr);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     };
//     return innerFunction;
// };
// const fnB = fnA(555);
// fnB();
// console.log(fnB);

//
//поварёнок
// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     };
//     return makeDish;
// };
// const mango = makeSheff('Mango');
// mango('cotleta');
// mango('pirijok');

// const poly = makeSheff('Poly');
// poly('supchik');
// poly('vareniki');

//
//округлятор
// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };
// const rounder2 = rounder(2);
// const rounder3 = rounder(3);
// console.log(rounder2(3.45678));
// console.log(rounder3(4.1233));
// console.log(rounder2(5.52155));
// console.log(rounder3(6.55555));

//
//Приватные данные и функции - скрытые реализации интерфейс
// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//     let salary = baseSalary;
//     return {
//         raise(amount) {
//             salary += amount;
//         },
//         lower(amount) {
//             salary -= amount;
//         },
//         current() {
//             return `Текущая зп ${employeeName} - ${salary}`;
//         },
//     };
// };
// const salaryManager = salaryManagerFactory('Vadym', 5000);
// console.log(salaryManager.current());
// salaryManager.raise(3000);
// console.log(salaryManager.current());
// salaryManager.lower(200);
// console.log(salaryManager.current());
//
//Стрелочные функции
//1
// const add = function (a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// };
// console.log(add(5, 10, 15));
// //2
// const add2 = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// };
// console.log(add2(5, 10, 15));
// //3
// const add3 = (a, b, c) => a + b + c;
// console.log(add3(5, 10, 15));
//
//
// const fnA = function (){
//     return {
//         a: 5,
//     };
// };
// console.log(fnA());
// //---
// const fnB = () => ({ arrowA: 5 });
// console.log(fnB());







