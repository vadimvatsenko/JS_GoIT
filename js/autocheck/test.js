const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // { name: 'Манго', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true
