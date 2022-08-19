// 21. Логичиские операторы
const hamburger = true;
const fries = false;

if (hamburger && fries) {
    console.log('Спасибо за еду');
} else {
    console.log('Остался голодным!');
};
//
console.log(true && true);//true
console.log(true && false);//false
console.log(false && true);//false
console.log(false && false);//false

console.log(0 && 5);//0
console.log(null && 5);//null
console.log(null && undefined);//null
//
const hamburger2 = 4;
const fries2 = 0;

if (hamburger2 && fries2) {
    console.log('Спасибо за еду');
} else {
    console.log('Остался голодным!');
};
//
const hamburger3 = 4;
const fries3 = 1;
const cola3 = 1;
console.log((hamburger3 >= 3 && cola3 && fries3));//1 - вернул последнее правдивое значение
console.log((hamburger3 === 3 && cola3 && fries3));//false - запнулся на первой льжи

if (hamburger3 >= 3 && cola3 && fries3) {
    console.log('Спасибо за еду');
} else {
    console.log('Остался голодным!');
};
//
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'abcdfeg');
//
// логическое или
const hamburger4 = 7;
const fries4 = 0;
const cola4 = 0;

if (hamburger4 || fries4 || cola4) {
    console.log('Хорошо Сидим');
} else {
    console.log('Валим от сюда');
};
console.log((hamburger4 || fries4 || cola4));//7
//
let johnReport, alexReport, samReport, mariaReport = 'done';
console.log((johnReport || alexReport || samReport || mariaReport));
//
//комбинация логичиских операторов
const hamburger5 = 3;
const fries5 = 3;
const cola5 = 0;
const nuggets5 = 2;

if (hamburger5 === 3 && cola5 === 2 || fries5 === 3 && nuggets5) {
    console.log("Сидим");
} else {
    console.log('Valim ot suda');
};
console.log((hamburger5 === 3 && cola5 === 2));//false
console.log((fries5 === 3 && nuggets5));//2
console.log((hamburger5 === 3 && cola5 === 2 || fries5 === 3 && nuggets5));//2
console.log((hamburger5 === 3 && (cola5 === 2 || fries5 === 3) && nuggets5));//2
//
// оператор не (!);
console.log(!0);//true;
console.log(!NaN);//true;
console.log(!undefined);//true
console.log(!2);//false
