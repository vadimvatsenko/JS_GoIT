====== Цикл for...in======
Для перебора объектов используется специальный цикл for...in, который перебирает ключи объекта object. 
for (key in object) {
  // инструкции
}

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}

====== Метод hasOwnProperty() ======
Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4

// ❌ Возвращает true для всех свойств
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Возвращает true только для собственных свойств
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false
=============
Поэтому при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Если это собственное свойство - выполняем тело if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Если это не собственное свойство - ничего не делаем
}

======Метод Object.keys()======
принимает объект и возвращает массив ключей его собственных свойств. Если в объекте нет свойств, метод вернёт пустой массив.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']
=======
Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства объекта
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book[key]);
}

======Метод Object.values()======
возвращает массив значений его собственных свойств.Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
=========
Можно перебрать циклом for...of, например для получения общей суммы числовых значений.
=========
Посчитать общее количество продуктов в объекте формата имя-продукта: количество
const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const values = Object.values(goods); // [6, 3, 4, 7]

let total = 0;

for (const value of values) {
  total += value;
}

console.log(total); // 20

======Метод Object.entries()======
возвращает массив записей, каждым элементом которого будет еще один массив из 2-х элементов: имени свойства и значения этого свойства из объекта obj
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

