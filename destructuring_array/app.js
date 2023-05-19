const fruits = ["orange", "banane", "lemon"];

// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);

let first = "Bob";
let second = "John";

// let temp = second;
// second = first;
// first = temp;

[second, first] = [first, second];

console.log(first, second);
