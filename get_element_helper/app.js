// const titleElement = document.querySelector(".title");
// console.log(titleElement);

// const listElement = document.querySelector(".list");
// console.log(listElement);

const getElement = (selector, isList = false) => {
  const element = isList
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  if ((!isList && element) || (isList && element.length > 0)) return element;

  throw new Error(`Check selector ${selector}`);
};

// console.log(getElement(".list", true));
console.log(getElement(".title"));
