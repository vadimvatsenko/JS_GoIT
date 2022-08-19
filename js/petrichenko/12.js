const arr = [1, 2, 3];//массив
const obj = {
    a: 100,
    b: 200,
};//объект
console.log(arr[2]);//
console.log(obj.a, obj.b);
//
const obj2 = {
    Anna: 500,
    Alice: 700,
};
console.log(obj2["Anna"], obj2["Alice"]);//500, 700 - надежно!!!
console.log(obj2.Anna, obj2.Alice);//500, 700
obj2.Vadya = 1000;// добавляет в обьект
console.log(obj2);//{ Anna: 500, Alice: 700, Vadya: 1000 }
console.log(obj2["Vadya"]);//1000
console.log(obj2.Vadya);//1000
const nameIra = 'Iro4ka';
obj2[nameIra] = 2000;
console.log(obj2);//{ Anna: 500, Alice: 700, Vadya: 1000, Iro4ka: 2000 }
//
const arrObj = {
    a: 111,
    b: 222,
    c: 333,
    abc: {
        df: [{}, {}], //массив с двумя пустыми обьектами
        def: { // пустой обьект

        }
    }

};
console.log(arrObj);
//



