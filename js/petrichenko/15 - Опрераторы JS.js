// Опрераторы JS
console.log('arr' + '-object');//arr-object
console.log(4 + '-object');//4-object
console.log(4 + +'5');//9 оператор + превращает строку в число

let iner = 10,
    decr = 10;
iner++;//добавляет 1
decr--;// минусут 1
// ++iner;
// --descr;
console.log(iner, decr);//11, 9
//
console.log(5 % 2);// 1 - остаток от деления
//
console.log(2 * 4 === 8);//true - 8 = 8 - правда
//
console.log(2 * 4 !== 8);//false - 8 не равно 8 - ложь
//
const isChecked = true,
    isOpen = true;
console.log(isChecked && isOpen);//true - оператор и &&, если оба true - true, хотя бы один false - false

const isChecked2 = true,
    isOpen2 = true;
console.log(isChecked2 || isOpen2);//true - оператор или ||, хотя бы один true - true, если оба false - false




