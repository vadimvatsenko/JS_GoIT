// Посчитать общую сумму покупок
// const cart = [54, 28, 105, 70, 92, 17, 120]
// // 1. Сделать переменную total до цикла
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
//     total += cart[i];
// }
// console.log('Total: ', total);

// Также можно использовать for of, если нам не нужен список из массива
// const cart = [54, 28, 105, 70, 92, 17, 120]
// // 1. Сделать переменную total до цикла
// let total = 0;
// for (const value of cart) {
//     total += value;
// }
// console.log('Total: ', total);

// Если каждому элементу массива нужно добавить 20%
// const cart = [54, 28, 105, 70, 92, 17, 120];
// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.2);
// }
// console.log(cart);

// Скрипт который подсчитает сумму чётных чисел и не чётных
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (const number of numbers) {
//     console.log(number);
//     if (number % 2 === 0) {
//         console.log("Чётное");
//         total += number;
        
//     } else {
//         console.log("Не чётное")
//         total += number;
//     }
// console.log(total)
// }
// Логика от обратного
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log('Пропустить');
        
//         continue;
//     }
//     console.log(`${number} - чётное`)
//     total += number;
    
// }
// console.log(`Сумма чётных - ${total}`)

// Скрипт поиска логина
// - Если логина нет, вывести Сообщение Пользователь[логин] не найден
// - Если логин есть, вывести Сообщение Пользователь[логин] найден
// const logins = ['m4ngoDoge', 'k1widab3st', 'poli1scute', 'aj4xth3mn4n'];
// const loginToFind = 'poli1scute';
// let message = ' ';
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     if (login === loginToFind) {
//         message = `Сообщение Пользователь ${loginToFind} найден`;
//         break;
//     }
//     message = `Сообщение Пользователь ${loginToFind} не найден`
// }
// console.log(message);
// 2й Вариант
// const logins = ['m4ngoDoge', 'k1widab3st', 'poli1scute', 'aj4xth3mn4n'];
// const loginToFind = 'poli1scute';
// let message = `Сообщение Пользователь ${loginToFind} не найден`;
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log('Login:', login);
//     console.log(`${login} === ${loginToFind}:`, login === loginToFind);
//     if (login === loginToFind) {
//         console.log("Ура равны!!!");
//         message = `Сообщение Пользователь ${loginToFind} найден`
//     }
// }
// console.log(message);
// 3й вариант 
// const logins = ['m4ngoDoge', 'k1widab3st', 'poli1scute', 'aj4xth3mn4n'];
// const loginToFind = 'poli1scute';
// let message = `Сообщение Пользователь ${loginToFind} не найден`;
// for (const login of logins) {
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}:`, login === loginToFind)
//     if (login === loginToFind) {
//         console.log('Ура равны!!!');
//         message = `Сообщение Пользователь ${loginToFind} найден`;
//         break;
//     }
    
// }
// console.log(message);
// 4й вариант Лучший
// const logins = ['m4ngoDoge', 'k1widab3st', 'poli1scute', 'aj4xth3mn4n'];
// const loginToFind = 'poli1scute';
// const massage = logins.includes(loginToFind) ? `Сообщение Пользователь ${loginToFind} найден` : `Сообщение Пользователь ${loginToFind} не найден`;
// console.log(massage);

// скрипт поиска самого маленткого и самого большого числа. При условии, что числа не повторяются
// const numbers = [52, 26, 13, 24, 7, 100, 19, 66];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
   
// }
// console.log(`small number`, smallestNumber)

// скрипт который объединяет все элементы массива в одно строковое значение элементов.
// элементов может быть произвольное количество.
// разделены через запятую
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);
// современный
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// const string = friends.join(',');
// console.log(string);

// Сккрипт который сделает инверсию регистра букв
// const string = 'JavaScript';
// const letters = string.split(''); 
// let invertedString = '';
// console.log(letters);
// for (const letter of letters) {
//     console.log(letter);
//     if (letter === letter.toLocaleLowerCase()) {
        
//         console.log('в нижнем регістре-', letter);
//         invertedString += letter.toLocaleUpperCase();
//     } else {
//         console.log('в вверхнем регистре!!!-', letter);
//         invertedString += letter.toLocaleLowerCase();
//     }
// }
// console.log(invertedString);
// Новый вариант
// const string = 'JavaScript';
// const letters = string.split(''); 
// let invertedString = '';
// console.log(letters);
// for (const letter of letters) {
//     console.log(letter);
//     invertedString += letter ===
//         letter.toLocaleLowerCase()
//             ? letter.toLocaleUpperCase()
//             : letter.toLocaleLowerCase();
// }
// console.log(invertedString)

// Делаем slug в URL из названия статьи.Заголовок статьи состоит из букв и пробелов
// нормализируем строку 
// разбиваем по словам
// сливаем строку с разделителями
// const title = 'Top benefits of React framework';
// const normalizedTitle = title.toLocaleLowerCase();
// console.log(normalizedTitle);
// const words = normalizedTitle.split(' ');
// console.log(words);
// const slug = words.join('-')
// console.log(slug);
// короткий вариант
// const title = 'Top benefits of React framework';
// const slug = title.toLocaleLowerCase().split(' ').join('-')
// console.log(slug);

// скрипт который считает сумму элементов двух массивов 
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2);
// for (const number of numbers) {
//     total += number;
// }
// console.log(total);

// Работаем с колекцией карточек
// const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'];
// console.table(cards);
// удаление элементов по мндексу метод indexOf()
// const cardToRemove = 'card-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);
// console.table(cards);
// добавление карточки по индексу
// const cardToInsert = 'card-8';
// const index = 3;
// cards.splice(index, 1, cardToInsert);
// console.table(cards);
// обновить карточку - работает
// const cardToUpdate = 'card-4';
// const index = cards.indexOf(cardToUpdate);
// console.log(index);
// cards.splice(index, 1, 'new card-4');
// console.table(cards);



