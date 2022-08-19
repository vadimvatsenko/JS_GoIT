===Массив обьектов===
---
В стандартный набор повседневных задач разработчика входит манипуляция массивом однотипных объектов. 
Это значит что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, 
но с разными значениями.
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
  {
    title: "Сон смешного человека",
    author: "Федор Достоевский",
    rating: 7.75,
  },
];
---
Для перебора такого массива используется стандартный цикл for...of. 
Значения свойств каждого объекта можно получить используя синтаксис «через точку», 
так как в каждом объекте набор свойств и их имена будут одинаковые, 
отличаются только значения.
---
for (const book of books) {
  // Объект книги
  console.log(book);
  // Название
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}
---
Например, получим список названий всех книг в коллекции books.
---
const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}

console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]
---
Узнаем средний рейтинг всей нашей коллекции. 
Для этого сложим все рейтинги, 
после чего разделим это значение на количество книг в коллекции.
---
let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2
---
