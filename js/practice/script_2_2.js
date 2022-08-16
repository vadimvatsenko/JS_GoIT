// Модуль 2 - Занятие 3 - Массивы

// const add = function() {
//     console.log('done function add')
// }
// add();
// add();
// add();

// const add = function (x, y) {
//     console.log(x);
//     console.log(y);
//     console.log('done function add');
// }
// add(7, 10);
// add(11, 20);
// add(55, 880);

// Напиши функцию calculateTotalPrice(items) которая будет принимает массив цен(чисел) и возвращает сумму
// const calculateTotalPrice = function (items) {
//     console.log('item внутри функции:', items);
//     let total = 0;
//     for (const item of items) {
//         total += item;
//     }
//     return total;
// }
// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

// Напиши функцию logItems(items) для перебора и логирования массива
// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }
// logItems(['Kiwi', 'Mango', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['klava', 'headphone', 'clock']);

// Напиши функцию findLogin(allLogins, login) для поиска логирования
// - если логина нет вывести сообщение Пользователь[логин] не найден
// - если нашли логин Пользователь[логин] найден
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'ajaxth3m4n'];
// const findLogin = function(allLogins, loginToFind) {
// return allLogins.includes(loginToFind) 
//     ? `user ${loginToFind} fined`
//     : `user ${loginToFind} not fined`
// }
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'ajaxth3m4n'));
// console.log(findLogin(logins, 'avocod3r'));

// Напиши функцию findSmallestNumber(numbers) для поиска самого маленького числа в массиве.При условиии, что числа не повторяются
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// const findSmallestNumber = function (numbers) {
//     let smallestNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }

//     return smallestNumber;
// }
// console.log(findSmallestNumber([3, 8, 12, -2, 15]));
// console.log(findSmallestNumber([100, 54, 8, 12, 47]));
// console.log(findSmallestNumber([7, 21, 84, 15, 4]));

// Напиши функцию changeCase(string) которая заменяет регистр каждого символа на противоположный
// например если строка JavaScript => jAVAsCRIPT
// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();
//         invertedString += isInLowerCase
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
//     }

//     return invertedString;
// }
// console.log(changeCase('qweRTY'));
// console.log(changeCase('MaNGo'));
// console.log(changeCase('aPPle'));

// Напиши функцию slugyfy(string) которая получит строку и возвращает URL - slug. 
// Строка состоит только из букв и пробелов
// const slugify = function (string) {
//     return string.toLowerCase().split(' ').join('-')
// };
// console.log(slugify('Top 10 benefits of React'));
// console.log(slugify('Azure Static Web Apps'));
// console.log(slugify('Technical tips for Many'));

// Напиши функцию add для сложения произвольного количиства аргументов(чисел)
// - операция ... rest
// const add = function (...args) {
//     console.log(args);
//     let total = 0;
//     for (const arg of args) {
//         total += arg;

//     }
//     return total;
// }
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));

// Напиши функцию filterNumbers(array[, number1, ...]) которая:
//     - первым аргументом принимает массив чисел
//     - после первого аргумента может быть произвольное количиство других аргументов которые будут числами
//     - функция должна вернуть новый массив в котором только те аргументы, начиная со второго, 
//         для которого есть аналоги в оригинальном массиве.
// const filterNumbers = function (array, ...args) {
//     console.log('array:', array);
//     console.log('args:', args);
//     const uniqueElement = [];

//     for (const element of array) {
//         if (args.includes(element)) {
//             uniqueElement.push(element);
//             console.log(`${element} есть везде`);
//         }
//     }
//     return uniqueElement;
// }
// console.log(filterNumbers([1, 2, 3, 4, 5], 14, 15, 2, 4, 8));
// console.log(filterNumbers([10, 15, 20, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i++){
//   total =+ order[i];
// }
//   // Change code above this line
//     // return total;
//  console.log(total);  
// }
 
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// function findLongestWord(string) {
//   // Change code below this line
//   let arrStr = string.split(' ');
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];

//       return longestWord;
//     }

//   }
// };

// findLongestWord("May the force be with you");
// findLongestWord("Google do a roll");
// findLongestWord("The quick brown fox jumped over the lazy dog");


// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Jupiter");
// planets.push("Saturn", "Uranus", "Neptune");

// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

function getCommonElements(array1, array2) {
  const newArray = [];
  console.log(array1);
  console.log(array2);
  for (let i = 0; i <= array1.length; i++){
    console.log(i)
  }
  
  }

  



// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// function checkFruit(fruit) {
// const fruits = ["apple", "plum", "pear", "orange"];
// return fruits.includes(fruit);
  






