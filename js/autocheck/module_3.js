// task 1
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"]

// };

// task 2
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com"
//   }
// };

// task 3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };


// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// task 4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };


// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// const lastTag = apartment.tags[apartment.tags.length -1];


// task 5
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// task 6
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// task 7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// }
// console.log(apartment);

// task 8
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//  name,
//  price,
//  image,
//  tags,
// };

// task 9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",
// };

// task 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// let values = [];

// for (let key in apartment) {
//   console.log(key);
//   keys.push(key);
//   values.push(apartment[key])
// }

// task 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }
// }

// task 12
// function countProps(object) {
//   let propCount = 0;
//   console.log(object);
//   for (let key in object) {
//     console.log(key);
//     if (object.hasOwnProperty(key)) {
//       propCount = Object.keys(object).length;
      
//     }
    
//   }
//   return propCount;
// }
// task 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (let key of keys){
  
//   values.push(apartment[key]);
// }

// task 14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount = Object.keys(object).length;
//     console.log(key);
//   }

//   return propCount;
//   // Change code above this line
// }

// task 15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// task 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
 
//   // console.log(salaries);
//   let values = Object.values(salaries);
//   for (let value of values) {
//     // console.log(value);
//     totalSalary += value;
//     // console.log(totalSalary);
//   }


//   // Change code above this line
//   return totalSalary;
// }
// tast 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//   }

// task 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// let productPrice = 0;
// function getProductPrice(productName) {
//   for (let product of products) {
   
//     if (productName === product.name) {
//       return product.price
//     }
// }
// return null
// } 

// task 19 ?????
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];



// function getAllPropValues(propName) {
//   const productItems = []
//   for (let product of products) {
//     if(propName === "name"){
//       productItems.push(product.name)
//       }else if (propName === "quantity") {
//         productItems.push(product.quantity)
//       }else if (propName === "price") {
//         productItems.push(product.price)
//       }
//   }
//   return productItems;
// }

// task 20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// let totalPrice = 0;
// function calculateTotalPrice(productName) {
//   for (let product of products) {
//     console.log(product);
//     if (product.name === productName) {
//       // return totalPrice;
//       totalPrice = product.price * product.quantity;
//       return totalPrice;
      
//   } 
// }
//   return 0;
// }

// task 21 
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday, today, tomorrow } = highTemperatures
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// task 22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// task 23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"  } = highTemperatures

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

// task 24
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push({hex, rgb}.hex);
//   rgbColors.push({hex, rgb}.rgb);
// }

// task 25 
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;

// task 26
// function calculateMeanTemperature(forecast) {
//   const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// task 27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// task 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// task 29
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// task 30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   const newData = {completed, category, priority, ...data };

//   return newData;
// }

// task 31
// function add(...args) {
//   let total = 0;
//   for (let arg of args) {
//     console.log(arg);
//     total += arg;
    
//   }
//   return total;
// }

// task 32
// function addOverNum(...args) {
//   let total = 0;
//   console.log(args);
//   for (let arg of args) {
//     // console.log(args[0]);
//     if (args[0] < arg) {
//       console.log(arg);
      
//       total += arg;
      
//     }
    
//   }
//   return total
// }
// task 33
// function findMatches(firstNumbers, ...otherNumbers) {
//   const matches = []; // Don't change this line
//   console.log(firstNumbers);
//   console.log(otherNumbers);
//   for (let i = 0; i < firstNumbers.length; i++) {
//     console.log(firstNumbers[i]);
//     for (let j = 0; j < otherNumbers.length; j++) {
//       if (firstNumbers[i] === otherNumbers[j]) {
//         matches.push(firstNumbers[i]);
//         console.log(matches)
//       }
//  }
// }
//   return matches;
// }

// task 34
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   // Change code above this line
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
    
//   }
// };

// task 35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// const indexOldBook = this.books.indexOf(oldName);
//   console.log(this.books.splice(indexOldBook, 1, newName));


//     // Change code above this line
//   },
// };

// task 36
// const atTheOldToad = {
//   // Change code below this line
// potions: []
// };

// task 37
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions() {
//   const newPotions = [...this.potions];
//   return newPotions;
// }
//   // Change code above this line
// };

// task 38
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions = [...this.potions, potionName]
//     // console.log(newPotions);
    
    
// return this.potions

//   },
  
// };

// task 39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
    
//     const deletePotion = this.potions.indexOf(potionName);
    
//     this.potions.splice(deletePotion, 1);
//     return this.potions;
// },
// };

// task 40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// const indexOldName = this.potions.indexOf(oldName);
// this.potions.splice(indexOldName, 1, newName);

//     // Change code above this line
//    return this.potions;
//   },
// };

// task 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return [...this.potions];
//   },
//   addPotion(newPotion) {
//     const {name} = newPotion;
//     const potionNames = [];
//     for (const potion of this.potions) {
//       potionNames.push(potion.name);
//     }
//     if (potionNames.includes(name)) {
//       return `Error! Potion ${name} is already in your inventory!`;
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionNames = [];
//     for (const potion of this.potions) {
//       potionNames.push(potion.name);
//     }
//     const potionIndex = potionNames.indexOf(potionName);
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const {potions} = this;
//     for (const potion of potions) {
//       if (potion.name ===  oldName) {
//         potion.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

