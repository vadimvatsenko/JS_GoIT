// module 2

// task 23
// function filterArray(numbers, value) {
  
//   const newArray = [];
//   for (let number of numbers) {
    
//     if (number > value) {
//       newArray.push(number);
//     }
// }
//   return newArray;
// }

// task 24
// function checkFruit(fruit) {
// const fruits = ["apple", "plum", "pear", "orange"];
// return fruits.includes(fruit);
// }

// task 25
// function getCommonElements(array1, array2) {
//     console.log(array1);
//     console.log(array2);
//     let newArray = [];
//     for (let arr of array1) {
//         console.log(arr);
//         if (array2.includes(arr)) {
//         newArray.push(arr)
//     }
//     }
//     // return newArray;
//   console.log(newArray);
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// task 26
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let ord of order) {
//     total += ord;
//   }

//     // return total;
//     console.log(total);
// }
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([164, 48, 291]);

// task 27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
//     console.log(number);

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   // return filteredNumbers;
//   console.log(filteredNumbers);
  
//   // Change code above this line
// }

// filterArray([12, 24, 8, 41, 76], 38)

// task 28
// const a = 3 % 3; 
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// task 29
// function getEvenNumbers(start, end) {
//   let newArray = [];
//   for (let i = start; i <= end; i++){
//     console.log(i);
//     if (i % 2 === 0) {
//       newArray.push(i);
//       // console.log(newArray)
//     }
//   }
//   return newArray;
  
// }
//   getEvenNumbers(2, 5)

// task 30;
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// task 31
// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }

// }
// findNumber(16, 35, 7);

// task 32
// function includes(array, value) {
  
//   for (let i = 0; i <= array.length; i++) {
   
//     if (array[i] === value) {
//       return true;
//     }
// }
// return false;
// }
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
