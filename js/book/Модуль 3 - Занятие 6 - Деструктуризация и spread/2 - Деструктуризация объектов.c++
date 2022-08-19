===Деструктуризация объектов===
---
При разработке программ данные приходят, 
как правило, в виде массивов и объектов, 
значения которых необходимо записать в локальные переменные. 
Для того, чтобы делать это максимально просто, 
в современном стандарте есть синтаксис деструктуризирующего присваивания.
---
===Деструктуризация объектов===
---
Сложные данные всегда представлены объектом. 
Множественные обращения к свойствам объекта визуально загрязняют код.
---
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const accessType = book.isPublic ? "публичном" : "закрытом";
const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;
---
Деструктуризация позволяет «распаковать» значения свойств объекта в локальные переменные. 
Это делает код в месте их использования менее «шумным».
---
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризируем
const { title, author, isPublic, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = isPublic ? "публичном" : "закрытом";
const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
---
Деструктуризация всегда находится в левой части операции присвоения. 
Переменным внутри фигурных скобок присваиваются значения свойств объекта. 
Если имя переменной и имя свойства совпадают, 
то происходит присваивание, 
в противном случае ей будет присвоено undefined. 
Порядок объявления переменных в фигурных скобках не важен.
---
===Значения по умолчанию===
---
Для того чтобы избежать присвоения undefined при деструктуризации несуществующих свойств объекта, 
можно задать переменным значения по умолчанию, 
которые будут присвоены только в случае когда в объекте нет свойства с таким именем.
---
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Добавим картинку обложки если её нет в объекте книги
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // The Last Kingdom
console.log(author); // Bernard Cornwell
console.log(coverImage); // https://via.placeholder.com/640/480
---
===Изменение имени переменной===
---
При деструктуризации можно изменить имя переменной в которую распаковывается значение свойства. 
Сначала пишем имя свойства из которого хотим получить значение, 
после чего ставим двоеточие 
и пишем имя переменной в которую необходимо поместить значение этого свойства.
---
const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // The Last Kingdom
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смешного человека",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смешного человека
console.log(secondCoverImage); // https://via.placeholder.com/640/480
---
Такая запись читается как «Создать переменную firstTitle, 
в которую поместить значение свойства title из объекта firstBook» и т. д.
---
===Деструктуризация в циклах===
---
При переборе массива объектов циклом for...of получаеются множественные обращения к свойствам объекта.
---
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}
---
Для того чтобы сократить количество повторений можно деструктуризировать свойства объекта в локальные переменные в теле цикла.
---
for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}
---
Если в объекте немного свойств, 
деструктуризацию можно выполнить прямо в месте объявления переменной book.
---
for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}
---
===Глубокая деструктуризация===
Для деструктуризации свойств вложенных объектов используются те же принципы, 
что и в трёх предыдущих упражнениях.
---
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308
---
