const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  addColor(1000, "#one", "red")
    .then(() => addColor(2000, "#two", "blue"))
    .then(() => addColor(3000, "#threek", "green"))
    .catch(err => console.log(err));
});

const addColor = (time, selector, color) => {
  const element = document.querySelector(selector);

  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(`There is no element ${selector}`);
    }
  });
};
