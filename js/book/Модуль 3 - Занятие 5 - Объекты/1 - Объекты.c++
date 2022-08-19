====== Создание объекта ======
Для объявления используются фигурные скобки {} - литерал объекта.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

====== Вложенные свойства =======
Значением свойства может быть другой объект, для того чтобы хранить вложенные и группированные данные
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

====== Обращение к свойствам через точку ======
Первый способ получить доступ к свойству объекта это синтаксис обьект.имя_свойства
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book.genres;
console.log(bookGenres); // ['historical prose', 'adventurs']

const bookPrice = book.price;
console.log(bookPrice); // undefined

=======Обращение к вложенным свойствам======
Для доступа к вложенным свойствам используется цепочка обращейний «через точку»
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // Объект location

const country = user.location.country;
console.log(country); // 'Jamaica'

const hobbies = user.hobbies;
console.log(hobbies); // ['swiming', 'music', 'sci-fi']

const firstHobby = user.hobbies[0];
console.log(firstHobby); // 'swiming'

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

======Обращение к свойствам через квадратные скобки======
Второй способ получить доступ к свойству объекта это синтаксис обьект["имя свойства"]
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book["genres"];
console.log(bookGenres); // ['historical prose', 'adventurs']

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); // 'Bernard Cornwell'

======Изменение значения свойства======
После того как объект создан, значение его свойств можно изменить. Для этого необходимо обратиться к ним по имени, например «через точку», и присвоить новое значение.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push("драма");

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ['historical prose', 'adventures', 'драма']

======Добавление свойств======
Операция добавления нового свойства после создания объекта ничем не отличается от изменения значения уже существующего свойства. Если при записи значения по имени, такого свойства в объекте нет, оно будет создано.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // 'en'
console.log(book.translations); // ['ua', 'ru']

======Короткие свойства======
Иногда при создании объекта значение свойства необходимо взять из переменной или параметра функции с таким же именем как и само свойство.
const name = "Генри Сибола";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Генри Сибола"
console.log(user.age); // 25

Вычисляемые свойства
const propName = "name";
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: "Генри Сибола",
};

console.log(user.name); // 'Генри Сибола'

======Методы объекта======
До сих пор мы рассматривали объекты только как хранилища взаимосвязанных данных, например информация о книге и т. п. Объекты-хранилища обычно находятся в массиве таких же объектов, который представляет коллекцию однотипных элементов.
Объекты могут хранить не только данные, но и функции для работы с этими данными - методы. Если значение свойства это функция, такое свойство называется методом объекта.
// ✅ Логически и синтаксически сгруппированные сущности
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Это метод объекта
  getBooks() {
    console.log("Этот метод будет возвращать все книги - свойство books");
  },
  // Это метод объекта
  addBook(bookName) {
    console.log("Этот метод будет добавлять новую книгу в свойство books");
  },
};

// Вызовы методов
bookShelf.getBooks();
bookShelf.addBook("Новая книга");

======Доступ к свойствам объекта в методах this======


const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    console.log(this);
  },
};

// Перед точкой стоит объект bookShelf,
// поэтому при вызове метода, this будет хранить ссылку на него.
bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}
========
Для того чтобы получить доступ к свойствам объекта в методах, мы обращаемся к нему через this и дальше как обычно - «через точку» к свойствам.
const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
bookShelf.removeBook("The Mist");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

