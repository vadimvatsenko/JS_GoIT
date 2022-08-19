"use strict";
//Функция єто частній случай объекта -> Ссылочный тип

console.log('[] === []:', [] === []);//fasle
console.log('{} === {}:', {} === {});//false
console.log(
    'function() {} === function() {}: ',
    function () { } === function () { },
);//false
///
const fnA = function () {
    console.log('hello');

};
const fnB = fnA;
console.log('fnB === fnA:', fnA === fnA);//true
//

// Контекст (this)
// - Где и как была лбьявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
// - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно
//
//Как метод обьекта. В контексте обьекта
const user = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this:', this);
        //showTag -> this: { tag: 'Mango', showTag: [Function: showTag] }
        //значение this присваевается в момент вызова user.showTag()
        //this ссылается на user
    }
};
user.showTag();//Функция вызывается как метод обьекта
//

//Вызов без контекста
//- В строгом режиме = underfind
//- Не в строгом режиме = window
const foo = function () {
    console.log('foo -> this:', this);//foo -> this: undefined
};
foo();//функция вызывается как не метод обьекта
//

//Как метод обьекта, но обьявлена как внешняя функция
//В контексте обьекта
const showTag = function () {
    console.log('showTag -> this:', this);
    //showTag -> this: { tag: 'Mango', showUserTag: [Function: showTag] }
    console.log('showTag -> this.tag:', this.tag);//showTag -> this.tag: Mango
};
showTag();
const user = {
    tag: 'Mango',
};
user.showUserTag = showTag;// ссылка на функцию showTag которая выше
console.log('user', user);//user { tag: 'Mango', showUserTag: [Function: showTag] }
user.showUserTag();
//Не важно где ты обьявил функцию, важно где ты ее вызвал
//

//Вызов без контекста, но обьявлена как метод обьекта
const user = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this:', this);
        console.log('showTag -> this.tag:', this.tag);
        //underfind так как outerShowTag() без обьекта вызван
    },
};
user.showTag();
const outerShowTag = user.showTag;
outerShowTag();
//

//Контекст в callback-функциях
const user = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this:', this);
        console.log('showTag -> this.tag:', this.tag);//underfind
    },
};
// user.showTag();
// const xyz = user.showTag;
// xyz();

const invokeAction = function (action) {
    console.log(action);
    action();
};
invokeAction(user.showTag);
//

//тренируемся 1
const fn = function () {
    console.log('fn -> this', this);
};
fn();//underfind
//

//тренируемся 2
const book = {
    title: 'react for beginners',
    showThis() {
        console.log('showTitle -> this:', this.title);
    },
};
book.showThis();//showTitle -> this: react for beginners
//const book в ней вызывается функция showThis в которой
//вызывается console.log в котором this.title - 
// будет ссылатся на book.showThis - тоесть на book
const outerShowThis = book.showThis;
outerShowThis();//undefined
// undefined нотому что нет обьекта в данном случае должен 
// быть book
const outerShowTitle = book.showTitle;
outerShowTitle();//underfined
//

//тренируемся 3
const makeChangeColor = function () {
    const changeColor = function (color) {
        console.log('chengeColor -> this:', this);
        // this.color = color;
    };
    const sweater = {
        color: 'teal',
    };
    sweater.updateColor = changeColor;
    // sweater.updateColor('red');
    return sweater.updateColor;
};
// makeChangeColor();
const swapColor = makeChangeColor();
swapColor('blue');//underfind
//

//тренируемся 4
const makeChangeColor = function () {
    const changeColor = function (color) {
        console.log('changeColor -> this', this);
        // this.color = color;
    };
    return changeColor;
};

const updateColor = makeChangeColor();
updateColor('yellow');

const hat = {
    color: 'blue',
    updateColor,
};

hat.updateColor('orange');
//

//тренируемся 5
const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    }
};
const updateCounter = function (value, operation) {
    operation(value);
};

updateCounter(10, counter.increment);
updateCounter(5, counter.decrement);





