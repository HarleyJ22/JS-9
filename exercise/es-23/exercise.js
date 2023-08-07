const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
// Print values of person using Object.keys

const arr = Object.keys(person);
arr.forEach(el => console.log(el + " " + person[el]))

