====== Числа ======
    Все числа в JavaScript, как целые так и дробные, имеют тип Number и записывать их можно не только в десятичной системе счисления.

====== Приведение к числу ======
Большинство арифметических операций и математических функций преобразуют значение в число автоматически. Для того чтобы сделать это явно, используйте функцию Number(val), передавая ей в val то, что надо привести к числу.

Если значение не возможно привести к числу, результатом будет специальное числовое значение NaN(Not a Number).Аналогичным образом происходит преобразование и в других математических операторах и функциях.
const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"

====== Методы Number.parseInt() и Number.parseFloat() =======
Метод Number.parseInt() парсит из строки целое число.
console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN
======
    Метод Number.parseFloat() парсит из строки дробное число.
console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN

====== Проверка на число ======
Для проверки на число можно использовать метод Number.isNaN(val). Он проверяет, является ли указанное значение NaN или нет. Метод отвечает на вопрос "Это Not A Number?" и возвращает:
true - если значение val это NaN
false - если значение val это не NaN
======
Для всех значений val кроме NaN, при передаче в Number.isNaN(val) вернёт false.Этот метод не производит попытку преобразовать val к числу, а просто выполняет проверку на NaN.
const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true

====== Сложение чисел с плавающей точкой ======
    При сложении не целых чисел в JavaScript и других языках программирования, есть особенность.Если кратко, то 0.1 + 0.2 не равно 0.3, результат сложения больше чем 0.3.Все от того что машина считает в двоичной системе.
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004
=======
Конечно, это не означает, что точные вычисления для таких чисел невозможны. Есть несколько методов решения этой проблемы.
Можно сделать их целыми, умножив на N, сложить, а потом результат разделить также на N.
console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41
======
Еще один способ - сложить, а результат отсечь до определённого знака после запятой при помощи метода toFixed().
console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41

======Класс Math======
Один из встроенных классов, который предоставляет набор методов для работы с числами. Знание всех методов наизусть не требуется, только некоторых, наиболее полезных.
// Math.floor(num) - возвращает наибольшее целое число,
// меньшее, либо равное указанному
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число,
// большее, либо равное указанному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа,
// округлённое до ближайшего целого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10