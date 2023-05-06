const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];

const categories = [...new Set(menu.map(item => item.category))];

console.log(categories);

const categoriesDiv = document.querySelector(".categories");

categoriesDiv.innerHTML = categories
  .map(category => `<button>${category}</button>`)
  .join("");
