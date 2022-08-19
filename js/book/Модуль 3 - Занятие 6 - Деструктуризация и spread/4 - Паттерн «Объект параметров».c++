===Паттерн «Объект параметров»===
---
Если функция принимает более двух-трёх аргументов, 
очень просто запутаться в какой последовательности что передавать. 
В результате получается очень неочевидный код в месте её вызова.
---
function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Делаем что-то с параметрами
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

// ❌ Что такое 736? Что такое 10283? Что такое true?
doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);
---
Паттерн «Объект параметров» помогает решить эту проблему, 
заменяя набор параметров всего одним - объектом с именованными свойствами.
---
function doStuffWithBook(book) {
  // Делаем что-то со свойствами объекта
  console.log(book.title);
  console.log(book.numberOfPages);
  // И так далее
}
---
Тогда во время её вызова передаём один объект с необходимыми свойствами.
---
// ✅ Всё понятно
doStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});
---
Ещё один плюс в том, 
что можно деструктуризировать объект в параметре book. 
Это можно сделать в теле функции.
---
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}
---
Или сразу в сигнатуре (подписи) функции, разницы нет.
---
function doStuffWithBook({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}
---