//20.Условия
"use strict";
if (4 === 9) {
    console.log('OK!')
} else {
    console.log('Error');
}

const numb = 50;

if (numb < 49) {
    console.log('Error!!!');
} else if (numb > 100) {
    console.log('So much!!');
} else {
    console.log('ok');
}
//тенарный оператор
const numb2 = 50;
(numb2 === 55) ? console.log('OK') : console.log("wrong");

//конструкция switch
const numb3 = 49;

switch (numb3) {// сравниваем numb3
    case 45: // numb3 === 45
    console.log(`${numb3} не равно этому значению `);
        break;// прерывает цикл, если значение найдено
    
    case 100:
        console.log(`${numb3} не равно этому значению `);
        break;
    case 50:
        console.log(`${numb3} равно этому значению ${numb3} `);
        break;
    default:
        console.log('Нет совпадений');
        break;
}