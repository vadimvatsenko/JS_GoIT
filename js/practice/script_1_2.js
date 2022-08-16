// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;
// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работника ${i} - ${salary} `)
//     totalSalary += salary;
//     console.log(`totalSalary:`, totalSalary)
// }

// const min = 6;
// const max = 13;
// let total = 0;
// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         console.log(`не чётное: `, i);
//         continue;
//     }
//     console.log(`чётное: `, i);
//     total += i;
// }
// console.log(`total: `, total)

// let balance = 10000;
// const payment = 20000;
// console.log(`Общая стоимость заказа ${payment} кредитов`)
// if (balance >= payment) {
//     console.log("OK");
//     balance -= payment;
//     console.log(`На счету осталось ${balance} кредиторв`);
// } else {
//     console.log(`Не достаточно денег на счету`);
// }
// console.log("Операция завершена");

// let totalSpent = 50;
// let payment = 10;
// let discount = 0;
// const broncePartner = 0.02;
// const silverPartner = 0.05;
// const goldenPartner = 0.1;
// const noPartner = 0;
// console.log(`Оформлен заказ на сумму ${payment} кредитов`)
// if (((totalSpent + payment) >= 100) && ((totalSpent + payment) < 1000)) {
//     discount = broncePartner
//     console.log(`Bronze Partner discount ${broncePartner * 100}%`);
// } else if (((totalSpent + payment) >= 1000) && ((totalSpent + payment) < 5000)) {
//     console.log(`Silver Partner discount ${silverPartner * 100}%`);
//     discount = silverPartner;
// } else if ((totalSpent + payment) >= 5000) {
//    console.log(`Golden Partner discount ${goldenPartner * 100}%`);
//     discount = goldenPartner; 
// } else {
//     console.log(`No Partner discount ${noPartner * 100}%`);
//     discount = noPartner;

// }
// console.log(`Оформлен заказ на сумму ${payment} кредитов, скидка ${payment * discount} кредитов ${discount * 100} %`)  

