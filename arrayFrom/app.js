const textElements = document.querySelectorAll(".text");
console.log(textElements); // nodelist

//array
const textElementsArr = Array.from(textElements);

const hello = Array.from(textElements).find(el => el.textContent == "Hello");

console.log(hello);
