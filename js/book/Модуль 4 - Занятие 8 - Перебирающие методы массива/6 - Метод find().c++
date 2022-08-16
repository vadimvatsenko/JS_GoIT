===Метод find()===
---
Если метод filter(callback) используется для поиска всех элементов удовлетворяющим условию, 
то метод find(callback) позволяет найти и вернуть первый подходящий элемент, 
после чего перебор массива прекращается. То есть он ищет до первого совпадения.
---
массив.find((element, index, array) => {
  // Тело коллбек-функции
});
---
- Не изменяет оригинальный массив.
- Поэлементно перебирает оригинальный массив.
- Возвращает первый элемент удовлетворяющий условию, то есть когда коллбек возвращает true.
- Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает undefined.
---
Метод find() используется для одной задачи - поиска элемента по уникальному значению свойства. 
Например, поиск пользователя по почте, автомобиля по серийному номеру, книги по названию и т. п.
---
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find(option => option.label === "white"); // undefined