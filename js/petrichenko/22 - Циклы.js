//22 циклы
"use strit";
//while
let numb = 50;
while (numb < 55) {// выполняет цикл до того момента как numb < 55
    numb++; // добавляет к numb по 1 ед до того момента как numb < 55
    console.log(numb);//51,52,53,54,55
}
//
// do while
let numb2 = 50;
do {
    numb2++; //
    console.log(numb2);//51,52,53,54,55
}//запятой нет
while (numb2 < 55);
//
// for 
for (let i = 0; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);//0 1 2 3 4 5
}

for (let j = 0; j < 10; j++) {
    if (j === 6) {
        continue;
    }
    console.log(j);//0 1 2 3 4 5 (6-continue пропускает 6) 7 8 9 
}
