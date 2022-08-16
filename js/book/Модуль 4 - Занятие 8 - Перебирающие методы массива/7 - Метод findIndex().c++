===Метод findIndex()===
Метод findIndex(callback) это современная замена методу indexOf(). 
Позволяет выполнять поиск по более сложным условиям чем просто равенство. 
Используется как для поиска в массиве примитивов, так и в массиве обьектов.
---
массив.findIndex((element, index, array) => {
  // Тело коллбек-функции
});
---
- Не изменяет оригинальный массив.
- Поэлементно перебирает оригинальный массив.
- Возвращает индекс первого элемента удовлетворяющего условию,
 то есть когда коллбек возвращает true.
- Если ни один элемент не подошёл, 
то есть для всех элементов коллбек вернул false,
метод возвращает -1.
---
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
colorPickerOptions.findIndex(option => option.label === "blue"); // 2
colorPickerOptions.findIndex(option => option.label === "pink"); // 3
colorPickerOptions.findIndex(option => option.label === "white"); // -1
---