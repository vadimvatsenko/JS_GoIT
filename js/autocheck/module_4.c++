===task 1===
function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;

===task 2===
function deliverPizza(pizzaName) {
 return `Delivering ${pizzaName} pizza.`;
}
function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
};

===task 3===
function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese", function eatPizza(pizzaName) {

});

===task 4===
const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    if(this.pizzas.includes(pizzaName)){
      return makePizza(pizzaName);
     
    }
   return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

===task 5===
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(function(item) {
    totalPrice += item;
  })

  // Change code above this line
  return totalPrice;
}

===task 6===
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.forEach(function(number) {
    if (number > value) {
      return filteredNumbers.push(number);
    }
})

  // Change code above this line
  return filteredNumbers;
}

===task 7===
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
 
  firstArray.forEach(function (arr) {
    console.log(arr);
    if (secondArray.includes(arr)) {
      commonElements.push(arr);
      console.log(commonElements);
    }
  });

return commonElements;
}

===task 8===
const calculateTotalPrice = (quantity, pricePerItem) => {
    // Change code above this line
    return quantity * pricePerItem;
};

===task 9===
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem 

===task 10===
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}

===task 11===
const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach((number) => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });

    // Change code above this line
    return filteredNumbers;
};

===task 12===
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}

===task 13===
function changeEven(numbers, value) {
const newNumbers = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      newNumbers.push(number + value);
      
    } else {
      newNumbers.push(number);
    }
    
  });
   return newNumbers;
};

===task 14===
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length);

===task 15===
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map(book => book.title);

===task 16===
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap(book => book.genres);

===task 17===
const getUserNames = users => {
  return users.map(user => user.name);
};

===task 18===
const getUserEmails = users => {
    return users.map(user => user.email);
};

===task 19===
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2);

===task 20===
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(
  (course, index, array) => array.indexOf(course) === index
);

===task 21===
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = topRatedBooks.filter(topRatedBook =>
topRatedBook.author.includes(AUTHOR));

===task 22===
const getUsersWithEyeColor = (users, color) => {
  const newUsers = users.filter(user => user.eyeColor === color);
  return newUsers;
 };

===task 23===
const getUsersWithAge = (users, minAge, maxAge) => {
  const newUsers = users.filter(user => user.age >= minAge && user.age <= maxAge );
  return newUsers;
};

===task 24===
const getUsersWithFriend = (users, friendName) => {
   const newUsers = users.filter(user => user.friends.includes(friendName));

  return newUsers;
};

===task 25===
const getFriends = (users) => {
   const allFriends = users.flatMap(user => user.friends);
   const uniqueFriends = allFriends.filter(
  (course, index, array) => array.indexOf(course) === index);
  return uniqueFriends;

};

===task 26===
const getActiveUsers = (users) => {
   const userIsOnline = users.filter(user => user.isActive === true);
  return userIsOnline;
};

===task 27===
const getInactiveUsers = (users) => {
   const userIsNotOnline = users.filter(user => user.isActive === false);
  return userIsNotOnline;
};

===task 28===
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

===task 29===
const getUserWithEmail = (users, email) => {
   const findEmail = users.find(user => user.email === email);
  return findEmail;
};

===task 30===
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];


const eachElementInFirstIsEven = firstArray.every((value) => value = value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value = value % 2);

const eachElementInSecondIsEven = secondArray.every((value) => value = value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value = value % 2);

const eachElementInThirdIsEven = thirdArray.every((value) => value = value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value = value % 2);

===task 31===
const isEveryUserActive = (users) => {
   const isActive = users.every(user => user.isActive === true);
  return isActive;
};

===task 32===
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(value => value = value % 2 ===0);
const anyElementInFirstIsOdd = firstArray.some(value => value = value % 2);

const anyElementInSecondIsEven = secondArray.some(value => value = value % 2 ===0);
const anyElementInSecondIsOdd = secondArray.some(value => value = value % 2);

const anyElementInThirdIsEven = thirdArray.some(value => value = value % 2 ===0);
const anyElementInThirdIsOdd = thirdArray.some(value => value = value % 2);

===task 33===
const isAnyUserActive = users => {
   const activeUser = users.some(user => user.isActive === true);
  return activeUser;
};

===task 34===
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);;

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

===task 35===
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return total + player.playtime /  player.gamesPlayed;
}, 0);

===task 36===
const calculateTotalBalance = users => {
  const totalBalance = users.reduce((total, user) => {
    return total + user.balance;
    }, 0);
return totalBalance;
  };

===task 37===
const getTotalFriendCount = users => {
const totalFriends = users.reduce((allFriends, user) => {
allFriends.push(...user.friends);
return allFriends;
  }, []);
return totalFriends.length;
};

===task 38===
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

===task 39===
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
const descendingReleaseDates =[...releaseDates].sort((a, b) => b - a);

===task 40===
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

===task 41===
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
const sortedByAuthorName = [...books].sort(
  (a, b) => a.author.localeCompare(b.author)
);
const sortedByReversedAuthorName = [...books].sort(
  (a, b) => b.author.localeCompare(a.author)
);
const sortedByAscendingRating = [...books].sort(
  (a, b) => a.rating - b.rating
);
const sortedByDescentingRating = [...books].sort(
  (a, b) => b.rating - a.rating
);

===task 42===
const sortByAscendingBalance = users => {
   const sortForUserBalance = [...users].sort(
  (a, b) => a.balance - b.balance
);
  return sortForUserBalance
};

===task 43===
const sortByDescendingFriendCount = users => {
   const friendsSort = [...users].sort(
  (a, b) => b.friends.length - a.friends.length
);
  return(friendsSort)
};

===task 44===
const sortByName = users => {
   const sortName = [...users].sort(
  (a, b) => a.name.localeCompare(b.name)
  
);
  return(sortName)
};

===task 45===
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
 .sort((a, b) => a.localeCompare(b));
---
===task 46===
----
const getNamesSortedByFriendCount = users => {
  const filterName = [...users]
  .sort(
    (a, b) => a.friends.length - b.friends.length)
  .map(user => user.name);
  return filterName;
};
---
===task 47===
---
const getSortedFriends = users => {
   const uniqueFrinds = [...users]
  .flatMap(user => user.friends)
  .filter(
    (friend, index, array) => array.indexOf(friend) === index)
  .sort((a, b) => a.localeCompare(b));
  return uniqueFrinds;
};
---

===task 48===
---
const getTotalBalanceByGender = (users, gender) => {
   const totalGenderBalance = [...users]
  .filter(user => user.gender === gender)
  .reduce((totalBalance, user) => totalBalance + user.balance, 0);
  return totalGenderBalance;
};
---

 
