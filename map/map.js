const data = [
  { name: "bob", age: 20 },
  { name: "john", age: 25 },
  { name: "test 1", age: 26 },
  { name: "test 2", age: 27 },
  { name: "test 3", age: 28 },
  { name: "test 4", age: 29 },
  { name: "test 5", age: 30 },
];

const persons = data.map(person => `<h2>${person.name}</h2>`);

const personsDiv = document.querySelector("#persons");

personsDiv.innerHTML = persons.join("");
