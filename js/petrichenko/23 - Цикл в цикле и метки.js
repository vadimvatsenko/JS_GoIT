//23. Цикл в цикле и метки
for (let i = 0; i < 3; i += 1) {
    console.log(i);
    for (let j = 0; j < 3; j += 1) {
        console.log(j);
    }// 0 (0 1 2) 1 (0 1 2) 2 (0 1 2)
}

// *
// **
// ***
// ****
// *****
// ******
let result = '';
const length = 7;
for (let i = 1; i < length; i += 1){
    for (let j = 0; j < i; j += 1){// 1я итерация j<i(0)
        result += '*';
    }
    result += '\n';// перенос строки
}
console.log(result);
//
first: for (let i = 0; i < 3; i += 1) {// first - метка
    console.log(`First level ${i}`);
    for (let j = 0; j < 3; j += 1) {
        console.log(`Second level ${j}`);
        for (let k = 0; k < 3; k += 1) {
            if (k === 2) continue first;// прерывает итерацию когда к=2 и переходит на первую итерацию
            console.log(`Third level ${k}`);
    }
}
}
//
first: for (let i = 0; i < 3; i += 1) {// first - метка
    console.log(`First level ${i}`);
    for (let j = 0; j < 3; j += 1) {
        console.log(`Second level ${j}`);
        for (let k = 0; k < 3; k += 1) {
            if (k === 2) break first;// прерывает полностю итерацию когда к=2
            console.log(`Third level ${k}`);
    }
}
}
